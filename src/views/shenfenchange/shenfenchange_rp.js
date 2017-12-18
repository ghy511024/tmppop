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
})();