var path = require('path')
var webpack = require('webpack')
const config = require('./conf/');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {
    const cate = env.cate;
    var entry = {};
    entry[`${cate}/index`] = path.resolve(__dirname, `../src/package/${cate}/index.js`);
    return {
        externals: [
            {
                "vue": "commonjs2 vue", // "./f" is external `module.exports = require("./a/b")`
            },
        ],
        entry: entry,
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, '../lib/')
        },
        resolve: {
            extensions: ['.js', '.vue'],
            alias: {
                'vue$': 'vue/dist/vue.runtime.esm.js',
            }
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
                        // postcss: [require('postcss-cssnext')()],
                        // extractCSS: config.build.extractCSS
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
            })
        ]
    }
}