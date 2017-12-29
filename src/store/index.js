import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    captainLevel: 1,
    teamNumber: 1,
    resourceFilter: [
      'human_resource',
      'ammo',
      'ration',
      'component',
    ],
  },
  mutations: {
    updateCaptainLevel(state, payload) {
      state.captainLevel = payload.level;
    },
    updateTeamNumber(state, payload) {
      state.teamNumber = payload.number;
    },
    updateResourceFilter(state, payload) {
      state.resourceFilter = payload.filter;
    },
  },
});
