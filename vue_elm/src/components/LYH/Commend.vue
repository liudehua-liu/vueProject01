<template>
  <div id="app">
    <div class="hide" v-show="temp">
      <div class="yuan">
        <span>!</span>
      </div>
      <p class="miaoshu">请在饿了么APP中打开</p>
      <button @click="temp=false" class="confirm">确认</button>
    </div>
    <div id="head">
      <router-link :to="{path:'/benefit'}">
        <i class="iconjiantou-px--copy-copy iconfont"></i>
      </router-link>
      <span class="my">推荐有奖</span>
    </div>
    <div class="lpl"></div>
    <div class="lol">
      <div class="weixin">
        <img src="../../assets/weixin.png" alt="" style="width: 3.8rem" @click="temp=true">
        <p>邀请微信好友</p>
      </div>
      <div class="qq">
        <img src="../../assets/QQ.png" alt="" style="width: 3.8rem"  @click="temp=true">
        <p>邀请QQ好友</p>
      </div>
      <div class="mdm">
        <img src="../../assets/mdm.png" alt="" style="width: 3.8rem"  @click="temp=true">
        <p>面对面邀请</p>
      </div>
    </div>
    <div class="mark">
      <div class="lck">
        <p class="rng">累计收益</p>
        <p class="edg"><span class="zero ig">0</span>元</p>
      </div>
      <div class="msi">
        <p class="rng">成功邀请</p>
        <p class="edg"><span class="zero">0</span>人</p>
      </div>
    </div>
    <div class="link">
      <p class="detailed">-收益明细-</p>
      <img src="../../assets/money.png" alt="" style="width: 2rem">
      <p class="invitation">还不赶紧邀请好友</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Commend",
      data(){
        return {temp:false}
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452054_q8rpzaf9fg7.css";
  #app {
    width: 23.4rem;
    height: 41.6rem;
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
    font-weight: 900;
  }
  .lpl {
    width: 100%;
    height: 14.5rem;
    background: url("http://cangdu.org/elm/static/img/activity.png") no-repeat;
    /*background-position: center center;*/
    background-size: 23.4rem;
  }
  .weixin p,.qq p,.mdm p{
    font-size: .8rem;
  }
  .lol {
overflow: hidden;
    margin-top: .2rem;
    padding: 2rem 0 1.5rem 0;
    background-color: #fff;
  }
  .weixin {
    float: left;
    width: 33.3%;
    text-align: center;
  }
  .qq {
    float: left;
    width: 33.3%;
    text-align: center;
  }
  .mdm {
    float: right;
    width: 33.3%;
    text-align: center;
  }
  .rng {
      font-size: .8rem;
    color: #666;
  }
  .edg {
    font-size: .8rem;
  }
  .ig {
    color: red;
  }
  .zero {
    font-size: 1.3rem;
    font-weight: 900;
  }
  .mark {
    /*background-color: red;*/
    overflow: hidden;
    margin: 1.5rem 0 1.5rem 0;
  }
  .lck {
    float: left;
    width: 49%;
    text-align: center;
    border-right: 0.1rem solid #ccc;
  }
  .msi {
    float: right;
    width: 49.9%;
    text-align: center;
  }
  .link {
    width: 100%;
    text-align: center;
  }
  .detailed {
    font-size: .8rem;
    color: #666;
    margin-bottom: 1.5rem;
  }
  .invitation {
    font-size: .8rem;
    color: #999;
  }
  .hide {
    text-align: center;
    width: 16rem;
    height: 10rem;
    background-color: white;
    border-radius: 0.4rem;
    position: absolute;
    left: 3.5rem;
    top: 13rem;
  }
  .miaoshu {
    font-family: "楷体";

  }
  .yuan {
    width: 3.5rem;
    height: 3.5rem;
    border: .25rem solid #f8cb86;
    border-radius: 50%;
    text-align: center;
    margin-left: 6rem;
    margin-bottom: 1rem;
  }
  .yuan span {

    font-size: 3rem;
    color: #f8cb86;
  }
  .confirm {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 900;
    color: white;
    height: 3rem;
    width: 16rem;
    border-radius: 0 0 0.4rem 0.4rem;
    background-color:#4cd964;
    outline: none;
    border: none;
  }
</style>
