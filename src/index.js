import React from 'react';
import Root from './routes';
import { render } from 'react-dom';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';

render(
    <LocaleProvider locale={zh_CN}>
        <Root />
    </LocaleProvider>,
    document.getElementById('app'),
);
