<template>
    <div id="app">
      <div id="head">
        <router-link :to="{path:'/benefit'}">
          <i class="iconjiantou-px--copy-copy iconfont"></i>
        </router-link>
        <span class="my">历史红包</span>
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
            <span class="akl"><i class="iconyiguoqi iconfont skt"></i></span>
          </div>
        </li>
        <p class="food">{{limit}}</p>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "HbHistory",
      data(){
          return {
            a:[],
            amount:[],
            Arr:[],
            limit:""
          }
      },
      created(){
        this.axios.get("https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0").then((response) => {

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
  @import "//at.alicdn.com/t/font_1452054_ys2huinbi8.css";
  #app {
    width: 23.4rem;
    height: 100%;
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
  .link {
    margin-bottom: .4rem;
    width: 19.5rem;
    margin-left: 1rem;
    border-radius: .4rem;
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAAAXNSR0IArs4c6QAAAHtJREFUKBVjvHv37n8GKgImKpoFNmoYGcjIyAgK6+VA2o6FhUWInZ1dlomJKQDIP40cbIzERApQ01+g5jAFBYV1yJpB7P///zPev39/IpDOBfGJDcNGbIaBDAC5XFFRsQBIHwDxCRoIVPidmZl5CkgxLgBU8w/owl6QPABvmyDiDQUF7gAAAABJRU5ErkJggg==) repeat-x;
    background-size: .8rem;
    overflow: hidden;
    padding: 1.5rem 1rem 1.5rem 1rem;
    margin-top: 1.5rem;
  }
  .red {
    color: #ccc;
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
  .skt {
    color: #666;
    font-size: 3rem;
  }

</style>
