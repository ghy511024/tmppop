/**
 * Created by ghy on 2017/12/16.
 */
(function () {
    __inline ('louchoose.tpl');
    __inline ('fangReport.js');
    __inline ('dataApi.js');
    __inline ('js/scroll_check.js');
    var firstinit = false;
    var time_lock = null;
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
        },
        cpageNum: {
            louhao: 1,
            menpaihao: 1,
            danyuanhao: 1,
        }
    };
    var LS = {
        page_next: false,
        is_inload: false,
        init: function () {
            this._layout ();
            this.initEvent ();
            this.scEvent ();
        }
        ,
        initEvent: function () {
            var _this = this;
            $ (".lou-select-wrap").on ("click", ".list-wrap li", function () {
                var page = $ (this).parents (".louselect-item");
                var name = $ (this).attr ("name");
                var type = page.attr ("ptype")
                page.find (".ipt-panel input").val (name).attr ("name", name)
                page.find (".btn-sure").removeClass ("disable");
                loudata.formdata[type] = name;
                var npage = type == "louhao" ? "danyuanhao" : (type == "danyuanhao" ? "menpaihao" : false)
                if (type == "louhao") {
                    _this.showPage ("danyuanhao", name);
                } else if (type == "danyuanhao") {
                    _this.showPage ("menpaihao", name);
                } else if (type == "menpaihao") {
                    _this.finish ();
                }
                FRP.liclick (type);
            })

            // 确认楼号
            $ ("#sure-louhao").on ("click", function () {
                if (!$ (this).hasClass ("disable")) {
                    var name = $ ("#louhao-ipt").val ();
                    loudata.formdata.louhao = name;
                    _this.showPage ("danyuanhao", name);
                    FRP.sureclick ("louhao");
                }
            })
            // 确认单元号
            $ ("#sure-danyuanhao").on ("click", function () {
                if (!$ (this).hasClass ("disable")) {
                    var name = $ ("#danyuanhao-ipt").val ();
                    loudata.formdata.danyuanhao = name;
                    _this.showPage ("menpaihao", name);
                    FRP.sureclick ("danyuanhao");
                }
            })

            // 确认门号
            $ ("#sure-menpaihao").on ("click", function () {
                if (!$ (this).hasClass ("disable")) {
                    var name = $ ("#menpaihao-ipt").val ();
                    loudata.formdata.menpaihao = name;
                    _this.finish ();
                    FRP.sureclick ("menpaihao");
                }
            });
            // 直接跳过
            $ (".lou-select-wrap .jump-btn").on ("click", function () {
                _this.jumpnext ();
                var type = $ (this).attr ("ptype");
                FRP.jumpclick (type);
            })

            // 输入事件
            $ (".lou-select-wrap .lou-ipt").forEach (function (item) {
                $ (item)[0].oninput = function () {
                    var type = $ (this).attr ("loutype");
                    var value = $ (this).val ().replace (/\s/gi, "");
                    if (value != null && value.length > 0) {
                        if (value.length >= 20) {
                            value = value.slice (0, 20);
                            var _this = this;
                            setTimeout (function () {
                                $ (_this).val (value);
                            }, 0)

                        } else {
                            $ (this).parent ().find (".btn-sure").removeClass ("disable");
                        }
                    } else {
                        $ (this).parent ().find (".btn-sure").addClass ("disable");
                    }
                    var checkarray = DataApi.search (type, value);
                }
            })
        }
        ,
        // 注册滚动事件，滚动到底部加载
        scEvent: function () {
            var _this = this;

            function scregist (type) {
                var l_h = $ ("#" + type + "+_sc").height ();
                var s_h = $ ("." + type + "-list").height ();
                $ ("." + type + "-list")[0].onscroll = function () {
                    l_h = $ ("#" + type + "_sc").height ();
                    s_h = s_h !== 0 ? s_h : $ ("." + type + "-list").height ();
                    if (l_h - s_h - this.scrollTop < 100) {
                        if (!_this.is_inload && _this.page_next)
                        {
                            clearTimeout (time_lock);
                            time_lock = setTimeout (function () {
                                _this.getData (type, loudata.cpageNum[type]++);
                            }, 16)
                        }
                    }
                }
            }

            scregist ("louhao");
            scregist ("danyuanhao");
            scregist ("menpaihao");
            // sccheck ($ (".louhao-list")[0]);
        },
        // 初始化，html ，将模版字符串添加进html
        _layout: function () {
            // do nothing 模板中已经加了fout 字段，默认输出
        }
        ,
        showPage: function (type, typeid, isback) {
            // 清除数据,true 代表回退操作不用清除
            if (isback) {
                this.anPage (type, "pre")
            }
            else {
                $ ("." + type + "-list ul").empty ();
                $ (".page-" + type + " .ipt-wrap input").val ("").removeAttr ("name");
                $ (".page-" + type + " .ipt-wrap .btn-sure").addClass ("disable");
                loudata["formdata"][type] = null;
                loudata.cpageNum[type] = 1;// 清除分页
                this.anPage (type, "next")
            }

            this.noticeCall (type);
            if (typeid != null) {
                this.getData (type);
            }
            // 显示页面
            // $ (".page-item.active").removeClass ("active");
            // $ (".page-item.page-" + type).addClass ("active");
            loudata.cpage = type == "louhao" ? 1 : (type == "danyuanhao" ? 2 : 3);
            this.showloading ();
            return;
        }
        ,
        getData: function (type, pageNum) {
            var _this = this;
            _this.is_inload = true;
            var param = {
                tipkey: type,
                xiaoquid: loudata.xiaoquId,
                louhao: loudata.formdata.louhao,
                danyuanhao: loudata.formdata.danyuanhao,
                page: (pageNum || 1)
            }
            DataApi.getData (type, param, function (list) {
                _this.page_next = false;
                if (list != null && list.length > 0) {
                    for (var i = 0; i < list.length; i++) {
                        var item = list[i];
                        var liitem = $ (TPL.getTpl ("liitem"));
                        liitem.html (item).attr ("name", item);
                        $ ("." + type + "-list ul").append (liitem);
                    }
                }
                if (list.length >= 10) {
                    _this.page_next = true;
                }
                _this.is_inload = false;
            })
        },
        noticeCall: function (type) {
            if (type == "louhao") {
                for (var i = 0; i < lou_call.length; i++) {
                    var fun = lou_call[i];
                    if (typeof fun == "function") {
                        fun ();
                    }
                }
            }
            if (type == "danyuanhao") {
                for (var i = 0; i < danyuan_call.length; i++) {
                    var fun = danyuan_call[i];
                    if (typeof fun == "function") {
                        fun (loudata.formdata.louhao || "无楼号");
                    }
                }
            }
            if (type == "menpaihao") {
                for (var i = 0; i < men_call.length; i++) {
                    var fun = men_call[i];
                    if (typeof fun == "function") {
                        fun (loudata.formdata.louhao || "无楼号", loudata.formdata.danyuanhao || "无单元号");
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
                this.finish ();
            }

            if (!!type) {
                this.showPage (type, null);
            }
        },
        anPage: function (loutype, antype) {

            if (antype == "next") {
                $ (".page-" + loutype).addClass ("beforeActive");
                setTimeout (function () {
                    $ (".page-" + loutype).addClass ("active");
                }, 0)
            }
            if (antype == "pre") {
                if (loutype == "danyuanhao") {
                    $ (".page-menpaihao").removeClass ("active");
                    setTimeout (function () {
                        $ (".page-menpaihao").removeClass ("beforeActive");
                    }, 600)
                }
                if (loutype == "louhao") {
                    $ (".page-danyuanhao").removeClass ("active");
                    setTimeout (function () {
                        $ (".page-menpaihao").removeClass ("beforeActive");
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
            $ (".lou-select-wrap").removeClass ("active");

            setTimeout (function () {
                $ (".lou-select-wrap").removeClass ("beforeActive");
                $ (".louselect-item").removeClass ("active").removeClass ("beforeActive");
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
                callback (ret, retdata)
            }

            $ ("html,body").css ({ overflow: "auto", height: "auto" });
            // $ ('body').off ('touchmove touchstart');
        }
        ,
// 初始化调用
        action: function (xiaoquId) {
            // xiaoquId = "1747";
            $ (".lou-select-wrap").addClass ("beforeActive");
            setTimeout (function () {
                $ (".lou-select-wrap").addClass ("active");
            }, 0)

            loudata.isshow = true;
            loudata.xiaoquId = xiaoquId;
            this.showPage ("louhao", xiaoquId);
            FRP.showrep ();
            $ ("html,body").css ({ overflow: "hidden", height: "100vh" });
        }
        ,
    }
// 对外提供共用api
    var API = {
        // 回退
        back: function () {
            switch (loudata.cpage) {
                case 0: {
                    break;
                }
                case 1: {
                    LS.finish (false);
                    break;
                }
                case 2: {
                    LS.showPage ("louhao", null, true);
                    break;
                }
                case 3: {
                    LS.showPage ("danyuanhao", null, true);
                    break;
                }
            }
        },
        isshow: function () {
            var isshow = false;
            if (loudata.isshow) {
                isshow = $ (".lou-select-wrap").hasClass ("active");
            }
            return isshow;
        },
        registCall: function (type, fun) {
            if (typeof fun == "function") {
                if (type == "louhao") {
                    lou_call.push (fun)
                }
                else if (type == "danyuanhao") {
                    danyuan_call.push (fun)

                } else if (type == "menpaihao") {
                    men_call.push (fun)
                }
            }
        },
        // 弹起楼号选择
        action: function (xiaoquId, fun) {
            if (typeof fun == "function") {
                callback = fun;
            }
            LS.action (xiaoquId);
            loudata.isshow = true;
        }
    }
    LS.init ();
    return API;
}) ()