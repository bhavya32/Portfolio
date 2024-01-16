import './assets/main.css'
import VueWriter from "vue-writer";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(router)
app.use(VueWriter)

app.mount('#app')
