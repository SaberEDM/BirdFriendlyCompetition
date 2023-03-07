import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/view/home_page.vue'
import LoginPage from '../components/view/login_page.vue'
import RegisterPage from '../components/view/register_page.vue'
import RankPage from '../components/view/rank_page.vue'
import ResultPage from '../components/view/result_page.vue'
import CompetitionPage from '../components/view/competition_page.vue'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/register',
        component: RegisterPage
    },
    {
        path: '/rank',
        component: RankPage
    },
    {
        path: '/result',
        component: ResultPage
    },
    {
        path: '/competition',
        component: CompetitionPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router