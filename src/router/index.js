import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import History from '../views/History.vue'
import Screen from '../views/Screen.vue'
import ViewProfile from '../views/ViewProfile.vue'
import EditProfile from '../views/EditProfile.vue'
import Result from '../views/Result.vue'
import Predict from '../views/Predict.vue'
import EmptyView from '../views/EmptyView.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/app',
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
    component: EmptyView,
    children: [
      {
        path: '',
        component: Result,
      },
      {
        path: ':className/:confidence/:picId',
        name: 'Result',
        component: Result
      },
      
    ],
  },
  {
    path: '/predict',
    name: 'Predict',
 
    component:Predict
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
