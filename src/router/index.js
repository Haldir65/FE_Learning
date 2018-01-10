import Vue from 'vue';
import Router from 'vue-router';
import card from '@/components/card/card';
import day from '@/components/day/day';
import welfare from '@/components/welfare/welfare';
import testlist from '../components/test/list/list';

import App from '../App';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: App
    },
    {
      path: '/card',
      name: 'card',
      component: card
    },
    {
      path: '/day',
      name: 'day',
      component: day
    },
    {
      path: '/welfare',
      name: 'welfare',
      component: welfare
    },
    {
      path: '/test/list',
      name: 'list',
      component: testlist
    }
  ]
});
