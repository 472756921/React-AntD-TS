import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from '../layouts';

import Home from '../page/index';
export default class Root extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute breadcrumbName="首页" component={Home} />
                </Route>
            </Router>
        );
    }
}
