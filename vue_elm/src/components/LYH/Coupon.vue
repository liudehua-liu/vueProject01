<template>
  <div id="app">
    <div id="head">
      <router-link :to="{path:'/benefit'}">
        <i class="iconjiantou-px--copy-copy iconfont"></i>
      </router-link>
      <span class="my">代金券说明</span>
    </div>
    <div class="lpl">
      <h3 class="q1">Q1: 怎么获得红包？</h3>
      <p>为了保护账户安全，使用余额前必须先绑定手机号。</p>
      <h3 class="q2">Q2:余额可以怎么用?</h3>
      <p>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</p>
      <h3 class="q3">Q3:我要如何提现?</h3>
      <p>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</p>
      <h3 id="q4">Q4:为什么会提现失败?</h3>
      <p>可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。</p>
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
    /*margin-left: -13.5rem;*/
    font-size: 1rem;
    margin-left: 1rem;
  }
  #q4 {
    margin-left: -12rem;
  }
  .lpl p {
    line-height: 1.5rem;
    text-align: left;
    margin-left: 1rem;
  }

</style>


