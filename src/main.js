
import Vue from 'vue'

import router from './router'

import App from './App'

import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
 
import './style/common.css';

Vue.use(ElementUI)
  
import axios from 'axios'

axios.defaults.baseURL = "http://litc.pro:9999/v1";

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
           // headers: { Authorization: token }

           let token = localStorage.getItem('token')
           if(token) {
             config.headers.Authorization = token
           }
        
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

Vue.prototype.$http = axios




router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if(!token && to.path !== '/login') {
    return next('/login')
  }
  next()
})
// 在进入之后
router.afterEach(route => { 

})

Vue.config.productionTip = false



new Vue({
  el: '#app',
   router,
   render: c => c(App)
})
