/**
 * Created by lipan04 on 2018/4/11.
 */
import App from './index.vue';
import Vue from 'vue';

import popup_select from "../../src/package/popup_select/index";
Vue.use(popup_select);

new Vue({
    el: '#app',
    render: function (h) {
        return h(App)
    }
});
