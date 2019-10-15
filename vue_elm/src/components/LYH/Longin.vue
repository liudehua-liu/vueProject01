<template>
    <fieldset>
      <div id="longin">
        <div id="head">
          <a href="http://localhost:8080/#/home" class="iconjiantou-px- iconfont"></a>
          <span class="my">密码登录</span>
        </div>
        <div class="inps">
        <input type="text" placeholder="账号" class="inp1">
          <div>
            <input type="text" placeholder="密码" class="inp2">
          </div>
          <div>
            <input type="text" placeholder="验证码" class="inp3" maxlength="4">
            <div class="change_img">
              <img src="" alt="">
              <p>看不清</p>
              <p style="color: #3190e8" @click="chang">换一张</p>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
</template>

<script>
    export default {
        name: "Longin",
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452054_q8rpzaf9fg7.css";
  #longin {
    width: 23.21rem;
    height: 41.4rem;
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
    width: 22.2rem;
    height: 3rem;
    padding-left: 1rem;
    border:none;
    outline:none;
  }
  .inp2{
    width: 80%;
    height: 3rem;
    padding-left: 1rem;
    border:none;
    outline:none;
  }
  .inp2,.inp3 {
    margin-top: 0.1rem;
  }
  .inp3 {
    width: 60%;
    height: 3rem;
    padding-left: 1rem;
    border:none;
    outline:none;
  }
  .change_img {
    float: right;
  }
</style>
