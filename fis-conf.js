var path = require('path')

/**
 * 本地开发测试，设置发布目录为 整租发布项目中的，指定目录下
 * 如果后续有人维护这项目，可以根据自己项目路径关系重新增加一个新的路径配置
 *
 * 例如
 * 第一步：fis.set("张三-dev-path", path.join(path.resolve(__dirname, '${在张三开发环境下，此项目父层与post-app-house项目路径的关系 （.. 为上一级目录的关系）}'), "post-app-house/fangapp-release/src/js/mod/poplib"));
 *
 * 第二步：
 * fis.media ('张三_dev').match (/src/mod/main.js), {
 *      deploy: fis.plugin ('local-deliver', {
 *          to: fis.get ("张三-dev-path"),
 *    })
 * })
 *
 * 第三步：
 * package.json 中 scripts 字段增加配置  "张三_dev": "fis3 release 张三_dev -c"
 *
 * 第四步：
 * 运行命令 npm run 张三_dev
 *
 * 上面步骤，只是为了方便本地开发联调，测好后，是通过 提交到git 打版本号，然后提供给其他项目使用
 * */
fis.set("ghy-dev-path", path.join(path.resolve(__dirname, '..'), "post-app-house/fangapp-release/src/js/mod/poplib"));
fis.match('*', {
    release: false
});

// 所有文件默认不发布
fis.match('*', {
    release: false
});

/**
 * 使用fis3-parser-jsptpl 编译模板文件，将tpl,html，css 打包为一个文件。
 * 前提：这些通用组建，提取出来是为了提供给其他业务线，或者其他项目使用。所以单独拆分，如果不拆分，也不会有，这个项目是fis3,业务是webpack 这种破事，一个项目里面写就得了。
 * 优点：将scss 编译为css，css 字符串和html 字符串，最终集成到js 中。形成一个干净的js模块
 * ps：webpack，很容易就能实现将，html,scss 编译为字符串集成到js 中，但打包出来的文件有webpack 包裹的信息。
 * 通常模块文件是提供给其他项目使用，所以不能携带这些webpack 的包裹信息。
 * 当然，也可以导出未经编译的源文件，这样，将scss 解析为css 等配置就需要在各个实父层际业务中去配置，也不是一种好的解决办法。
 *
 * 缺点：把环境弄得太复杂了，fis3 大家都不熟悉，你敢说你不排斥着东西？
 *
 * 提示：这个文件就不要动了。以后没有需求改动这块，那是最理想的。如果有需求的话，要慎重修改fis3的配置文件。
 */

// ================编译模板文件中的内联scss ==========

fis.match('/src/{**.tpl:scss,**.jsp:scss,**.scss}', {
    rExt: 'css',
    parser: [fis.plugin('nodev8-scss')],
});

fis.match("/src/**.tpl", {
    parser: fis.plugin('jsptpl'),
    rExt: '.js',
})

/**
 * 主模块
 * */

fis.match('/src/mod/main.js', {
    release: "main.js"
});


fis.media('ghy_dev').match('/src/mod/main.js', {
    deploy: fis.plugin('local-deliver', {
        to: fis.get("ghy-dev-path"),
    })
})

fis.set('project.ignore', [
    '**/nbproject/**',
    'output/**',
    '**/bat/**',
    'node_modules/**',
    '.git/**',
    '.svn/**',
    "**conf.js",
    '**.bat'
]);
