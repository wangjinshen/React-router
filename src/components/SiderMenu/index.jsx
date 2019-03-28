import { Menu } from 'antd';
import React, { Component } from 'react';
import RouteConfig from './../../router/RouteConfig';
import { Link } from "react-router-dom"
const SubMenu = Menu.SubMenu;
class SiderMenu extends Component {
    render() {
        const data = RouteConfig[0].children.filter((item) => {
            return !item.redirect
        })
        return (
            <div>
                <Menu
                    style={{ width: 160, background: "#2F3B4C" }}
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    theme="dark">
                    {

                        data.map((item, index) => {
                            if (item.children && item.children.length > 0 && item.key) {
                                return (
                                    <SubMenu key={item.key} title={<span><Link to={item.path}> {item.title}</Link></span>}>
                                        {
                                            item.children && item.children.length && item.children.map((iten, ind) => {
                                                
                                                return  iten.key && <Menu.Item key={iten.key} > <Link to={iten.path}> {iten.title}</Link> </Menu.Item>
                                            })
                                        }
                                    </SubMenu>
                                )
                            } else {
                                return (
                                    <Menu.Item key={item.key} ><Link to={item.path}> {item.title}</Link></Menu.Item>
                                )
                            }

                        })
                    }
                </Menu>
            </div>
        );
    }
}

export default SiderMenu 