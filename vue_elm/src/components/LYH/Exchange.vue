<template>
    <div id="app">
      <div id="head">
        <router-link :to="{path:'/benefit'}">
          <i class="iconjiantou-px--copy-copy iconfont"></i>
        </router-link>
        <span class="my">兑换红包</span>
      </div>
      <input type="text" placeholder="请输入兑换码" class="inp1">
      <div class="lpl">
        <input type="text" placeholder="验证码" class="inp2" maxlength="4">
        <img :src="a" alt="" class="img">
        <div class="change_img" @click="chang">
          <p>看不清</p>
          <p style="color: #3190e8" >换一张</p>
        </div>
      </div>
      <button class="change">兑换</button>

    </div>
</template>

<script>
    export default {
        name: "Exchange",
      data(){
        return {
          a:"",
        }
      },
      methods:{
        chang(data){
          this.axios.post('https://elm.cangdu.org/v1/captchas','').then((response) => {
            this.a = response.data.code;
          })
        }
      },
      created(){
        this.axios.post('https://elm.cangdu.org/v1/captchas','').then((response) => {
          this.a = response.data.code
        })
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
  .inp1 {
    width: 20.4rem;
    height: 3rem;
    margin: 1rem;
    border-radius: .3rem;
    padding-left: 1rem;
    border:none;
    outline:none;
  }
  .inp2 {
    width: 11.4rem;
    height: 3rem;
    margin-left: 1rem;
    border-radius: .3rem;
    /*padding-left: 1rem;*/
    border:none;
    outline:none;
  }
  .change_img {
    float: right;
    background-color: white;
  }
.lpl {
  width: 21.4rem;
  height: 3rem;
  margin-left: 1rem;
  border-radius: .3rem;
  border:none;
  outline:none;
  background-color: #fff;
}
  .change {
    width: 20.6rem;
    height: 2.7rem;
    background-color: #ccc;
    margin-left: 1.3rem;
    margin-top: 1rem;
    color: white;
    border-radius: .3rem;
    font-weight: 700;
  }
</style>
