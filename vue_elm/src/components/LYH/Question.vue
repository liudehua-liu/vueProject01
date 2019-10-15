<template>
    <fieldset>
      <div id="app">
        <div id="head">
          <router-link :to="{path:'/service'}">
            <i class="iconjiantou-px--copy-copy iconfont"></i>
          </router-link>
          <span class="my">{{a}}</span>
        </div>
        <div class="edg">
          <nav class="content" v-html="b" >{{getData}}</nav>
        </div>
      </div>
    </fieldset>
</template>

<script>
    export default {
        name: "Question",
      data(){
          return {
            a:"",
            b:""
          }
      },
      computed:{
          getData(){
            return this.a = this.$route.query.a, this.b = (this.$route.query.b)
          }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452054_q8rpzaf9fg7.css";
  #app {
    width: 23.1rem;
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
  .content {
font-size: 1.5rem;
    font-family: "楷体";

  }
  .edg {
    width: 23rem;
  }

</style>
