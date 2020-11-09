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
import HistoryStaff from '../views/HistoryStaff.vue'

Vue.use(VueRouter)
const guardAuth = async (to, from, next) => {
  if (localStorage.getItem('Token') || sessionStorage.getItem('Token')) {
    next(); // TODO: implement token expire check
  } else {
    next({ name: 'Home' });
  }
};

  const routes = [
  {
    path: '/',
    name: 'Home',
    
    component: Home
  },
  {
    path: '/app',
    name: 'Main',
    beforeEnter: guardAuth,
    component: Main
  },
  {
    path: '/history',
    name: 'History',
    beforeEnter: guardAuth,
    component: History
  }
  ,
  {
    path: '/screen',
    name: 'Screen',
    beforeEnter: guardAuth,
    component: Screen
  }
  ,
  {
    path: '/viewprofile',
    name: 'ViewProfile',
    beforeEnter: guardAuth,
    component: ViewProfile
  }
  ,
  {
    path: '/editProfile',
    name: 'EditProfile',
    beforeEnter: guardAuth,
    component: EditProfile
  },
  {
    path: '/result',
    beforeEnter: guardAuth,
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
    beforeEnter: guardAuth,
    component:Predict,
    children: [
    {
      path: ':firstname/:lastname/:DOB',
      name: 'Result',
      component: Result
    },
    ],
 
    component:Predict
  },
  {
    path: '/historyStaff',
    name: 'HistoryStaff',
 
    component:HistoryStaff
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
