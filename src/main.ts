import './assets/main.css'

import { createApp } from 'vue'
import App from './App_Comsumy.vue'
import router from './router/index_Consumy'

const app = createApp(App)

app.use(router)

app.mount('#app')
