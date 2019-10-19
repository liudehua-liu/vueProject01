<template>
  <div id="app">
    <div id="head">
      <router-link :to="{path:'/info'}">
        <i class="iconjiantou-px--copy-copy iconfont"></i>
      </router-link>
      <span class="my">修改用户名</span>
    </div>
    <input type="text" placeholder="输入用户名" class="inp" v-model="akl" @input="theshy">
    <p class="lpl">用户名只能修改一次（5-24字符之间）</p>
    <button class="modify" @click="buttn">确认修改</button>
  </div>
</template>

<script>
  export default {
    name: "Setusername",
    data() {
      return {
        akl: ""
      }
    },
    methods: {
      theshy() {
        if (this.akl.length < 5 || this.akl.length > 24) {
        }
      },
      buttn() {
        if (this.akl.length > 5 || this.akl.length < 24) {
          let data = this.storage.get("userinfo");
          data.username = this.akl;
          this.storage.set("userinfo", data);
          this.$router.push({path:"/info"})
        }
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

  .my {
    color: white;
    font-size: 1.5rem;
    font-family: "楷体";
    font-weight: 900;
  }

  .inp {
    margin-left: .5rem;
    width: 22.4rem;
    height: 2rem;
    background-color: #f5f5f5;
    margin-top: .5rem;
    border: .1rem solid #ddd;
  }

  .lpl {
    margin-left: .5rem;
    height: 3rem;
    line-height: 3rem;
    font-size: .8rem;
    color: #666;
  }

  .modify {
    width: 22.4rem;
    margin-left: .5rem;
    height: 3rem;
    color: #999;
    background-color: #3199e8;
    margin-top: .5rem;
  }
</style>
