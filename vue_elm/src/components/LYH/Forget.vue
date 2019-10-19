<template>
  <div id="app">
    <div id="head">
      <!--<router-link :to="{path:'/longin'}">-->
        <i class="iconjiantou-px--copy-copy iconfont" @click="chang2"></i>
      <!--</router-link>-->
      <span class="my">重置密码</span>
    </div>
    <div class="hide" v-show="temp">
      <div class="yuan">
        <span>!</span>
      </div>
      <p class="miaoshu">{{content}}</p>
      <button class="confirm" @click="temp=false">确认</button>
    </div>
    <input type="text" placeholder="账号" class="inp1" v-model="username">
    <input type="text" placeholder="旧密码" class="inp2" v-model="oldpassword">
    <input type="text" placeholder="请输入新密码" class="inp3" v-model="newpassword">
    <input type="text" placeholder="请确认密码" class="inp4" v-model="confirmpassword">
    <div class="mark">
      <input type="text" placeholder="验证码" class="inp5" maxlength="4" v-model="code">
      <img :src="a" alt="" class="img">
      <div class="change_img" @click="chang">
        <p>看不清</p>
        <p style="color: #3190e8" >换一张</p>
      </div>
    </div>
    <button class="btn" @click="changpassword">确认修改</button>
  </div>
</template>

<script>
  export default {
    name: "Forget",
    data(){
      return {
        a:"",
        username:"",
        oldpassword:"",
        newpassword:"",
        confirmpassword:"",
        code:"",
        content:"",
        temp:false

      }
    },
    methods:{
      chang(){
        this.axios.post('https://elm.cangdu.org/v1/captchas','').then((response) => {
          this.a = response.data.code;
        })
      },
      chang2(){
        if (this.$route.query.in==1){
          this.$router.push({path:"/info"})
        }else {
          this.$router.push({path:"/longin"})
        }
      },
      changpassword(){
        if (this.username.trim()==''){
          this.content="请输入用户名";
          this.temp=!this.temp
        }else if(this.oldpassword.trim()=='') {
          this.content="请输入密码";
          this.temp=!this.temp
        }else if (this.newpassword.trim()==''){
          this.content="请输入新密码";
          this.temp=!this.temp
        }else if (this.confirmpassword.trim()==''){
          this.content="请确认新密码";
          this.temp=!this.temp
        }else if (this.code.trim()==''){
          this.content="请输入验证码";
          this.temp=!this.temp
        } else {
          this.axios.post('https://elm.cangdu.org/v2/changepassword',{
            username:this.username,
            oldpassWord:this.oldpassword,
            newpassword:this.newpassword,
            confirmpassword:this.confirmpassword,
            captcha_code:this.code
          }).then((response)=>{
            console.log(response.data);
            if(response.data.message){
              this.content=response.data.message;
              this.temp=!this.temp
            }else if (response.data.success) {
              this.content=response.data.success;
              this.temp=!this.temp
              // this.$router.push({path:"/home",query:{username:response.data.username}})
            }
          })
        }
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
