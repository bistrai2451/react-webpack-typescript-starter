const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    devServer: {
        disableHostCheck: true,
        port: 8080,
    },
    entry: ['babel-polyfill', './src/index.tsx'],
    target: 'web',
    mode: isProduction ? "production" : "development",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x$/,
                loader: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
            },
            {
                test: /\.module\.s(a|c)ss$/,
                loader: [
                    !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-modules-typescript-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: !isProduction
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: !isProduction
                        }
                    }
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                loader: [
                    !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-modules-typescript-loader",
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: !isProduction
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'components', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: !isProduction ? '[name].css' : '[name].[hash].css',
            chunkFilename: !isProduction ? '[id].css' : '[id].[hash].css'
        })
    ]
};
