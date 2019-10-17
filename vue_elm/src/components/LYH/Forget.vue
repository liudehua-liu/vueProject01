<template>
  <div id="app">
    <div id="head">
      <router-link :to="{path:'/longin'}">
        <i class="iconjiantou-px--copy-copy iconfont"></i>
      </router-link>
      <span class="my">重置密码</span>
    </div>
    <input type="text" placeholder="账号" class="inp1">
    <input type="text" placeholder="旧密码" class="inp2">
    <input type="text" placeholder="请输入新密码" class="inp3">
    <input type="text" placeholder="请确认密码" class="inp4">
    <div class="mark">
      <input type="text" placeholder="验证码" class="inp5" maxlength="4">
      <img :src="a" alt="" class="img">
      <div class="change_img" @click="chang">
        <p>看不清</p>
        <p style="color: #3190e8" >换一张</p>
      </div>
    </div>
    <button class="btn">确认修改</button>
  </div>
</template>

<script>
  export default {
    name: "Forget",
    data(){
      return {
        a:""
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
  @import "//at.alicdn.com/t/font_1452054_wmj4ptrhqmh.css";
  #app {
    width: 23.4rem;
    height: 41.6rem;
    background-color: #f5f5f5;
  }
  .inp1,.inp2,.inp3,.inp4 {
    width: 22.4rem;
    padding-left: 1rem;
    height: 3rem;
    margin-top: .1rem;
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
  .btn {
    width: 21.8rem;
    height: 2.8rem;
    background-color: #4cd964;
    border-radius: .3rem;
    color: white;
    margin-left: 0.8rem;
    margin-top: 1.5rem;
    font-weight: 700;
  }
  .inp5 {
    width: 12rem;
    height: 3rem;
    padding-left: 1rem;
    border:none;
    outline:none;
  }
  .change_img {
    float: right;
    background-color: white;
    margin-right: 1rem;
  }
  .mark {
    background-color: #fff;
    margin-top: .1rem;
  }
</style>
