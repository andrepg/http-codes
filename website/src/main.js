import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Links from './links'

const app = createApp(App)

app.use(router)
app.provide("links", Links)
app.mount('#app')
