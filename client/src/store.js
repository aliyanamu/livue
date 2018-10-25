import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    like: '',
    likes: []
  },
  mutations: {
    setLikes (state, payload) {
      state.likes = payload
    },
    setOneLike (state, payload) {
      state.like = payload
    },
    setLikeObj (state, payload) {
      state.like = payload
    }
  },
  actions: {
    getLike(context) {
      axios({
        url: `http://localhost:3000/videos/list`
      })
        .then(response => {
          context.commit('setLikes', response.data.videos)
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    likeVid (context, data) {
      axios({
        method: 'POST',
        url: `http://localhost:3000/videos/like/${data.title}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          title: data.title,
          image: data.image,
          desc: data.desc,
        }
      })
        .then(response => {
          context.commit('setOneLike', response.data.like)
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    unlikeVid (context, data) {
      axios({
        method: 'POST',
        url: `http://localhost:3000/videos/unlike/${data.title}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          title: data.title,
          image: data.image,
          desc: data.desc,
        }
      })
        .then(response => {
          context.commit('setOneLike', response.data.unlike)
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  }
})
