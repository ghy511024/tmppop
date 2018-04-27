/**
 * Created by ghy on 2018/3/21.
 */
var Tool = {
    addClass: function (el, newClass) {
        var cla = el.getAttribute("class") || "";
        var reg = new RegExp("(^|\\s+)(" + newClass + ")($|\\s+)", "gi")
        var b = reg.test(cla);
        if (!b) {
            el.setAttribute("class", cla + " " + newClass);
        }
    }, removeClass: function (el, cla) {
        var odcla = el.getAttribute("class") || "";
        var reg = new RegExp("(^|\\s+)(" + cla + ")($|\\s+)", "gi")
        cla = odcla.replace(reg, function (_, $1, _$2, $3) {
            var ret = ""
            ret += typeof $1 == "string" ? $1 : "";
            ret += !!$3 ? $3 : "";
            return ret
        })
        el.setAttribute("class", cla);
    },
    hasClass: function (el, cla) {
        var claname = el.className;
        var reg = new RegExp("(^|\\s+)(" + cla + ")($|\\s+)", "gi")
        return reg.test(claname);
    },
    css: function (el, key, value) {
        // var cla = el.getAttribute("style") || "";
        var style = el.style.cssText;
        var reg = new RegExp("(^\\s*|;\\s*)(" + key + ")\\s*(:.*?)(;|!)", "gi")
        var b = reg.test(style);
        if (!b) {
            style += ";" + key + ":" + value;
            el.style.cssText = style;
        } else {
            var t = style.replace(reg, function (_, $1, $2, $3) {
                return $1 + $2 + ":" + value + ";";
            })
            el.style.cssText = t;
            // console.log(t);
        }
    },
    removecss: function (el, key) {
        // var cla = el.getAttribute("style") || "";
        var style = el.style.cssText;
        var reg = new RegExp("(^\\s*|;\\s*)(" + key + ")\\s*(:.*?)(;|!)", "gi")
        var b = reg.test(style);
        if (!b) {
            // style += ";" + key + ":" + value;
            el.style.cssText = style;
        } else {
            var t = style.replace(reg, function (_, $1, $2, $3) {
                return $1 + ";";
            })
            el.style.cssText = t;
            // console.log(t);
        }
    }
}
export default Tool;
// var str = " background-color : blue; color: rgb(255, 255, 255);"
// Tool.css(str, "color", "sdf");