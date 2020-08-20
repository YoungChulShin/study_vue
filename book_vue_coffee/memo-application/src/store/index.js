import Vue from 'vue';
import Vuex from 'vuex';

import state from './states.js';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

// Vuex를 사용하기 위해서
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
