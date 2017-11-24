var path = require('path')

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
 * */
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
