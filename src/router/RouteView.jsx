import { Route, Switch, Redirect } from "react-router-dom"
import React, { Component } from 'react';
class RouteView extends Component {
    render() {
        const { routers, defaultConfig } = this.props
        let routerDate = routers ? routers : defaultConfig
        const defualtRouter = <Route path="/" exact  key={"defualtRouter"} component={() => {
            return <Redirect to="/Home"></Redirect>
        }}> </Route>
        return (<Switch>
            {
                routerDate && routerDate.map((item, index) => {
                    const Comp = item.component
                    // 一个大坑 要用render 不然用component会导致页面的重绘
                    return <Route  path={item.path} render={
                        (api) => {
                            document.title = item.title || "后台管理系统"
                            return <Comp routers={item.children} {...api}></Comp>
                        }
                    } key={index}></Route>
                }).concat(defualtRouter)
            }
        </Switch>)
    }
}
export default RouteView;