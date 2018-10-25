import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: [],
    video: {},
    like: ''
  },
  mutations: {
    setVideos (state, payload) {
      state.videos = payload
    },
    seVideoById (state, payload) {
      state.video = payload
    },
    setLike (state, payload) {
      state.like = payload
    }
  },
  actions: {
    getVideoById (context, id) {
      // axios
      //   .get(`https://redoverflow-server.hanabc.xyz/questions/${id}`)
      //   .then(response => {
      //     context.commit('setQuestionById', response.data.question)
      //   })
      //   .catch(err => {
      //     console.log('get error', err.response)
      //   })
    },
    getAllVid (context, input) {
      if (input) {
        axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAlWPAuxxBWFumEkr5tK9Syh0Wv2DQPTKM&part=snippet&maxResults=20&q=${input}`)
        // fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAlWPAuxxBWFumEkr5tK9Syh0Wv2DQPTKM&part=snippet&maxResults=20&q=surfing')
          // .then(response => response.json())
          .then(response => {
            console.log('get list', response.data.items)
            context.commit('setVideos', response.data.items)
          })
          .catch(err => {
            console.log('get error', err.response)
          })
      } else {
        axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAlWPAuxxBWFumEkr5tK9Syh0Wv2DQPTKM&part=snippet&maxResults=20&q=walker`)
          .then(response => {
            console.log('get list', response.data.items)
            context.commit('setVideos', response.data.items)
          })
          .catch(err => {
            console.log('get error', err.response)
          })
      }
    }
  }
})
