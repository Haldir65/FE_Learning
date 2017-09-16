import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Player from '@/components/Player'
import Controller from '@/components/Controller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Player',
      component: Player
    },
    {
      path: '/',
      name: 'Controller',
      component: Controller
    }
  ]
})
