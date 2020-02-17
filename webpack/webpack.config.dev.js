const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = webpackMerge(baseConfig, {
    entry: {
        main: './src/index.tsx',
    },
    output: {
        publicPath: '/',
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
    },
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        host: 'localhost',
        port: '9000',
        compress: true, // 开起 gzip 压缩
        inline: true,
        open: false,
        historyApiFallback: true, // browserHistory路由
        contentBase: path.resolve(__dirname, '../dist'),
    },
});
