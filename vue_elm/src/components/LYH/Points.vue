<template>
  <div id="app">
    <div class="hide" v-show="temp">
      <div class="yuan">
        <span>!</span>
      </div>
      <p class="miaoshu">快去下单赚取大量积分吧</p>
      <button class="confirm" @click="temp=false">确认</button>
    </div>
    <div id="head">
      <router-link :to="{path:'/home'}">
        <i class="iconjiantou-px--copy-copy iconfont"></i>
      </router-link>
      <span class="my">我的积分</span>
      <div class="lpl">
        <div>
          <div class="edg">
            <p class="lgd">当前积分 </p>
            <p class="zero">0 <span>分</span></p>
          </div>
          <div class="rng">
            <span class="iconwenhao iconfont mark"></span><router-link :to="{path:'/points/detail'}" class="we">积分说明</router-link>
          </div>
          <router-view></router-view>
        </div>
        <button class="ig" @click="temp=!temp">积分兑换商品</button>
      </div>
    </div>
    <div class="lol">
      <p>最近30天积分记录</p>
    </div>
    <div class="g2">
      <div class="icon- iconfont img"></div>
      <p>最近30天无记录</p>
      <!--<p>快去下单赚取大量积分吧</p>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "Balance",
    data(){
      return{temp:false}
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452054_q8rpzaf9fg7.css";
  @import "//at.alicdn.com/t/font_1452054_icbnxmvhvne.css";
  @import "//at.alicdn.com/t/font_1452054_h599nhboy4c.css";
  #app {
    width: 23.45rem;
    background-color: #f5f5f5;
    position: absolute;
  }
  #head {
    background-color: #3190e8;
    height: 13.8rem;
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
  .content {
    font-size: 1.5rem;
    font-family: "楷体";

  }
  .lpl {
    width: 22rem;
    height: 10.5rem;
    background-color: white;
    overflow: hidden;
    margin: 0 auto 0 auto;
    border-radius: 0.3rem;
  }
  .edg {
    float: left;
  }
  .rng {
    float: right;
    margin-right: .5rem;
  }
  .rng span {
    color:#3190e8 ;
    font-size: .8rem;
    font-weight: 900;
  }
  .we {
    color:#3190e8 ;
    font-size: .8rem;
    font-weight: 900;
    text-decoration: none;
  }
  .ig {
    width: 21rem;
    height: 3rem;
    margin-top: .8rem;
    border-radius: 0.3rem;
    color: white;
    font-size: 1.3rem;
    outline: none;
    border: none;
    background-color: #fe6d47;
  }
  .lgd {
    font-size: .51rem;
    margin-left: .5rem;
  }
  .zero {
    font-size: 2.8rem;
    margin-left: 0.5rem;
    font-weight: 900;
  }
  .zero span {
    font-size: 1rem;
    font-weight: 100;
    margin-left: -1rem;
  }
  .mark {
    margin-top: .1rem;
  }
  .img {
    color: #3190e8 ;
    font-size: 7rem;
    margin-left: -.5rem;
  }
  .g2 {
    position: absolute;
    top: 20rem;
    right: 8rem;
  }
  .lol {
    margin-left: .5rem;
    font-size: .9rem;
    margin-top: 1rem;
    color: #999;
  }
  .hide {
    text-align: center;
    width: 18rem;
    height: 12rem;
    background-color: white;
    border-radius: 0.4rem;
    position: absolute;
    left: 3rem;
    top: 12rem;
    z-index: 200;
  }
  .yuan {
    width: 3.5rem;
    height: 3.5rem;
    border: .25rem solid #f8cb86;
    border-radius: 50%;
    text-align: center;
    margin-left: 7rem;
    margin-bottom: 1rem;
  }
  .miaoshu {
    font-family: "楷体";
  }
  .yuan span {

    font-size: 3rem;
    color: #f8cb86;
  }
  .confirm {
    margin-top: 3rem;
    font-size: 1rem;
    font-weight: 900;
    color: white;
    height: 3rem;
    width: 18rem;
    border-radius: 0 0 0.4rem 0.4rem;
    background-color:#4cd964;
    outline: none;
    border: none;
  }
</style>

