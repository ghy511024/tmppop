/**
 * Created by ghy on 2017/12/21.
 */
window.LIVETIP = /**
 * Created by ghy on 2017/12/21.
 *直播看房提示弹窗
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
    TPL.tplmap['livetip'] = '<div class="live-tip-wrap"><div class="live-tip-panel"><div class="live-tip-title"><h3>58直播看房</h3><p>一次直播，多人同事看房，出租就是快</p></div><div class="live-tip-body"><div class="item"><div class="tip">开启直播看房功能</div></div><div class="item"><div class="tip">等待租客提交看房预约</div></div><div class="item"><div class="tip">您可在房东中心随时开始直播租客可线上看房</div></div></div><div class="live-close"></div></div></div>'
})(TPL);
   
//begin insert static dom
TPL.addNode(TPL.getTpl('livetip'));
//begin insert style
TPL.addStyle('body{background:#ccc;}');
}) ();


