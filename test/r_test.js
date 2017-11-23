/**
 * Created by gonghongyu on 2017/11/22.
 */
// var shenfenchose = require("../build/shenfenchose/shenfenchose");
var shenfen2 = require("../src/V2/shenfen/shenfen_main");
var T = {
    shenfen: function () {
        shenfen2.init("sdf", "asdf", "sdf")
        shenfen2.showPage();
    }
}
T.shenfen();