/**
 * 弹窗集合，
 * FANG_POPAPI 为全局弹窗命名空间
 *
 */

var FANG_POPAPI = {};
var FANG_POPAPI = FANG_POPAPI || {};
(function (FANG_POPAPI) {
    
window.TPL = window.TPL || {};
TPL.tplmap = TPL.tplmap || {};
TPL.getTpl = TPL.getTpl || function (_id) {
    return this.tplmap[_id];
};
TPL.addNode=TPL.addNode||function(html){
     var divTemp = document.createElement("div"), nodes = null ,
              fragment = document.createDocumentFragment();
      divTemp.innerHTML = html;
       nodes = divTemp.childNodes;
    for (var i=0, length=nodes.length; i<length; i+=1) {
       fragment.appendChild(nodes[i].cloneNode(true));
    }
    document.body.appendChild(fragment);
    nodes = null;
    fragment = null;
}
TPL.addStyle = TPL.addStyle || function (styleContent) {
    var styleNode = document.getElementById("jsptpl-style") || document.createElement("style");
    styleNode.setAttribute("type", "text/css");
    styleNode.setAttribute("id", "jsptpl-style");
    if (styleNode.styleSheet) {
        styleNode.styleSheet.cssText = styleContent;
    } else {
        styleNode.appendChild(document.createTextNode(styleContent));
    }
    document.getElementsByTagName("head")[0].appendChild(styleNode);
};
(function (TPL) {
    TPL.tplmap['louhao'] = '<div class="lou-select-wrap"><div class="louselect-item page-louhao" ptype="louhao"><div class="ipt-wrap"><div class="ipt-panel"><div class="icon-search"></div><input type="text" placeholder="请输入楼号" id="louhao-ipt" class="lou-ipt"><div class="btn btn-sure disable" id="sure-louhao">确定</div></div></div><div class="list-title-wrap"><div class="list-title">请选择楼号</div></div><div class="list-wrap louhao-list"><div class="sc_body" id="s1"><ul></ul><div class="list-footer"><span class="jump-btn" ptype="louhao">没有楼号，直接跳过></span></div></div></div></div><div class="louselect-item page-danyuanhao" ptype="danyuanhao"><div class="ipt-wrap"><div class="ipt-panel"><div class="icon-search"></div><input type="text" placeholder="请输入单元号" id="danyuanhao-ipt" class="lou-ipt"><div class="btn btn-sure disable" id="sure-danyuanhao">确定</div></div></div><div class="list-title-wrap"><div class="list-title">请选择单元号</div></div><div class="list-wrap danyuanhao-list"><div class="sc_body"><ul></ul><div class="list-footer"><span class="jump-btn" ptype="danyuanhao">没有单元号，直接跳过></span></div></div></div></div><div class="louselect-item page-menpaihao" ptype="menpaihao"><div class="ipt-wrap"><div class="ipt-panel"><div class="icon-search"></div><input type="text" placeholder="请输入门牌号" id="menpaihao-ipt" class="lou-ipt"><div class="btn btn-sure disable" id="sure-menpaihao">确定</div></div></div><div class="list-title-wrap"><div class="list-title">请选择门牌号</div></div><div class="list-wrap menpaihao-list"><div class="sc_body"><ul></ul><div class="list-footer"><span class="jump-btn" ptype="menpaihao">没有门牌号，直接跳过></span></div></div></div></div></div>'
})(TPL);
   
(function (TPL) {
    TPL.tplmap['liitem'] = '<li></li>'
})(TPL);
   
//begin insert style
TPL.addStyle('.lou-select-wrap{width:100%;   height:100%;   position:fixed;   z-index:1000;   background:#f6f6f6;   top:0;   left:0;   display:none;   transition:all 0.4s ease;   transform:translateY(50px);}.lou-select-wrap.beforeActive{opacity:0;   display:block;}.lou-select-wrap.active{opacity:1;   transform:translateY(0);}.lou-select-wrap .louselect-item{width:100%;   height:100%;   position:absolute;   display:none;   background:#f6f6f6;}.lou-select-wrap .louselect-item .ipt-wrap{position:relative;   top:0px;   height:1.46667rem;   width:100%;   background:#fff;}.lou-select-wrap .louselect-item .ipt-wrap .ipt-panel{height:0.74667rem;   position:absolute;   left:0.46667rem;   right:0.46667rem;   margin:0 auto;   top:0.36rem;}.lou-select-wrap .louselect-item .ipt-wrap .icon-search{width:0.4rem;   height:0.4rem;   position:absolute;   background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAATlBMVEUAAACZmZmqqqqZmZmbm5uampqampqbm5uYmJiZmZmampqcnJyampqampqZmZmZmZmZmZmenp6bm5ubm5uZmZmbm5ucnJyampqYmJiXl5ddw4MbAAAAGXRSTlMA7Az44WXbx7WWVksmFPLOgjIgQJSyPeiBRu16RQAAAMRJREFUKM+Fk0kOwyAMRQ2GkBHI2P77X7QobSlKKLwFmyfZxgNFZm8UszJ+pju9QkT1F7k4QHTDKOU4dAJwS2pXC6EpogXsmlhGKylBtuDoF4uNLmyw3/gOLd1o4T41Q8i7lgLv+hU0ZdBQZzcgKIvAHF6PLq87+PAaDHk9wJypx7wez+QMmdcSXNGV4JXSyh97VtpSbmplJOWBVtahsEyMvrSKjGb6v8jmaILPnAEDaDTR9PPpET2MPyiQ+DzB71Tyu6YXfcYOFcgEh08AAAAASUVORK5CYII=");   top:0.17333rem;   left:0px;   background-size:cover;}.lou-select-wrap .louselect-item .ipt-wrap .lou-ipt{position:absolute;   height:0.48rem;   width:5.65333rem;   left:0.53333rem;   top:0px;   box-sizing:border-box;   outline:none;   border:none;   font-size:0.37333rem;   padding:0.13333rem 0px;   box-sizing:content-box;}.lou-select-wrap .louselect-item .ipt-wrap .lou-ipt::-webkit-input-placeholder{position:absolute;   display:inline-block;   height:0.74667rem;   line-height:0.48rem;   font-size:0.37333rem;   vertical-align:top;   top:0px;   bottom:0;}.lou-select-wrap .louselect-item .ipt-wrap .lou-ipt::-moz-placeholder{position:absolute;   display:inline-block;   height:0.74667rem;   line-height:0.48rem;   font-size:0.37333rem;   vertical-align:top;   top:0px;   bottom:0;}.lou-select-wrap .louselect-item .ipt-wrap .lou-ipt:-ms-input-placeholder{position:absolute;   display:inline-block;   height:0.74667rem;   line-height:0.48rem;   font-size:0.37333rem;   vertical-align:top;   top:0px;   bottom:0;}.lou-select-wrap .louselect-item .ipt-wrap .btn-sure{position:absolute;   right:0px;   width:1.73333rem;   height:0.74667rem;   text-align:center;   line-height:0.77333rem;   font-size:0.34667rem;   border-radius:0.02667rem;   color:#fff;   background:#ff552e;}.lou-select-wrap .louselect-item .ipt-wrap .btn-sure.disable{background:#ffaa96;}.lou-select-wrap .louselect-item .list-title-wrap{position:relative;   height:1.33333rem;   border-bottom:1px solid #dddddd;   margin:0px 0.4rem;}.lou-select-wrap .louselect-item .list-title-wrap .list-title{position:absolute;   font-size:0.34667rem;   color:#999999;   line-height:0.56rem;   bottom:0.21333rem;}.lou-select-wrap .louselect-item .list-wrap{position:absolute;   width:100%;   top:2.66667rem;   bottom:0px;   overflow:auto;}.lou-select-wrap .louselect-item .list-wrap ul{margin:0px;   padding:0px;   width:100%;   background:#fff;}.lou-select-wrap .louselect-item .list-wrap ul li{width:100%;   height:1.33333rem;   line-height:1.33333rem;   text-indent:0.42667rem;   color:#000;   font-size:0.37333rem;   border-top:1px solid #f6f6f6;}.lou-select-wrap .louselect-item .list-wrap ul li:active{background:#f6f6f6;}.lou-select-wrap .louselect-item .list-wrap ul li:first-child{border:none;}.lou-select-wrap .louselect-item .list-wrap .list-footer{width:100%;   height:1.46667rem;   line-height:1.46667rem;   text-align:center;   color:#999999;}.lou-select-wrap .louselect-item{transform:translateX(100%);   transition:all 0.6s ease;}.lou-select-wrap .louselect-item.page-louhao{transform:translateX(0);}.lou-select-wrap .louselect-item.beforeActive{display:block;}.lou-select-wrap .louselect-item.active{display:block;   transform:translateX(0);}');
    /**
 * Created by ghy on 2017/9/18.
 */
var FRP = (function () {
    var uvmap = {}
    var typeMap = {
        _SHOW_MENHAO: "menpaishow",
        _CLICK_LOUHAO: "louhaoclick",
        _CLICK_DANYUANHAO: "danyuanclick",
        _CLICK_MENPAIHAO: "menpaiclick",
        _CLICK_JUMP_LOUHAO: "wulouhaoclick",
        _CLICK_JUMP_DANYUANHAO: "wudanyuanclick",
        _CLICK_JUMP_MENPAIHAO: "wumenpaiclick",
        _CLISK_SURE_LOUHAO: "surelouhaoclick",
        _CLISK_SURE_DANYUANHAO: "suredanyuanclick",
        _CLISK_SURE_MENPAIHAO: "suremenpaiclick",
    }
    var frp = {
        liclick: function (type) {
            var typestr = type == "louhao" ? typeMap._CLICK_LOUHAO : (type == "danyuanhao" ? typeMap._CLICK_DANYUANHAO : typeMap._CLICK_MENPAIHAO)
            this.report (typestr)
        },
        sureclick: function (type) {
            var typestr = type == "louhao" ? typeMap._CLISK_SURE_LOUHAO : (type == "danyuanhao" ? typeMap._CLISK_SURE_DANYUANHAO : typeMap._CLISK_SURE_MENPAIHAO)
            this.report (typestr)
        },
        jumpclick: function (type) {
            var typestr = type == "louhao" ? typeMap._CLICK_JUMP_LOUHAO : (type == "danyuanhao" ? typeMap._CLICK_JUMP_DANYUANHAO : typeMap._CLICK_JUMP_MENPAIHAO)
            this.report (typestr)
        },
        showrep: function () {
            this.report (typeMap._SHOW_MENHAO)
        }
        ,
        report: function (actype) {
            if (window.WBAPP && !uvmap[actype]) {
                WBAPP.invoke ('weblog', {
                    page_type: 'fangpost1', // 页面类型
                    action_type: actype, // 操作类型
                    cate: "1,8",
                    params: ["8", '']
                });
            }
            uvmap[actype] = true;
        }
    }
    return frp;
}) ();;
    // 数据过滤
var DataApi = (function () {
    var server = {
        apiurl: "https://housepostbaseapi.58.com/wuyedizhi/tip",
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
                // url: "/lmock/louchose.json",
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
}) ();;
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
            $("body").on("click", ".list-wrap li", function () {
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
            $("body").on("click", "#sure-louhao", function () {
                if (!$(this).hasClass("disable")) {
                    var name = $("#louhao-ipt").val();
                    loudata.formdata.louhao = name;
                    _this.showPage("danyuanhao", name);
                    FRP.sureclick("louhao");
                }
            })
            // 确认单元号
            $("body").on("click", "#sure-danyuanhao", function () {
                if (!$(this).hasClass("disable")) {
                    var name = $("#danyuanhao-ipt").val();
                    loudata.formdata.danyuanhao = name;
                    _this.showPage("menpaihao", name);
                    FRP.sureclick("danyuanhao");
                }
            })

            // 确认门号
            $("body").on("click", "#sure-menpaihao", function () {
                if (!$(this).hasClass("disable")) {
                    var name = $("#menpaihao-ipt").val();
                    loudata.formdata.menpaihao = name;
                    _this.finish();
                    FRP.sureclick("menpaihao");
                }
            });
            // 直接跳过
            $("body").on("click", ".jump-btn", function () {
                _this.jumpnext();
                var type = $(this).attr("ptype");
                FRP.jumpclick(type);
            })

            // 输入事件
            $("body").find(".louchose-ipt").forEach(function (item) {
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

})(FANG_POPAPI);
/**
 * Created by ghy on 2017/10/17.
 */
var FANG_POPAPI = FANG_POPAPI || {};
(function (FANG_POPAPI) {
    
window.TPL = window.TPL || {};
TPL.tplmap = TPL.tplmap || {};
TPL.getTpl = TPL.getTpl || function (_id) {
    return this.tplmap[_id];
};
TPL.addNode=TPL.addNode||function(html){
     var divTemp = document.createElement("div"), nodes = null ,
              fragment = document.createDocumentFragment();
      divTemp.innerHTML = html;
       nodes = divTemp.childNodes;
    for (var i=0, length=nodes.length; i<length; i+=1) {
       fragment.appendChild(nodes[i].cloneNode(true));
    }
    document.body.appendChild(fragment);
    nodes = null;
    fragment = null;
}
TPL.addStyle = TPL.addStyle || function (styleContent) {
    var styleNode = document.getElementById("jsptpl-style") || document.createElement("style");
    styleNode.setAttribute("type", "text/css");
    styleNode.setAttribute("id", "jsptpl-style");
    if (styleNode.styleSheet) {
        styleNode.styleSheet.cssText = styleContent;
    } else {
        styleNode.appendChild(document.createTextNode(styleContent));
    }
    document.getElementsByTagName("head")[0].appendChild(styleNode);
};
(function (TPL) {
    TPL.tplmap['shenfen'] = '<div class="shenfen-page"><div class="shenfen-banner"><p class="title">请选择您的身份</p><p class="desc">我们会对每种身份设定合理的发帖权限</p></div><div class="shenfen-list"><ul></ul></div><div class="next-btn disable" id="shenfen-next">下一步</div></div>'
})(TPL);
   
//begin insert static dom
TPL.addNode(TPL.getTpl('shenfen'));
(function (TPL) {
    TPL.tplmap['shenfenitem'] = '<li shenfen-id=""><div class="shenfen-title"></div><div class="shenfen-desc"></div><div class="shenfen-arrow"></div></li>'
})(TPL);
   
//begin insert style
TPL.addStyle('::-webkit-scrollbar{width:0px;   height:0px;}::-webkit-scrollbar-thumb{background:#b5b5b5;   border-radius:3px;}::-webkit-scrollbar-thumb:vertical{height:0px;   background-color:#b5b5b5;}::-webkit-scrollbar-track{background-color:#f3f3f3;}::-webkit-scrollbar-track-piece{background-color:#f3f3f3;}.shenfen-page{width:100%;   height:100%;   position:fixed;   z-index:1000;   top:0;   background:#fff;   display:none;}.shenfen-page .shenfen-banner{width:100%;   height:2.93333rem;   background:#f6f7f9;   color:#333333;   background:linear-gradient(#f6f6f6, #f6f7f9);}.shenfen-page .shenfen-banner .title{position:absolute;   font-size:0.58667rem;   line-height:0.58667rem;   top:0.53333rem;   left:0.66667rem;   font-weight:bold;}.shenfen-page .shenfen-banner .desc{position:absolute;   top:1.46667rem;   left:0.66667rem;   font-size:0.4rem;   line-height:0.4rem;   color:#666666;}.shenfen-page .shenfen-list{width:8.93333rem;   margin:0 auto;   margin-top:0.53333rem;}.shenfen-page ul{width:100%;}.shenfen-page ul li{width:100%;   height:2.13333rem;   position:relative;   border-radius:5px;   background:#f6f7f9;   margin-top:0.4rem;   box-sizing:border-box;}.shenfen-page ul li:first-child{margin-top:0px;}.shenfen-page ul li .shenfen-title{position:absolute;   top:0.53333rem;   left:0.66667rem;   font-size:0.48rem;   line-height:0.48rem;   color:#333333;   font-weight:bold;}.shenfen-page ul li .shenfen-desc{position:absolute;   left:0.66667rem;   font-size:0.32rem;   line-height:0.32rem;   bottom:0.53333rem;   color:#666666;}.shenfen-page ul li .shenfen-arrow{position:absolute;   right:0.56rem;   width:22px;   height:22px;   top:50%;   margin-top:-11px;   background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAV1BMVEUAAAC4vMe2u8i5vse8wMq2u8W1usS1u8S2u8S2u8W2u8S1u8S2u8S2u8W1u8W2u8W8vMu2vMX5+fm1usT19fbX2t/i5Oju7/Hu7/Do6ezU1tzLz9W/w8yIO/t8AAAAEnRSTlMARDj+/vPu59nDv62lmYNtIpBAmnE3AAABBklEQVQ4y4zRWQ7CMAwA0TTpvlEycbre/5wgIqFSKM18P1m2rI7pvq3LLCvrttfqb0lXsKvoklOqK2Bb/Dw6N85+2YDq9/ihgVQmu2uSFJrhxwY5Rpw95MSQf+1ygzXQI1/h9mnvIPYkgfvnXOPtad7sZycQ7JmG995Djti/CfmgQg2rvWilCVZj3BV2hvCdCrGXCVW4LnXX2KWvGzvERiR0T1wwxeCJQinNZqPa0KpnicMLvWrxcdjTqpo5Ds/UqmSMwyOlynBx2JE9KqtzAgAAEIhh/l1HQ3YGnqOt4mqjBqzV1VHq3BOkimiFf96qHnZQUJAZfA0YB7kD89HECKjV9tIsHQNPP2rZJFfVpQAAAABJRU5ErkJggg==");   background-size:cover;}.shenfen-page ul li.active{background:#fff;   box-shadow:0px 3px 4px 0px #dee1e6;}.shenfen-page ul li.active .shenfen-arrow{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAUVBMVEUAAAD/Vi//VS7/VjH/VzL/VT//XDP/VS7/VS7/Vi//WjT/Vi7/VS7/VS//VS//VS7/Vy//VTH/Vi//VS7/VS//VS7/Vi7/Vi7/VjD/VTD/VS6M90ylAAAAGnRSTlMA2cJEOAwZ85qDIu7nv62lbVNxkF3t4s2hdZYP05QAAAD+SURBVDjLndXrjsIgEAXg4bILtFCsuhfP+z+oJhqsDjDY86tNvpAOhRl6jw05KedUysFSN8ZHbBK9aVKrwaLry08Lqlkmbs2MRmb2LQd0cni1J3RzYusOrm0gxpR9mGU8Tw+8YCDL3VoM5f539BjWrDqpRt8nP+XJ33DsUTXRfzmDQnnqm+i8KTEI9uuvvAbKgtUoyZSGLRKpYQtF7vm8hq6F2+Az0Vq3BauXTV87Fmpb4LHoqkWiDKYbFpkCmG5YBLJgulh+oiPTDRv5ET22LHzl8F8aFqZ2rX5d1erPL+x4KxhvMp+0r32NUW65+5u5PCb2DyB5tO0fmvI4vgJtaYu0gLfaSgAAAABJRU5ErkJggg==");}.shenfen-page ul li.active:after{border-radius:10px;   content:"";   position:absolute;   top:0;   left:0;   border:1px solid #ff552e;   -webkit-box-sizing:border-box;   box-sizing:border-box;   width:200%;   height:200%;   -webkit-transform:scale(0.5);   transform:scale(0.5);   -webkit-transform-origin:left top;   transform-origin:left top;}.shenfen-page .shenfen-tip{width:100%;   text-align:center;   font-size:0.29333rem;}.shenfen-page .next-btn{width:100%;   height:1.2rem;   line-height:1.2rem;   background:#ff552e;   text-align:center;   font-size:0.45333rem;   color:#fff;   position:fixed;   bottom:0;   left:0;}.shenfen-page .next-btn.disable{background:#ffa995;}');
    /**
 * Created by ghy on 2017/9/18.
 */
var SFRP = (function () {
    var uvmap = {}
    var typeMap = {
        _SHOW_PAGE: "sfchoose_show",
        _CLICK_GRFD: "sfchooseclick_gerenfangdong",
        _CLICK_GRZZ: "sfchooseclick_gerenzhuanzu",
        _CLICK_ZYFD: "sfchooseclick_zhiyefangdong",
        _CLICK_JJR: "sfchooseclick_jingjiren",
        _CLICK_NEXT: "sfchooseclick_next",
    }
    var sfrp = {
        rp: function (type) {
            var typestr;
            if (type == "683037") {
                typestr = typeMap._CLICK_GRFD
            }
            else if (type == "683038") {
                typestr = typeMap._CLICK_GRZZ
            }
            else if (type == "683039") {
                typestr = typeMap._CLICK_JJR
            } else if (type == "4") {
                typestr = typeMap._CLICK_ZYFD;
            }
            else if (type == "next") {
                typestr = typeMap._CLICK_NEXT
            }
            else if (type == "show") {
                typestr = typeMap._SHOW_PAGE
            }
            if (typestr != null) {
                this._report(typestr)
            }
        },
        _report: function (actype) {
            if (window.WBAPP && !uvmap[actype]) {
                WBAPP.invoke('weblog', {
                    page_type: 'sfchoose', // 页面类型
                    action_type: actype, // 操作类型
                    cate: "1,8",
                    params: ["8", '']
                });
            }
            uvmap[actype] = true;
        }
    }
    return sfrp;
})();;
    var myselect;
    var call_list = [];
    var err_fun = function () {
    };
    var evt_fun = function () {
    };
// var updateUrl = "http://jsonapi.com/mock/fang-release/shenfen-update.json"// 测试url
    var updateUrl = location.protocol + "//housepostbaseapi.58.com/usertype/add";// 初次选择身份，提交接口
    var SFCHOSE_MAIN = {
        ctype: null,
        cateid: "",
        cityid: "",
        init: function (cateid, cityid, data) {
            data = data || {};
            var optionlist = data["option"] || []
            this._layout(optionlist);

            this._initEvent();
            this.cateid = cateid;
            this.cityid = cityid;

        },
        _layout: function (list) {
            var _this = this;
            list = list || [];
            for (var i = 0; i < list.length; i++) {
                var option = list[i]
                var item = $(TPL.getTpl("shenfenitem") || ""); // 获取字符串
                $(item).attr("shenfen-id", option["value"]);
                $(item).find(".shenfen-title").html(option["text"]);
                // 获取描述
                var desc = _this.getDesc(option["text"])
                $(item).find(".shenfen-desc").html(desc);
                $(".shenfen-list ul").append($(item));
            }
        },
        _initEvent: function () {
            var _this = this;
            $(".shenfen-list li").on("click", function () {
                var type = $(this).attr("shenfen-id");
                $("#shenfen-next").removeClass("disable");
                SFRP.rp(type);// 埋点
                if (_this.ctype != type) {
                    $(".shenfen-list li").removeClass("active");
                    $(this).addClass("active");
                    _this.ctype = type;
                }
            })
            $("#shenfen-next").on("click", function () {
                var type = _this.ctype;

                if (type == null) {
                    // alert("还未选择身份")
                } else {
                    SFRP.rp("next");// 埋点
                    _this.sureMyShenfen(type)
                }
            })
        },
        /**
         * desc 模版变量中，没有唯一标识表述用户身份的，只能根据身份list 中包含的关键字来区分 ｛text:"房东"，value:"11111"｝
         */
        getDesc: function (name) {
            var desc = "";
            if (/房东/gi.test(name)) {
                if (/职业/.test(name)) {
                    desc = "公寓经营者/多房源管理者"
                } else {
                    desc = "房屋所有者，具备认证房本资质"
                }
            } else if (/经纪人/gi.test(name)) {
                desc = "房产中介，拥有专业的展示空间";
            } else if (/转租/.test(name)) {
                desc = "转让自己承租的房子";
            }
            return desc;
        },
        sureMyShenfen: function (_id) {
            var _this = this;
            var data = {
                cateid: this.cateid,
                cityid: this.cityid,
                isadd: true,
                client: "app",
                usertype: _id,
            }
            $.ajax({
                url: updateUrl,
                data: (data),
                dataType: "jsonp",
                error: function (jqXHR, textStatus, errorThrown) {
                    if (typeof err_fun == "function") {
                        err_fun(-1)
                    } else {
                        _this._close(-1);
                    }
                },
                success: function (ret) {
                    // alert (JSON.stringify (ret));
                    if (ret["code"] == 0) {
                        _this._close(0, _id);
                    }
                    else {
                        if (typeof err_fun == "function") {
                            err_fun(1)
                        } else {
                            _this._close(1);
                        }
                    }
                }
            })
        },
        show: function () {
            SFRP.rp("show");// 埋点
            $(".shenfen-page").show();
            $("html,body").css({overflow: "hidden", height: "100vh"});
        },
        _close: function (ret, sfid) {
            $(".shenfen-page").hide();
            for (var i = 0; i < call_list.length; i++) {
                var fun = call_list[i];
                if (typeof fun == "function") {
                    fun(ret, sfid)
                }
            }
            $("html,body").css({overflow: "auto", height: "auto"});
            call_list = [];
        }
    }

    var API = {
        init: function (cateid, cityid, data) {
            SFCHOSE_MAIN.init(cateid, cityid, data);
        },
        showPage: function () {
            SFCHOSE_MAIN.show();
        }
        ,
        hidePage: function () {

        },
        clse: function () {

        },
        // 注册回调函数
        registCall: function (fun) {
            if (typeof fun == "function") {
                call_list.push(fun);
            }
        },
        // 事件回调，方便统计埋点之类的
        registEvent: function (fun) {
            if (typeof fun == "function") {
                evt_fun = fun;
            }
        },
        registERR: function (fun) {
            if (typeof fun == "function") {
                err_fun = fun;
            }
        }
    }
    FANG_POPAPI.SF_CHOSE = API;
})(FANG_POPAPI);;
/**
 * Created by ghy on 2017/10/19.
 */

var FANG_POPAPI = FANG_POPAPI || {};
(function (FANG_POPAPI) {
    
window.TPL = window.TPL || {};
TPL.tplmap = TPL.tplmap || {};
TPL.getTpl = TPL.getTpl || function (_id) {
    return this.tplmap[_id];
};
TPL.addNode=TPL.addNode||function(html){
     var divTemp = document.createElement("div"), nodes = null ,
              fragment = document.createDocumentFragment();
      divTemp.innerHTML = html;
       nodes = divTemp.childNodes;
    for (var i=0, length=nodes.length; i<length; i+=1) {
       fragment.appendChild(nodes[i].cloneNode(true));
    }
    document.body.appendChild(fragment);
    nodes = null;
    fragment = null;
}
TPL.addStyle = TPL.addStyle || function (styleContent) {
    var styleNode = document.getElementById("jsptpl-style") || document.createElement("style");
    styleNode.setAttribute("type", "text/css");
    styleNode.setAttribute("id", "jsptpl-style");
    if (styleNode.styleSheet) {
        styleNode.styleSheet.cssText = styleContent;
    } else {
        styleNode.appendChild(document.createTextNode(styleContent));
    }
    document.getElementsByTagName("head")[0].appendChild(styleNode);
};
(function (TPL) {
    TPL.tplmap['shenfenPop'] = '<div class="shenfenPop-page"><div class="pop-wrap"><div class="pop-title">选择您的身份<div class="pop-sure" id="pop-sure">确定</div><div class="pop-cancel" id="pop-cancel">取消</div></div><div class="pop-list"><ul></ul></div></div></div>'
})(TPL);
   
//begin insert static dom
TPL.addNode(TPL.getTpl('shenfenPop'));
(function (TPL) {
    TPL.tplmap['shenfenitem'] = '<li shenfen-id=""><div class="pop-info"></div><div class="pop-desc"></div><div class="pop-arrow"></div></li>'
})(TPL);
   
//begin insert style
TPL.addStyle('.shenfenPop-page{width:100%;   height:100%;   position:fixed;   display:none;   top:0px;   transition:all 0.4s ease;}.shenfenPop-page .pop-wrap{transition:all 0.4s ease;   position:absolute;   width:100%;   bottom:0px;   background:#ffffff;}.shenfenPop-page .pop-title{height:1.2rem;   background:#f9fafc;   text-align:center;   font-size:0.37333rem;   color:#999999;   line-height:1.2rem;   position:relative;}.shenfenPop-page .pop-title:after{content:"";   position:absolute;   top:0;   left:0;   border:1px solid #e3e3e4;   -webkit-box-sizing:border-box;   box-sizing:border-box;   width:200%;   height:200%;   -webkit-transform:scale(0.5);   transform:scale(0.5);   -webkit-transform-origin:left top;   transform-origin:left top;}.shenfenPop-page .pop-title .pop-sure, .shenfenPop-page .pop-title .pop-cancel{position:absolute;   z-index:1;   width:1.6rem;   height:1.2rem;   line-height:1.22667rem;   color:#ff552e;   top:0px;   right:0px;}.shenfenPop-page .pop-title .pop-sure.pop-cancel, .shenfenPop-page .pop-title .pop-cancel.pop-cancel{right:auto;   left:0px;   color:#7b7b7b;}.shenfenPop-page .pop-list{widtH:100%;}.shenfenPop-page .pop-list ul{width:9.33333rem;   margin:0 auto;}.shenfenPop-page .pop-list ul li{width:100%;   height:1.86667rem;   position:relative;}.shenfenPop-page .pop-list ul li:after{border-radius:0px;   content:"";   position:absolute;   top:0;   left:0;   z-index:-1;   border-bottom:1px solid #f1f1f1;   -webkit-box-sizing:border-box;   box-sizing:border-box;   width:200%;   height:200%;   -webkit-transform:scale(0.5);   transform:scale(0.5);   -webkit-transform-origin:left top;   transform-origin:left top;}.shenfenPop-page .pop-list ul li .pop-info{position:absolute;   top:0.4rem;   font-size:0.45333rem;   color:#333333;   left:0.06667rem;}.shenfenPop-page .pop-list ul li .pop-desc{font-size:0.32rem;   position:absolute;   left:0.06667rem;   top:0.98667rem;   color:#7b7b7b;}.shenfenPop-page .pop-list ul li .pop-arrow{position:absolute;   right:0.26667rem;   width:22px;   height:22px;   top:50%;   margin-top:-11px;   background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAASFBMVEUAAADHx87IyM7IyM7Kys/IyM7Jyc/IyNHKytHW1tb////Hx87IyM3IyM3IyM7IyM3Jyc7IyM7Jyc7Ly9HIyNPHx83IyM3Hx81MCBRBAAAAF3RSTlMA8qt/QttXOCQMAennw7+ZjYNtLBf2kCIzlTUAAAEGSURBVDjLjJFbbsMwDAQpUpIl+R07mfvftEBdFE7ih+ZzMSB2QfmgNLMOwbkw6NwUucKPHTu60Z+qTQ+EKfqUc/JxCkDfHKpJobVlHy3WgqaDBg5n+TPN5nBfXR6gqxywKjzeoxfYyfZi8Hq/+4xySnzub3uIckGE/97JYXKJ4ZJsKFqu5aLo3y9wq9ywOrbv9JjcYvTbujbfy7n93ThiUoExipSOpUZe6Io0BKki0MjMVCdPzKLEOjmiMuDrZM8ggVQnJ4I4cp2ccT+V1TkBAAAIxDD/rqMhOwPP0VZxtVED1urqKHXuCtJEtMI/b1UPOygoyAy+BoyD3IH5aGIE1Gp7aZaOAVpkFMUoYaaBAAAAAElFTkSuQmCC");   background-size:cover;}.shenfenPop-page .pop-list ul li.active .pop-arrow{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAPFBMVEUAAAD/VS7/VjH/VzL/VS7/Vi//VS7/VS//VS//VS7/VS7/Vi//Vy//WjX/VS7/VS7/Yz//4tv/////m4Tfv1CvAAAAD3RSTlMA8UQ459nDv62lmYNtIpDE1s/TAAAA6klEQVQ4y53VS5KDMAwEUPmP7ZAmk/vfdRaZcoKITDO95ZWqjGVJdEKvJTmXSu1BpvEt4iOxeZOGjEPy9/Lrgq9Z1qP1Dkac1/aGSW57e8c0d7auru1xGj/+gzvHbv3DC4gsLxtA5XU7mcP5/HTbc3fGNrWPn6GbiMS5fWyjB0UCa4EgnbboUmmLKoW2KJJoiySOtnAf+Llpe8Bp2PHZsEhSFLAtilQobVpU6VDatOgSoPTO6o6OSps2jhZ9a8uijeZ/a2XVA897bdl8/cHyo4AfMtfHFz8Y+ZHLD/Ora4JfQPxq+//S5NfxLzPrWEC1LMpOAAAAAElFTkSuQmCC");}.shenfenPop-page.beforeActive{display:block;   background:transparent;}.shenfenPop-page.beforeActive .pop-wrap{transform:translateY(100%);}.shenfenPop-page.active{background:rgba(0, 0, 0, 0.7);}.shenfenPop-page.active .pop-wrap{transform:translateY(0);}');
    /**
 * Created by ghy on 2017/9/18.
 */
var SFPOPRP = (function () {
    var uvmap = {}
    var typeMap = {
        _SHOW_PAGE: "sfchange_show",
        _CLICK_GRFD: "sfchangeclick_gerenfangdong",
        _CLICK_GRZZ: "sfchangeclick_gerenzhuanzu",
        _CLICK_ZYFD: "sfchangeclick_zhiyefangdong",
        _CLICK_JJR: "sfchangeclick_jingjiren",
        _CLICK_CANCEL: "sfchange_cancel",
        _CLICK_SURE: "sfchange_sure"
    }
    var sfpoprp = {
        rp: function (type) {
            var typestr;
            if (type == "683037") {
                typestr = typeMap._CLICK_GRFD
            }
            else if (type == "683038") {
                typestr = typeMap._CLICK_GRZZ
            }
            else if (type == "683039") {
                typestr = typeMap._CLICK_JJR
            } else if (type == "4") {
                typestr = typeMap._CLICK_ZYFD;
            }
            else if (type == "show") {
                typestr = typeMap._SHOW_PAGE
            }
            else if (type == "cancel") {
                typestr = typeMap._CLICK_CANCEL
            } else if (type == "sure") {
                typestr = typeMap._CLICK_SURE
            }
            if (typestr != null) {
                this._report(typestr)
            }
        },
        _report: function (actype) {
            if (window.WBAPP && !uvmap[actype]) {
                WBAPP.invoke('weblog', {
                    page_type: 'sfchange', // 页面类型
                    action_type: actype, // 操作类型
                    cate: "1,8",
                    params: ["8", '']
                });
            }
            uvmap[actype] = true;
        }
    }
    return sfpoprp;
})();;
    var call_list = [];

    var chose_call = function () {
    };
    var SFPOP = {
        chose_id: null,
        init_id: null,// 初始化身份1
        chose_name: null,
        jjrchose: 0,
        init: function (data) {
            data = data || {};
            var optionlist = data["option"] || []
            this.layout(optionlist);

            this._initEvent();
        },

        layout: function (list) {
            var _this = this;
            $(".shenfenchange-page").on("touchmove", function (e) {
                e.preventDefault();
            });
            //
            list = list || [];
            for (var i = 0; i < list.length; i++) {
                var option = list[i]
                var item = $(TPL.getTpl("shenfenitem") || ""); // 获取字符串
                var desc = _this.getDesc(option["text"])

                $(item).attr("shenfenchose-id", option["value"]);
                $(item).find(".pop-info").html(option["text"]);
                $(item).find(".pop-desc").html(desc);

                $(".pop-list ul").append($(item));
            }


        },
        _initEvent: function () {
            var _this = this;
            $("#pop-sure").on("click", function () {
                var type = _this.chose_id;
                var name = _this.chose_name;
                var ret = 2;
                if (_this.chose_id != this.init_id) {
                    ret = 0;
                }
                SFPOPRP.rp("sure");
                _this.close(ret, type);
            })
            $("#pop-cancel").on("click", function () {
                SFPOPRP.rp("cancel");
                _this.close(2);
            })
            $(".pop-list li").on("click", function () {
                var _id = $(this).attr("shenfenchose-id");
                _this.chose_id = _id;
                _this.chose_name = $(this).find(".pop-info").html();
                $(".pop-list li").removeClass("active");
                $(this).addClass("active");
                SFPOPRP.rp(_id);
                chose_call(_id);
            })
            $(".pop-wrap", ".shenfenchange-page").on("click", function (e) {
                e.stopPropagation();
            })
            $(".shenfenchange-page").on("click", function () {
                _this.close(2);
            })
        },
        show: function () {
            SFPOPRP.rp("show");
            $(".shenfenchange-page").addClass("beforeActive");
            setTimeout(function () {
                $(".shenfenchange-page").addClass("active");
            }, 10)

            // $(".shenfenchange-page").show();
        },
        changeSF: function () {

        },
        /*
         * @param ret
         * 0： 成功
         * 1：失败
         * 2：取消
         * **/
        close: function (ret, _id) {

            $(".shenfenchange-page").removeClass("active");
            setTimeout(function () {
                $(".shenfenchange-page").removeClass("beforeActive");
            }, 600)

            this.init_id = null;
            this.chose_id = null;
            for (var i = 0; i < call_list.length; i++) {
                var fun = call_list[i];
                if (typeof fun == "function") {
                    fun(ret, _id)
                }
            }
            call_list = [];
        },
        getDesc: function (name) {
            var desc = "";
            if (/房东/gi.test(name)) {
                if (/职业/.test(name)) {
                    desc = "公寓经营者/多房源管理者"
                } else {
                    desc = "房屋所有者，具备认证房本资质"
                }
            } else if (/经纪人/gi.test(name)) {
                desc = "房产中介，拥有专业的展示空间";
            } else if (/转租/.test(name)) {
                desc = "转让自己承租的房子";
            }
            return desc;
        }

    }


    var API = {
        init: function (data) {
            // var data = {
            //     "paramname": "HouseUserType",
            //     "title": "房产用户类型",
            //     "option": [{ "text": "房东", "value": "683037" }, { "text": "转租", "value": "683038" }, {
            //         "text": "经纪人",
            //         "value": "683039"
            //     }]
            // }
            SFPOP.init(data);
        },
        action: function (sfid) {
            SFPOP.chose_id = sfid;
            SFPOP.init_id = sfid;
            $(".pop-list li").removeClass("active");
            $(".pop-list li[shenfenchose-id='" + sfid + "']").addClass("active");
            SFPOP.show();
        },
        registCall: function (fun) {
            if (typeof fun == "function") {
                call_list.push(fun);
            }
        },
        // 点击一次回调一次
        choseCall: function (fun) {
            if (typeof fun == "function") {
                chose_call = fun;
            }
        }
    }
    FANG_POPAPI.SF_CHANGE = API
})(FANG_POPAPI)
;
module.exports = FANG_POPAPI;
