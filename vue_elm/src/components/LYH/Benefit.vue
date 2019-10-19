<template>
    <div id="app">
      <div id="head">
        <router-link :to="{path:'/home'}">
          <i class="iconjiantou-px--copy-copy iconfont"></i>
        </router-link>
        <span class="my">我的优惠</span>
      </div>
      <van-tabs v-model="active" color="#3190e8">
        <van-tab title="红包">
          <div class="lpl">
            <span>有<span class="rng">3</span>个红包即将到期</span>
            <a href="http://localhost:8080/#/hbDescription">
            <div  class="right">
              <span class="ig">?</span><span class="edg">红包说明</span>
            </div>
            </a>
          </div>
          <ul>
            <li v-for="(v ,i) in a" :key="i" class="link">
              <div class="left">
                <p class="red">¥ <span class="lgd">{{Arr[i][0]}}</span>.{{Arr[i][1]}}</p>
                <p class="theshy">{{v.description_map.sum_condition}}</p>
              </div>
              <div class="right_s">
                <p class="name">{{v.name}}</p>
                <p class="data">{{v.description_map.validity_periods}}</p>
                <p class="phone">{{v.description_map.phone}}</p>
                <span class="akl">{{v.description_map.validity_delta}}</span>
              </div>
            </li>
          </ul>
          <p class="food">{{limit}}</p>
          <a href="http://localhost:8080/#/hbHistory">
          <p class="fooded">
            查看历史红包
            <i class="iconchangyongtubiao-xianxingdaochu-zhuanqu-1 iconfont mata"></i>
          </p>
          </a>
          <div class="uzi">
            <a href="http://localhost:8080/#/exchange" class="ming">兑换红包</a>
            <a class="ning" href="http://localhost:8080/#/commend">推荐有奖</a>
          </div>
          </van-tab>
        <van-tab title="商家代金券">
        <div class="lpl2">
          <a href="http://localhost:8080/#/coupon">
          <div class="quan">商家代金券说明</div>
          <div class="question">?</div>
          </a>
          </div>
          <button class="upgrade" @click="chang">下载或升级客户端</button>
        </van-tab>

      </van-tabs>

    </div>
</template>

<script>
    export default {
        name: "Benefit",
      data(){
          return {
            active:0,
            a:[],
            amount:[],
            Arr:[],
            limit:""
          }
      },
      methods:{
        chang(){
          this.$router.push({path:"/downlond",query:{to:2}})
        }
      },
      created(){
        this.axios.get("https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0").then((response) => {

          for (let i=0; i < response.data.length;i++) {
            this.a.push(response.data[i]);
            this.amount.push(this.a[i].amount.toFixed(1));
          }
          for (let j = 0;j<response.data.length;j++) {
            this.Arr.push(this.amount[j].split("."));
          }
          this.limit = this.a[2].limit_map.restaurant_flavor_ids;
        })
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452054_q8rpzaf9fg7.css";
  @import "//at.alicdn.com/t/font_1452054_2iw86f03p05.css";
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
  .my{
    color: white;
    font-size: 1.5rem;
    font-family: "楷体";
    font-weight: 900;
  }
  .lpl {
    height: 3rem;
    line-height: 3rem;
    /*background-color: red;*/
    padding-left: 1rem;
    font-size: .8rem;
   color: #666;
  }
  .rng {
    color: red;
  }
  .right {
    float: right;
    margin-right: 1rem;

  }
  .ig {
    color: #3190e8;
    width: .5rem;
  }
  .edg {
    color: #3190e8;
  }
  .link {
    margin-bottom: .4rem;
    width: 19.5rem;
    margin-left: 1rem;
    border-radius: .4rem;
    background: url("../../assets/hong.png") repeat-x,#fff;
    background-size: .8rem;
    overflow: hidden;
    padding: 1.5rem 1rem 1.5rem 1rem;
  }
  .red {
    color: red;
    font-weight: 900;
  }
  .left {
    float: left;
    border-right: .1rem solid #ccc;
    padding-right: .7rem;
  }
  .right_s {
    float: right;
    position: relative;
    margin-right: 3rem;
  }
  .lgd {
    font-size: 2rem;
    font-weight: 900;
  }
  .akl {
    color: red;
    font-size: 1.2rem;
    position: absolute;
    right: -3rem;
    top: 0;
  }
  .theshy {
    font-size: .8rem;
    color: #999;
  }
  .name {
    color: #666;
  }
  .data {
    color: #999;
    font-size: .8rem;
  }
  .phone {
    color: #999;
    font-size: .8rem;
  }
  .food {
    font-size: .8rem;
    width: 20.5rem;
    margin-left: 1rem;
    height: 2rem;
    background-color: #f9f9f9;
    margin-top: -1rem;
    color: #999;
    padding: .5rem;
    border-radius: 0 0 0.4rem  0.4rem ;

  }
  .fooded {
    font-size: .8rem;
    color: #999;
    margin-top: 1.5rem;
    margin-left: 8.5rem;
    /*overflow: hidden;*/
  }
  .mata {
    color: #999;
    font-size: .8rem;
    float: right;
    margin-right: 9rem;
  }
  .uzi {
    /*height: 3rem;*/
    padding: 1rem 4rem 1rem 4rem;
    width: 100%;
    background-color: #fff;
    /*margin-top: 5.4rem;*/
    position: fixed;
    left: 0;
    top: 100%;
    transform: translate(0 ,-100%);
    overflow: hidden;
  }
  .ming {
    float: left;
    width: 50%;
    font-size: 1rem;

  }
  .ning {
    float: right;
    /*margin-right: 9rem;*/
    width: 50%;
    font-size: 1rem;
  }
.lpl2 {
  width: 22rem;
  /*height: 3rem;*/
  margin-top: 1rem;
  margin-bottom: 1rem;
}
  .quan{
    float: right;
    font-size: .8rem;
    color: #3190e8 ;

  }
  .question{
    float: right;
    background-color:  #3190e8;
    font-size: .8rem;
    width: .8rem;
    height: .8rem;
    text-align: center;
    color: white;
    border-radius: 50%;
  }
  .upgrade {
    width: 8rem;
    height: 2.3rem;
    font-size: .9rem;
    color: white;
    border-radius: .2rem;
    background-color: #56d176;
    font-weight: 700;
    margin-top: 16rem;
    margin-left: 8.2rem;
  }

 </style>
