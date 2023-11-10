import { createApp } from 'vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/global.css'
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'vue-toastification'
import {plugin, defaultConfig} from '@formkit/vue'

createApp(App)
    .use(store)
    .use(router)
    .use(Toast, {
        transition: "my-custom-fade",
        maxToasts: 107,
        newestOnTop: true})
    .use(plugin, defaultConfig())
    .mount('#app')