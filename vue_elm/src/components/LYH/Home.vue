<template>
    <fieldset>
      <div id="app">
        <div id="head">
          <router-link :to="{path:'/msite'}">
          <i class="iconjiantou-px--copy-copy iconfont"></i>
          </router-link>
          <span class="my">我的</span>
        </div>
        <div class="h"></div>
        <div id="longin">
          <a href="http://localhost:8080/#/longin">
            <i class="icontouxiang iconfont" id="tx"></i>
            <div class="dz">
              <p class="dl">{{getname}}</p>
              <i class="iconshouji iconfont" id="phone"></i><span class="wu">暂无绑定手机号</span>
            </div>
            <i class="iconarrow iconfont" id="right"></i>
          </a>
        </div>
        <div  class="my_money">
          <router-link :to="{path:'/balance'}">
          <div  class="yu_e">
            <span class="zero">0.00</span>元
            <p>我的余额</p>
          </div>
          </router-link>
          <router-link :to="{path:'/benefit'}">
          <div class="you_hui">
            <span class="zero_two">0</span>个
            <p>我的优惠</p>
          </div>
          </router-link>
          <router-link :to="{path:'/points'}">
          <div class="ji_fen">
            <span class="zero_tree">0</span>分
            <p>我的积分</p>
          </div>
          </router-link>
        </div>
        <div class="center">
          <a href="###">
          <div class="Order">
            <i class="icontubiao_dingdan iconfont" id="dd"></i>
            我的订单
            <i class="iconarrow iconfont right_two"></i>
          </div>
          </a>
          <router-link :to="{path:'/integralmall'}">
          <div class="integral">
            <i class="iconjifen iconfont" id="jf"></i>
            积分商城
            <i class="iconarrow iconfont right_two"></i>
          </div>
          </router-link>
          <router-link :to="{path:'/vipcard'}">
          <div class="vip">
            <i class="iconhuiyuanqiaguanli iconfont" id="hy"></i>
            饿了么会员卡
            <i class="iconarrow iconfont right_two"></i>
          </div>
          </router-link>
        </div>
        <div class="service_center">
          <router-link :to="{path:'/service'}">
          <div class="core">
            <i class="iconfuwu iconfont" id="fuwu"></i>
            服务中心
            <i class="iconarrow iconfont right_two"></i>
          </div>
          </router-link>
          <router-link :to="{path:'/downlond'}">
          <div class="download">
            <i class="iconchangyonglogo40 iconfont tree"></i>
            下载饿了么APP
            <i class="iconarrow iconfont right_two"></i>
          </div>
          </router-link>
        </div>
      </div>
    </fieldset>
</template>

<script>
    export default {
        name: "Home",
      computed:{
          getname(){
            return this.$route.query.username
          }
      }
    }
</script>

<style scoped>
@import "//at.alicdn.com/t/font_1452054_q8rpzaf9fg7.css";
@import "//at.alicdn.com/t/font_1452054_qjks4qongjp.css";
@import "//at.alicdn.com/t/font_1452054_myfvhar7r8i.css";
@import "//at.alicdn.com/t/font_1452054_6eugx44ma8m.css";
@import "//at.alicdn.com/t/font_1452054_l7sazlqv72.css";
@import "//at.alicdn.com/t/font_1452054_9ohyw1ek1j.css";
@import "//at.alicdn.com/t/font_1452054_hjwm6ybsy1k.css";
@import "//at.alicdn.com/t/font_1452054_207kzv5gr26.css";

#app {
  width: 23.4rem;
  height: 41.6rem;
  background-color: #f5f5f5;
}
  #head {
    width: 23.4rem;
    background-color: #3190e8;
    height: 2.8rem;
    text-align: center;
    line-height: 2.8rem;
  }
.iconfont {
  font-size: 1.5rem;
  float: left;
  margin-left: 0.3rem;
  color: white;
}
  .my{
    color: white;
font-size: 1.5rem;
    font-family: "楷体";
    font-weight: 900;
  }
  .h {
    background-color: white;
    height: 0.01rem;
  }
  #longin {
    background-color: #3190e8;
    height: 6rem;
    overflow: hidden;
  }
  #tx {
    font-size: 4rem;
    margin-left: 0.8rem;
    line-height: 6rem;
  }
  .dz {
    margin-left: 0.5rem;
    padding-top: 1.2rem;
    float: left;
  }
  .dl {
    color: white;
    font-size: 1.5rem;
    font-family: "楷体";
    font-weight: 900;
    margin-top: -.01rem;
  }
  #right{
    float: right;
    font-size: 1rem;
    line-height: 6rem;
    margin-right: 0.8rem;
  }
  .wu {
    color: white;
    font-family: "楷体";
  }
  #phone{
    font-size: 1.2rem;
  }
  .my_money{
    height: 5rem;
    /*background-color: white;*/
    text-align: center;
   overflow: hidden;
  }
  .yu_e {
padding-top: 0.8rem;
    height: 5rem;
    width: 7.8rem;
    background-color: white;
    float: left;
  }
  .you_hui{
    padding-top: 0.8rem;
    height: 5rem;
    width: 7.7rem;
    background-color: white;
    margin: 0 0.1rem 0 0.1rem;
    float: left;
  }
  .ji_fen {
    height: 5rem;
    width: 7.7rem;
    padding-top: 0.8rem;
    background-color:white;
    float: left;
  }
  .zero,.zero_two,.zero_tree {
    color: #f90;
    font-size: 1.6rem;
    font-weight: 900;
  }
  .zero_two {
     color: #ff5f3e;
   }
  .zero_tree {
    color: #6ac20b;
  }
  #dd {
    color: black;
    margin-left: 1rem;
    font-size: 1rem;
  }
  .right_two {
    color: black;
    float: right;
    font-size: 1rem;
    color: #999;
  }
  .center,.service_center {
    margin-top: 0.5rem;
  }
  .center a,.service_center a{
    list-style: none;
    text-decoration: none;
  }
  .Order,.core {
    height: 3rem;
    background-color: white;
    line-height: 3rem;
    color: black;
  }
  .integral,.download {
    width: 23.4rem;
    height: 3rem;
    background-color: white;
    margin-top: 0.1rem;
    line-height: 3rem;
    color: black;
  }
  .vip {
    height: 3rem;
    background-color: white;
    margin-top: 0.1rem;
    line-height: 3rem;
    color: black;
  }
  #jf {
    color: red;
    margin-left: 1rem;
    font-size: 1rem;
  }
  #hy {
    color: yellow;
    margin-left: 1rem;
    font-size: 1rem;
  }
  #fuwu {
    margin-left: 1rem;
    font-size: 1rem;
    color: pink;
  }
.tree {
  margin-left: 1rem;
  color:#3190e8;
}
</style>
