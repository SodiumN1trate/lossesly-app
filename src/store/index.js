import { createStore } from 'vuex'
import axios from "axios";
export default createStore({
  state: {
    userToken: localStorage.getItem('token') || null,
    popups: [],
    user: null
  },
  getters: {
  },
  mutations: {
    setPopup (state, popup) {
      state.popups.push({
        popupText: popup.text,
        popupType: popup.type,
        popupShowTime: popup.seconds || 2
      })
    },
    clearPopup (state) {
      state.popups = []
    },
    popPopup (state, index) {
      state.popups.splice(index, 1)
    },
    setUserToken (state, token) {
      state.userToken = token
      localStorage.setItem('token', token)
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    async register(state, data) {
      await axios.post('/register', data).then((response) => {
        state.commit('setPopup', {
          type: 'success',
          text: 'Apsveicam, Jūs veiksmīgi reģistrējāties!',
          seconds: 3
        })
        window.location.href = '#profile'
        state.commit('setUserToken', response.data.access_token)
        state.commit('setUser', response.data.user)
      }).catch((e) => {
        if(typeof e.response.data.errors === 'object') {
          for (const [key, value] of Object.entries(e.response.data.errors)) {
            state.commit('setPopup', {
              type: 'danger',
              text: value[0],
              seconds: 5,
              key: key
            })
          }
        } else {
          state.commit('setPopup', {
            type: 'danger',
            text: e.response.data.data[0],
            seconds: 5,
          })
        }
      })
    },
    async login (state, data) {
      await axios.post('/login', data).then((response) => {
        state.commit('setPopup', {
          type: 'success',
          text: 'Veiksmīga autentifikācija',
          seconds: 3
        })
        window.location.href = '#profile'
        state.commit('setUserToken', response.data.access_token)
        state.commit('setUser', response.data.user)
      }).catch((e) => {
        if(typeof e.response.data.errors === 'object') {
          for (const [key, value] of Object.entries(e.response.data.errors)) {
            state.commit('setPopup', {
              type: 'danger',
              text: value[0],
              seconds: 5,
              key: key
            })
          }
        } else {
          state.commit('setPopup', {
            type: 'danger',
            text: e.response.data.data[0],
            seconds: 5,
          })
        }
      })
    }
  },
  modules: {
  }
})
