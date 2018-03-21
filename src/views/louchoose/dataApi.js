// 数据过滤
var DataApi = (function () {
    var server = {
        apiurl: "https://housepostbaseapi.58.com/wuyedizhi/tip",
        // apiurl: "/mock/lou_choose.json",
    }
    var DataApi = {
        loudata: [],
        danyuandata: [],
        mendata: [],
        search: function (type, value) {
            var tmpdata = [];
            var retarray = [];
            if (type == "louhao") {
                tmpdata = this.loudata;
            }
            if (type == "danyuanhao") {
                tmpdata = this.loudata;
            }
            if (type == "menpaihao") {
                tmpdata = this.loudata;
            }
            for (var i = 0; i < tmpdata.length; i++) {
                if (value == null || value.length == 0) {
                    retarray.push(i);
                    continue;
                }
                if (tmpdata[i].indexOf(value)) {
                    retarray.push(i);
                    continue;
                }
            }
            return retarray;
        },
        showAllData: function () {
            return {
                lou: this.loudata,
                danyuan: this.danyuandata,
                men: this.mendata,
            }
        },
        getData: function (type, param, fun) {
            var url = "", cpage = 1, type, _idkey, namekey;
            if (type == "louhao" || type == 1) {
                cpage = 1;
                url = server.apiurl;
            }
            else if (type == "danyuanhao" || type == 2) {
                cpage = 2;
                url = server.apiurl;
            }
            else if (type == "menpaihao" || type == 3) {
                cpage = 3;
                url = server.apiurl;
            }
            //
            if (param != null && true) {
                var _this = this;
                this._ajax(url, param, function (ret) {
                    var tmpdataarray = [];
                    if (ret["ret"] == 0) {

                        var data = ret["data"] || {};
                        var list = data[type];
                        if (list != null && list instanceof Array) {
                            for (var i = 0; i < list.length; i++) {
                                var item = list[i];
                                tmpdataarray.push(item);
                            }
                            if (type == "louhao") {
                                _this["loudata"] = tmpdataarray;

                            }
                            if (type == "danyuanhao") {
                                _this["danyuandata"] = tmpdataarray;
                            }
                            if (type == "menpaihao") {
                                _this["mendata"] = tmpdataarray;
                            }
                        }
                    }
                    // 回调回去
                    if (typeof fun == "function") {
                        // alert (tmpdataarray)
                        fun(tmpdataarray);
                    }
                })
            }
        },
        _ajax: function (url, param, success) {
            var result;
            this._native_ajax({
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
        },
        _native_ajax: function (options) {
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
        },
        _ajax_bk: function (url, param, success) {
            var result;
            $.ajax({
                url: url,
                // url: "/lmock/louchose.json",
                data: (param),
                dataType: "jsonp",
                // dataType: "json",
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
        }
    }
    return DataApi;
})
();