<template>
    <div id="app">
      <div id="head">
        <router-link :to="{path:'/home'}">
          <i class="iconjiantou-px--copy-copy iconfont"></i>
        </router-link>
        <span class="my">积分商城</span>
      </div>
      <div class="rng">
        <p>请重新进入</p>
        <span>请返回后重新进入积分商城~</span>
      </div>
      <img src="../../assets/mall.png" class="img"/>
    </div>
</template>

<script>
    export default {
        name: "IntegralMall"
    }
</script>

<style scoped>
    #app {
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
  .img {
    width: 12rem;
    height: 12rem;
    margin-top: 1rem;
    
  }
  .rng p{
    margin-top: 6rem;
    font-size: 1.5rem;
    color: #3190e8;
    font-weight: 900;
  }
  .rng span {
    display: inline-block;
    margin-top: 1rem;
  }
</style>
