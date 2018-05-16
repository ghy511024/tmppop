/**
 * Created by lipan04 on 2018/4/28.
 */
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

    instance.data_obj = a;

    instance.first_key_default = a.first_key_default;
    instance.sec_key_default = a.sec_key_default;

    instance.callback = fun;

    let map={};
    let select_value;
    if(a.option&&a.option.length>0){
        a.option.forEach(function(item,index){
            map[item.value]=item.option||"";
            //寻找第一个默认值的索引
            instance.first_key_index=0;
            if(a.first_key_default==item.value){
                instance.first_key_index=index;
                select_value=item.value;
            };
        })
    }
    //寻找第二个默认值的索引
    if(map[select_value]&&map[select_value].length>0){
        instance.sec_key_index=0;
        map[select_value].forEach(function(item,index){
            if(item.value==a.sec_key_default){
                instance.sec_key_index=index;
            }
        });
    }

    instance.map=map;
    instance.choose();

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
        Vue.prototype.$two_linkage = two_linkage;
    },
};

