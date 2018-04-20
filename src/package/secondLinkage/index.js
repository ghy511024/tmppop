/**
 * Created by thb on 2018/4/19.
 */
import Vue from 'vue';
import SecondLinkage from './src/secondLinkage.vue';

let instance;
let MyConstructor = Vue.extend(SecondLinkage);

let initInstance = (bottom) => {
    instance = new MyConstructor({
        el: document.createElement('div'),
    });
    document.body.appendChild(instance.$el);
};

let _secondLinkage = (a,fun) => {

    let _defobj={
        dataObj: a,
    };
    //debugger;
    instance.dataObj = _defobj["dataObj"];
    instance.callback = fun;
    //出现级联组件
    instance.visible = true;
};

export default {
    install(Vue, options) {
        initInstance();
        Vue.prototype.$secondLinkage = _secondLinkage;
    },
};

