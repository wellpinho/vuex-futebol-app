import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    championship: 'Campeonato Brasileiro',
    clubName: 'Floripa Comercial',
    news: [{
      id: 1,
      title: 'Começam os treinos para a nova temporada',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab vitae blanditiis nisi, sit error et commodi aspernatur saepe, consequatur molestias fuga expedita labore quaerat accusamus ipsum recusandae soluta. Ea, itaque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore ducimus, animi laudantium qui labore sit saepe nostrum voluptatem dicta sapiente! Accusantium quasi pariatur nihil facere nostrum quod impedit, ut doloremque!',
      date: '2020-01-01',
      img: 'news1.jpg',
      imgInfo: 'Notícia 1'
    }, {
        id: 2,
        title: 'Jogo de quarta-feira termina empatado',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab vitae blanditiis nisi, sit error et commodi aspernatur saepe, consequatur molestias fuga expedita labore quaerat accusamus ipsum recusandae soluta. Ea, itaque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore ducimus, animi laudantium qui labore sit saepe nostrum voluptatem dicta sapiente! Accusantium quasi pariatur nihil facere nostrum quod impedit, ut doloremque!',
        date: '2020-01-07',
        img: 'news2.jpg',
        imgInfo: 'Notícia 2'
    }, {
        id: 3,
        title: 'A inauguração do novo estádio será na semana que vem',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab vitae blanditiis nisi, sit error et commodi aspernatur saepe, consequatur molestias fuga expedita labore quaerat accusamus ipsum recusandae soluta. Ea, itaque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore ducimus, animi laudantium qui labore sit saepe nostrum voluptatem dicta sapiente! Accusantium quasi pariatur nihil facere nostrum quod impedit, ut doloremque!',
        date: '2020-01-20',
        img: 'news3.jpg',
        imgInfo: 'Notícia 3'
    }]
  },

  getters: {
    getChampionship(state) {
      return state.championship
    },

    getClubName(state) {
      return state.clubName
    },

    getNews(state) {
      return state.news
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

})