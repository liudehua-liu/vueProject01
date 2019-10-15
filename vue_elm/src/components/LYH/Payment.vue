<template>
    <div id="app">
      <div id="head">
        <router-link :to="{path:'/vipcard'}">
          <i class="iconjiantou-px--copy-copy iconfont"></i>
        </router-link>
        <span class="my">在线支付</span>
      </div>
      <div class="lpl">
        <div>支付剩余时间</div>
        <p>00:{{minute}}:{{second}}</p>
      </div>
      <p class="rng">选择支付方式</p>
      <div class="alipay">
        <div class="b">
        <i class="iconzhifubao iconfont alipay2"></i>
        <span>支付宝</span>
        </div>
        <div @click="temp=true">
          <i :class="[temp?duihao:'duihao2','iconduihao', 'iconfont','duihao']"></i>
        </div>
      </div>
      <div class="wechat">
        <div class="a">
        <i class="iconweixin iconfont wechat2"></i>
        <span>微信</span>
        </div>
        <div @click="temp=false">
        <i :class="[!temp?'duihao':'duihao2','iconduihao', 'iconfont','duihao']"></i>
        </div>
      </div>
      <button class="edg">确认支付</button>

    </div>
</template>

<script>
    export default {
        name: "Payment",
      data() {
        return {
          temp:true,
          header:{
            headerTitle:'',
          },
          minutes:15,
          seconds:0,
          paymentHtml:''
        }
      },
      mounted(){
        this.timer()
      },
      watch: {
        second: {
          handler (newVal) {
            this.num(newVal)
          }
        },
        minute: {
          handler (newVal) {
            this.num(newVal)
          }
        }
      },
      computed:{
        second:function () {
          return this.num(this.seconds)
        },
        minute:function () {
          return this.num(this.minutes)
        }
      },
      methods: {
        num(n) {
          return n < 10 ? '0' + n : '' + n
        },
        timer () {
          var _this = this;
          var time = window.setInterval(function () {
            if (_this.seconds === 0 && _this.minutes !== 0) {
              _this.seconds = 59;
              _this.minutes -= 1
            } else if (_this.minutes === 0 && _this.seconds === 0) {
              _this.seconds = 0;
              window.clearInterval(time)
            } else {
              _this.seconds -= 1
            }
          }, 1000)
        }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452054_wmj4ptrhqmh.css";
  @import "//at.alicdn.com/t/font_1452054_55r1zc3r7ww.css";
  @import "//at.alicdn.com/t/font_1452054_h2puap5l56j.css";
  @import "//at.alicdn.com/t/font_1452054_hvmd84t4gyh.css";
  #app {
    width: 23.45rem;
    height: 41.7rem;
    background-color: #f5f5f5;
    text-align: center;
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
    width: 100%;
    background-color: #fff;
    height: 9rem;
    /*line-height: 10rem;*/
  }
  .lpl div {
    font-size: .8rem;
    color: #666;
    padding-top: 2rem;
  }
  .lpl p {
    font-size: 2.5rem;
    font-family: "楷体";
    margin-top: .9rem;
  }
  .rng {
    text-align: left;
    height: 2.8rem;
    line-height: 2.8rem;
    /*background-color: red;*/
    padding-left: 1rem;
    color: #666;
  }
  .alipay {
    background-color: #fff;
    overflow: hidden;
    position: relative;
  }
  .a {
    height: 5rem;
    line-height: 5rem;
  }
  .wechat {
    background-color: #fff;
    margin-top: .1rem;
    overflow: hidden;
    position: relative;
  }
  .b {
    height: 5rem;
    line-height: 5rem;
  }
  .alipay2 {
    color: red;
    font-size: 3rem;
    margin-left: 1rem;

  }
  .alipay span {
    color: #666;
    margin-left: -16rem;
  }
  .wechat2 {
    color: purple;
    font-size: 2.8rem;
    margin-left: 1rem;
  }
  .wechat span {
    color: #666;
    margin-left: -16rem;
  }
  .duihao {
    background-color: red;
    position: absolute;
    top: 1.4rem;
    right: 1rem;
    border-radius: 50%;
  }

  .duihao2 {
    background-color: #ccc;
    position: absolute;
    top: 1.4rem;
    right: 1rem;
    border-radius: 50%;
  }
  .edg {
    width: 22rem;
    height: 2.8rem;
    background-color: #4cd964;
    margin-top: .8rem;
    border-radius: .4rem;
    color: white;
    font-weight: 700;
  }
</style>
