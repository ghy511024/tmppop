import App from './index.vue';
import Vue from 'vue';

import fb_multiselect from "../../src/package/fb_multiselect/src/index";
import popup_select from "../../src/package/popup_select/index";
Vue.use(fb_multiselect);
Vue.use(popup_select);


new Vue({
    el: '#app',
    render: function (h) {
        return h(App)
    }
});