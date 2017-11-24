var FANG_POPAPI = FANG_POPAPI || {};
(function (FANG_POPAPI) {
    __inline('louchose.tpl');
    __inline('fangReport.js');
    __inline('dataApi.js');
    var firstinit = false;
    var callback = function () {
    };
    var lou_call = [], danyuan_call = [], men_call = [];// 切换状态时候回调函数

    var loudata = {
        isshow: false,
        cpage: 0,// 当前页面
        load: false,// 加载数据状态
        xiaoquId: null,
        formdata: {
            louhao: null,
            menpaihao: null,
            danyuanhao: null,
        }
    };
    var LS = {
        init: function () {
            this._layout();
            this.initEvent();
        }
        ,
        initEvent: function () {
            var _this = this;
            $(".list-wrap li").on("click", ".lou-select-wrap", function () {
                var page = $(this).parents(".louchose-item");
                var name = $(this).attr("name");
                var type = page.attr("ptype")
                page.find(".ipt-panel input").val(name).attr("name", name)
                page.find(".btn-sure").removeClass("disable");

                loudata.formdata[type] = name;
                var npage = type == "louhao" ? "danyuanhao" : (type == "danyuanhao" ? "menpaihao" : false)
                if (type == "louhao") {
                    _this.showPage("danyuanhao", name);
                } else if (type == "danyuanhao") {
                    _this.showPage("menpaihao", name);
                } else if (type == "menpaihao") {
                    _this.finish();
                }
                FRP.liclick(type);
            })

            // 确认楼号
            $("#sure-louhao").on("click", function () {
                if (!$(this).hasClass("disable")) {
                    var name = $("#louhao-ipt").val();
                    loudata.formdata.louhao = name;
                    _this.showPage("danyuanhao", name);
                    FRP.sureclick("louhao");
                }
            })
            // 确认单元号
            // $("body").on("click", "#sure-danyuanhao", function () {
            $("#sure-danyuanhao").on("click", function () {
                if (!$(this).hasClass("disable")) {
                    var name = $("#danyuanhao-ipt").val();
                    loudata.formdata.danyuanhao = name;
                    _this.showPage("menpaihao", name);
                    FRP.sureclick("danyuanhao");
                }
            })

            // 确认门号
            // $("body").on("click", "#sure-menpaihao", function () {
            $("#sure-menpaihao").on("click", function () {
                if (!$(this).hasClass("disable")) {
                    var name = $("#menpaihao-ipt").val();
                    loudata.formdata.menpaihao = name;
                    _this.finish();
                    FRP.sureclick("menpaihao");
                }
            });
            // 直接跳过
            $(".jump-btn").on("click", ".lou-select-wrap", function () {
                _this.jumpnext();
                var type = $(this).attr("ptype");
                FRP.jumpclick(type);
            })

            // 输入事件
            $(".louchose-ipt").forEach(function (item) {
                $(item)[0].oninput = function () {
                    var type = $(this).attr("loutype");
                    var value = $(this).val().replace(/\s/gi, "");
                    if (value != null && value.length > 0) {
                        if (value.length >= 20) {
                            value = value.slice(0, 20);
                            var _this = this;
                            setTimeout(function () {
                                $(_this).val(value);
                            }, 0)

                        } else {
                            $(this).parent().find(".btn-sure").removeClass("disable");
                        }
                    } else {
                        $(this).parent().find(".btn-sure").addClass("disable");
                    }
                    var checkarray = DataApi.search(type, value);
                }
            })
        }
        ,
        // 初始化，html ，将模版字符串添加进html
        _layout: function () {
            var str = TPL.getTpl("louhao") || ""; // 获取字符串
            var louwrap = document.createElement("div");
            louwrap.innerHTML = str;
            document.body.appendChild(louwrap);
        }
        ,
        showPage: function (type, typeid, isback) {
            // 清除数据,true 代表回退操作不用清除
            if (isback) {
                this.anPage(type, "pre")
            }
            else {
                $("." + type + "-list ul").empty();
                $(".page-" + type + " .ipt-wrap input").val("").removeAttr("name");
                $(".page-" + type + " .ipt-wrap .btn-sure").addClass("disable");
                loudata["formdata"][type] = null;
                this.anPage(type, "next")
            }

            this.noticeCall(type);
            if (typeid != null) {
                // 构造数据
                var param = {
                    tipkey: type,
                    xiaoquid: loudata.xiaoquId,
                    louhao: loudata.formdata.louhao,
                    danyuanhao: loudata.formdata.danyuanhao,
                }
                // alert (JSON.stringify (param));
                // 获取数据
                DataApi.getData(type, param, function (list) {
                    if (list != null && list.length > 0) {
                        for (var i = 0; i < list.length; i++) {
                            var item = list[i];
                            var liitem = $(TPL.getTpl("liitem"));
                            liitem.html(item).attr("name", item);
                            $("." + type + "-list ul").append(liitem);
                        }
                    } else {
                        // 请求数据失败 处理
                    }
                })
            }
            // 显示页面
            // $ (".page-item.active").removeClass ("active");
            // $ (".page-item.page-" + type).addClass ("active");

            loudata.cpage = type == "louhao" ? 1 : (type == "danyuanhao" ? 2 : 3);
            this.showloading();
            return;
        }
        ,
        noticeCall: function (type) {
            if (type == "louhao") {
                for (var i = 0; i < lou_call.length; i++) {
                    var fun = lou_call[i];
                    if (typeof fun == "function") {
                        fun();
                    }
                }
            }
            if (type == "danyuanhao") {
                for (var i = 0; i < danyuan_call.length; i++) {
                    var fun = danyuan_call[i];
                    if (typeof fun == "function") {
                        fun(loudata.formdata.louhao || "无楼号");
                    }
                }
            }
            if (type == "menpaihao") {
                for (var i = 0; i < men_call.length; i++) {
                    var fun = men_call[i];
                    if (typeof fun == "function") {
                        fun(loudata.formdata.louhao || "无楼号", loudata.formdata.danyuanhao || "无单元号");
                    }
                }
            }
        },
        jumpnext: function () {
            var cpage = loudata.cpage;
            var type = null;
            if (cpage == 1) {
                type = "danyuanhao"
            } else if (cpage == 2) {
                type = "menpaihao"
            }
            else if (cpage == 3) {
                this.finish();
            }

            if (!!type) {
                this.showPage(type, null);
            }
        },
        anPage: function (loutype, antype) {

            if (antype == "next") {
                $(".page-" + loutype).addClass("beforeActive");
                setTimeout(function () {
                    $(".page-" + loutype).addClass("active");
                }, 0)
            }
            if (antype == "pre") {
                if (loutype == "danyuanhao") {
                    $(".page-menpaihao").removeClass("active");
                    setTimeout(function () {
                        $(".page-menpaihao").removeClass("beforeActive");
                    }, 600)
                }
                if (loutype == "louhao") {
                    $(".page-danyuanhao").removeClass("active");
                    setTimeout(function () {
                        $(".page-menpaihao").removeClass("beforeActive");
                    }, 600)
                }
            }
        }
        ,
        showloading: function () {
        }
        ,
// 完成
        finish: function (isfinish) {
            loudata.isshow = false;
            $(".louchose-select-wrap").removeClass("active");

            setTimeout(function () {
                $(".louchose-select-wrap").removeClass("beforeActive");
                $(".louchose-item").removeClass("active").removeClass("beforeActive");
            }, 600)
            // 重置数据
            // var retdata = Object.assign ({}, loudata.formdata);

            var tmp_louhao = loudata.formdata.louhao
            var tmp_danyuanhao = loudata.formdata.danyuanhao
            var tmp_menpaihao = loudata.formdata.menpaihao

            loudata.xiaoquId = null;
            loudata.formdata.louhao = null;
            loudata.formdata.danyuanhao = null;
            loudata.formdata.menpaihao = null;

            lou_call = [];
            danyuan_call = [];
            men_call = [];

            if (typeof callback == "function") {
                var retdata = {};
                var ret = isfinish === false ? -1 : 0;
                retdata.louhao = tmp_louhao || "无楼号"
                retdata.danyuanhao = tmp_danyuanhao || "无单元号"
                retdata.menpaihao = tmp_menpaihao || "无门牌号"
                callback(ret, retdata)
            }

            $("html,body").css({overflow: "auto", height: "auto"});
            // $ ('body').off ('touchmove touchstart');
        }
        ,
// 初始化调用
        action: function (xiaoquId) {
            // xiaoquId = "1747";
            $(".louchose-select-wrap").addClass("beforeActive");
            setTimeout(function () {
                $(".louchose-select-wrap").addClass("active");
            }, 0)

            loudata.isshow = true;
            loudata.xiaoquId = xiaoquId;
            this.showPage("louhao", xiaoquId);
            FRP.showrep();
            $("html,body").css({overflow: "hidden", height: "100vh"});
        }
        ,
    }
    LS.init();
// 对外提供共用api
    var API = {
        // 回退
        back: function () {
            console.log(loudata.cpage)
            switch (loudata.cpage) {
                case 0: {
                    break;
                }
                case 1: {
                    LS.finish(false);
                    break;
                }
                case 2: {
                    LS.showPage("louhao", null, true);
                    break;
                }
                case 3: {
                    LS.showPage("danyuanhao", null, true);
                    break;
                }
            }
        },
        isshow: function () {
            var isshow = false;
            if (loudata.isshow) {
                isshow = $(".louchose-select-wrap").hasClass("active");
            }
            return isshow;
        },
        registCall: function (type, fun) {
            if (typeof fun == "function") {
                if (type == "louhao") {
                    lou_call.push(fun)
                }
                else if (type == "danyuanhao") {
                    danyuan_call.push(fun)

                } else if (type == "menpaihao") {
                    men_call.push(fun)
                }
            }
        },
        // 弹起楼号选择
        action: function (xiaoquId, fun) {
            if (typeof fun == "function") {
                callback = fun;
            }
            LS.action(xiaoquId);
            loudata.isshow = true;
        }
    }
    FANG_POPAPI.LOU_CHOSE = API;

})(FANG_POPAPI)