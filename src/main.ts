import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import App from './App.vue'
import './assets/tailwind/index.css'
import './assets/element-plus/index.css'

createApp(App).use(ElementPlus).mount('#app')
