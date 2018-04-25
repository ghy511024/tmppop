/**
 * Created by lipan04 on 2018/4/20.
 */
import Vue from 'vue';
import Two_linkage from './src/two_linkage.vue';
import Tool from '../../common/js/Tool'

let instance;
let linkagestructor = Vue.extend(Two_linkage);

let initInstance = (bottom) => {
    instance = new linkagestructor({
        el: document.createElement('div'),
    });
    document.body.appendChild(instance.$el);
};

let two_linkage = (a, fun) => {

    let _defobj = {
        dataObj: a,
    };


    instance.dataObj = _defobj["dataObj"];
    instance.callback = fun;
    let cur_parent;
    let cur_child;
    let tempobj = {};
    if(a.localArea&&(a.localArea!="")){
        let temp_parent_text=null;
        let cur_parent_index=0;
        a.option.forEach(function(item,index){
            if(item.value==a.localArea){
                temp_parent_text=a.option[index].text;
                cur_parent = index;
                cur_parent_index=index;
            }
        });
        tempobj = {
            paraname: instance.dataObj.first_key || null,
            value: a.localArea || null,
            text: temp_parent_text || "暂无数据",
        };
        instance.backobj[0] = tempobj;
        instance.temp = a.option[cur_parent_index].option;
        if(a.localDiduan&&(a.localDiduan!="")){
            let cur_child_index=0;
            let temp_child_text=null;
            a.option[cur_parent_index].option.forEach(function(item,index){
                if(item.value==a.localDiduan){
                    temp_child_text=a.option[cur_parent_index].option[index].text;
                    cur_child = index;
                    cur_child_index=index;
                }
            });
            tempobj = {
                paraname: instance.dataObj.first_key || null,
                value: a.localDiduan || null,
                text: temp_child_text || "暂无数据",
            };
            instance.backobj[1] = tempobj;
        }else{
            tempobj = {
                paraname: instance.dataObj.first_key || null,
                value: a.option[cur_parent_index].option[0].value || null,
                text: a.option[cur_parent_index].option[0].text || "暂无数据",
            };
            instance.backobj[1] = tempobj;
            cur_child=0;
        }
    }else{
        tempobj = {
            paraname: instance.dataObj.first_key || null,
            value: instance.dataObj.option[0].value || null,
            text: instance.dataObj.option[0].text || "暂无数据",
        };
        instance.backobj[0] = tempobj;
        if (instance.dataObj.option[0]) {
            tempobj = {
                paraname: instance.dataObj.sec_key || null,
                value: instance.dataObj.option[0].option[0].value || null,
                text: instance.dataObj.option[0].option[0].text || "暂无数据",
            };
        }
        instance.backobj[1] = tempobj;
        instance.temp = instance.dataObj.option[0].option;
        cur_parent = 0;
        cur_child = 0;
    }
    instance.cur_parent=cur_parent;
    instance.cur_child=cur_child;
    Tool.css( document.body,"overflow","hidden");
    Tool.css( document.body,"height","100vh");
    instance.show = true;
    instance.isbeforeActive = true;
    setTimeout(function () {
        instance.isactive = true;
    }, 60);
};

export default {
    install(Vue, options) {
        initInstance();
        Vue.prototype.$two_linkage = two_linkage;
    },
};

