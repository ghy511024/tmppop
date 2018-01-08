/**
 * Created by ghy on 2017/12/21.
 */
window.ZHIBOTIP = /**
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
    TPL.tplmap['zhibotip'] = '<div class="zhibo-tip-wrap"><div class="zhibo-tip-panel"><div class="zhibo-tip-title"><h3>58直播看房</h3><p>一次直播，多人同事看房，出租就是快</p></div><div class="zhibo-tip-body"><div class="item"><div class="pic pic1"></div><div class="tip">开启直播看房功能</div></div><div class="item"><div class="pic pic2"></div><div class="tip">等待租客预约</div></div><div class="item"><div class="pic pic3"></div><div class="tip">到“房东中心”去直播</div></div></div><div class="line"></div><div class="zhibo-more">了解更多</div></div><div class="zhibo-close"></div></div>'
})(TPL);
   
//begin insert static dom
TPL.addNode(TPL.getTpl('zhibotip'));
//begin insert style
TPL.addStyle('@charset "UTF-8"; /* To change this license header, choose License Headers in Project Properties. To change this template file, choose Tools | Templates and open the template in the editor. */ /*      Created on:2017-8-31, 23:11:17     Author:ghy */ /**  * @param $line       超出显示省略号的行数，默认：1  * @param $substract  为预留区域百分比%，默认：0  */ /* To change this license header, choose License Headers in Project Properties. To change this template file, choose Tools | Templates and open the template in the editor. */ /*      Created on:2017-8-31, 23:12:32     Author:ghy */ /* @author 龚虹宇 */ /** -------------------------------------------     Generic Mixins     ------------------------------------------- **/ /**  * Adds prefixed version of values in a property  */ .zhibo-tip-wrap{width:100%;   height:100%;   position:fixed;   top:0;   background-color:rgba(0, 0, 0, 0.6);}.zhibo-tip-wrap .zhibo-tip-panel{width:7.2rem;   height:9.86667rem;   position:absolute;   left:0px;   right:0px;   top:50%;   margin:0 auto;   margin-top:-5.6rem;   background-color:#fff;}.zhibo-tip-wrap .zhibo-tip-title{width:100%;   height:2.50667rem;   background:#4c97ef;}.zhibo-tip-wrap .zhibo-tip-title h3{color:#fff;   font-size:0.58667rem;   position:absolute;   left:0.8rem;   top:0.66667rem;}.zhibo-tip-wrap .zhibo-tip-title p{color:rgba(255, 255, 255, 0.85);   font-size:0.32rem;   position:absolute;   left:0.8rem;   top:1.52rem;}.zhibo-tip-wrap .zhibo-tip-body{width:100%;   height:6.16rem;}.zhibo-tip-wrap .zhibo-tip-body .item{height:1.70667rem;   margin:0px 0px 0px 0.8rem;   position:relative;}.zhibo-tip-wrap .zhibo-tip-body .item:nth-child(1){margin-top:0.90667rem;}.zhibo-tip-wrap .zhibo-tip-body .item .pic{position:absolute;   width:45px;   height:35px;   background-size:cover;}.zhibo-tip-wrap .zhibo-tip-body .item .pic.pic1{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABGCAMAAAB7YnPQAAABBVBMVEUAAACrr60xg+Q+iN6rr62qr62ttK2ttq2prqurr62pr6yqsKyqrq7///9Tl+b+/v74+Pg9iN719fX09PTy9PLy8vLt7u3o6OjU1tTLzMy1ubezt7WqrqyqsK2ssKy0tLRGj+I6h+A3huAzheMxg+RWmehAid4zheX39/c0hOIxhORilc3Z2tnX2dcxhOUyg+Qyg+QxhOSqsa4yheQ1helAoPBZm+lQleVPlOUxhOQxhOQyhOQxg+QzhOQzheQyheYyheO50u9Hi9lUkNO3xtgyg+R1m8WOpbieqbGPprszg+L///9anOlfn+rP4vl8sO3y9/7i7vy61faNuvDp8fypy/Nxqu0b1u5TAAAAS3RSTlMAf8zleGEiHHRtU01C/Pn46+Ph3t7c0MennIeHflc3Ee3e2dHG+ucr6tK7ta2tkH5nYEg7GQX99fOypZiIcUsyI+nWxbKtpJCGcFCyCF3fAAACYklEQVRYw+yUyw6CQAxFnWQG5BUILxVfWxe68Tcq8v9/I8XEDBWGysQdZ92cNO1tVwsLC/a4oa88KRhIT/mhy/U6wVr8yDpwOA0rMQs11fr5KGZzPBtnIfmm6lZmSRwnWXmrRIc0TOV0YIu3eQQfonwrkMNpzHxni3cpENKdQO4jPbPNGxhgI5DBvh3uNPYFDFLscSbOQDYk13yBES7olt85YaeugFGKLoPU7FrMmcyb3o7iZgOMYE4U2aFgkoKRFGv6mwy4lwIT4O0EPTX31+UwQY5/cM4Sq4iYnk3dPEEjqsgiQ6b6Ss0PpOe+tmWhpvaZ6pKom07dgEbZlvkzopcRdd2pa9DISPw8pjoh6scb0EjaMk9TS6Y6nlbH+Ef+qP7jQCzWSNV0jRbho2oaPouTMahf7ddZboMwFIVh6/odyTtgRgQ1BBGSZk7nQUEiSdv9L6U4autig19OH/sv4BOysH19JbcMutEVbWx09HhStH48wYeqoo9vTaMdqvBVcPhVXX+c32+e1FWAXWAHPZffZi/AtTtMX/O2YFWiw4JJO1L2iKjARhyTjuJWFgG1JeBg1py63yxlnpIsh8bJ47k215n7dGmMDMGnLuy4SpY0MLrfRyasZMqBB0fGY3fuRLNZ5MzdmF8SKX23AZ5Jd9zIC+inAnjcZX2wags8SR87rvBT6lQCD+ln8YUKz/MD0ksY0IpsTRG6sNIVQic2OWRQIwu9xOjcQq8xemehJwxrMUxvQXpi+/ewpuGQ/ICw9s/ewHS1HKBLBrfvX5JFxfBe++xwx/6iZKxvytF6z/7r7RPHEEMWDkMW6gAAAABJRU5ErkJggg==");}.zhibo-tip-wrap .zhibo-tip-body .item .pic.pic2{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABGCAMAAAB7YnPQAAAAllBMVEUAAACrr60xg+Qyg+Mxg+Sqrqyqr60xhOQxheRJktsyhOMyhOSpraszhOSqr681heSsrKyzs7NLkOHU19ZJj+E8ieLT1tXS1tUxhOPLzs7////V19ZanOlRlODZ29rz8/OmyvNqpuz7/P3P4vmEte9zq+xioerZ6Pqz0fVYmOTJ3/jr7exZm+iUtduSvvB9q9ypwdm2x9hpcSpgAAAAGnRSTlMAf8xtv3JhtUMHrpl6XzMwJQ3z8vDcw7aHU6aINU0AAAF4SURBVFjD7dXZcoIwFIDhLKyKe7VKAAHBpa1d3v/lypSxVJQD5OSi0+a/zcw3mRMPEp1OsqlJqTkFz2QzaZEJnslGv4LO/gM9tjzaO88at8Izi0pmzVroQpa2W6ZBEY0Rl0Zd28PQHkhTVJruQwtUf5P2JdO0plXR20gARVsEXcig/TvprgM5xFm+3+dZ/KH2GdNjElwKT2dXHf1UwBUdhrajio5Ls6IZ42ro1+CWZmv5Z4y2d+68233TjMv/+KLLnIMq369o5mDpNGmibRc5kGPQRLMR8hmTZtrA0YegmWYTFB1DNEfRGUQPUXQO0QMUvS9XxS+r0YZKeqeQzoNa6gaSATTyGWOI5siVqdW+Mgsh0j6LXvXStugrIZ470cc6fQrDOfh52ojC7nLvNLm+cyGHS/CjSh5Fx97Deg8M/Csgs872+b7MSXOb1aKb/fYTni9LeU2UxNlNnCjKsa9h2yHKckdGBRsjlyhtwocDwxgM+YTodH37BNY6BAmvgSeUAAAAAElFTkSuQmCC");}.zhibo-tip-wrap .zhibo-tip-body .item .pic.pic3{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABGCAMAAAB7YnPQAAAAnFBMVEUAAACrr60xg+Tn5/+praursK2prqyqr6/CxcP+/v79/f3y8vLo6egxg+WxsbHp6+nd3t0yg+QxhOQxhOSzt7Wtsa8yheX7+/v4+Pj39/cyg+MxhOTf4N/R1NLO0dC9wL6xs7ExhOMyhOQxheQxhOQzheU0heM0guUzhuY9kvNAv//19vXr6+vl5ubZ29m2uri2urgzhOUyhOb////C5WLpAAAAM3RSTlMAf8wBemRfM5P79trGiw3JtK6imoeBLfHr6cK5t6WijoOBdV1FOSQdFAoE4svBr4mIalHDzk8EAAABLUlEQVRYw+3XW27CMBCF4XqSEKCEQCihlBYopaXcL97/3jB58Vs8Y+lIgPwv4FM0Ao3nJRQKhe69KE1iJSlO0ogldxtKXqPL+WYj+9iM706VX6mbTjzpxE3HnnTsppVvT0IvB0UJof8GRNQH0OsFVbno2S5viujoMiEevdVa50c+XRZETFrfan8OefT/N5GINr1/MejNzweJadNr00X/9olEtC0/1dIZkS9djbyGJk/ajhxA25GDaFNnCKN1D0fvYfRoBqJbnTcFoasfCIQeT0F/mXZPKQRdDbmWXohpO+Sa7EYU0+MpaxUsJxJ6ZIfM2DLrs4A+tMyQBWt3lbFpNZ/LHgt22QDeIWZFQmi72AsEbSqzbAWgAU93zMEBPJOAxx3uJAUe0qFQKPR4XQGV0UOlUcvZ8gAAAABJRU5ErkJggg==");}.zhibo-tip-wrap .zhibo-tip-body .item .tip{font-size:0.42667rem;   color:#333536;   position:absolute;   left:1.41333rem;   top:0.16rem;}.zhibo-tip-wrap .line{width:257px;   height:1px;   background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgMAAAACAQMAAAD/1k2YAAAABlBMVEUAAADW7OPnq/9vAAAAAnRSTlMAgJsrThgAAAAcSURBVAjXY/jB+IH5AfsB/gZ5BjuGGjK4lJsAAMcBLXGRZaK6AAAAAElFTkSuQmCC");   background-size:cover;   position:absolute;   left:50%;   -webkit-transform:translate3d(-50%, 0, 0);   transform:translate3d(-50%, 0, 0);   bottom:1.2rem;}');
    var ZB = {
        init: function () {

        },
        _initEvent: function () {
        }
    }
}) ();


