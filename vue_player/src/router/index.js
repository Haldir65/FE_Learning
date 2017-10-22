import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Player from '@/components/Player'
import Controller from '@/components/Controller'
import About from '../components/About/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello},
    // },
    // {
    //   path: '/',
    //   name: 'Player',
    //   component: Player
    // },
    // {
    //   path: '/',
    //   name: 'Controller',
    //   component: Controller
    // },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
	mode:'history'
})
