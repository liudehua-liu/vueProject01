import Vue from 'vue'
import Router from 'vue-router'
import Home  from '../Components/Home'
import Cart from '../Components/Cart'
import Shop from '../Components/Shop'


Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home",component:Home},
    {path:"/cart",component:Cart},
    {path:"/shop",component:Shop}
  ]
})
