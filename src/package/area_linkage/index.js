/**
 * Created by lipan04 on 2018/4/21.
 */

import Vue from 'vue';
import Area_linkage from './src/area_linkage.vue';
import _ajax from  "./lib/touch";
import Tool from '../../common/js/Tool'

let instance;
let linkagestructor = Vue.extend(Area_linkage);
let dataStroge = [];
let id_to_listname = {};
let search_parent={};

let initInstance = (bottom) => {
    instance = new linkagestructor({
        el: document.createElement('div'),
    });
    document.body.appendChild(instance.$el);
};

let area_linkage = (a, fun) => {

    let _defobj = {
        dataObj: a,
    };
    a.callback = function (ret) {
    };
    let url = location.protocol + "//m.58.com/sublocals/";
    instance.dataObj = _defobj["dataObj"];
    instance.callback = fun;
    let parent_obj = [];
    let child_obj = [];
    let think=[];
    let tempObj = {};
    let backObj = [];

    instance.url = url;
    if (dataStroge == "") {
        _ajax(url, {"cityname": a.key}, function callback(ret) {
            let temparr = null;
            temparr = ret.data.datastr;
            temparr = JSON.parse(temparr);
            dataStroge = temparr;
            let key = temparr[0].city;
            temparr[0][key].forEach(function (item) {
                id_to_listname[item.id] = item.listname;
                let child_key=item.listname;
                let curobj=temparr[0][child_key];
                curobj.forEach(function(cur_item){
                    search_parent[cur_item.id]=item.listname;
                })
            });
            instance.dataStroge=dataStroge;
            get_data(dataStroge, id_to_listname)

        });
    }else{
        get_data(dataStroge, id_to_listname)
    }


    function get_data(dataStroge, id_to_listname) {
        parent_obj = dataStroge[0][dataStroge[0].city]
        if (a.first_key_default && (a.first_key_default != "")) {//如果第一个参数存在,则一级默认选中的是a.first_key_default对应的对象，二级数据也是a.first_key_default下对应的数据
            let temp_parent_obj = {};
            let temp_child_obj = {};
            parent_obj.forEach(function (item, index) {
                if (item.id == a.first_key_default) {
                    instance.cur_parent = index;
                    temp_parent_obj = item;
                    for (let cur_item in dataStroge[0]) {
                        if (cur_item == id_to_listname[a.first_key_default]) {
                            child_obj = dataStroge[0][cur_item];
                            // console.log(think=="")
                        }
                    }
                }
            });


            tempObj = {
                paraname: instance.dataObj.first_key,
                name: temp_parent_obj.listname||null,
                value: temp_parent_obj.id||null,
                text: temp_parent_obj.name||null
            };
            if (instance.cur_parent > 5) {
                let temp = {};
                temp = parent_obj[0];
                parent_obj[0] = parent_obj[instance.cur_parent];
                parent_obj[instance.cur_parent] = temp;
                instance.cur_parent = 0;
            }
            instance.backObj[0] = tempObj;
            if (a.sec_key_default && (a.sec_key_default != "")) {//如果第二个参数存在，则二级选中的是a.sec_key_default对应的对象
                child_obj.forEach(function (item, index) {
                    if (item.id == a.sec_key_default) {
                        instance.cur_child = index;
                        temp_child_obj = item;
                    }
                });
                tempObj = {
                    paraname: instance.dataObj.sec_key,
                    name: temp_child_obj.listname,
                    value: temp_child_obj.id,
                    text: temp_child_obj.name
                };
                if (instance.cur_child > 5) {
                    let temp = {};
                    temp = child_obj[0];
                    child_obj[0] = child_obj[instance.cur_child];
                    child_obj[instance.cur_child] = temp;
                    instance.cur_child = 0;
                }
                instance.backObj[1] = tempObj;
            } else {//如果第一个参数存在，第二个参数不存在，则二级选中的是a.first_key_default下对应的数据第一项
                instance.cur_child = 0;
                tempObj = {
                    paraname: instance.dataObj.sec_key,
                    name: child_obj[0].listname,
                    value: child_obj[0].id,
                    text: child_obj[0].name
                };
                instance.backObj[1] = tempObj;
            }
        } else {
            if(a.sec_key_default && (a.sec_key_default != "")){//如果第一个参数不存在，第二个参数存在

            }else{//如果两个参数都不存在，则一级默认选中的是city对应下数据的第一项，二级数据是一级数据选中的对象下第一个数据
                instance.cur_parent = 0;
                instance.cur_child = 0;
                // parent_obj = dataStroge[0][dataStroge[0].city];
                tempObj = {
                    paraname: instance.dataObj.first_key,
                    name: parent_obj[0].listname||null,
                    value: parent_obj[0].id||null,
                    text: parent_obj[0].name||null
                };
                instance.backObj[0] = tempObj;
                let key = dataStroge[0][dataStroge[0]["city"]][0].listname;
                child_obj = dataStroge[0][key]
                tempObj = {
                    paraname: instance.dataObj.sec_key,
                    name: child_obj[0].listname||null,
                    value: child_obj[0].id|null,
                    text: child_obj[0].name||null
                };
                instance.backObj[1] = tempObj;
            }

        }
        instance.parent_obj = parent_obj;
        instance.child_obj = child_obj;
    }

    // _ajax(url, {"cityname":a.key}, function callback(ret){
    //     let temparr=null;
    //     temparr=ret.data.datastr;
    //     temparr = JSON.parse(temparr);
    //     let key=temparr[0].city;
    //     parent_obj=temparr[0][key];
    //     instance.parent_obj=parent_obj;
    //     let temp_parent_obj={};
    //     let temp_child_obj={};
    //     if(a.first_key_default&&(a.first_key_default!="")){
    //         parent_obj.forEach(function(item,index){
    //             if(item.id==a.first_key_default){
    //                 instance.cur_parent=index;
    //                 temp_parent_obj=item;
    //             }
    //         });
    //         tempObj={
    //             paraname: instance.dataObj.first_key,
    //             name: temp_parent_obj.listname,
    //             value: temp_parent_obj.id,
    //             text: temp_parent_obj.name
    //         };
    //         if(instance.cur_parent>5){
    //             let temp={};
    //             temp=parent_obj[0];
    //             parent_obj[0]=parent_obj[instance.cur_parent];
    //             parent_obj[instance.cur_parent]=temp;
    //             instance.cur_parent=0;
    //             instance.parent_obj=parent_obj
    //         }
    //         instance.backObj[0]=tempObj;
    //         if(a.sec_key_default&&(a.sec_key_default!="")){
    //             _ajax(url, {"cityname":parent_obj[instance.cur_parent].listname}, function callback(ret){
    //                 let temparr=null;
    //                 temparr=ret.data.datastr;
    //                 temparr = JSON.parse(temparr);
    //                 let key=temparr[0].city;
    //                 child_obj=temparr[0][key];
    //                 instance.child_obj=child_obj;
    //                 child_obj.forEach(function(item,index){
    //                     if(item.id==a.sec_key_default){
    //                         instance.cur_child=index;
    //                         temp_child_obj=item;
    //                     }
    //                 });
    //                 tempObj={
    //                     paraname: instance.dataObj.sec_key,
    //                     name: temp_child_obj.listname,
    //                     value: temp_child_obj.id,
    //                     text: temp_child_obj.name
    //                 };
    //                 instance.backObj[1]=tempObj;
    //                 if(instance.cur_child>5){
    //                     let temp_child={};
    //                     temp_child=parent_obj[0];
    //                     child_obj[0]=child_obj[instance.cur_child];
    //                     child_obj[instance.cur_child]=temp_child;
    //                     instance.cur_child=0;
    //                     instance.child_obj
    //                 }
    //             });
    //
    //         }else{
    //             _ajax(url, {"cityname":parent_obj[instance.cur_parent].listname}, function callback(ret){
    //                 let temparr=null;
    //                 temparr=ret.data.datastr;
    //                 temparr = JSON.parse(temparr);
    //                 let key=temparr[0].city;
    //                 child_obj=temparr[0][key];
    //                 instance.child_obj=child_obj;
    //                 tempObj={
    //                     paraname: instance.dataObj.sec_key,
    //                     name: child_obj[0].listname,
    //                     value: child_obj[0].id,
    //                     text: child_obj[0].name
    //                 };
    //                 instance.cur_child=0;
    //                 instance.backObj[1]=tempObj;
    //             });
    //         }
    //
    //     }else{
    //         tempObj={
    //             paraname: instance.dataObj.first_key,
    //             name: instance.parent_obj[0].listname,
    //             value: instance.parent_obj[0].id,
    //             text: instance.parent_obj[0].name
    //         };
    //         instance.backObj[0]=tempObj;
    //         _ajax(url, {"cityname":parent_obj[0].listname}, function callback(ret){
    //             let temparr=null;
    //             temparr=ret.data.datastr;
    //             temparr = JSON.parse(temparr);
    //             let key=temparr[0].city;
    //             child_obj=temparr[0][key];
    //             instance.child_obj=child_obj;
    //             tempObj={
    //                 paraname: instance.dataObj.sec_key,
    //                 name: instance.child_obj[0].listname,
    //                 value: instance.child_obj[0].id,
    //                 text: instance.child_obj[0].name
    //             };
    //             instance.backObj[1]=tempObj;
    //             instance.cur_parent=0;
    //             instance.cur_parent=0;
    //         });
    //
    //     }
    //
    // });

    Tool.css(document.body, "overflow", "hidden");
    Tool.css(document.body, "height", "100vh");
    instance.show = true;
    instance.isbeforeActive = true;
    setTimeout(function () {
        instance.isactive = true;
    }, 60);

};

export default {
    install(Vue, options) {
        initInstance();
        Vue.prototype.$area_linkage = area_linkage;
    },
};

