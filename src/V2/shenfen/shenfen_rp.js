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
})();
module.exports = SFRP;