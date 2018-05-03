/**
 * Created by thb on 2018/4/17.
 */
import Vue from 'vue';
import RentKeyboard from './src/rentKeyboard.vue';
import Tool from '../../common/js/Tool'

function copyArr(arr) {
    return arr.map((e) => {
        if (typeof e === 'object') {
            return Object.assign({}, e)
        } else {
            return e
        }
    })
}

let instance;
let MyConstructor = Vue.extend(RentKeyboard);

let initInstance = (bottom) => {
    instance = new MyConstructor({
        el: document.createElement('div'),
    });
    document.body.appendChild(instance.$el);
};

let _rentKeyboard = (a, fun) => {

    let _defobj = {
        dataArrSel: a.dataArrSel || 0,
        dataArr: a.dataArr,
    };

    //debugger;
    instance.dataArrSel = _defobj["dataArrSel"];
    instance.dataArr = copyArr(_defobj["dataArr"]);
    instance.callback = fun;
    Tool.css(document.body, "overflow", "hidden");
    Tool.css(document.body, "height", "100vh");
    //出现键盘
    instance.show = true;
    instance.isbeforeActive = true;
    setTimeout(function () {
        instance.isactive = true;
    }, 60);
};

export default {
    install(Vue, options) {
        initInstance();
        Vue.prototype.$rentKeyboard = _rentKeyboard;
    },
};

