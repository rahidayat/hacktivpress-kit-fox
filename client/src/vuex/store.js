import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: `http://localhost:3000/api`
})

Vue.use(Vuex)

const state = {
  articles: []
}

const mutations = {
  setArticles (state, payload) {
    state.articles = payload
  }
}

const actions = {
  getAllArticles (context) {
    http.get('/articles')
    .then(result => {
      console.log('data di actions: ', result.data)
      context.commit('setArticles', result.data)
      // this.questions = result.data
    })
    .catch(err => console.error(err))
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
