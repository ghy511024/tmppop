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
    TPL.tplmap['zhibotip'] = '<div class="zhibo-tip-wrap" id="zhibo-tip-wrap"><div class="zhibo-tip-panel"><div class="zhibo-tip-title"><h3>58直播看房</h3><p>一次直播，多人同时看房，出租就是快</p></div><div class="zhibo-tip-body"><div class="item"><div class="pic pic1"></div><div class="tip">开启直播看房功能</div><div class="arrow"></div></div><div class="item"><div class="pic pic2"></div><div class="tip">等待租客预约</div><div class="arrow"></div></div><div class="item"><div class="pic pic3"></div><div class="tip mt-zbkf" >到“租房-我的-直播看房”去直播</div></div></div><div class="line"></div><div class="zhibo-more" id="zhibo-more">了解更多</div></div><div class="zhibo-close" id="zhibo-close"></div></div>'
})(TPL);
   
//begin insert static dom
TPL.addNode(TPL.getTpl('zhibotip'));
//begin insert style
TPL.addStyle('@charset "UTF-8"; /* To change this license header, choose License Headers in Project Properties. To change this template file, choose Tools | Templates and open the template in the editor. */ /*      Created on:2017-8-31, 23:11:17     Author:ghy */ /**  * @param $line       超出显示省略号的行数，默认：1  * @param $substract  为预留区域百分比%，默认：0  */ /* To change this license header, choose License Headers in Project Properties. To change this template file, choose Tools | Templates and open the template in the editor. */ /*      Created on:2017-8-31, 23:12:32     Author:ghy */ /* @author 龚虹宇 */ /** -------------------------------------------     Generic Mixins     ------------------------------------------- **/ /**  * Adds prefixed version of values in a property  */ .zhibo-tip-wrap{width:100%;   height:100%;   position:fixed;   top:0;   background-color:rgba(0, 0, 0, 0.6);   display:none;   transition:all 0.4s;}.zhibo-tip-wrap.beforeActive{display:block;   opacity:0;}.zhibo-tip-wrap.open{opacity:1;}.zhibo-tip-wrap .zhibo-tip-panel{width:7.2rem;   height:9.86667rem;   position:absolute;   left:0px;   right:0px;   top:50%;   margin:0 auto;   margin-top:-5.6rem;   background-color:#fff;}.zhibo-tip-wrap .zhibo-tip-title{width:100%;   height:2.50667rem;   background:#4c97ef;}.zhibo-tip-wrap .zhibo-tip-title h3{color:#fff;   font-size:0.58667rem;   position:absolute;   left:0.8rem;   top:0.66667rem;}.zhibo-tip-wrap .zhibo-tip-title p{color:rgba(255, 255, 255, 0.85);   font-size:0.32rem;   position:absolute;   left:0.8rem;   top:1.52rem;}.zhibo-tip-wrap .zhibo-tip-body{width:100%;   height:6.16rem;}.zhibo-tip-wrap .zhibo-tip-body .item{height:1.70667rem;   margin:0px 0px 0px 0.8rem;   position:relative;}.zhibo-tip-wrap .zhibo-tip-body .item:nth-child(1){margin-top:0.90667rem;}.zhibo-tip-wrap .zhibo-tip-body .item .pic{position:absolute;   width:45px;   height:35px;   background-size:cover;}.zhibo-tip-wrap .zhibo-tip-body .item .pic.pic1{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABGCAMAAAB7YnPQAAABBVBMVEUAAACrr60xg+Q+iN6rr62qr62ttK2ttq2prqurr62pr6yqsKyqrq7///9Tl+b+/v74+Pg9iN719fX09PTy9PLy8vLt7u3o6OjU1tTLzMy1ubezt7WqrqyqsK2ssKy0tLRGj+I6h+A3huAzheMxg+RWmehAid4zheX39/c0hOIxhORilc3Z2tnX2dcxhOUyg+Qyg+QxhOSqsa4yheQ1helAoPBZm+lQleVPlOUxhOQxhOQyhOQxg+QzhOQzheQyheYyheO50u9Hi9lUkNO3xtgyg+R1m8WOpbieqbGPprszg+L///9anOlfn+rP4vl8sO3y9/7i7vy61faNuvDp8fypy/Nxqu0b1u5TAAAAS3RSTlMAf8zleGEiHHRtU01C/Pn46+Ph3t7c0MennIeHflc3Ee3e2dHG+ucr6tK7ta2tkH5nYEg7GQX99fOypZiIcUsyI+nWxbKtpJCGcFCyCF3fAAACYklEQVRYw+yUyw6CQAxFnWQG5BUILxVfWxe68Tcq8v9/I8XEDBWGysQdZ92cNO1tVwsLC/a4oa88KRhIT/mhy/U6wVr8yDpwOA0rMQs11fr5KGZzPBtnIfmm6lZmSRwnWXmrRIc0TOV0YIu3eQQfonwrkMNpzHxni3cpENKdQO4jPbPNGxhgI5DBvh3uNPYFDFLscSbOQDYk13yBES7olt85YaeugFGKLoPU7FrMmcyb3o7iZgOMYE4U2aFgkoKRFGv6mwy4lwIT4O0EPTX31+UwQY5/cM4Sq4iYnk3dPEEjqsgiQ6b6Ss0PpOe+tmWhpvaZ6pKom07dgEbZlvkzopcRdd2pa9DISPw8pjoh6scb0EjaMk9TS6Y6nlbH+Ef+qP7jQCzWSNV0jRbho2oaPouTMahf7ddZboMwFIVh6/odyTtgRgQ1BBGSZk7nQUEiSdv9L6U4autig19OH/sv4BOysH19JbcMutEVbWx09HhStH48wYeqoo9vTaMdqvBVcPhVXX+c32+e1FWAXWAHPZffZi/AtTtMX/O2YFWiw4JJO1L2iKjARhyTjuJWFgG1JeBg1py63yxlnpIsh8bJ47k215n7dGmMDMGnLuy4SpY0MLrfRyasZMqBB0fGY3fuRLNZ5MzdmF8SKX23AZ5Jd9zIC+inAnjcZX2wags8SR87rvBT6lQCD+ln8YUKz/MD0ksY0IpsTRG6sNIVQic2OWRQIwu9xOjcQq8xemehJwxrMUxvQXpi+/ewpuGQ/ICw9s/ewHS1HKBLBrfvX5JFxfBe++xwx/6iZKxvytF6z/7r7RPHEEMWDkMW6gAAAABJRU5ErkJggg==");}.zhibo-tip-wrap .zhibo-tip-body .item .pic.pic2{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABGCAMAAAB7YnPQAAAAllBMVEUAAACrr60xg+Qyg+Mxg+Sqrqyqr60xhOQxheRJktsyhOMyhOSpraszhOSqr681heSsrKyzs7NLkOHU19ZJj+E8ieLT1tXS1tUxhOPLzs7////V19ZanOlRlODZ29rz8/OmyvNqpuz7/P3P4vmEte9zq+xioerZ6Pqz0fVYmOTJ3/jr7exZm+iUtduSvvB9q9ypwdm2x9hpcSpgAAAAGnRSTlMAf8xtv3JhtUMHrpl6XzMwJQ3z8vDcw7aHU6aINU0AAAF4SURBVFjD7dXZcoIwFIDhLKyKe7VKAAHBpa1d3v/lypSxVJQD5OSi0+a/zcw3mRMPEp1OsqlJqTkFz2QzaZEJnslGv4LO/gM9tjzaO88at8Izi0pmzVroQpa2W6ZBEY0Rl0Zd28PQHkhTVJruQwtUf5P2JdO0plXR20gARVsEXcig/TvprgM5xFm+3+dZ/KH2GdNjElwKT2dXHf1UwBUdhrajio5Ls6IZ42ro1+CWZmv5Z4y2d+68233TjMv/+KLLnIMq369o5mDpNGmibRc5kGPQRLMR8hmTZtrA0YegmWYTFB1DNEfRGUQPUXQO0QMUvS9XxS+r0YZKeqeQzoNa6gaSATTyGWOI5siVqdW+Mgsh0j6LXvXStugrIZ470cc6fQrDOfh52ojC7nLvNLm+cyGHS/CjSh5Fx97Deg8M/Csgs872+b7MSXOb1aKb/fYTni9LeU2UxNlNnCjKsa9h2yHKckdGBRsjlyhtwocDwxgM+YTodH37BNY6BAmvgSeUAAAAAElFTkSuQmCC");}.zhibo-tip-wrap .zhibo-tip-body .item .pic.pic3{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABGCAMAAAB7YnPQAAAAnFBMVEUAAACrr60xg+Tn5/+praursK2prqyqr6/CxcP+/v79/f3y8vLo6egxg+WxsbHp6+nd3t0yg+QxhOQxhOSzt7Wtsa8yheX7+/v4+Pj39/cyg+MxhOTf4N/R1NLO0dC9wL6xs7ExhOMyhOQxheQxhOQzheU0heM0guUzhuY9kvNAv//19vXr6+vl5ubZ29m2uri2urgzhOUyhOb////C5WLpAAAAM3RSTlMAf8wBemRfM5P79trGiw3JtK6imoeBLfHr6cK5t6WijoOBdV1FOSQdFAoE4svBr4mIalHDzk8EAAABLUlEQVRYw+3XW27CMBCF4XqSEKCEQCihlBYopaXcL97/3jB58Vs8Y+lIgPwv4FM0Ao3nJRQKhe69KE1iJSlO0ogldxtKXqPL+WYj+9iM706VX6mbTjzpxE3HnnTsppVvT0IvB0UJof8GRNQH0OsFVbno2S5viujoMiEevdVa50c+XRZETFrfan8OefT/N5GINr1/MejNzweJadNr00X/9olEtC0/1dIZkS9djbyGJk/ajhxA25GDaFNnCKN1D0fvYfRoBqJbnTcFoasfCIQeT0F/mXZPKQRdDbmWXohpO+Sa7EYU0+MpaxUsJxJ6ZIfM2DLrs4A+tMyQBWt3lbFpNZ/LHgt22QDeIWZFQmi72AsEbSqzbAWgAU93zMEBPJOAxx3uJAUe0qFQKPR4XQGV0UOlUcvZ8gAAAABJRU5ErkJggg==");}.zhibo-tip-wrap .zhibo-tip-body .item .tip{font-size:0.42667rem;   color:#333536;   position:absolute;   left:1.41333rem;   top:0.16rem;}.zhibo-tip-wrap .zhibo-tip-body .item .tip.mt-zbkf{top:-0.16rem;   padding-right:0.26667rem;}.zhibo-tip-wrap .zhibo-tip-body .item .arrow{position:absolute;   width:9px;   height:20px;   top:1.06667rem;   left:0.42667rem;   background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAoCAYAAADzL6qcAAAAAXNSR0IArs4c6QAAAVBJREFUSA3tVjFLw1AQvu9MI9JNqm7uLv6XLoEaKgFHEXERBGcFHTor1pi0dnRxEF0EncTJIu4ujoJIEVrzzryMr8WXoSiFBG64d3cfl9z78h2R5QnDdjM8a51Y0sixJQjLsi1Hx61AAPfGAiSiymMBgkKXIJIHbMJyivHnuJDF+K2kLdg/YcTP2i3YX7D/T7VfXzhiKpVn3A3P8z5M0vym/VHUripgc8rBLgPkCslS72uwboJoX2v/KP2P44v5RGRHx5QIs+vyFohvmHA7CkhrP4SezFi9Xn1Pm7iE4v3A9+/M+P/7MFs46nQq0wN1TIL7IPAb2TDStcYt8V4/oYO04CpY9Ztm3dDP3wH0x18QyEocn798i8pWv34ihyKySMCcCaJ9Ng/XarU3CLZTe04SvOrxZ0b0kHZ5/VmZbZg1ufzTqPWozZY89GpmQd7V7wdXHKrT7GR+3AAAAABJRU5ErkJggg==");   background-size:cover;}.zhibo-tip-wrap .line{width:257px;   height:1px;   background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgMAAAACAQMAAAD/1k2YAAAABlBMVEUAAADW7OPnq/9vAAAAAnRSTlMAgJsrThgAAAAcSURBVAjXY/jB+IH5AfsB/gZ5BjuGGjK4lJsAAMcBLXGRZaK6AAAAAElFTkSuQmCC");   background-size:cover;   position:absolute;   left:50%;   -webkit-transform:translate3d(-50%, 0, 0);   transform:translate3d(-50%, 0, 0);   bottom:1.2rem;}.zhibo-tip-wrap .zhibo-more{position:absolute;   font-size:0.32rem;   color:#698ca7;   right:20px;   bottom:0.4rem;}.zhibo-tip-wrap .zhibo-more:after{content:"";   width:5px;   height:9px;   background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAASBAMAAAB/WzlGAAAAD1BMVEUAAABVhp5Se5pSe5pReplhAseqAAAABHRSTlMAFdRq4U2PXAAAACJJREFUCNdjYBZgAAETRTAl5ATmMqoQyYVSEEGCHIRFUGsBYcEFlVc52JMAAAAASUVORK5CYII=");   background-size:cover;   position:absolute;   right:-8px;   position:absolute;   top:50%;   -webkit-transform:translate3d(0, -50%, 0);   transform:translate3d(0, -50%, 0);}.zhibo-tip-wrap .zhibo-close{width:34px;   height:34px;   position:absolute;   left:50%;   -webkit-transform:translate3d(-50%, 0, 0);   transform:translate3d(-50%, 0, 0);   top:50%;   margin-top:4.8rem;   background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAAXNSR0IArs4c6QAAB7pJREFUeAHtnG1rFFccxU2MQVqiJjSIiTELCkbBvoiGUgh5k6bv2w/Q79OvkQ/Qvq/4RoRSon2h4ANU2BiNSIrxgRaJ0fT8Zu5ZZt2dODtP2Q09cObOzM7ce8+Z/32Ymd0dOlIT9vb2vlRRk+IpcTzwuNJj4qgIdsT34jtxO/CV0q2hoaF/lFaOoapKkAFHlfe0OCvOiGNiEbzVyRviuvhMBn0oklnauaUbIiO4+nOBvvKUz5XnanOl/w1kH8J2RTAiYiRR80UgkUVUsc8gkh5CGUMklYbSDJERNId5sZGoHVf1hfhSLBryGDMhnhaT0dbU9p8yZktpYRQ2JPQNi6pJI9SGK74pPheLmhCy7Egw54w4JRJRoCneKtrX5DZERgyrAlfEBZFKYQRt/KlIU6gDNKOz4ozoOqxp/Z6M+ai0Z+QyJETFikojfAHR8FisywjKTAJjzotEDaCZXs8TLT0bIjPOqbBlkQ6T4fG++FrsB5xUJS6LDOd0vDdkyhOlmdGTITLjknJeCrm/UXpXPKioCNXoSIiWr8UT4ZObMuVBx1EpOzIbIjOuKo9rIR+ayCNxL2z3W4Kui6Kb0G2ZcidLJTMZ8okZfyljOs9BAJ3thVDRTKYwUuyL0EwcGfd08KCYgS7qSp3BtaAl3kpZ7muIMqADdZ9BZPydkk8/76bO1B0sBU3xVpdlqiE6kckPowmgzxikyIgqnVhQdzSA5aAt3vpk2dUQncB+5hkMrYwmdKCDDjSgBU0rQWOHpq6G6ChmoEy6mGcwtPbraKKqZQYa0IImtKGxAx2GhHBiOg6YdPXbPCOqWM4FWtAEFro1nQ5DdOCieFSkzfXLDFRVKQ1oQhsa0dqGNkPk2KQ+bYjcqHFvcliBNjQ2guaWzjZDtHc+fEKvnKepfKfzfhZ/FDNN+nRcHpA3ZVAWZfYKtKERWHO00TJETvGkqyHiHLfwecDIxA3W9+JPYhWmkCd5UwZlUWYeoNFRgvYILUO0xWM/sCnmiQ7O/YNFwLdKyzbFZpC3kSzT+7KkaEQrsPYjkSGKDjoY7/QEJjqyx8WvOv73xDllmtLNDMqizLyw1rngQWyIcpsWR0WegRZ57MdYvyqWbUqaGZRVZI6EVjSjHQ9ahsyyIbyIk0LLsk2pygyLtObIA/chM+FTno6XgbJMqdoMtFpz5MGw2g43cWMinUyR5qLT21DUlDrMoMJoRvsYXhAhkyLgJVLZyGtKXWZYr7VPYojH4DKjwwWR9mpK3WZQR2s/hSG8JgS8XqwKWU05CDPQbO3jI9pwhHhn1aaQvydWTldDoUzkvI9dDN98hqFVwtojQ3iHAehYqoYjhXIs3GlyH+t1mUFZ1n6cCOE9BmBeXwc+Zwp1qNMMyrP2Y/QhzNLAbpzUsrQpyRmtC67bDMq19lEM+R8JBzCEd6CA5lMXuo0mLps+pey7ZOedllr7Doa4Q+GOtw50M4Nmkmw+dZti7e9xhqfQTN3pXFmvEmlmrCYK9ajjlM+qHnY9sLwjQrZDZfhOV5XYzwwEd+to64oUa9/GEM/jvbMKUz5nhss8KFOsPTLEEcJdbxXIaobLPghTrP0VEbIVauJ7GlesjLRXM1xm3aZY+9Zw+B4Wj9HoWOyUK1YkzWuGy6zLFDSj/S1eECHA7ygm4s3Cy6JmuAJ1mGLNkQc2ZD3UwN8qdIXypGWZ4bKrNsWaIw9syDOVzoyV+UiRZlO2GVWbglY0ox0P4qfuajvc7T1kh3AmTnItf9BZnlCRQZk3ammRQpl5Ya18Zz6643WEkKENmdI6nUwefJM4qUwznG03U5Jl+rgsKRrRCqy99V7miBxiPtIUmdefFfPguk56Lf4mrooIKBs2hTIoizLzAI1obQbtUR60+Rb0GJ4n8LxVJ3y4wr7x0+qhAtFB08aQX2TIltUlmwxRwgdNkQPPi4cVaEMj0dEyA7FthrBDuCUSIXQ4J8XDBjShDY1obUOHIXKMdxRr4ajLSvN2sG0F9ckGWtAE1oLWeCssOwwJ+/n2Ly+BeSLPF+nb+hptDyLQgBY0oQ2NHehqiJz7qCPpvXfEE+JFcdCBBrSgid/SoLEDXQ3hqBBON8IZtLmZsD6ICXVHA+A3NH51Ge9JLFMN4Rid+ETJzXD8BaVfhfVBSqgzdQf8dgZNqdjXEM5SBg+U3A45XFE6SJFCXakz4OchaNkXmTtLTdquKif/TOS51h+JVcxE961wxg/RRZ/hZpLptzLkndkQDpYpl5QssS68Ee+K/TabZWhlNKEDBdX8xCzOOzLlnNaXRV6B8trivsg9RT+ASRfzDIZWRpNqf4SoAiLw1SOtrIin4z3Rd8cfa/2gooWoYDruJsI8o56fqaqgCDKFDpkOa0HkvuCDuCE+FesyBiO4a6XzdB2YZdf7Q2YV2EKIlkXtaISdGLMp0vGmjvfh2LwJEUo0TIkYAZriwf3UnRokIWMmtT0vNhL7eZpP+L4Ui5qDCRMizZTHfkZTK/3zZwiulVMZM671uUB/94SPaUa8JcQYvsIE2UdE7YpgROSK0xR4mwYxgvcm7DPoMHnK1b9/l+GaOpUxCJsWZ0XaePKqarNnEG0b4ro4OH+okiYz9DU0KyKIK07K8MiVdyRx5YkahnMeaRJRpLX95c5/BHwws1lElusAAAAASUVORK5CYII=");   background-size:cover;}');
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
;


