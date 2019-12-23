import React, { Component } from 'react';
import Layout from './layouts';
import { render } from 'react-dom';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { ConfigProvider } from 'antd';

render(
    <ConfigProvider locale={zh_CN}>
        <Layout />
    </ConfigProvider>,
    document.getElementById('app'),
);
