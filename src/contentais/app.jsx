import React, { Component } from 'react';

import RouteConfig from '../router/RouteConfig';
import { BrowserRouter as Router } from "react-router-dom"
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