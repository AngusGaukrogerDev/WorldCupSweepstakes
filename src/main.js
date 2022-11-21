import AOS from 'aos'
import 'aos/dist/aos.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style.css'

createApp(App).use(router).use(store).use(AOS.init()).mount('#app')
