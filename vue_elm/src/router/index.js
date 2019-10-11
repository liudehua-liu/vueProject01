import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/LYH/Home'
import Cart from '../components/Cart'



Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home",component:Home},
    {path:"/cart",component: Cart},
  ]
})
