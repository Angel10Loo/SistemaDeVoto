import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',

            component: () =>
                import ('./views/About.vue')
        },
        {
            path: '/Contact',
            name: 'Contact',


            component: () =>
                import ('@/views/Contact.vue')
        },
        {
            path: '/Users',
            name: 'Users',

            component: () =>
                import ('@/views/Users.vue')
        },
        {
            path: '/States',
            name: 'States',

            component: () =>
                import ('@/views/States.vue')
        },
        {
            path: '/Groups',
            name: '/Groups',

            component: () =>
                import ('@/views/Groups.vue')
        },
        {
            path: '/Votings',
            name: 'Votings',

            component: () =>
                import ('@/views/Votings.vue')
        }

    ]
})