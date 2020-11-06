import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/Register')
  },
  {
    path: '/browse',
    name: 'Browse',
    component: () => import('../components/Browse')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
