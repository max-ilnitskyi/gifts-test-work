import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/router/views/Main.vue';
import Basket from '@/router/views/Basket.vue';

Vue.use(Router);

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
    }
  ]
});
