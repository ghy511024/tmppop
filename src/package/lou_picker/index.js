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

let LouPicker = (a) => {

    let _defobj = {
        title: a.title,
        type: a.selec_type,
        list: a.list,
        list_type: a.list_type,
    };
    //debugger;
    instance.title = _defobj["title"];
    instance.selec_type = _defobj["type"];
    instance.list = _defobj["list"];
    instance.list_type = _defobj["list_type"];

    //判断传入的数组数据是只有text类型还是text value类型，进行不同处理（展示不同的样式）
    instance.show = true;
    if (instance.list_type == "singletext") {
        instance.radio = true;
    } else if (instance.list_type == "textvalue") {
        instance.checkbox = true;
    } else {
        instance.radio = true;
    }

    instance.isbeforeActive = true;
    setTimeout(function () {
        instance.isactive = true;
    }, 60);
};
export default {
    install(Vue, options) {
        initInstance();
        Vue.prototype.$lou_picker = LouPicker;
    },
};

