import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

router.beforeEach((to, from, next) => {
  console.log(`>> 全局路由 beforEach: from ${from.fullPath} to ${to.fullPath}`);
  next();
})

router.afterEach((to, from) => {
  console.log(`>> 全局路由 afterEach: from ${from.fullPath} to ${to.fullPath}`);
})
