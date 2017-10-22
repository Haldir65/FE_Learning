// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {clog} from './mixins/utils'

Vue.config.productionTip = false


Vue.use(router)
Vue.mixin({
  methods:{
    log : function (msg) {
      clog(msg);
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  router:router
})
