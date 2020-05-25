import Vue from 'vue'
import App from './App'
import $app from "./common";
import pageLoading from "./components/pageloading.vue";
Vue.component("page-loading",pageLoading);
Vue.prototype.app=$app;

App.mpType = 'app'

// Vue.prototype.$store = store
// Vue.prototype.$api = api
// Vue.prototype.$util = util

const app = new Vue({
	// store,
	...App
})
app.$mount()
