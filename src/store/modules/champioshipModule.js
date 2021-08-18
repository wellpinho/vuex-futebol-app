export default {
  state: {
    championship: 'Campeonato Brasileiro',
  },

  getters: {
    getChampionship(state) {
      return state.championship
    }
  },

  mutations: {
    setChampioship(state, newValue) {
      state.championship = newValue
    }
  },

  actions: {
    changeChampioship(context, value) {
      // chama a função setChampioship da mutation e envia o valu como param
      context.commit('setChampioship', value)
    }
  }
}