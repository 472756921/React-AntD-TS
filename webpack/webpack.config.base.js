const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: ['./src/index.tsx'],
        vendor: ['react', 'react-dom', 'react-router', 'antd'],
    },
    output: {
        publicPath: './',
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: '[name].[chunkhash:5].chunk.js', //添加chundkFilename
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', 'less', 'css'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' },
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
            },
            {
                /**
                 * 第三方组件的css.
                 */
                test: /\.(css|less)$/,
                exclude: /src/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                    },
                ],
            },
            {
                /**
                 * 组件的css, lcss.
                 */
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true, // 开启模块化
                        },
                    },
                    {
                        loader: 'less-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer') /*自动添加浏览器前缀*/],
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            name: '[hash]_[name].[ext]',
                            esModule: false,
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: { loader: 'file-loader' },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Benson',
            template: './index.html',
        }),
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
};
