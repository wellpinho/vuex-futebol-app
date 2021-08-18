import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    championship: 'Campeonato Brasileiro',
    clubName: 'Floripa Comercial'
  },

  getters: {
    getChampionship(state) {
      return state.championship
    },
    getClubName(state) {
      return state.clubName
    }
  }
})