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
    let cur_parent=[];
    let cur_child=[];
    let tempobj = {};
    if(a.option&&a.option!=""){
        if(a.first_key_default&&(a.first_key_default!="")){
            let temp_parent_text="";
            let cur_parent_index=0;
            a.option.forEach(function(item,index){
                if(item.value==a.first_key_default){
                    temp_parent_text=a.option[index].text;
                    cur_parent = index;
                    cur_parent_index=index;
                }
            });
            tempobj = {
                paraname: instance.dataObj.first_key || "",
                value: a.first_key_default || "",
                text: temp_parent_text || "",
            };
            instance.backobj[0] = tempobj;
            if(a.option[cur_parent_index].option&&a.option[cur_parent_index].option!=""){
                instance.temp = a.option[cur_parent_index].option;
                if(a.sec_key_default&&(a.sec_key_default!="")){
                    let cur_child_index=0;
                    let temp_child_text="";
                    a.option[cur_parent_index].option.forEach(function(item,index){
                        if(item.value==a.sec_key_default){
                            temp_child_text=a.option[cur_parent_index].option[index].text;
                            cur_child = index;
                            cur_child_index=index;
                        }
                    });
                    tempobj = {
                        paraname: instance.dataObj.sec_key || "",
                        value: a.sec_key_default || "",
                        text: temp_child_text || "",
                    };
                    instance.backobj[1] = tempobj;
                }else{
                    tempobj = {
                        paraname: instance.dataObj.sec_key || "",
                        value: a.option[cur_parent_index].option[0].value || "",
                        text: a.option[cur_parent_index].option[0].text || "",
                    };
                    instance.backobj[1] = tempobj;
                    cur_child=0;
                }
            }else{
                tempobj = {
                    paraname: instance.dataObj.sec_key || "",
                    value:  "",
                    text:  "",
                };
                instance.backobj[1] = tempobj;
            }
            
        }else{
            tempobj = {
                paraname: instance.dataObj.first_key || "",
                value: instance.dataObj.option[0].value || "",
                text: instance.dataObj.option[0].text || "",
            };
            instance.backobj[0] = tempobj;
            cur_parent = 0;
            if(instance.dataObj.option[0].option||instance.dataObj.option[0].option!=""){
                if (instance.dataObj.option[0]) {
                    tempobj = {
                        paraname: instance.dataObj.sec_key || "",
                        value: instance.dataObj.option[0].option[0].value || "",
                        text: instance.dataObj.option[0].option[0].text || "",
                    };
                }
                instance.backobj[1] = tempobj;
                instance.temp = instance.dataObj.option[0].option;
                cur_child = 0;
            }else{
                tempobj = {
                    paraname: instance.dataObj.sec_key || "",
                    value: "",
                    text:"",
                };
                instance.backobj[1] = tempobj;
            }

        }
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

