import Vue from 'vue';
import Dialog from './fb_multiselect.vue';

let instance;
let DialogConstructor = Vue.extend(Dialog);

let initInstance = (bottom) => {
    instance = new DialogConstructor({
        el: document.createElement('div'),
    });
    document.body.appendChild(instance.$el);
};

let dialog = ({
    title = '',
    content = '',
    confirmBtn = '确定',
    cancelBtn = '',
    confirmCallback = () => { },
    cancelCallback = () => { },
} = {}) => {
    instance.title = title;
    instance.content = content;
    instance.confirmCallback = confirmCallback;
    instance.cancelCallback = cancelCallback;
    instance.confirmBtn = confirmBtn;
    instance.cancelBtn = cancelBtn;
    instance.show = true;
};
export default {
    install(Vue, options) {
        initInstance();
        Vue.prototype.$dialog = dialog;
    },
};
