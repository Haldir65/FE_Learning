// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueBus from 'vue-bus'
import axios from 'axios'




import {clog} from './mixins/utils'
export {axios}
import store from './state/state.js'
import MaterialCard from './components/widgets/MaterialCard'



Vue.config.productionTip = false


Vue.use(VueBus);

Vue.mixin({
  methods:{
    log : msg => clog(msg)
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  router:router
})
