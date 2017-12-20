window.LOU_CHOOSE = /**
 * Created by ghy on 2017/12/16.
 */
(function () {
    
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
    TPL.tplmap['louhao'] = '<div class="lou-select-wrap"><div class="louselect-item page-louhao" ptype="louhao"><div class="ipt-wrap"><div class="ipt-panel"><div class="icon-search"></div><input type="text" placeholder="请输入楼号" id="louhao-ipt" class="lou-ipt"><div class="btn btn-sure disable" id="sure-louhao">确定</div></div></div><div class="list-title-wrap"><div class="list-title">请选择楼号</div></div><div class="list-wrap louhao-list"><div class="sc_body" id="louhao_sc"><ul></ul><div class="list-footer"><span class="jump-btn" ptype="louhao">没有楼号，直接跳过></span></div></div></div></div><div class="louselect-item page-danyuanhao" ptype="danyuanhao"><div class="ipt-wrap"><div class="ipt-panel"><div class="icon-search"></div><input type="text" placeholder="请输入单元号" id="danyuanhao-ipt" class="lou-ipt"><div class="btn btn-sure disable" id="sure-danyuanhao">确定</div></div></div><div class="list-title-wrap"><div class="list-title">请选择单元号</div></div><div class="list-wrap danyuanhao-list"><div class="sc_body" id="danyuanhao_sc"><ul></ul><div class="list-footer"><span class="jump-btn" ptype="danyuanhao">没有单元号，直接跳过></span></div></div></div></div><div class="louselect-item page-menpaihao" ptype="menpaihao"><div class="ipt-wrap"><div class="ipt-panel"><div class="icon-search"></div><input type="text" placeholder="请输入门牌号" id="menpaihao-ipt" class="lou-ipt"><div class="btn btn-sure disable" id="sure-menpaihao">确定</div></div></div><div class="list-title-wrap"><div class="list-title">请选择门牌号</div></div><div class="list-wrap menpaihao-list"><div class="sc_body" id="menpaihao_sc"><ul></ul><div class="list-footer"><span class="jump-btn" ptype="menpaihao">没有门牌号，直接跳过></span></div></div></div></div></div>'
})(TPL);
   
//begin insert static dom
TPL.addNode(TPL.getTpl('louhao'));
(function (TPL) {
    TPL.tplmap['liitem'] = '<li></li>'
})(TPL);
   
//begin insert style
TPL.addStyle('.lou-select-wrap{width:100%;   height:100%;   position:fixed;   z-index:1000;   background:#f6f6f6;   top:0;   left:0;   display:none;   transition:all 0.4s ease;   transform:translateY(50px);}.lou-select-wrap.beforeActive{opacity:0;   display:block;}.lou-select-wrap.active{opacity:1;   transform:translateY(0);}.lou-select-wrap .louselect-item{width:100%;   height:100%;   position:absolute;   display:none;   background:#f6f6f6;}.lou-select-wrap .louselect-item .ipt-wrap{position:relative;   top:0px;   height:1.46667rem;   width:100%;   background:#fff;}.lou-select-wrap .louselect-item .ipt-wrap .ipt-panel{height:0.74667rem;   position:absolute;   left:0.46667rem;   right:0.46667rem;   margin:0 auto;   top:0.36rem;}.lou-select-wrap .louselect-item .ipt-wrap .icon-search{width:0.4rem;   height:0.4rem;   position:absolute;   background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAATlBMVEUAAACZmZmqqqqZmZmbm5uampqampqbm5uYmJiZmZmampqcnJyampqampqZmZmZmZmZmZmenp6bm5ubm5uZmZmbm5ucnJyampqYmJiXl5ddw4MbAAAAGXRSTlMA7Az44WXbx7WWVksmFPLOgjIgQJSyPeiBRu16RQAAAMRJREFUKM+Fk0kOwyAMRQ2GkBHI2P77X7QobSlKKLwFmyfZxgNFZm8UszJ+pju9QkT1F7k4QHTDKOU4dAJwS2pXC6EpogXsmlhGKylBtuDoF4uNLmyw3/gOLd1o4T41Q8i7lgLv+hU0ZdBQZzcgKIvAHF6PLq87+PAaDHk9wJypx7wez+QMmdcSXNGV4JXSyh97VtpSbmplJOWBVtahsEyMvrSKjGb6v8jmaILPnAEDaDTR9PPpET2MPyiQ+DzB71Tyu6YXfcYOFcgEh08AAAAASUVORK5CYII=");   top:0.17333rem;   left:0px;   background-size:cover;}.lou-select-wrap .louselect-item .ipt-wrap .lou-ipt{position:absolute;   height:0.48rem;   width:5.65333rem;   left:0.53333rem;   top:0px;   box-sizing:border-box;   outline:none;   border:none;   font-size:0.37333rem;   padding:0.13333rem 0px;   box-sizing:content-box;}.lou-select-wrap .louselect-item .ipt-wrap .lou-ipt::-webkit-input-placeholder{position:absolute;   display:inline-block;   height:0.74667rem;   line-height:0.48rem;   font-size:0.37333rem;   vertical-align:top;   top:0px;   bottom:0;}.lou-select-wrap .louselect-item .ipt-wrap .lou-ipt::-moz-placeholder{position:absolute;   display:inline-block;   height:0.74667rem;   line-height:0.48rem;   font-size:0.37333rem;   vertical-align:top;   top:0px;   bottom:0;}.lou-select-wrap .louselect-item .ipt-wrap .lou-ipt:-ms-input-placeholder{position:absolute;   display:inline-block;   height:0.74667rem;   line-height:0.48rem;   font-size:0.37333rem;   vertical-align:top;   top:0px;   bottom:0;}.lou-select-wrap .louselect-item .ipt-wrap .btn-sure{position:absolute;   right:0px;   width:1.73333rem;   height:0.74667rem;   text-align:center;   line-height:0.77333rem;   font-size:0.34667rem;   border-radius:0.02667rem;   color:#fff;   background:#ff552e;}.lou-select-wrap .louselect-item .ipt-wrap .btn-sure.disable{background:#ffaa96;}.lou-select-wrap .louselect-item .list-title-wrap{position:relative;   height:1.33333rem;   border-bottom:1px solid #dddddd;   margin:0px 0.4rem;}.lou-select-wrap .louselect-item .list-title-wrap .list-title{position:absolute;   font-size:0.34667rem;   color:#999999;   line-height:0.56rem;   bottom:0.21333rem;}.lou-select-wrap .louselect-item .list-wrap{position:absolute;   width:100%;   top:2.66667rem;   bottom:0px;   overflow:auto;}.lou-select-wrap .louselect-item .list-wrap ul{margin:0px;   padding:0px;   width:100%;   background:#fff;}.lou-select-wrap .louselect-item .list-wrap ul li{width:100%;   height:1.33333rem;   line-height:1.33333rem;   text-indent:0.42667rem;   color:#000;   font-size:0.37333rem;   border-top:1px solid #f6f6f6;}.lou-select-wrap .louselect-item .list-wrap ul li:active{background:#f6f6f6;}.lou-select-wrap .louselect-item .list-wrap ul li:first-child{border:none;}.lou-select-wrap .louselect-item .list-wrap .list-footer{width:100%;   height:1.46667rem;   line-height:1.46667rem;   text-align:center;   color:#999999;}.lou-select-wrap .louselect-item .list-wrap .list-footer .jump-btn{font-size:0.16rem;}.lou-select-wrap .louselect-item{transform:translateX(100%);   transition:all 0.6s ease;}.lou-select-wrap .louselect-item.page-louhao{transform:translateX(0);}.lou-select-wrap .louselect-item.beforeActive{display:block;}.lou-select-wrap .louselect-item.active{display:block;   transform:translateX(0);}');
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
        // apiurl: "https://housepostbaseapi.58.com/wuyedizhi/tip",
        apiurl: "/mock/lou_choose.json",
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
                // dataType: "jsonp",
                dataType: "json",
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
    /**
 * Created by ghy on 2017/12/19.
 */

function sccheck (el) {
    var sc_stop = true;
    var time_out = null;
    el.addEventListener ('touchstart', function (event) {
        if (sc_stop) {
            sc_stop = false;
            trick ();
        }
    }, false)

    el.addEventListener ('touchend', function (event) {
        clearTimeout (time_out);
        time_out = setTimeout (function () {
            sc_stop = true;
        }, 1000)
    }, false)

    function trick () {
    console.log(el.scrollTop)
        if (!sc_stop) {
            requestAnimationFrame (trick);
        }
    }


};
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
                    console.log (this.scrollTop, l_h, s_h)
                    if (l_h - s_h - this.scrollTop < 100) {
                        if (!_this.is_inload && _this.page_next) {
                            clearTimeout (time_lock);
                            time_lock = setTimeout (function () {
                                _this.getData (type, loudata.cpageNum[type]++);
                            }, 16)
                        }
                    }
                }
            }
            scregist ("louhao")
            scregist ("danyuanhao")
            scregist ("menpaihao")
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
}) ();
