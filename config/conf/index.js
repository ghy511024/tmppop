var path = require('path');
module.exports = {
        //体积小于限制的图片将会自动转为base64格式，大于的会转移到static文件夹，单位bit
        imgBase64Limit: 10000,
        dev: {
            //开发服务器端口
            port: 8058,
            //开发资源路径,例如：'//j1.58cdn.com.cn/fang_act/graduation'、'/dist/'
            publicPath: '/',
            //打公共资源包，
            vendor: true,
            //开启mock api
            mock: true,
        },
        build: {
            //线上资源路径,例如：'//j1.58cdn.com.cn/fang_act/graduation'、'/dist/'
            publicPath: '',
            //提取css单独文件
            extractCSS: true,
            //css文件名
            cssFileName: 'style.css',
            //css压缩
            compressCss: false,
            //压缩以及混淆js
            uglify: true,
            //打公共资源包
            vendor: true,
        },
      }
