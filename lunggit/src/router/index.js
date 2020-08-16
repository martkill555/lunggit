import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import History from '../views/History.vue'
import Screen from '../views/Screen.vue'
import ViewProfile from '../views/ViewProfile.vue'
import EditProfile from '../views/EditProfile.vue'
import Result from '../views/Result.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'Main',
 
    component: Main
  },
  {
    path: '/history',
    name: 'History',
 
    component: History
  }
  ,
  {
    path: '/screen',
    name: 'Screen',
 
    component: Screen
  }
  ,
  {
    path: '/viewprofile',
    name: 'ViewProfile',
 
    component: ViewProfile
  }
  ,
  {
    path: '/editProfile',
    name: 'EditProfile',
 
    component: EditProfile
  },
  {
    path: '/result',
    name: 'Result',
 
    component: Result
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
