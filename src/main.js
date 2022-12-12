import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = process.env.VUE_APP_API_ADDRESS
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')


createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')

if(store.state.userToken) {
    axios.get('/user').then((response) => {
        store.commit('setUser', response.data)
    })
}
