import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import AboutUs from '@/components/AboutUs.vue'
import TOS from '@/components/TermsOfService.vue'
import PrivacyPolicy from '@/components/PrivacyPolicy.vue'
import CookieStatement from '@/components/CookieStatement.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about-us', component: AboutUs },
    { path: '/terms-of-service', component: TOS },
    { path: '/privacy-policy', component: PrivacyPolicy },
    { path: '/cookie-statement', component: CookieStatement }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
