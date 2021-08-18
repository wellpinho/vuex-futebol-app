export default {
  state: {
    clubName: 'Floripa Comercial'
  },

  getters: {
    getClubName(state) {
      return state.clubName
    }
  },

  mutations: {
    setClubName(state, newName) {
      state.clubName = newName
    }
  },

  actions: {
    updateClubName(context, value) {
      context.commit('setClubName', value)
    }
  }
}