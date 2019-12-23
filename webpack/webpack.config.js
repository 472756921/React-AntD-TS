const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: ['./src/index.js'],
        vendor: ['react', 'react-dom', 'react-router', 'antd'],
    },
    output: {
        publicPath: '/',
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules|dist)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                        plugins: [require('@babel/plugin-proposal-class-properties')],
                    },
                },
            },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|dist)/,
                use: ['ts-loader'],
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|dist)/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
            {
                test: /\.less$/,
                exclude: /(node_modules|dist)/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new AntdDayjsWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Benson',
            template: './index.html',
        }),
        new BundleAnalyzerPlugin(),
        // new CompressionWebpackPlugin({
        //     test: /\.js/,
        // }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 2,
                },
            },
        },
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
    },
};
