import App from './index.vue';
import Vue from 'vue';

import fb_multiselect from "../../src/package/fb_multiselect/src/index";
import popup_select from "../../src/package/popup_select/index";
import lou_picker from "../../src/package/lou_picker/index";
import rentKeyboard from "../../src/package/rentKeyboard/index";
import secondLinkage from "../../src/package/secondLinkage/index";
import two_linkage from "../../src/package/two_linkage/index";
import area_linkage from "../../src/package/area_linkage/index";
Vue.use(fb_multiselect);
Vue.use(popup_select);
Vue.use(lou_picker);
Vue.use(rentKeyboard);
Vue.use(secondLinkage);
Vue.use(two_linkage);
Vue.use(area_linkage);


new Vue({
    el: '#app',
    render: function (h) {
        return h(App)
    }
});