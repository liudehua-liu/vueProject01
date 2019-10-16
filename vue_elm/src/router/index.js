import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
import Router from 'vue-router'
import Vant from 'vant';
import 'vant/lib/index.css';
import Home from '../components/LYH/Home'
import Cart from '../components/Bl_shop/Cart'
import ShopShow from '../components/Bl_shop/ShopShow'
import Ping from '../components/Bl_shop/Ping'
import SureBuy from '../components/Bl_shop/SureBuy'
import Dingdan from '../components/Bl_shop/Dingdan'
import AddD from '../components/Bl_shop/AddD'
import AddDizhi from '../components/Bl_shop/AddDizhi'
import dingdan from '../components/Bl_shop/Dingdan'
// import pricetou from '../components/Bl_shop/PriceTou'
import Longin from '../components/LYH/Longin'
import Downlond from '../components/LYH/Download'
import ServiceCentre from '../components/LYH/ServiceCentre'
import Question from '../components/LYH/Question'
import VipCard from '../components/LYH/VipCard'
import IntegralMall from '../components/LYH/IntegralMall'
import Balance from '../components/LYH/Balance'
import Detail from '../components/LYH/Detail'
import Benefit from '../components/LYH/Benefit'
import Points from '../components/LYH/Points'
import Detail2 from '../components/LYH/Detail2'
import Vipdescription from '../components/LYH/VipDescription'
import Usecart from '../components/LYH/UseCart'
import Invoice from '../components/LYH/InvoiceRecord'
import Payment from '../components/LYH/Payment'
import Searchbl from '../components/Bl_shop/Search_bl'
import TwoSearch from '../components/Bl_shop/TwoSearch'
import Pricetou from '../components/Bl_shop/PriceTou'
import Forget from '../components/LYH/Forget'
//------------------------------------------------
import Msite from '../components/lizixin/Msite'
import Food from '../components/lizixin/Food'
//-------------------------------------------
import Citys from "../components/Bl_shop/BegainCity"

Vue.use(Vant);

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home",component:Home},
    {path:"/cart",component: Cart,children:[
        {path:'',redirect:'shopshow'},
        {path:'shopshow',component:ShopShow},
        {path:'ping',component:Ping,default:ShopShow}
      ]},
    {path:"/surebuy",component:SureBuy},
    // {path:"/pricetou",component:PriceTou},
    {path:"/dingdan",component:Dingdan},
    {path:"/addD",component:AddD},
    {path:"/dizhi",component:AddDizhi},
    {path:"/longin",component:Longin},
    {path:"/cart",component: Cart},
    {path:"/downlond",component:Downlond},
    {path:"/service",component:ServiceCentre},
    {path:"/question",component:Question},
    {path:"/vipcard",component:VipCard},
    {path:'/vipdes',component:Vipdescription},
    {path:"/integralmall",component:IntegralMall},
    {path:"/balance",component:Balance,children:
        [{path:'detail',component:Detail}]
    },
    {path:"/benefit",component:Benefit},
    {path:"/points",component:Points,children:
        [{path:'detail',component:Detail2}]
    },
    {path:"/usecart",component:Usecart},
    {path:"/invoice",component:Invoice},
    {path:"/payment",component:Payment},
    {path:"/searchbl",component:Searchbl},
    {path:"/twosearch",component:TwoSearch},
    {path:"/pricetou",component:Pricetou},
    {path:"/forget",component:Forget},
    {path:"/msite",component:Msite},
    {path:"/food",component:Food},
    {path:"/city",component:Citys},


  ]
})
