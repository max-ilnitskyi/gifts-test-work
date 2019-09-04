import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta';

import Home from '@/router/views/Main.vue';
import Basket from '@/router/views/Basket.vue';
import NotFound from '@/router/views/NotFound.vue';

Vue.use(Router);

Vue.use(VueMeta, {
  keyName: 'page'
});

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Home
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    },
    {
      path: '*',
      name: 'Not found',
      component: NotFound
    }
  ]
});
