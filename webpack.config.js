const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig =
    new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        inject: 'body'
    });

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'es2015', 'react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}