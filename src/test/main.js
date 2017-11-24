
__inline ('../mod/louselect/louselect_main.js');
(function () {
    var controll = {};
    $ (function () {
        LSAPI.action (function (status, obj) {
            alert (status+""+JSON.stringify(obj));
            // 确定返回
            if(status==0){
                var louhao=obj["louhao"];
                var louid=obj["louid"];
            }
        });
    })
}) ();


