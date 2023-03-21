import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/view/home.vue'
import LoginPage from '../components/view/login.vue'
import RegisterPage from '../components/view/register.vue'
import RankPage from '../components/view/rank.vue'
import MatchPage from '../components/view/match.vue'
import ResultPage from '../components/view/result.vue'
import CompetitionRankPage from '../components/view/competition_rank.vue'
import CompetitionRoomPage from '../components/view/competition_room.vue'
import CompetitionDetailsPage from '../components/view/competition_details.vue'
import ProfilePage from '../components/view/profile.vue'
import ErrorPage from '../components/view/error.vue'

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
        path: '/competition-room',
        component: CompetitionRoomPage
    },
    {
        path: '/competition-rank',
        component: CompetitionRankPage
    },
    {
        path: '/competition-detail/:id',
        component: CompetitionDetailsPage,
        name: 'competitionDetail'
    },
    {
        path: '/profile',
        component: ProfilePage
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: ErrorPage 
    },
    

]

const router = createRouter({
    history: createWebHistory(), 
    routes: routes,
})

export default router