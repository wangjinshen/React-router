import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"

import RouteConfig from '../router/RouteConfig';
import RouteView from './../router/RouteView';
class App extends Component {
    render() {
        return <div className="wrapper">
            <Router>
                <RouteView defaultConfig={RouteConfig}></RouteView>
            </Router>
        </div>
    }
}
export default App;