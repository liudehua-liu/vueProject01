<template>
  <div id="app">
    <div id="head">
      <router-link :to="{path:'/points'}">
        <i class="iconjiantou-px--copy-copy iconfont"></i>
      </router-link>
      <span class="my">积分问题</span>
    </div>
    <div class="lpl">
      <h3>Q1: 怎么获得积分？</h3>
      <p>在线支付的订单将获得订单积分奖励:</p>
      <p>积分将在用户完成评价后获得。</p>
      <p>可获得积分=订单金额×10（即1元=10点积分）。</p>
      <p>订单金额指实际付款金额，不包含活动优惠金额。</p>
      <p>每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。</p>
      <h3 id="q2">Q2: 积分用来做什么？</h3>
      <p>可以在积分商城兑换各种礼品。</p>
      <h3 id="q3">Q3: 礼品兑换很多天了还没有收到，该怎么办？</h3>
      <p>礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</p>
      <h3 id="q4">Q4: 礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛？</h3>
      <p>不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Detail"
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452054_q8rpzaf9fg7.css";
  #app {
    position:fixed;
    z-index: 999;
    left: 0;
    top: 0;
    background-color: #fff;
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
    font-weight: 900;
  }
  .lpl h3{
    margin-left: -13.5rem;
    /*font-weight: 500;*/
    font-size: 1rem;
  }
#q2 {
  margin-right: -1rem;
}
#q3 {
  margin-left:-1rem;
}
#q4 {
  margin-left: .5rem;
  text-align: left;
}
  .lpl p {
    line-height: 1.5rem;
    text-align: left;
    margin-left: 0.4rem;
  }

</style>

