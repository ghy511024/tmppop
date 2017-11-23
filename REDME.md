# 描述
整租发布，弹窗开发项目，包括，磐石房号关联，身份选择，身份修改弹窗等

## 说明
编译配置文件为 fis-conf.js
举个例子
src/js/lou/louselect_main.js 会根据打包自己依赖的js,css,最终生成一个总的js,发布目录为
fangapp-release/src/js/mod/poplib/lou.js（可参照fis-conf.js 的配置文件）

这个模块，对外提供一些api,模块中，不依赖任何业务中的东西，业务调用他，就像调 native 协议一样使用

业务中要封装业务模块(fangapp/release/src/js/mod/popmod/louselectMudule.js），业务模块和业务紧密相连，包括处理业务，调用上面的lou.js


## 环境

```
cd fangapp-pop
npm install fis3 -g
npm install

```
## 编译

* 楼号选择弹窗

````
npm run lou
````
* 进入发布页面，身份选择

````
npm run shenfen
````

* 发布过程中修改身份弹窗

````
npm run shenfenpop
````


#开发测试

结构
````


````