<template>
    <div id="app">
      <div id="head">
        <router-link :to="{path:'/home'}">
          <i class="iconjiantou-px--copy-copy iconfont"></i>
        </router-link>
        <span class="my">我的优惠</span>
      </div>
      <transition>
      <div class="center">
      </div>
      </transition>
    </div>
</template>

<script>
  import animate from 'animate.css'
    export default {
        name: "Benefit"
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452054_q8rpzaf9fg7.css";
  #app {
    text-align: center;
    position: absolute;
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
  .center {
    width: 4rem;
    height: 4rem;
    /*background-color: red;*/
    background: url("../../assets/icon_loading.png") no-repeat;
    background-position: center 0rem;
    /*animation: bg 2s linear infinite forwards alternate-reverse;*/
    background-size: 4rem;
    position: relative;
    left: 45%;
    margin-top: 60%;
    overflow: hidden;
  }
  @keyframes bg {
    0% {
      background-position: center -4rem;
    }
    /*15% {*/
      /*background-position: center -8rem;*/
    /*}*/
    /*30% {*/
      /*background-position: center -12rem;*/
    /*}*/
    /*45% {*/
      /*background-position: center -16rem;*/
    /*}*/
    /*60% {*/
      /*background-position: center -20rem;*/
    /*}*/
    /*75% {*/
      /*background-position: center -24rem;*/
    /*}*/
    /*90% {*/
      /*background-position: center -28rem;*/
    /*}*/
    /*100% {*/
      /*background-position: center -4rem;*/
    /*}*/
  }
 </style>
