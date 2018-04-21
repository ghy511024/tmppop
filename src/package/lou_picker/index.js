/**
 * Created by lipan04 on 2018/4/11.
 */
import Vue from 'vue';
import lou_picker from './lou_picker.vue';

let instance;
let LouPickerConstructor = Vue.extend(lou_picker);

let initInstance = (bottom) => {
    instance = new LouPickerConstructor({
        el: document.createElement('div'),
    });
    document.body.appendChild(instance.$el);

};

var def = {
    type: "single",//single,multi 单层|多层
    datasouce: ['4,99', '-2,99', '-2,9'],
    unit: ['%d层', '%d层', '共%d层'],
    suggest: "请选择楼层",
    title: "楼层",
    defaultselect: "0,3,0",
    placeholder: "请选择"
}

let LouPicker = (option) => {
    instance.defaultType = option.defaultType || "single"
    for (let i = 0; i < option.datasouce.length; i++) {
        var item = option.datasouce[i]
        var unit = option.unit[i]
        var tmpdata = {};
        var d_arry = [];
        var arr = item.split(",");
        for (let j = Number(arr[0]); j <= Number(arr[1]); j++) {
            if (j == 0) {
                continue;
            }
            d_arry.push(j);
        }
        tmpdata["list"] = d_arry;
        tmpdata["select"] = d_arry[0];
        instance["data_" + (i + 1)] = tmpdata;
    }
    var arr2 = option.defaultselect.split(",");
    for (let m = 0; m < arr2.length; m++) {
        instance["data_" + (m + 1)]["select"] = arr2[m];
    }
    instance.show = true;
    instance.bindTouch();
};

export default {
    install(Vue, options) {
        initInstance();
        Vue.prototype.$lou_picker = LouPicker;
    },
};

