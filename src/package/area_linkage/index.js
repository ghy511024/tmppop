/**
 * Created by lipan04 on 2018/4/21.
 */

import Vue from 'vue';
import Area_linkage from './src/area_linkage.vue';

import DataApi from "./lib/DataApi"
import Tool from '../../common/js/Tool'

let instance;
let linkagestructor = Vue.extend(Area_linkage);
let dataStroge = [];
let id_to_listname = {};
let search_parent = {};

let initInstance = (bottom) => {
    instance = new linkagestructor({
        el: document.createElement('div'),
    });
    document.body.appendChild(instance.$el);
};

let area_linkage = (param, fun) => {

    param.callback = function (ret) {
    };

    instance.callback = fun;
    let city_name = param.key;

    instance.first_key = param.first_key;
    instance.sec_key = param.sec_key;

    instance.first_linkage_default_value = param.first_key_default;
    instance.sec_linkage_default_value = param.sec_key_default;

    DataApi.getData(city_name, function (data) {
        let ret = 0;
        if (!data) {
            ret = -1;
        }
        if (ret == 0) {
            var city_obj = data[0];
            var first_linkage_arry = city_obj[city_name];
            instance.allMap = city_obj;
            instance.first_linkage_arry = first_linkage_arry;

            var idMap = {};
            for (var key in city_obj) {
                var item = city_obj[key];
                if (item instanceof Array) {
                    for (var it of item) {
                        var _id = it.id;

                        idMap[_id] = it;
                    }
                }
            }
            instance.idMap = idMap;
            instance._choose();

        }
        if (ret == 0) {
            Tool.css(document.body, "overflow", "hidden");
            Tool.css(document.body, "height", "100vh");
            instance.show = true;
            instance.isbeforeActive = true;
            setTimeout(function () {
                instance.isactive = true;
            }, 60);
        }
    })

    function get_data(dataStroge, id_to_listname) {


    }


};

export default {
    install(Vue, options) {
        initInstance();
        Vue.prototype.$area_linkage = area_linkage;
    },
};

