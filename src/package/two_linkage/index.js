/**
 * Created by lipan04 on 2018/4/20.
 */
import Vue from 'vue';
import Two_linkage from './src/two_linkage.vue';

let instance;
let linkagestructor = Vue.extend(Two_linkage);

let initInstance = (bottom) => {
    instance = new linkagestructor({
        el: document.createElement('div'),
    });
    document.body.appendChild(instance.$el);
};

let two_linkage = (a,fun) => {

    let _defobj={
        dataObj: a,
    };
    let temp=[];
    let cur_parent;
    let cur_child;
    instance.dataObj = _defobj["dataObj"];
    instance.callback = fun;

    let tempobj={};
    tempobj={
        paramname:instance.dataObj.pname_1||null,
        value:instance.dataObj.option[0].value||null,
        text:instance.dataObj.option[0].text||"暂无数据",
    };
    instance.backobj[0]=tempobj;
    if(instance.dataObj.option[0]){
        tempobj={
            paramname:instance.dataObj.pname_2||null,
            value:instance.dataObj.option[0].option[0].value||null,
            text:instance.dataObj.option[0].option[0].text||"暂无数据",
        };
    }
    instance.backobj[1]=tempobj;
    instance.temp=instance.dataObj.option[0].option;
    instance.cur_parent=0;
    instance.cur_child=0;
    instance.show = true;
    instance.isbeforeActive=true;
    setTimeout (function () {
        instance.isactive=true;
    },60);
};

export default {
    install(Vue, options) {
        initInstance();
        Vue.prototype.$two_linkage = two_linkage;
    },
};
