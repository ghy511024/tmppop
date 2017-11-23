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
}) ();