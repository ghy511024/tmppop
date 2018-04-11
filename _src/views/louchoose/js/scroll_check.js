/**
 * Created by ghy on 2017/12/19.
 */

function sccheck (el) {
    var sc_stop = true;
    var time_out = null;
    el.addEventListener ('touchstart', function (event) {
        if (sc_stop) {
            sc_stop = false;
            trick ();
        }
    }, false)

    el.addEventListener ('touchend', function (event) {
        clearTimeout (time_out);
        time_out = setTimeout (function () {
            sc_stop = true;
        }, 1000)
    }, false)

    function trick () {
    console.log(el.scrollTop)
        if (!sc_stop) {
            requestAnimationFrame (trick);
        }
    }


}