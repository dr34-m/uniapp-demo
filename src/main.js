import Vue from 'vue'
import App from './App'

import uView from "uview-ui";
Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'

let vuexStore = require("@/store/$u.mixin.js");
Vue.mixin(vuexStore);

import store from '@/store';

const app = new Vue({
	store,
	...App
});

// 引入请求封装，将app参数传递到配置中
require('@/utils/request.js')(app)

app.$mount()
