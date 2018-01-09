/**
 * Created by ghy on 2017/12/21.
 *直播看房提示弹窗
 */
(function () {
    __inline ('zhibotip.tpl');
    var ZB = {
        init: function () {
            this._initEvent ();
        },
        _initEvent: function () {
            var btn = document.getElementById ("zhibo-close");
            var panel = document.getElementById ("zhibo-tip-wrap");
            var moreBtn = document.getElementById ("zhibo-more");
            var _this = this;
            btn.addEventListener ("click", function () {
                API.close ();
            });
            // 阻止滚动事件冒泡
            panel.addEventListener ("touchmove", function (e) {
                e.preventDefault ();
            })
            // 了解更多
            moreBtn.addEventListener ("click", function () {
                var url = location.protocol + "//pwebapp.58.com/fang/zhibo?pagetype=fangdong";
                WBAPP.invoke ("pagetrans", {
                    tradeline: 'core',
                    action: 'pagetrans',
                    content: {
                        pagetype: 'common',
                        url: url,
                        title: "直播看房",
                        isfinish: 'false'
                    },
                })
            })

        },

        addClass: function (el, newClass) {
            var cla = el.getAttribute ("class") || "";
            var reg = new RegExp ("(^|\\s+)(" + newClass + ")($|\\s+)", "gi")
            var b = reg.test (cla);
            if (!b) {
                el.setAttribute ("class", cla + " " + newClass);
            }
        }, removeClass: function (el, cla) {
            var odcla = el.getAttribute ("class") || "";
            var reg = new RegExp ("(^|\\s+)(" + cla + ")($|\\s+)", "gi")
            cla = odcla.replace (reg, function (_, $1, _$2, $3) {
                var ret = ""
                ret += typeof $1 == "string" ? $1 : "";
                ret += !!$3 ? $3 : "";
                return ret
            })
            el.setAttribute ("class", cla);
        }
    };
    var API = {
        open: function () {
            var panel = document.getElementById ("zhibo-tip-wrap");
            ZB.addClass (panel, "beforeActive");
            setTimeout (function () {
                ZB.addClass (panel, "open");
            }, 20)
        },
        close: function () {
            var panel = document.getElementById ("zhibo-tip-wrap");
            ZB.removeClass (panel, "open");
            setTimeout (function () {
                ZB.removeClass (panel, "beforeActive");
            }, 400)
        }
    }
    ZB.init ();
    return API;
}) ();
