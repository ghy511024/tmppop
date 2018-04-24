/**
 * Created by lipan04 on 2018/4/21.
 */

import Vue from 'vue';
import Area_linkage from './src/area_linkage.vue';
import _ajax from  "./lib/touch";

let instance;
let linkagestructor = Vue.extend(Area_linkage);

let initInstance = (bottom) => {
    instance = new linkagestructor({
        el: document.createElement('div'),
    });
    document.body.appendChild(instance.$el);
};

let area_linkage = (a,fun) => {

    let _defobj={
        dataObj: a,
    };
    a.callback=function(ret){};

    instance.dataObj = _defobj["dataObj"];
    instance.callback = fun;

    let parent_obj=[];
    let child_obj=[];
    let tempObj={};
    let backObj=[];
    _ajax(a.url, {"cityname":a.key}, function callback(ret){
        let temparr=null;
        temparr=ret.data.datastr;
        temparr = JSON.parse(temparr);
        let key=temparr[0].city;
        parent_obj=temparr[0][key];
        instance.parent_obj=parent_obj;
        tempObj={
            paramname: instance.dataObj.pname_1,
            name: instance.parent_obj[0].listname,
            value: instance.parent_obj[0].id,
            text: instance.parent_obj[0].name
        };
        instance.backObj[0]=tempObj;
        _ajax(a.url, {"cityname":parent_obj[0].listname}, function callback(ret){
            let temparr=null;
            temparr=ret.data.datastr;
            temparr = JSON.parse(temparr);
            let key=temparr[0].city;
            child_obj=temparr[0][key];
            instance.child_obj=child_obj;
            tempObj={
                paramname: instance.dataObj.pname_2,
                name: instance.child_obj[0].listname,
                value: instance.child_obj[0].id,
                text: instance.child_obj[0].name
            };
            instance.backObj[1]=tempObj;
        });
    });

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
        Vue.prototype.$area_linkage = area_linkage;
    },
};

