---
title: react-router二次封装实现Vue-router使用方式
date: 2019-03-28 13:41:16
tags: [react,react-router,react-router二次封装实现Vue-router使用方式]
---
# react-router二次封装实现Vue-router使用方式
和vue一样我们先创建一个config文件来管理我们的路由页面，页面文件如下
因为编辑器有比较强大的路径提示并且只是一个分享，所以就没有配置别名
## 路由的配置
```js
//组件的引入
import Home from '../contentais/home/index'
import Login from "../contentais/login/index"
import Business from './../contentais/home/business/index';
import Finance from './../contentais/home/finance/index';
import Tissue from './../contentais/home/tissue/index';
import Statistics from './../contentais/home/statistics/index';
import Order from './../contentais/home/order/index';
import UserHome from './../contentais/home/userHome/index';
import Loans from './../contentais/home/order/loans/index';
import Transfer from './../contentais/home/order/transfer/index';
import Insurance from './../contentais/home/order/insurance/index';

const RouteConfig = [
    {
        //title 
        title: "首页",
        //路由地址
        path: "/Home",
        //关键字重定向
        defaultRedirect: true,
        //组件
        component: Home,
        //二级路由
        children: [
            {
                key: "1",
                defaultRedirect: true,

                title: "首页",
                path: "/Home/one",
                component: UserHome,
            },
            {
                key: "sub1",
                title: "订单管理",
                path: "/Home/order",
                component: Order,
                //三级路由
                children: [
                    {
                        defaultRedirect: true,

                        key: "2",
                        title: "贷款订单",
                        path: "/Home/order/loans",
                        component: Loans,
                    },
                    {
                        key: "3",
                        title: "转单订单",
                        path: "/Home/order/transfer",
                        component: Transfer,
                    },
                    {
                        key: "4",
                        title: "保险订单",
                        path: "/Home/order/insurance",
                        component: Insurance,
                    },
                    //三级路由的重定向   默认显示的页面
                    {
                        path: "/Home/order",
                        redirect: "/Home/order/loans"
                    }
                ]
            },
            {
                key: "5",
                title: "财务管理",
                path: "/Home/finance",
                component: Finance,
            }
            ,
            {
                key: "6",
                title: "组织架构",
                path: "/Home/tissue",
                component: Tissue,
            },
            {
                key: "7",
                title: "数据统计",
                path: "/Home/statistics",
                component: Statistics,
            },
            {
                key: "8",
                title: "商务管理",
                path: "/Home/business",
                component: Business,
            },
            //二级路由的重定向   默认显示的页面
            {
                path: "/Home",
                redirect: "/Home/one"
            }
        ]
    },
    {
        title: "登陆",
        path: "/Login",
        component: Login,
    }, {
        //一级路由的重定向
        path: "/",
        redirect: "/Home"
    }
]
export default RouteConfig;

```

## 逻辑的实现

```js
import { Route, Switch, Redirect } from "react-router-dom"
import React, { Component } from 'react';
class RouteView extends Component {
    render() {

        //props接收配置文件
        //routers 下一级路由的参数
        //defaultConfig默认传参
        const { routers, defaultConfig } = this.props
        let routerDate = routers ? routers : defaultConfig;
        //数据二次处理

        //筛除带有重定向的
        let routerDatepath = routerDate.filter((item) => {
            return !item.redirect
        })
        //筛选重定向
        let defualtRouter = routerDate.filter((item) => {
            return item.redirect
        })
        //重定向
        let defualtRedirect = defualtRouter.map((item, i) => {
            return <Redirect key={i} path={item.path} to={item.redirect}></Redirect>
        })
        return (<Switch>
            {
                routerDatepath && routerDatepath.map((item, index) => {
                    const Comp = item.component
                    // 一个大坑 要用render 不然用component会导致页面的回流
                    return <Route path={item.path} render={
                        //api 路由相关参数参数及其它
                        (api) => {
                            //动态的title
                            document.title = item.title || "后台管理系统"
                            //把下一级路由参数存入props中
                            return <Comp routers={item.children} {...api}></Comp>
                        }
                    } key={"key" + item.key}></Route>
                    //重定向
                }).concat(defualtRedirect)
            }
        </Switch>)
    }
}
export default RouteView;
```

## 使用方法
app.jsx
```js
import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import RouteConfig from '../router/RouteConfig';
import RouteView from './../router/RouteView';
class App extends Component {
    render() {
        return <div className="wrapper">
            <Router>
                //传入默认路由配置文件
                <RouteView defaultConfig={RouteConfig}></RouteView>
            </Router>
        </div>
    }
}
export default App;
```
## 二级路由的调用

```js
import React, { Component } from 'react';
import RouteView from './../../router/RouteView';
import SiderMenu from './../../components/SiderMenu/index';
import "./index.css"
class Home extends Component {
    render() {
        //接收路由配置
        const { routers } = this.props
        return <div className="home-wrapper">
            <div className="left">
                <div className="user">
                    <div className="user-img">
                    </div>
                    <p className="mt12">你瞅啥</p>
                    <b className="mt12 radius"></b>
                </div>
                //侧边栏的组件
                <SiderMenu style={{ background:"#2F3B4C"}} {...this.props}></SiderMenu>
            </div>
            <div className="right">
                //传入RouteView当中进行处理
                <RouteView routers={routers}></RouteView>
            </div>
        </div>
    }

}
export default Home;

```
## 项目地址
https://github.com/wangjinshen/React-router
