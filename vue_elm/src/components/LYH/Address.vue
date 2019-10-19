<template>
    <div id="app">
      <div id="head">
        <router-link :to="{path:'/info'}">
          <i class="iconjiantou-px--copy-copy iconfont"></i>
        </router-link>
        <span class="my">编辑地址</span>
        <p class="complete">编辑</p>
      </div>
      <section class="mark" @click="chang">
        <p>新增地址</p>
        <div class="akl">
          <i class="iconchangyongtubiao-xianxingdaochu-zhuanqu-1 iconfont right"></i>
        </div>
      </section>
    </div>
</template>

<script>
    export default {
        name: "Address",
      methods:{
        chang(){
          this.$router.push({path:"/add"})
        }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452054_q8rpzaf9fg7.css";
  @import "//at.alicdn.com/t/font_1452054_jxeyfu5wrvp.css";
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
  .complete {
    color: white;
    /*padding-left: 1rem;*/
    float: right;
    margin-right: 1rem;
  }
  .right {
    color: black;
    /*margin-right: 2rem;*/
    float: right;
    font-size: .9rem;
    color: #999;
  }
  .mark {
    width: 22.4rem;
    height: 3rem;
    background-color: #fff;
    line-height: 3rem;
    padding-left: 1rem;
    font-size: .9rem;
    border-bottom: .1rem solid #ccc;
    border-top: .1rem solid #ccc;
    margin-top:1rem;
  }
  .mark p {
    float: left;
  }
  .akl {
    float: right;
    margin-right: .5rem;
  }
</style>
