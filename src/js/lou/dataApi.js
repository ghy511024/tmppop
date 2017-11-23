// 数据过滤
var DataApi = (function () {
    var server = {
        apiurl: "https://housepostbaseapi.58.com/wuyedizhi/tip",
        // apiurl: "https://pwebapp.58.com/wuyedizhi/tip",
        // lou: "https://tmp.ghy58.com/lmock/lou.json",
        // danyuan: "https://tmp.ghy58.com/lmock/danyuan.json",
        // men: "https://tmp.ghy58.com/lmock/men.json",
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
                    retarray.push (i);
                    continue;
                }
                if (tmpdata[i].indexOf (value)) {
                    retarray.push (i);
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
            if (type == "louhao") {
                cpage = 1;
                url = server.apiurl;
            }
            else if (type == "danyuanhao") {
                cpage = 2;
                url = server.apiurl;
            }
            else if (type == "menpaihao") {
                cpage = 3;
                url = server.apiurl;
            }
            //
            if (param != null && true) {
                var _this = this;
                this._ajax (url, param, function (ret) {
                    var tmpdataarray = [];
                    if (ret["ret"] == 0) {
                        var data = ret["data"] || {};
                        var list = data[type];
                        if (list != null && list instanceof Array) {
                            for (var i = 0; i < list.length; i++) {
                                var item = list[i];
                                tmpdataarray.push (item);
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
                        fun (tmpdataarray);
                    }
                })
            }
        },
        _ajax: function (url, param, success) {
            var result;
            $.ajax ({
                url: url,
                // url: "/lmock/lou.json",
                data: (param),
                dataType: "jsonp",
                error: function (jqXHR, textStatus, errorThrown) {
                    if (typeof success == "function") {
                        result = { ret: -1 };
                        success (result);
                    }
                },
                success: function (ret) {
                    if (typeof ret == "string") {
                        try {
                            ret = JSON.parse (ret);
                            result = {
                                ret: 0,
                                data: ret
                            }
                        }
                        catch (e) {
                            result = { ret: -1 };
                        }
                    } else {
                        result = {
                            ret: 0,
                            data: ret
                        }
                    }
                    if (typeof success == "function") {
                        success (result);
                    }
                }
            })
        }
    }
    return DataApi;
}) ();