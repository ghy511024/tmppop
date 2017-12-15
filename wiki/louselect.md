#楼号选择组件

### 引用
package.json
~~~
 "dependencies": {
   "louselect": "git+ssh://git@gitlab.58corp.com:fangfe/fangapp-release-pop.git#louselect/1.0.0",
  }
~~~

### 业务中调用

*  调起弹窗

~~~
    var LSAPI = FANG_POPAPI.LOU_CHOSE;
    var xiaoquid=""//业务中自己获取的小区id
    LSAPI.action(xiaoquid, function (status, obj) {
         if (status == 0) {
                 var louhao = obj["louhao"];
                 var danyuanhao = obj["danyuanhao"];
                 var menpaihao = obj["menpaihao"];
                }
        });

~~~

* 进入页面切换回调

~~~
            LSAPI.registCall("louhao", function () {
               alert("点击了楼号")
            });
            LSAPI.registCall("danyuanhao", function (louhao) {
              
            });
            LSAPI.registCall("menpaihao", function (louhao, danyuanhao) {
              
            })

~~~

* 如果页面对返回事件有监听，在显示楼号的时候不返回上一页，此时应该处理一下
~~~
 var LSAPI = FANG_POPAPI.LOU_CHOSE;
 _WBAPP.deviceEvent.action();
   _WBAPP.deviceEvent.setCallback(function () {
        // 判断是否在楼号选择弹窗中，如果是，则处理
        if (LSAPI && LSAPI.isshow()) {
            LSAPI.back();
            return;
        }
        _WBAPP.gobackIsBackRootAction.action();
    });
~~~
