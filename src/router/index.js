import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import store from '../store'
// import fb from '../firebase'


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
    path:'/saved-items',
    name:'Saved Items',
    component: () => import('../components/SavedItems'),
    meta:{requiresAuth:true}

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

router.beforeEach((to,from,next) => {
  let requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const isLoggedIn = store.getters.isLoggedIn

  if(requiresAuth && !isLoggedIn){
    next({name:'Login'})
  } else if(requiresAuth && isLoggedIn){
    next()
  }else{
    next()
  }
})

export default router
