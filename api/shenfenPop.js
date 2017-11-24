/**
 * Created by ghy on 2017/10/19.
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
    TPL.tplmap['shenfenPop'] = '<div class="shenfenPop-page"><div class="pop-wrap"><div class="pop-title">选择您的身份<div class="pop-sure" id="pop-sure">确定</div><div class="pop-cancel" id="pop-cancel">取消</div></div><div class="pop-list"><ul></ul></div></div></div>'
})(TPL);
   
//begin insert static dom
TPL.addNode(TPL.getTpl('shenfenPop'));
(function (TPL) {
    TPL.tplmap['shenfenitem'] = '<li shenfen-id=""><div class="pop-info"></div><div class="pop-desc"></div><div class="pop-arrow"></div></li>'
})(TPL);
   
//begin insert style
TPL.addStyle('     @import "../css/shenfenPop/shenfenPop"; ');
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
        $(".shenfenPop-page").on("touchmove", function (e) {
            e.preventDefault();
        });
        //
        list = list || [];
        for (var i = 0; i < list.length; i++) {
            var option = list[i]
            var item = $(TPL.getTpl("shenfenitem") || ""); // 获取字符串
            var desc = _this.getDesc(option["text"])

            $(item).attr("shenfen-id", option["value"]);
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
            var _id = $(this).attr("shenfen-id");
            _this.chose_id = _id;
            _this.chose_name = $(this).find(".pop-info").html();
            $(".pop-list li").removeClass("active");
            $(this).addClass("active");
            SFPOPRP.rp(_id);
            chose_call(_id);
        })
        $(".pop-wrap", ".shenfenPop-page").on("click", function (e) {
            e.stopPropagation();
        })
        $(".shenfenPop-page").on("click", function () {
            _this.close(2);
        })
    },
    show: function () {
        SFPOPRP.rp("show");
        $(".shenfenPop-page").addClass("beforeActive");
        setTimeout(function () {
            $(".shenfenPop-page").addClass("active");
        }, 10)

        // $(".shenfenPop-page").show();
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

        $(".shenfenPop-page").removeClass("active");
        setTimeout(function () {
            $(".shenfenPop-page").removeClass("beforeActive");
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


var SFPOP_API = {
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
        $(".pop-list li[shenfen-id='" + sfid + "']").addClass("active");
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
module.exports = SFPOP_API;