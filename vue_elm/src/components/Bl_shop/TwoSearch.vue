<template>
    <div class="twosearch">
     <!--头部-->
      <div class="two_title">
          <router-link :to="{}"><i class="icon-zuojiantou iconfont"></i></router-link>
          <p>城市名{{}}</p>
          <router-link :to="{}">切换城市</router-link>
      </div>

      <!--头部下边的-->
      <div class="two_cont">
        <input type="text" class="ts_put" placeholder="输入学校、商务楼、地址" v-model="putvalu">
        <div @click="getdata(putvalu)">提交</div>
      </div>

      <div class="searchfoot">
        <p>搜索历史</p>
        <p v-for="(q,index) in cunArr" :key="index">{{q.putcont}}</p>

      </div>


      <!--隐藏的搜索历史-->
      <div class="yindiv" v-if="yinData">
       <div class="fordiv">
         <p>店名{{}}</p>
         <p class="search_di">地址{{}}</p>
       </div>
      </div>

    </div>
</template>

<script>
    import storage from "../../Storage/storage";

    export default {
        name: "TwoSearch",
      data(){
          return{
            yinData:false,
            putvalu:"",  //put里绑定的值
            cunArr:""
          }
      },
      methods:{
        getdata(putvalu){
          //点击提交时获取put的值,并储存
          if(this.putvalu==""){
            alert("请输入你需要搜索的内容");
          }else{
            this.cunArr.push({
              putcont:this.putvalu,
              checked:false
            });
            storage.set("cont",this.cunArr);
            this.axios.get("https://elm.cangdu.org/v1/pois?city_id=1&keyword="+putvalu+"&type=search").then((response) => {
              console.log(response.data)
            });
            // this.yinData=true;
          }
        }
      },
      mounted(){
          var vlueData=storage.get('cont');
        console.log(123);
        console.log(vlueData);
          if(vlueData){
            this.cunArr=vlueData;
          }

      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452315_8r8r3tb0b5c.css";
*{
  padding: 0;
  margin: 0;
}
  html,body{
    width: 100%;
    height: 100%;
  }
  .twosearch{
    width: 100%;
    height: 41.6rem;
    background-color:ghostwhite;
    position: relative;
  }
  .two_title{
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
  .two_title a{
    color: white;
  }
  .two_title p{
    font-size: 1.2rem;
    font-weight: bolder;
  }
  .two_cont{
    width: 90%;
    /*height:10%;*/
    margin-top: 0.5rem;
    padding: 3% 5%;
    background-color: white;
  }
  .ts_put{
    width: 96%;
    padding: 2%;
    border: 0.05rem solid lightgrey;
  }
  .two_cont div{
    width: 100%;
    text-align: center;
    margin-top: 0.7rem;
    height: 2rem;
    line-height: 2rem;
    color: white;
    border-radius: 0.2rem;
    background-color:rgb(49,144,232);
  }
  .searchfoot{
    padding:0.1rem 0.5rem;
    font-size: 0.8rem;
    border-bottom: 0.05rem solid grey;
  }
  .yindiv{
    width: 100%;
    background-color: white;
    line-height: 1.5rem;
    position: absolute;
    left: 0;
    top:24.2%;
  }
  .fordiv{
    width: 94%;
    padding: 3%;
    border-bottom: 0.05rem solid gainsboro;
  }
  .search_di{
    color: gray;
    font-size: 0.8rem;
  }
</style>
