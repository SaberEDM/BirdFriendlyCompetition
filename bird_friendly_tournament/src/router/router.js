import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/view/home.vue'
import LoginPage from '../components/view/login.vue'
import RegisterPage from '../components/view/register.vue'
import RankPage from '../components/view/rank.vue'
import MatchPage from '../components/view/match.vue'
import ResultPage from '../components/view/result.vue'
import CompetitionPage from '../components/view/competition.vue'

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
        path: '/match',
        component: MatchPage
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
    routes
})

export default router