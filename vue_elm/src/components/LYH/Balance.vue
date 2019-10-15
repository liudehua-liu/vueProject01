<template>
    <div id="app">
      <div id="head">
          <router-link :to="{path:'/home'}">
            <i class="iconjiantou-px--copy-copy iconfont"></i>
          </router-link>
          <span class="my">我的余额</span>
          <div class="lpl">
            <div>
              <div class="edg">
                <p class="lgd">当前余额 </p>
                <p class="zero">0.00 <span>元</span></p>
              </div>
              <div class="rng">
                <span class="iconwenhao iconfont mark"></span><router-link :to="{path:'/balance/detail'}" class="we">余额说明</router-link>
              </div>
              <router-view></router-view>
            </div>
            <button class="ig">提现</button>
          </div>
        </div>
      <div class="lol">
        <p>交易明细</p>
      </div>
      <div class="g2">
      <div class="icon- iconfont img"></div>
        <p>暂无明细记录</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Balance"
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
    background-color: #ccc;
  }
  .lgd {
    font-size: .51rem;
 margin-left: -3.5rem;
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
</style>
