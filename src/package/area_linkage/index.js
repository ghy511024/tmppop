/**
 * Created by lipan04 on 2018/4/21.
 */
/**
 * Created by lipan04 on 2018/4/20.
 */
import Vue from 'vue';
import Area_linkage from './src/area_linkage.vue';

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
    // let parent_obj=[
    //     {"listname": "chaoyang", "name": "朝阳", "id": "1142"},
    //     {"listname": "dongcheng", "name": "东城", "id": "1138"},
    // ];
    // let child_obj=[
    //     {"listname": "guomao", "name": "国贸", "id": "1195"},
    //     {"listname": "cbd", "name": "CBD ", "id": "6834"},
    //     {"listname": "dawanglu", "name": "大望路", "id": "5785"},
    //     {"listname": "bjsihui", "name": "四惠", "id": "5786"},
    //     {"listname": "guomao", "name": "国贸", "id": "1195"},
    //     {"listname": "cbd", "name": "CBD ", "id": "6834"},
    //     {"listname": "dawanglu", "name": "大望路", "id": "5785"},
    //     {"listname": "bjsihui", "name": "四惠", "id": "5786"}
    // ];
    // instance.parent_obj=parent_obj;
    // instance.child_obj=child_obj;
    let cur_parent;
    let cur_child;
    instance.dataObj = _defobj["dataObj"];
    instance.callback = fun;
    // let tempobj={};
    // tempobj={
    //     paramname:instance.dataObj.pname_1||null,
    //     value:instance.dataObj.option[0].value||null,
    //     text:instance.dataObj.option[0].text||"暂无数据",
    // };
    // instance.backobj[0]=tempobj;
    // if(instance.dataObj.option[0]){
    //     tempobj={
    //         paramname:instance.dataObj.pname_2||null,
    //         value:instance.dataObj.option[0].option[0].value||null,
    //         text:instance.dataObj.option[0].option[0].text||"暂无数据",
    //     };
    // }
    // instance.backobj[1]=tempobj;
    // instance.temp=instance.dataObj.option[0].option;
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

