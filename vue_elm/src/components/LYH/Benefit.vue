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
          <ul>
            <li v-for="(v ,i) in a" :key="i">
              <p>¥ <span>{{Arr[i][0]}}.{{Arr[i][1]}}</span></p>
              <p>{{v.description_map.sum_condition}}</p>
              <p>{{v.name}}</p>
              <p>{{v.description_map.validity_periods}}</p>
              <p>{{v.description_map.phone}}</p>
              <span>{{v.description_map.validity_delta}}</span>
            </li>
          </ul>
          </van-tab>
        <van-tab title="商家代金券">

          商家代金券
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

 </style>
