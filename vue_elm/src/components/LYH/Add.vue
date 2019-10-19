<template>
    <div id="app">
      <div id="head">
        <router-link :to="{path:'/address'}">
          <i class="iconjiantou-px--copy-copy iconfont"></i>
        </router-link>
        <span class="my">新增地址</span>
      </div>
      <div class="lpl">
        <input type="text"placeholder="请填写你的姓名">
        <input type="text" placeholder="小区/写字楼/学校等" @click="chang">
        <input type="text" placeholder="请填写详细送餐地址">
        <input type="text" placeholder="请填写能够联系到您的手机号">
        <input type="text" placeholder="备用联系电话(选填)">
      </div>
      <button class="but">新增地址</button>
    </div>
</template>

<script>
    export default {
        name: "Add",
      methods:{
          chang(){
            this.$router.push({path:"/twosearch"})
          }
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
    background-color: #fff;
    padding-bottom: .5rem;
    margin-top: .5rem;
  }
  .lpl input {
width: 22rem;
    height: 2rem;
    padding-left: .4rem;
    margin-left: .5rem;
    border: .1rem solid #ddd;
    border-radius: .2rem;
    margin-top: .5rem;
    background-color: #f2f2f2;
  }
  .but {
    width: 22rem;
    height: 2.3rem;
    color: #999;
    font-weight: 700;
    background-color: #4cd964;
    margin-top: 1rem;
    margin-left: .7rem;
    font-size: .9rem;
    border-radius: .2rem;
  }
</style>
