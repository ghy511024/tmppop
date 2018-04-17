var path = require('path')
var webpack = require('webpack')
const config = require('./conf/');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {
    return {
        externals: [
            // {
            //     "vue": "commonjs2 vue", // "./f" is external `module.exports = require("./a/b")`
            // },
        ],
        entry: {
            popup_select: "./test/popup_select/index.js",
        },
        output: {
            filename: 'popup_select.js',
            path: path.resolve(__dirname, '../test/')
        },
        resolve: {
            // extensions: ['.js', '.vue'],
            // alias: {
            //     'vue$': 'vue/dist/vue.runtime.esm.js',
            // }
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.less$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [{
                            loader: 'css-loader',
                        }, {
                            loader: 'less-loader',
                        }],
                    }),
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        postcss: [require('postcss-cssnext')()],
                        // extractCSS: true, // 是否单独提取css文件
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: config.imgBase64Limit,
                        name: 'static/img/[name].[hash:7].[ext]'
                    }
                },
            ]
        },
        plugins: [
            new ExtractTextPlugin({
                filename: '[name].css',
            }),
        ]
    }
}