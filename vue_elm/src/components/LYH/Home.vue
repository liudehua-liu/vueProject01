<template>
    <fieldset>
      <div id="app">
        <div id="head">
          <i class="iconjiantou-px--copy-copy iconfont"></i>
          <span class="my">我的</span>
        </div>
        <div class="h"></div>
        <div id="longin">
          <a href="http://localhost:8080/#/longin">
            <img src="####" alt="" class="icontouxiang iconfont" id="tx">
            <div class="dz">
              <p class="dl">登录/注册</p>
              <i class="iconshouji iconfont" id="phone"></i><span class="wu">暂无绑定手机号</span>
            </div>
            <i class="iconarrow iconfont" id="right"></i>
          </a>
        </div>
        <div  class="my_money">
          <a href="###">
          <div  class="yu_e">
            <span class="zero">0.00</span>元
            <p>我的余额</p>
          </div>
          </a>
          <a href="###">
          <div class="you_hui">
            <span class="zero_two">0</span>个
            <p>我的优惠</p>
          </div>
          </a>
          <a href="###">
          <div class="ji_fen">
            <span class="zero_tree">0</span>分
            <p>我的积分</p>
          </div>
          </a>
        </div>
        <div class="center">
          <a href="###">
          <div class="Order">
            <i class="icontubiao_dingdan iconfont" id="dd"></i>
            我的订单
            <i class="iconarrow iconfont right_two"></i>
          </div>
          </a>
          <a href="###">
          <div class="integral">
            <i class="iconjifen iconfont" id="jf"></i>
            积分商城
            <i class="iconarrow iconfont right_two"></i>
          </div>
          </a>
          <a href="###">
          <div class="vip">
            <i class="iconhuiyuanqiaguanli iconfont" id="hy"></i>
            饿了么会员卡
            <i class="iconarrow iconfont right_two"></i>
          </div>
          </a>
        </div>
      </div>
    </fieldset>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
@import "//at.alicdn.com/t/font_1452054_q8rpzaf9fg7.css";
@import "//at.alicdn.com/t/font_1452054_qjks4qongjp.css";
@import "//at.alicdn.com/t/font_1452054_myfvhar7r8i.css";
@import "//at.alicdn.com/t/font_1452054_6eugx44ma8m.css";
@import "//at.alicdn.com/t/font_1452054_l7sazlqv72.css";
@import "//at.alicdn.com/t/font_1452054_9ohyw1ek1j.css";
#app {
  width: 100%;
  height: 41.4rem;
  background-color: #f5f5f5;
}
  #head {
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
  }
  .h {
    background-color: white;
    height: 0.01rem;
  }
  #longin {
    background-color: #3190e8;
    height: 6rem;
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
    width: 33%;
    background-color: white;
    float: left;
  }
  .you_hui{
    padding-top: 0.8rem;
    height: 5rem;
    width: 33%;
    background-color: white;
    margin: 0 1% 0 1%;
    float: left;
  }
  .ji_fen {
    height: 5rem;
    width: 32%;
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
  .center {
    margin-top: 0.5rem;
  }
  .center a{
    list-style: none;
    text-decoration: none;
  }
  .Order {
    height: 3rem;
    background-color: white;
    line-height: 3rem;
    color: black;
  }
  .integral {
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
</style>
