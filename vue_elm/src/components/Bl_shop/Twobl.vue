<template>
  <div class="tsearch">
    <div class="ttitle">
      <router-link :to="{path:'/city'}"><i class="icon-zuojiantou iconfont"></i></router-link>
      <p>{{getdata}}</p>
      <router-link :to="{path:'/city'}">切换城市</router-link>
    </div>

    <!--第二部分-->
    <div class="sear">
      <input type="text" placeholder="输入学校、商务楼、地址" v-model="putV">
      <p @click="getdress"> 提交</p>
    </div>


  </div>
</template>

<script>
  export default {
    name: "Twobl",
    data() {
      return {
        putV: "",
        getdata: ""
      }
    },
    created() {
      let city = this.storage.get("gpscity");
      this.getdata=city.name;
      console.log(this.getdata);
    },
    methods:{
      getdress(){
        this.axios.get(`https://elm.cangdu.org/v1/pois?city_id=${this.getdata.id}&keyword=${this.putV}&type=search`).then((response) => {
          console.log(response.data);
        });
      }
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452315_8r8r3tb0b5c.css";

  * {
    padding: 0;
    margin: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  .tsearch {
    width: 100%;
    height: 41.6rem;
    background-color: rgb(245, 245, 245);
  }

  .ttitle {
    width: 94%;
    height: 3rem;
    padding: 0 3%;
    line-height: 3rem;
    text-align: center;
    color: white;
    background-color: royalblue;
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }

  .two_title a {
    color: white;
  }

  .sear {
    width: 90%;
    padding: 3% 5%;
    height: 10rem;
    margin-top: 0.5rem;
    background-color: white;
  }

  .sear input {
    width: 96%;
    padding: 2%;
    border: 0.05rem solid lightgrey;
  }

  .sear p {
    width: 100%;
    text-align: center;
    margin-top: 0.7rem;
    height: 2rem;
    line-height: 2rem;
    color: white;
    border-radius: 0.2rem;
    background-color: rgb(49, 144, 232);
  }
</style>
