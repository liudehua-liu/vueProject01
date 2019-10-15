<template>
    <div class="dingdan">
      <div class="dingtou">
        <router-link class="tou_a" :to="{path:'/surebuy'}">
        <i class="icon-zuojiantou iconfont"></i>
        </router-link>
        订单备注
      </div>

      <!--订单需求-->
      <div class="xuqiu">
       <div>快速备注</div>

          <div><span class="onespan" v-for="(p,i) in dingData[0]" :key="i">{{p}}</span><span class="onespant" v-for="(p,i) in dingData[1]">{{p}}</span></div>

          <div><span class="twospan" v-for="(p,i) in dingData[2]">{{p}}</span><span class="twospan" v-for="(p,i) in dingData[3]">{{p}}</span><span class="twospan" v-for="(p,i) in dingData[4]">{{p}}</span></div>
          <div><span class="onespan" v-for="(p,i) in dingData[5]">{{p}}</span></div>

      </div>

      <!--其他备注-->
      <div class="qita">
        <p>其他备注</p>
        <textarea datafld placeholder="请输入备注内容(可不填)"></textarea>
      </div>

      <!--确定按钮-->
      <div class="footding">确定</div>
    </div>
</template>

<script>
    export default {
        name: "Dingdan",
      data(){
          return{
            dingData:[]
          }
      },
      created(){
        this.axios.get("https://elm.cangdu.org/v1/carts/1/remarks").then((response) => {
          // console.log(this.dingData.remarks);
          this.dingData=response.data.remarks;
          console.log(this.dingData);
        })
      }
    }
</script>

<style scoped>
@import "//at.alicdn.com/t/font_1452315_m706g68azpk.css";
  *{
    padding: 0;
    margin: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  .iconfont{
    position: absolute;
    left: 0.5rem;
    font-size: 1.3rem;
  }
  .dingdan{
    width: 100%;
    height: 41.3rem;
    background-color: rgb(245,245,245);
  }
  .tou_a{
    color: white;
  }
  .dingtou{
    width: 100%;
    position: relative;
    height: 3rem;
    line-height: 3rem;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: rgb(49,144,232);
    text-align: center;
  }
  .xuqiu{
    width: 90%;
    height: 29%;
    background-color: white;
    color: black;
    padding: 0 5%;
    line-height: 2.7rem;
    margin-top: 0.5rem;
  }
  .qita{
    width: 90%;
    padding: 1% 5%;
    height: 25%;
    background-color: white;
    margin-top: 0.8rem;
  }
.qita p{
  padding: 0.5rem 0;
}
.qita textarea{
  width: 95%;
  height: 50%;
  border: 0.1rem solid ghostwhite;
  background-color: rgb(245,245,245);
  border-radius: 3%;
  padding: 0.5rem;
}
  .footding{
    width: 90%;
    margin: 0 auto;
    background-color: rgb(76, 217, 100);
    border-radius: 0.5rem;
    color: white;
    text-align: center;
    height: 3rem;
    line-height: 3rem;
  }
  .onespan,.onespant,.twospan{
    border: 0.08rem solid deepskyblue;
    border-radius: 0.2rem;
    padding: 0.2rem 0.5rem;
  }
  .onespant{
    margin-left: 1rem;
  }
  .twospan{
   margin-right:1rem;
  }
</style>
