import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueScrollTo from 'vue-scrollto'
import router from './router'  // Import the router

loadFonts()

createApp(App)
    .use(vuetify)
    .use(VueScrollTo)
    .use(router)  // Use the router
    .mount('#app')
