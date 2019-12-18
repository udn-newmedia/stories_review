import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    x: 0,
    y: 0,
    controllerFlag: false
  },
  getters: {
    
  },
  mutations: {
    setCoordinate(state, coords) {
      state.x = coords.x;
      state.y = coords.y;
    },
    setControllerFlag(state, status) {
      state.controllerFlag = status
    }
  },
  actions: {
    setCoordinate(context, coords) {
      context.commit('setCoordinate', coords);
    },
    setControllerFlag(context, status) {
      context.commit('setControllerFlag', status);
    }
  }
});