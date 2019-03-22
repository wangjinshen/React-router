import React, { Component } from 'react';
import "./index.css"
import RouteView from './../../router/RouteView';
import SiderMenu from './../../components/SiderMenu/index';

class Home extends Component {
    render() {
        const { routers } = this.props
     
        return <div className="home-wrapper">
            <div className="left">
                <div className="user">
                    <div className="user-img">
                    </div>
                    <p className="mt12">你瞅啥</p>
                    <b className="mt12 radius"></b>
                </div>
                <SiderMenu style={{ background:"#2F3B4C"}} {...this.props}></SiderMenu>
            </div>
            <div className="right">
                <RouteView routers={routers}></RouteView>
            </div>
        </div>
    }

}
export default Home;