import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Main,
    children:[
      {
        name:'home',
        path:'/',
        component:Home
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
