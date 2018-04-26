/**
 * Created by lipan04 on 2018/4/21.
 */

import Vue from 'vue';
import Area_linkage from './src/area_linkage.vue';
import _ajax from  "./lib/touch";
import Tool from '../../common/js/Tool'

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
    let url=location.protocol+"//m.58.com/sublocals/";
    instance.dataObj = _defobj["dataObj"];
    instance.callback = fun;
    let parent_obj=[];
    let child_obj=[];
    let tempObj={};
    let backObj=[];
    instance.url=url;

    _ajax(url, {"cityname":a.key}, function callback(ret){
        let temparr=null;
        temparr=ret.data.datastr;
        temparr = JSON.parse(temparr);
        console.log(temparr);
        let key=temparr[0].city;
        parent_obj=temparr[0][key];
        instance.parent_obj=parent_obj;
        let temp_parent_obj={};
        let temp_child_obj={};
        if(a.first_key_default&&(a.first_key_default!="")){
            parent_obj.forEach(function(item,index){
                if(item.id==a.first_key_default){
                    instance.cur_parent=index;
                    temp_parent_obj=item;
                }
            });
            tempObj={
                paraname: instance.dataObj.first_key,
                name: temp_parent_obj.listname,
                value: temp_parent_obj.id,
                text: temp_parent_obj.name
            };
            if(instance.cur_parent>5){
                let temp={};
                temp=parent_obj[0];
                parent_obj[0]=parent_obj[instance.cur_parent];
                parent_obj[instance.cur_parent]=temp;
                instance.cur_parent=0;
                instance.parent_obj=parent_obj
            }
            instance.backObj[0]=tempObj;
            if(a.sec_key_default&&(a.sec_key_default!="")){
                _ajax(url, {"cityname":parent_obj[instance.cur_parent].listname}, function callback(ret){
                    let temparr=null;
                    temparr=ret.data.datastr;
                    temparr = JSON.parse(temparr);
                    let key=temparr[0].city;
                    child_obj=temparr[0][key];
                    instance.child_obj=child_obj;
                    child_obj.forEach(function(item,index){
                        if(item.id==a.sec_key_default){
                            instance.cur_child=index;
                            temp_child_obj=item;
                        }
                    });
                    tempObj={
                        paraname: instance.dataObj.sec_key,
                        name: temp_child_obj.listname,
                        value: temp_child_obj.id,
                        text: temp_child_obj.name
                    };
                    instance.backObj[1]=tempObj;
                    if(instance.cur_child>5){
                        let temp_child={};
                        temp_child=parent_obj[0];
                        child_obj[0]=child_obj[instance.cur_child];
                        child_obj[instance.cur_child]=temp_child;
                        instance.cur_child=0;
                        instance.child_obj
                    }
                });

            }else{
                _ajax(url, {"cityname":parent_obj[instance.cur_parent].listname}, function callback(ret){
                    let temparr=null;
                    temparr=ret.data.datastr;
                    temparr = JSON.parse(temparr);
                    let key=temparr[0].city;
                    child_obj=temparr[0][key];
                    instance.child_obj=child_obj;
                    tempObj={
                        paraname: instance.dataObj.sec_key,
                        name: child_obj[0].listname,
                        value: child_obj[0].id,
                        text: child_obj[0].name
                    };
                    instance.cur_child=0;
                    instance.backObj[1]=tempObj;
                });
            }

        }else{
            tempObj={
                paraname: instance.dataObj.first_key,
                name: instance.parent_obj[0].listname,
                value: instance.parent_obj[0].id,
                text: instance.parent_obj[0].name
            };
            instance.backObj[0]=tempObj;
            _ajax(url, {"cityname":parent_obj[0].listname}, function callback(ret){
                let temparr=null;
                temparr=ret.data.datastr;
                temparr = JSON.parse(temparr);
                let key=temparr[0].city;
                child_obj=temparr[0][key];
                instance.child_obj=child_obj;
                tempObj={
                    paraname: instance.dataObj.sec_key,
                    name: instance.child_obj[0].listname,
                    value: instance.child_obj[0].id,
                    text: instance.child_obj[0].name
                };
                instance.backObj[1]=tempObj;
                instance.cur_parent=0;
                instance.cur_parent=0;
            });

        }

    });



    Tool.css( document.body,"overflow","hidden");
    Tool.css( document.body,"height","100vh");
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

