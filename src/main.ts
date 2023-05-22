import Vue from 'vue';
import App from './App.vue';
import './uni.promisify.adaptor';
import uView from "uview-ui";
import {router, RouterMount} from './router'


Vue.config.productionTip = false;

Vue.use(uView)
Vue.use(router)


const app = new (typeof App === 'function' ? App : Vue.extend(Object.assign({ mpType: 'app' }, App)))
// app.$mount();

if(process.env.VUE_APP_PLATFORM === 'h5' ) {
  // #ifdef H5
  RouterMount(app,router,'#app')
  // #endif
} else {
  // #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
  // #endif
}

