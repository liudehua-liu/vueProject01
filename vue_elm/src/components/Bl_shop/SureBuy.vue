<template>
  <div class="buy">
    <div class="buyTitle">
      <router-link class="buyz" :to="{path:'/cart'}">
        <i class="icon-arrow-right iconfont"></i>
      </router-link>

      <h3>确认订单</h3>
      <router-link class="buya" :to="{path:'/longin'}">登录注册</router-link>
    </div>

    <router-link class="buyAdda" :to="{path:'/addD'}">
      <div class="buyAddL">
        <i class="icon-location iconfont buyi"></i>
        <!--<span>请添加一个收货地址</span>-->
        <input type="text" placeholder="请添加一个收货地址" v-model="putzhi">
      </div>

      <i class="icon-right-arrow iconfont buyi buyii"></i>
    </router-link>


    <div class="gettime">
      <h3 class="htime">送达时间</h3>
      <div class="gettime_right">
        <p class="quick">尽快送达 | 预计 20:58</p>
        <p class="feng_bl">蜂鸟专送</p>
      </div>
    </div>

    <!--第三块-->
    <div class="sale_bl">
      <div class="sale_top">
        <span class="sale_s">支付方式</span>
        <p @click="temp=!temp">在线支付</p>
        <!----------------------------------------------------->

        <!------------------------------------------------>
      </div>


      <div class="sale_button"><p>红包</p>
        <p>暂时只在饿了么APP中支持</p></div>
    </div>

    <!--效果演示-->
    <div class="sale_show">
      <div class="sale_img">
        <img src="http://elm.cangdu.org/img/164ad0b6a3917599.jpg" alt=""><span>效果演示</span>

      </div>
      <div class="show-center">
        <div class="center_t">
          <p class="center_w">味道切尔奇二群翁</p>
          <p class="senternum">x 2</p>
          <p>￥20</p>
        </div>
        <div class="center_price"><p>餐盒</p>
          <p>￥500</p></div>
        <div class="center_get">
          <p>配送费</p>
          <p>￥4</p>
        </div>
      </div>
      <div class="show_sure">
        <div class="sure_p"><span class="price_bl">订单￥5000</span><span class="price_red">待支付</span></div>
        <div class="allprice">￥5000</div>
      </div>
    </div>


    <!--订单备注-->
    <div class="sale_bl s_footer">
      <router-link :to="{path:'/dingdan'}">
        <div class="sale_top"><p class="sale_s">订单备注</p>
          <p>口味、偏好等 ></p></div>
      </router-link>
      <router-link :to="{path:'/pricetou'}">
        <div class="sale_button"><p class="piao">发票抬头</p>
          <p>不需要开发票 ></p></div>
      </router-link>
    </div>


    <!--底部定位-->
    <div class="buy_foot">
      <p class="bfp">待支付 ￥5000</p>
      <!--<p class="buyfoot_a">确认下单</p>-->

      <!--<router-link :to="{}">-->

      <p class="buyfoot_a" @click="sureadd">确认下单</p>
      <!--</router-link>-->

      <div class="emp"></div>
    </div>


    <!--定位点击出现底部弹框-->
    <div class="fixed_button" v-if="temp">
      <p class="fustyle">支付方式</p>

      <!------------------------------------------------------->

      <van-radio-group v-model="radio" class="cha_color">
        <van-radio name="1" checked-color="#07c160" label-position="left">货到付款(商家不支持货到付款)</van-radio>

        <van-radio name="2" checked-color="#07c160" label-position="left" class="cha_color">在线支付</van-radio>
      </van-radio-group>

      <!------------------------------------->
    </div>


    <!--没地址的时候出现弹框-->
    <div class="duang" v-if="duang">
      <div class="duang_top">
        <p class="tanp">!</p>
        <p class="pleased">请登录</p>
      </div>
      <p class="quegreen">确认</p>
    </div>

  </div>
</template>

<script>
  export default {
    name: "SureBuy",
    data() {
      return {
        radio: '1',
        show: false,
        peiData: [],
        temp: false,
        putzhi: "",
        duang: false
      }
    },
    created() {
      this.axios.get("https://elm.cangdu.org/bos/orders?offset=0&limit=20").then((response) => {
        console.log(response.data);
      })
    },
    methods: {
      showPopup() {
        this.show = true;
      },
      // 确认订单时候判断是否添加地址
      sureadd() {
        if (this.putzhi != "") {
          this.$router.push({path: '/payment'});
        }
        else {
          // this.$router.push({path:'/payment'});
          this.duang = true;
        }
      },

    }

  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452315_dfhjtur1rx.css";
  @import "//at.alicdn.com/t/font_1452315_kwudlwya1u.css";
  @import "//at.alicdn.com/t/font_1452315_br1lq9enxcs.css";

  * {
    padding: 0;
    margin: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-size: 16px;
  }

  .iconfont {
    font-size: 1.5rem;
    padding-left: 0.3rem;
  }

  .buya {
    text-decoration: none;
    padding-right: 0.4rem;
    color: white;
  }

  .buy {
    width: 100%;
    color: black;
    height: 41.3rem;
    background-color: gainsboro;
    position: relative;
    background-color: rgb(245, 245, 245);
  }

  .buyz {
    text-decoration: none;
    color: white;
  }

  .buyTitle {
    width: 100%;
    height: 2.7rem;
    background-color: rgb(49, 144, 232);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .buyAdda {
    width: 100%;
    height: 12%;
    display: block;
    color: black;
    background-color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .buyi {
    font-size: 1.1rem;
  }

  .buyii {
    padding-right: 1rem;
  }

  .buyAddL {
    padding-left: 1rem;
  }

  .gettime {
    width: 100%;
    height: 6rem;
    color: black;
    margin-top: 0.5rem;
    background-color: white;
  }

  .htime {
    width: 35%;
    float: left;
    line-height: 6rem;
    text-align: center;
  }

  .gettime_right {
    float: right;
    padding-right: 1rem;
    text-align: right;
  }

  .quick {
    margin-top: 1.2rem;
    color: royalblue;
  }

  .feng_bl {
    width: 3.8rem;
    border-radius: 0.2rem;
    margin-top: 0.5rem;
    color: white;
    font-size: 0.7rem;
    text-align: center;
    margin-left: 5rem;
    padding: 0.06rem 0;
    background-color: rgb(49, 144, 232);
  }

  .sale_bl {
    /*width: 100%;*/
    height: 6rem;
    background-color: white;
    margin-top: 0.5rem;
    color: darkgrey;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 0 1rem;
  }

  .sale_top {
    border-bottom: 0.05rem solid ghostwhite;
    display: flex;
    padding: 0.7rem 0;
    justify-content: space-between;
  }

  .sale_button {
    display: flex;
    font-size: 0.8rem;
    padding-bottom: 0.2rem;
    justify-content: space-between;
  }

  .sale_s {
    color: black;
  }

  .sale_show {
    width: 100%;
    height: 18rem;
    margin-top: 0.5rem;
    background-color: white;
  }

  .sale_img {
    width: 95%;
    height: 4.3rem;
    line-height: 4.3rem;
    font-size: 1.3rem;
    color: black;
    padding-left: 5%;
    border-bottom: 0.05rem solid ghostwhite;
  }

  .sale_show img {
    width: 2rem;
    margin-top: 1.2rem;
    vertical-align: text-bottom;
    padding-right: 0.5rem;
  }

  .show-center {
    height: 7.5rem;
    padding: 0 1rem;
    background-color: white;
    border-bottom: 0.05rem solid ghostwhite;
  }

  .center_t {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .senternum {
    padding-left: 5rem;
    color: red;
  }

  .center_price {
    display: flex;
    justify-content: space-between;
    margin: 1.3rem 0;
  }

  .center_get {
    display: flex;
    justify-content: space-between;
  }

  .price_bl {
    margin-right: 11rem;
  }

  .show_sure {
    padding: 0.7rem;
    /*background-color: red;*/
  }

  .allprice {
    margin: 1rem 2.6rem 0.5rem 0;
    text-align: right;
    color: red;
  }

  .s_footer {
    margin-bottom: 2rem;
    border-bottom: 3rem solid gainsboro;
  }

  .price_red {
    color: red;
  }

  .piao {
    color: black;
  }

  .buy_foot {
    width: 100%;
    height: 3.5rem;
    position: fixed;
    left: 0;
    top: 38.6rem;
    background-color: powderblue;
  }

  .emp {
    clear: both;
  }

  .bfp {
    width: 65%;
    height: 3.5rem;
    line-height: 3.5rem;
    background-color: black;
    float: left;
    color: white;
  }

  .buyfoot_a {
    width: 35%;
    height: 3.5rem;
    line-height: 3.5rem;
    color: white;
    float: right;
    text-align: center;
  }

  .fixed_button {
    width: 100%;
    height: 3rem;
    background-color: darkorange;
    position: fixed;
    left: 0;
    top: 30rem;
    color: black;
  }

  .fustyle {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    background-color: ghostwhite;
  }

  /*.fixed_button div{*/
  /*width: 90%;*/
  /*padding: 0 5%;*/
  /*height: 3rem;*/
  /*line-height: 3rem;*/
  /*}*/
  .cha_color {
    width: 90%;
    background-color: white;
    height: 65%;
    padding: 5% 0;
  }

  .duang {
    width: 76%;
    position: absolute;
    left: 12%;
    top: 28%;
    text-align: center;
    background-color: white;
    border-radius: 8%;
  }

  .duang_top {
    width: 100%;
    padding: 10% 0;
  }

  .tanp {
    width: 4.5rem;
    height: 4.5rem;
    line-height: 4.5rem;
    margin: 0 auto;
    border: 0.3rem solid rgb(248, 203, 134);
    color: rgb(248, 203, 134);
    border-radius: 50%;
    font-size: 4rem;
    text-align: center;
    /*background-color: red;*/
  }

  .quegreen {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    /*padding: 3% 0;*/
    text-align: center;
    color: white;
    background-color: rgb(76, 217, 100);
    border-bottom-left-radius: .35rem;
    border-bottom-right-radius: .35rem;
  }

  .pleased {
    padding-top: 8%;
  }
</style>
