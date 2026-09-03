import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import reveal from './directives/reveal'
import './styles/global.scss'

const app = createApp(App)

app.directive('reveal', reveal)
app.use(router)
app.mount('#app')
