var path = require('path')
fis.set("pname-ghy-path", path.join(path.resolve(__dirname, '..'), "fangapp-release/src/js/mod/poplib"));
var apidir = path.join(path.resolve(__dirname, './api'));
console.log(apidir)

fis.match('*', {
    release: false
});

// ================编译模板文件 ==========
fis.match("*/view/(*).tpl", {
    parser: fis.plugin('jsptpl'),
    rExt: '.js',
})
// ================编译模板文件中的scss ==========
fis.match('/src/{**.tpl:scss,**.jsp:scss,**.scss}', {
    rExt: 'css',
    parser: [fis.plugin('nodev8-scss')],
});

// 发布设置
fis.match('/src/js/*/(*)_main.js', {
    release: "$1"
});

// fis.match('/src/test/(*)', {
//     release: "/test/$1"
// });


fis.media('api').match('/src/js/*/(*)_main.js', {
    // 设置发布目录
    deploy: fis.plugin('local-deliver', {
        to: apidir
    })
})

fis.media('shenfen_dev').match('/src/**/(shenfen_main.js)', {
    deploy: fis.plugin('local-deliver', {
        to: fis.get("pname-ghy-path"),
    })
})
fis.media('shenfenpop_dev').match('/src/**/(shenfenPop_main.js)', {
    deploy: fis.plugin('local-deliver', {
        to: fis.get("pname-ghy-path"),
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
