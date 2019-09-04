import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import gifts from './modules/gifts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    gifts
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      paths: ['gifts.selectedGiftsStateById']
    })
  ]
});
