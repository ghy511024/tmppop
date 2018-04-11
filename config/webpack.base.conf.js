var path = require('path')
var webpack = require('webpack')
const config = require('./conf/');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {
    const cate = env.cate;
    var entry = {};
    entry[`${cate}/${cate}`] = path.resolve(__dirname, `../src/page/${cate}/${cate}.js`);

    return {
        entry: entry,
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, '../build/')
        },
        resolve: {
            extensions: ['.js', '.vue'],
            alias: {
                'vue$': 'vue/dist/vue.runtime.esm.js',
                'iscroll': 'iscroll/build/iscroll-probe.js',
                '@': path.join(__dirname, '..', 'src'),
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
                        extractCSS: true, // 是否单独提取css文件
                    }
                },
                {
                    test: /\.js$/,
                    // exclude: /node_modules/,
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
            // new webpack.LoaderOptionsPlugin({
            //     options: {
            //         lessLoader: {
            //             lessPlugins: [
            //                 {
            //                     install (less) {less
            //                         less.functions.functionRegistry.add('px2rem', (px, size) => {
            //                             const newSize = (size && size.value || 750) / 10;
            //                             return new (less.tree.Anonymous)(`${px.value / newSize}rem`);
            //                         });
            //                     },
            //                 },
            //             ],
            //         },
            //     },
            // }),
            new ExtractTextPlugin({
                filename: '[name].css',
            }),
        ]
    }
}