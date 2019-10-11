import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/LYH/Home'
import Cart from '../components/Bl_shop/Cart'
import ShopShow from '../components/Bl_shop/ShopShow'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home",component:Home},
    {path:"/cart",component: Cart},
    {path:"/shopshow",component:ShopShow}
  ]
})
