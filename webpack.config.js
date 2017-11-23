/*
 * https://npm.taobao.org/package/html-loader
 *
 * **/

var path = require('path');
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = function (objs) {
    return {
        entry: {
            r_test: ['./test/r_test.js'],
        },
        output: {
            filename: '[name]/[name].js',
            path: path.resolve(__dirname, 'build'),
        },
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    loader:"style-loader!css-loader!sass-loader"
                },
                {
                    test: /\.(png|jpg)$/,
                    loader: 'url-loader?limit=8192&name=imgs/[name].[ext]'
                },
            ],
        },
        plugins: []
    }
}