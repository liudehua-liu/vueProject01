<template>
    <fieldset>
      <div id="app">
        <div class="hide" v-show="temp">
          <div class="yuan">
            <span>!</span>
          </div>
          <p class="miaoshu">IOS用户请前往AppStore下载</p>
          <button class="confirm" @click="temp=false">确认</button>
        </div>
        <div id="head">
          <router-link :to="{path:'home'}">
          <i class="iconjiantou-px--copy-copy iconfont"></i>
          </router-link>
          <span class="my">下载</span>
        </div>
        <div class="icon">
          <img src="../../assets/elm.png" alt="" id="img">
          <p class="describe">下载饿了么APP</p>
          <button class="xz" @click="temp=!temp">下载</button>
        </div>
      </div>
    </fieldset>
</template>

<script>
    export default {
      data(){
        return {temp:false}
      }
      }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452054_q8rpzaf9fg7.css";
  #app {
    width: 100%;
    height: 41.4rem;
    background-color: white;
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
  #img {
    width: 13rem;
  }
  .icon {
    text-align: center;
  }
  .describe{
    font-family: "楷体";
    color: #666;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .xz {
    background-color: #4cd964;
    font-size: 1rem;
    color: #fff;
    text-align: center;
    width: 21rem;
    margin: 0 .7rem;
    line-height: 2.8rem;
    border-radius: 0.4rem;
    margin-top: .5rem;
    font-weight: 900;
    outline: none;
    border: none;
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
