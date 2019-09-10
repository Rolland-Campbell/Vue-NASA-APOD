import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

//NOTE used the Terminal to import axios. command: npm i axios. 

Vue.use(Vuex)

let api = axios.create({
  baseURL:
    'https://api.nasa.gov/planetary/'
})

export default new Vuex.Store({
  state: {
    //NOTE you need to have {}objects, or []arrays to put the data in. 
    picture: [],
    apodPicture: {}
  },

  mutations: {
    //NOTE mutations bring in the state, and the data from actions. Then it changes the state.
    setPicture(state, picture) {
      state.picture = picture
    },
    apodPicture(state, picture) {
      state.apodPicture = picture
    }
  },

  actions: {
    //NOTE this brings in the request from the picture.vue
    async getPicture({ commit, dispatch }, searchQuery) {
      try {
        //NOTE this calls the api, adds the string to it, and concats the searchQuery onto it. 
        let res = await api.get('apod?api_key=UQqMauOVXbE3ldQFVYlgdlQ4wTpH8ZbeUP8ODnZC&date=' + searchQuery)
        console.log(res);
        //NOTE commit sends the result to the mutations
        commit('setPicture', res.data)
      } catch (error) {

      }
    },
    selectPicture({ commit }, picture) {
      commit('setPicture', picture)
    }
  }
})
