/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { BootstrapVue} from 'bootstrap-vue'
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueTreeList from "vue-tree-list";

Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(VueTreeList);

//vue analytics
/*Vue.use(VueGtag, {
  config: { id: process.env.MIX_GA_TRACKING_ID }
}, router);*/

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
