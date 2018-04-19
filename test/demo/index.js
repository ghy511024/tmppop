import App from './index.vue';
import Vue from 'vue';

import fb_multiselect from "../../src/package/fb_multiselect/src/index";
import popup_select from "../../src/package/popup_select/index";
import lou_picker from "../../src/package/lou_picker/index";
import rentKeyboard from "../../src/package/rentKeyboard/index";
Vue.use(fb_multiselect);
Vue.use(popup_select);
Vue.use(lou_picker);
Vue.use(rentKeyboard);


new Vue({
    el: '#app',
    render: function (h) {
        return h(App)
    }
});