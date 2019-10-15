<template>
    <div id="app">
      <div id="head">
        <router-link :to="{path:'/home'}">
          <i class="iconjiantou-px--copy-copy iconfont"></i>
        </router-link>
        <span class="my">服务中心</span>
      </div>
      <div class="kfs">
        <div class="kf1">
          <div class="iconkefu iconfont tx"></div>
          <div class="zxkf1">在线客服</div>
        </div>
        <div class="kf2">
          <p class="iconweibiaoti- iconfont phone"></p>
          <div class="zxkf1">在线客服</div>
        </div>
      </div>
      <p class="rm">热门问题</p>
        <ul>
          <li v-for="(v,i) in a":key="i" class="miaoshu" @click="question(v,i)">
            <span>{{v}}</span>
            <i class="iconchangyongtubiao-xianxingdaochu-zhuanqu-1 iconfont right"></i>
          </li>
        </ul>
    </div>
</template>
<script>
    export default {
      name: "ServiceCentre",
      data() {
        return {
          a: [],
          b: []
        }
      },
      methods:{
        handleData(data){
          let keyArr = Object.keys(data);
          // console.log(keyArr);

          keyArr.splice(keyArr.indexOf("index"), 1);
          for (var i = 0; i < keyArr.length; i+=2) {
            this.a.push(data[keyArr[i + 1]]);
            this.b.push(data[keyArr[i]]);
          }
        },
        question(v,i){
          this.$router.push({path:"/question",query:{a:v,b:this.b[i]}})
        }
      },
      created() {
        this.axios.get("https://elm.cangdu.org/v3/profile/explain").then((response) => {
          this.handleData(response.data);
        });
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452054_q8rpzaf9fg7.css";
  @import "//at.alicdn.com/t/font_1452054_l9ujdnvu2mq.css";
  @import "//at.alicdn.com/t/font_1452054_4a4uaj8s77o.css";
  @import "//at.alicdn.com/t/font_1452054_6ilnrptr0yc.css";
  #app {
    width: 23.4rem;
    height: 42.4rem;
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
  .kfs {
    overflow: hidden;
  }
  .kf1,.kf2 {
    height: 6rem;
    background-color: white;
    width: 49.5%;
    float: left;
    line-height: 6rem;
    text-align: center;
    font-family: "楷体";
  }
  .kf2 {
    margin-left: 1%;
  }
  .zxkf1 {
    width: 100%;
    height: 50%;
    float: left;
    line-height: 1rem;
  }
  .tx {
    color: red;
    height: 50%;
    width: 100%;
    line-height: 4rem;
  }
  .phone {
    color: green;
    height: 50%;
    width: 100%;
    line-height: 4rem;
  }
  .rm {
    width: 22.4rem;
    height: 4rem;
    background-color: white;
    margin-top: 0.2rem;
    line-height: 4rem;
    padding-left: 1rem;
    font-size: 1.3rem;
    font-family: "楷体";
  }
  .miaoshu {
    list-style:none;
    padding-left: 1rem;
    margin-top: 0.1rem;
    width: 22.4rem;
    height: 3rem;
    line-height: 3rem;
    background-color: white;
    font-family: "楷体";
    font-size: 1.1rem;
  }
  .right {
    float: right;
    color: black;
    margin-right: 1rem;
    font-size: 1.2rem;
  }
</style>
