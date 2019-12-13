import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    x: 0,
    y: 0
  },
  getters: {
    
  },
  mutations: {
    setCoordinate(state, coords) {
      state.x = coords.x;
      state.y = coords.y;
    },
  },
  actions: {
    setCoordinate(context, coords) {
      context.commit('setCoordinate', coords);
    },
  }
});