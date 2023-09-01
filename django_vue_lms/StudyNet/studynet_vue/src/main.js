import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import '../my_styles.scss'

//axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.baseURL = 'https://127.0.0.1:8000'

createApp(App).use(store).use(router, axios).mount('#app') //axios has to be behind router
