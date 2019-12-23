import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from '../page/index';

export default class Router_U extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={Home}></Route>
            </BrowserRouter>
        );
    }
}
