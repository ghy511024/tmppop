/**
 * Created by ghy on 2017/10/17.
 */

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
var SF = {
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
        SF.init(cateid, cityid, data);
    },
    showPage: function () {
        SF.show();
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

module.exports = API;