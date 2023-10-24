import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

import router from './router'
import store from './store'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

createApp(App)
    .use(store)
    .use(router)
    .use(bootstrap)
    
    .mount('#app')