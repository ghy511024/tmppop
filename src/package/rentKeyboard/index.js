/**
 * Created by thb on 2018/4/18.
 */
import Vue from 'vue';
import RentKeyboard from './src/rentKeyboard.vue';

let instance;
let MyConstructor = Vue.extend(RentKeyboard);

let initInstance = (bottom) => {
    instance = new MyConstructor({
        el: document.createElement('div'),
    });
    document.body.appendChild(instance.$el);
};

let _rentKeyboard = (a,fun) => {

    let _defobj={
        dataArrSel: a.dataArrSel,
        dataArr: a.dataArr,
    };
    //debugger;
    instance.dataArrSel = _defobj["dataArrSel"];
    instance.dataArr = _defobj["dataArr"];
    instance.callback = fun;
    //出现键盘
    instance.visible = true;
};

export default {
    install(Vue, options) {
        initInstance();
        Vue.prototype.$rentKeyboard = _rentKeyboard;
    },
};

