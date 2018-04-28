/**
 * Created by cyl on 2018/4/27.
 */

import Util from "./Util";
var DataApi = {
    map: {},
    cityUrl: location.protocol + "//m.58.com/sublocals/",
    getData(city, fun){
        var ret = this.map[city];
        var _this = this;
        if (!!ret) {
            fun(ret);
        }
        else {
            Util._ajax(_this.cityUrl, {"cityname": city}, function callback(ret) {
                let temparr;
                temparr = ret.data.datastr;
                if (typeof temparr == "string") {
                    try {
                        temparr = JSON.parse(temparr);
                        _this.map[city] = temparr;
                        fun(temparr)
                    }
                    catch (e) {
                        console.log(e)
                        fun()
                    }
                }
                else {
                    fun(temparr);
                }
            });
        }
    }
}
export default DataApi;