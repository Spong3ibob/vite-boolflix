import { createApp } from 'vue'
import App from './App.vue'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { library, icon } from '@fortawesome/fontawesome-svg-core'


createApp(App).mount('#app')

library.add(faCamera)
const camera = icon({ prefix: 'fas', iconName: 'camera' })
