<template>
  <div id="app">
    <div class="hide1" v-show="tem">
      <div class="yuan1">
        <span>!</span>
      </div>
      <p class="miaoshu1">是否退出登录</p>
      <div class="logout">
        <button class="confirm1" @click="tem=false">再等等</button>
        <button class="confirm2" @click="Logout">退出登录</button>
      </div>
    </div>
    <div id="head">
      <router-link :to="{path:'/home'}">
        <i class="iconjiantou-px--copy-copy iconfont"></i>
      </router-link>
      <span class="my">账户信息</span>
    </div>
    <div class="hide" v-show="temp">
      <div class="yuan">
        <span>!</span>
      </div>
      <p class="miaoshu">请在手机APP中设置</p>
      <button class="confirm" @click="temp=false">确认</button>
    </div>
    <div class="lpl">
      <label for="file">
        <p class="head">头像</p>
        <input type="file" class="inp1" id="file">
        <div class="lck">
          <img src="../../assets/qq.png" alt="" style="width: 3rem">
          <span><i class="iconchangyongtubiao-xianxingdaochu-zhuanqu-1 iconfont right"></i></span>
        </div>
      </label>
    </div>
    <section class="mark" @click="chang">
      <p>用户名</p>
      <div class="akl">
        <p>{{username}}</p>
        <i class="iconchangyongtubiao-xianxingdaochu-zhuanqu-1 iconfont right"></i>
      </div>
    </section>
    <section class="mark" @click="chang2">
      <p>收获地址</p>
      <div class="akl">
        <i class="iconchangyongtubiao-xianxingdaochu-zhuanqu-1 iconfont right"></i>
      </div>
    </section>
    <p class="link">账号绑定</p>
    <section class="mark4" @click="temp=!temp">
      <p>手机</p>
      <div class="akl">
        <i class="iconchangyongtubiao-xianxingdaochu-zhuanqu-1 iconfont right"></i>
      </div>
    </section>
    <p class="link">安全设置</p>
    <section class="mark mark5" @click="chang3">
      <p>密码登录</p>
      <div class="akl">
        <p>修改</p>
        <i class="iconchangyongtubiao-xianxingdaochu-zhuanqu-1 iconfont right"></i>
      </div>
    </section>
    <button class="out" @click="tem=!tem">退出登录</button>
  </div>
</template>

<script>
  export default {
    name: "Info",
    data() {
      return {
        tem: false,
        temp: false,
        username: ""
      }
    },
    created() {
      let data = this.storage.get("userinfo")
      this.username = data.username;
    },
    methods: {
      chang() {
        this.$router.push({path: "/setusername"})
      },
      chang2() {
        this.$router.push({path: "/address"})
      },
      chang3() {
        this.$router.push({path: "/forget", query: {in: 1}})
      },
      Logout() {
        this.axios.get("https://elm.cangdu.org/v2/signout").then((response) => {
          this.storage.remove("userinfo");
          this.$router.push({path: "/home"})
        })
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

  .my {
    color: white;
    font-size: 1.5rem;
    font-family: "楷体";
    font-weight: 900;
  }

  .right {
    color: black;
    /*margin-right: 2rem;*/
    float: right;
    font-size: .9rem;
    color: #999;
  }

  .lpl {
    width: 22.4rem;
    height: 4rem;
    line-height: 4rem;
    overflow: hidden;
    background-color: #fff;
    padding-left: 1rem;
    margin-top: .5rem;
    border-top: .1rem solid #ccc;
    border-bottom: .1rem solid #ccc;
    font-size: .9rem;
  }

  [type="file"] {
    display: none;
  }

  label {
    width: 100%;
    height: 4rem;
    display: block;
  }

  .head {
    float: left;
  }

  .lck {
    float: right;
    margin-right: .5rem;
  }

  .lck img {
    margin-top: .4rem;
  }

  .inp1 {
    width: 5rem;
    float: left;
  }

  .mark {
    width: 22.4rem;
    height: 3rem;
    background-color: #fff;
    line-height: 3rem;
    padding-left: 1rem;
    font-size: .9rem;
    border-bottom: .1rem solid #ccc;
  }

  .mark4 {
    width: 22.4rem;
    height: 3rem;
    background-color: #fff;
    line-height: 3rem;
    padding-left: 1rem;
    font-size: .9rem;
    border-bottom: .1rem solid #ccc;
    border-top: .1rem solid #ccc;
  }

  .mark5 {
    border-top: .1rem solid #ccc;
  }

  .mark p {
    float: left;
  }

  .mark4 p {
    float: left;
  }

  .akl {
    float: right;
    margin-right: .5rem;
  }

  .link {
    width: 22.4rem;
    height: 2rem;
    line-height: 2rem;
    padding-left: 1rem;
    font-size: .8rem;
    color: #666;
  }

  .out {
    width: 22.4rem;
    height: 2rem;
    font-size: .8rem;
    color: white;
    font-weight: 700;
    background-color: #d8584a;
    border-radius: .3rem;
    margin-top: 2rem;
    margin-left: .5rem;
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
    background-color: #4cd964;
    outline: none;
    border: none;
  }

  .hide1 {
    text-align: center;
    width: 22rem;
    height: 18rem;
    background-color: white;
    border-radius: 0.4rem;
    position: absolute;
    left: .7rem;
    top: 9rem;
  }

  .miaoshu1 {
    font-family: "楷体";
    font-size: 2rem;
    /*margin-top: 1rem;*/

  }

  .yuan1 {
    width: 4.5rem;
    height: 4.5rem;
    border: .25rem solid #f8cb86;
    border-radius: 50%;
    text-align: center;
    margin-left: 8.4rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  .yuan1 span {

    font-size: 4rem;
    color: #f8cb86;
  }

  .logout {
    margin-top: 4rem;
    /*background-color: red;*/
  }

  .confirm1 {
    /*margin-top: 1rem;*/
    font-size: .9rem;
    font-weight: 700;
    color: white;
    height: 2.5rem;
    width: 6rem;
    border-radius: 0.4rem;
    background-color: #c1c1c1;
    outline: none;
    border: none;
  }

  .confirm2 {
    /*margin-top: 1rem;*/
    font-size: .9rem;
    font-weight: 700;
    color: white;
    height: 2.5rem;
    width: 6rem;
    border-radius: 0.4rem;
    background-color: #dd6b55;
    outline: none;
    border: none;
  }

</style>
