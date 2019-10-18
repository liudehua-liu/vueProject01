<template>
<div class="cart_one" :style="{background:'url('+'http://elm.cangdu.org/img/'+arrbl.image_path+')',backgroundSize:'100%'}">
  <div class="diantou" >
  <router-link :to="{path:'/msite'}">
    <i class="icon-arrow-right iconfont "></i>
  </router-link>

     <div class="flex-container">
       <div class="flex-item">
         <img :src="'http://elm.cangdu.org/img/'+arrbl.image_path"   alt="">

       </div>
       <div class="flex-item1">
         <h4>{{arrbl.name}}</h4>
         <p>商家配送/分钟送达/配送费￥{{arrbl.float_delivery_fee}}</p>
         <p>公告:{{arrbl.promotion_info}}</p>
       </div>

     </div>

    <!--满减信息-->
     <div class="manjian">
       <span class="jian">{{arrbl.activities[0].icon_name}}</span>
       <span>{{arrbl.activities[0].description}}</span>
       </div>
  </div>


  <!--店铺头下边-->
     <div class="cart_mark">
       <router-link :to="{path:'/cart/shopshow'}">商品</router-link>
       <router-link :to="{path:'/cart/ping'}">评价</router-link>
     </div>

  <router-view></router-view>

  <!--定位底部-->

<div id="footer_bl">
  <div id="foot_L">
    <h2>￥0.00</h2>
    <p>配送费￥5</p>
  </div>
  <!--<div id="foot_R"><p>还差20元起送</p></div>-->
  <router-link class="foota" :to="{path:'/surebuy'}"><div id="foot_R">还差20元起送</div></router-link>
  <div class="emp"></div>
</div>

</div>
</template>

<script>
    export default {
        name: "Cart",
      data(){
          return{
            arrbl:[]
          }
      },
      created(){
        console.log(this.$route.query.dianName);
        this.arrbl=this.$route.query.dianName;
        console.log(this.arrbl);
      }
    }
</script>

<style scoped>

@import "//at.alicdn.com/t/font_1452315_dfhjtur1rx.css";
  *{
    padding: 0;
    margin: 0;
  }
body,html{
  width: 100%;
}
.iconfont{
  font-size: 1.2rem;
 font-weight: bolder;
  position: absolute;
  left: 7px;
  top:7px;
}
.diantou{
  width: 100%;
  background:rgba(245,245,245,0.5);
  /*opacity: 0.2;*/

  /*<img :src="'http://elm.cangdu.org/img/'+arrbl.image_path"   alt="">*/
  /*background: ""url("'http://elm.cangdu.org/img/'+arrbl.image_path");*/
}
.cart_mark{
  width: 100%;
  height: 8%;
  background-color: white;
  display: -webkit-flex;
  align-items: stretch;
  -webkit-justify-content: space-around;
  align-items:center;
  border-bottom:0.05rem solid gainsboro;
}
  .cart_one{
    width: 100%;
    color: white;
    height: 41.3rem;
    position: relative;

  }

.flex-container {
  width: 100%;
  display: -webkit-flex;
  align-items: stretch;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  height: 13%;
  /*background-color: darkgrey;*/
}
.flex-item {
  width: 20%;
  margin-right: 5%;
  -webkit-justify-content: space-around;
  justify-content: space-around;
}
.flex-item1 {
  display: -webkit-flex;
  flex-direction: column;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  width: 75%;
}

  .flex-item1>p{
    font-size: 14px;
  }
.flex-item img{
  width: 95%;
  margin-top: 10px;
  margin-left: 10px;
  justify-content: space-between;
}



  #footer_bl{
    width: 100%;
    height: 3.3rem;
    position: fixed;
    left: 0;
    top:38.3rem;
    text-align: center;
  }
#foot_L{
  width: 65%;
  height: 100%;
  float: left;
  font-size: 0.8rem;
  background-color: dimgray;
}
#foot_R{
  width:35%;
  height: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 3.3rem;
  background-color: darkgrey;
  float: left;
}
  .foota{
    text-decoration: none;
    color: white;
  }
  .manjian{
    color: white;
    font-size: .4rem;
  }
  .jian{
    padding: 0.04rem;
    border: .025rem solid #fff;
    border-radius: .1rem;
    font-size: .4rem;
    display: inline-block;
    background-color: red;
    color: white;
  }
</style>
