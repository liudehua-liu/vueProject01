<template>
    <div id="app">
      <div id="head">
        <router-link :to="{path:'/vipcard'}">
          <i class="iconjiantou-px--copy-copy iconfont"></i>
        </router-link>
        <span class="my">兑换会员</span>
      </div>
      <p class="lck">成功兑换后将关联到当前帐号：</p>
      <input type="text" placeholder="请输入10位卡号" class="inp1" maxlength="10">
      <input type="text" placeholder="请输入6位卡密" class="inp2" maxlength="6">
      <button class="lpl">兑换</button>
      <div class="foot">
        <h3 class="lol">——温馨提示——</h3>
        <p>新兑换的会员服务，权益以「会员说明」为准。</p>
        <p>月卡：<span>30次</span>减免配送费。</p>
        <p>季卡：<span>90次</span>减免配送费。</p>
        <p>年卡：<span>360次</span>减免配送费。</p>
        <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "UseCart"
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452054_wmj4ptrhqmh.css";
  #app {
    width: 23.45rem;
    height: 41.7rem;
    background-color: #f5f5f5;
    text-align: center;
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
  .lck {
    height: 3rem;
    line-height: 3rem;
    margin-left: -9rem;
    font-size: .9rem;
    color: #666;
  }
  .inp1 {
    width: 22.45rem;
    height: 2.7rem;
    border: none;
    padding-left: 1rem;
  }
  .inp2 {
    width: 22.45rem;
    height: 2.7rem;
    border: none;
    margin-top: .1rem;
    padding-left: 1rem;
  }
  .lpl {
    width: 21.5rem;
    height: 2.8rem;
    color: white;
    font-size: 1rem;
    background-color: #ccc;
    border: none;
    outline: none;
margin-top: 1.2rem;
    border-radius: .4rem ;
    font-weight: 900;
  }
  .foot {
    color: #aaa;
    margin-top: 2rem;
  }
  .lol {
    font-weight: 400;
    font-size: .9rem;
    margin-bottom: 1rem;
  }
  .foot p{
    text-align: left;
font-size: .8rem;
    margin-left: 3rem;
  }

</style>
