import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false



// uView
import uView from "uview-ui";
Vue.use(uView);



// websocket 
import store from "websocket/store.js"; 
Vue.prototype.$store = store;

import index from "static/index.js"
Vue.prototype.$index = index;
App.mpType = 'app'

const app = new Vue({
    ...App,
	store,
	index
})
app.$mount()
