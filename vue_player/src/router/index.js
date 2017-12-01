import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Player from '@/components/Player'
import Controller from '@/components/Controller'
import About from '../components/About/About'
import Header from '../components/Front/Header'
import Home from '../components/Home'
import Vifs from '../components/Front/Vifs'
import Layout from '../components/Front/Layout'
import VuexSample from '../components/Front/VuexSample'
import CSS_PlayGround from '../components/Front/CSS_PlayGround'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    // },
    {
      path: '/player',
      name: 'Player',
      component: Player
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/header',
      name: 'Header',
      component: Header
    }, {
      path: '/vifs',
      name: 'vifs',
      component: Vifs
    }, {
      path: '/layout',
      name: 'layout',
      component: Layout
    },{
      path: '/samples/vuex',
      name: 'vuex',
      component: VuexSample
    },{
      path: '/css/css_positioning',
      name: 'cssPositioning',
      component: CSS_PlayGround
    }
  ],
  mode: 'history'
})
