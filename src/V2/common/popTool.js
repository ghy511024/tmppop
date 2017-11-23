/**
 * Created by ghy on 2017/11/13.
 */

var Tool = {
    addNode: function (html_str) {
        var divTemp = document.createElement ("div"), nodes = null,
            fragment = document.createDocumentFragment ();
        divTemp.innerHTML = html_str;
        nodes = divTemp.childNodes;
        for (var i = 0, length = nodes.length; i < length; i += 1) {
            fragment.appendChild (nodes[i].cloneNode (true));
        }
        document.body.appendChild (fragment);
        nodes = null;
        fragment = null;
    },
    addStyle: function (style_str) {
        var styleNode = document.getElementById("jsptpl-style") || document.createElement("style");
        styleNode.setAttribute("type", "text/css");
        styleNode.setAttribute("id", "jsptpl-style");
        if (styleNode.styleSheet) {
            styleNode.styleSheet.cssText = style_str;
        } else {
            styleNode.appendChild(document.createTextNode(style_str));
        }
        document.getElementsByTagName("head")[0].appendChild(styleNode);
    }
}
module.exports = Tool;