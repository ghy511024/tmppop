var _native_ajax=function (options) {
    options = options || {};
    if (!options.url || !options.callback) {
        throw new Error("参数不合法");
    }

    //创建 script 标签并加入到页面中
    var callbackName = ('jsonp_' + Math.random()).replace(".", "");
    var oHead = document.getElementsByTagName('head')[0];
    options.data[options.callback] = callbackName;
    var params = formatParams(options.data);
    var oS = document.createElement('script');
    oHead.appendChild(oS);

    //创建jsonp回调函数
    window[callbackName] = function (json) {
        oHead.removeChild(oS);
        clearTimeout(oS.timer);
        window[callbackName] = null;
        options.success && options.success(json);
    };

    //发送请求
    oS.src = options.url + '?' + params;

    //超时处理
    if (options.time) {
        oS.timer = setTimeout(function () {
            window[callbackName] = null;
            oHead.removeChild(oS);
            options.fail && options.fail({message: "超时"});
        }, time);
    }

    //格式化参数
    function formatParams(data) {
        var arr = [];
        for (var name in data) {
            arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
        }
        return arr.join('&');
    }
}
var _ajax=function (url, param, success) {
    var result;
    _native_ajax({
        url: url,
        data: (param),
        callback: "callback",
        error: function (jqXHR, textStatus, errorThrown) {
            if (typeof success == "function") {
                result = {ret: -1};
                success(result);
            }
        },
        success: function (ret) {
            if (typeof ret == "string") {
                try {
                    ret = JSON.parse(ret);
                    result = {
                        ret: 0,
                        data: ret
                    }
                }
                catch (e) {
                    result = {ret: -1};
                }
            } else {
                result = {
                    ret: 0,
                    data: ret
                }
            }
            if (typeof success == "function") {
                success(result);
            }
        }
    })
};
export  default _ajax;