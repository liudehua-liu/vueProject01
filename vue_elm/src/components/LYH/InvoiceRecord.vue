<template>
  <div id="app">
    <div id="head">
      <router-link :to="{path:'/vipcard'}">
        <i class="iconjiantou-px--copy-copy iconfont"></i>
      </router-link>
      <span class="my">购买记录</span>
    </div>
    <p class="lpl">没有购买记录</p>
  </div>
</template>

<script>
    export default {
        name: "InvoiceRecord"
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452054_wmj4ptrhqmh.css";
  #app {
    width: 23.45rem;
    height: 41.7rem;
    background-color: #fff;
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
  .lpl {
    color: #999;
    font-size: .9rem;
    margin-top: 20rem;
  }
</style>
