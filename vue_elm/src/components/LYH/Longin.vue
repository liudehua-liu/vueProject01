<template>
    <fieldset>
      <div id="longin">
        <div id="head">
          <a href="http://localhost:8080/#/home" class="iconjiantou-px- iconfont"></a>
          <span class="my">密码登录</span>
        </div>
        <div class="inps">
        <input type="text" placeholder="账号" class="inp1">
          <div class="password">
            <input :type="temp?'password':'text'" placeholder="密码" class="inp2">
            <div class="lpl">
              <span @click="temp=!temp" :class="[temp?'invisible':'visible']"></span>
            </div>
          </div>
          <div class="mark">
            <input type="text" placeholder="验证码" class="inp3" maxlength="4">
            <img :src="a" alt="" class="img">
            <div class="change_img" @click="chang">
              <p>看不清</p>
              <p style="color: #3190e8" >换一张</p>
            </div>
          </div>
        </div>
        <p>温馨提示：未注册过的账号，登录时将自动注册</p>
        <p>注册过的用户可凭账号密码登录</p>
        <button class="dl">登录</button>
        <router-link :to="{path:'/forget'}">
        <p id="reset">重置密码?</p>
        </router-link>
      </div>
    </fieldset>
</template>

<script>
    export default {
        name: "Longin",
      data(){
          return {
            a:"",
            temp:true
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
  #longin {
    width: 23.4rem;
    height: 41.6rem;
    background-color: #f5f5f5;
  }
  #longin p {
    margin-left: 1rem;
    margin-top: .5rem;
    font-size: .8rem;
    color: red;
  }
  #head {
    background-color:#3190e8;
    height: 2.8rem;
    text-align: center;
    line-height: 2.8rem;
  }
  .my {
    color: white;
    font-size: 1.5rem;
    font-family: "楷体";
    font-weight: 900;
  }
  .iconfont{
    font-size: 1.5rem;
    float: left;
    margin-left: 0.3rem;
    text-decoration: none;
    color: white;
  }
  .inps {
    margin-top: 0.9rem;
  }
  .inp1{
    width: 22.4rem;
    height: 3rem;
    padding-left: 1rem;
    border:none;
    outline:none;
  }
  .inp2{
    width: 18rem;
    height: 3rem;
    padding-left: 1rem;
    border:none;
    outline:none;
  }
  .inp2,.inp3 {
    margin-top: 0.1rem;
  }
  .inp3 {
    width: 13rem;
    height: 3rem;
    padding-left: 1rem;
    border:none;
    outline:none;
  }
  .mark {
    background-color: #fff;
    margin-top: .1rem;
  }

  .change_img {
    float: right;
    background-color: white;
  }
  .dl {
    width: 21.4rem;
    margin-left: 1rem;
    height: 3rem;
    background-color: #4cd964;
    margin-top: .5rem;
    color: white;
    border-radius: .3rem;
    font-weight: 700;
  }
  #reset {
    text-align: right;
    color: #3b95e9;
    margin-right: 1rem;
  }
  .password {
    background-color: #fff;
    margin-top: .1rem;
  }
  .lpl {
    float: right;
  }
  .invisible {
    float: right;
    margin-top: .1rem;
    margin-right: 1rem;
    background: url('../../assets/off.png') no-repeat ;
    background-position: center center;
    background-size: 3rem;
    width: 3rem;
    height: 3rem;
  }
  .visible {
    float: right;
    margin-top: .1rem;
    margin-right: 1rem;
    background: url('../../assets/on.png') no-repeat ;
    background-position: center center;
    background-size: 3rem;
    width: 3rem;
    height: 3rem;
  }
  </style>
