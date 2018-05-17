// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = axios
/* eslint-disable no-new */
Vue.filter('formatTime', function (str) {
  if (!str) {
    return ''
  }
  var data = new Date(str)
  var diff = new Date().getTime() - data.getTime() // 毫秒
  if (diff < 0) {
    return ''
  } else if (diff / 1000 < 30) {
    return '刚刚'
  } else if (diff / 1000 < 60) {
    return parseInt((diff / 1000)) + '秒前'
  } else if (diff / 60000 < 60) {
    return parseInt((diff / 60000)) + '分钟前'
  } else if (diff / 360000 < 24) {
    return parseInt((diff / 360000)) + '小时前'
  } else if ((diff / 8640000) < 31) {
    return parseInt((diff / 8640000)) + '天前'
  } else if ((diff / 267840000) < 12) {
    return parseInt((diff / 267840000)) + '月前'
  } else {
    return parseInt((diff / 3214080000)) + '年前'
  }
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
