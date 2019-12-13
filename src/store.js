import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    x: 0,
    y: 0,
    animationFlag: false
  },
  getters: {
    
  },
  mutations: {
    setCoordinate(state, coords) {
      state.x = coords.x;
      state.y = coords.y;
    },
    setAnimationFlag(state, status) {
      state.animationFlag = status
    },
  },
  actions: {
    setCoordinate(context, coords) {
      context.commit('setCoordinate', coords);
    },
    setAnimationFlag(context, status) {
      context.commit('setAnimationFlag', status);
    },
  }
});