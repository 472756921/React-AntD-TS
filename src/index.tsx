import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { ConfigProvider } from 'antd';
import Login from './page/login/login';
import Layout from './layouts';

render(
    <ConfigProvider locale={zh_CN}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" component={Layout} />
            </Switch>
        </BrowserRouter>
    </ConfigProvider>,
    document.getElementById('app'),
);
