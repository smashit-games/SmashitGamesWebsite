import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueScrollTo from 'vue-scrollto'

loadFonts()

createApp(App)
    .use(vuetify)
    .use(VueScrollTo)
    .mount('#app')
