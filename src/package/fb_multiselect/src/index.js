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
    content = '',
} = {}) => {
    instance.show = true;
    instance.content = content;
};

export default {
    install(Vue, options) {
        initInstance();
        Vue.prototype.$dialog = dialog;
    },
};
