<template>
    <div class="twosearch">
     <!--头部-->
      <div class="two_title">
          <router-link :to="{path:'/city'}"><i class="icon-zuojiantou iconfont"></i></router-link>
          <p>{{cityInfo.name}}</p>
          <router-link :to="{path:'/city'}">切换城市</router-link>
      </div>

      <!--头部下边的-->
      <div class="two_cont">
        <input type="text" class="ts_put" placeholder="输入学校、商务楼、地址" v-model="putvalu">
        <div @click="getdata(putvalu)">提交</div>
      </div>

      <!--隐藏的搜索历史-->
      <div>
      <p class="history_bl">搜索历史</p>
      <div class="searchfoot" v-if="yinData" v-for="(x,i) in cunArr" :key="i">
        <p class="history_hang">{{x.putcont}} <span class="deleteone" @click="shanone(i)">x</span></p>

        <!--<p >大家好{{x.address}}</p>-->
      </div>
      <p @click="clearAlld" class="clearp">清空所有</p>
    </div>
      <!--搜索出来的内容-->
      <div class="yindiv" v-if="getshow">
        <router-link :to="{}">
       <div class="fordiv" v-for="(x,i) in cunArr" :key="i">
         <p>{{x.name}}</p>
         <p class="search_di">{{x.address}}</p>
       </div>
        </router-link>
      </div>

      <div v-if="sorryda">很抱歉,无搜索结果 </div>
    </div>
</template>

<script>
    import storage from "../../Storage/storage";

    export default {
        name: "TwoSearch",
      data(){
          return{
            yinData:true,
            putvalu:"",  //put里绑定的值
            cunArr:[],
            getshow:false,
            sorryda:false,
            cityInfo:[]
          }
      },
      methods:{
        getdata(putvalu){
          //点击提交时获取put的值,并储存
          if(putvalu == ""){
            alert("请输入你需要搜索的内容");
          }else{
            this.cunArr.push({
              putcont:this.putvalu,
              checked:false
            });
            storage.set("cont",this.cunArr);
            this.axios.get("https://elm.cangdu.org/v1/pois?city_id=1&keyword="+putvalu+"&type=search").then((response) => {
              console.log(response.data);
              if(response.data.length != 0){
                console.log(123131)
                this.cunArr=response.data;
                this.yinData=false;
                this.getshow=true;



              }else{
                this.yinData=false;
                this.getshow=false;
                this.sorryda=true
              }

            });

          }
        },
        clearAlld(){
          this.cunArr.splice(0,this.cunArr.length);
        },
        shanone(index){
          this.cunArr.splice(index,1);
        }

      },
      created(){
          var vlueData=storage.get('cont');
           console.log(vlueData);
          if(vlueData){
            this.cunArr=vlueData;

          }
        console.log(this.$route.query.cityName);
          this.cityInfo=this.$route.query.cityName;
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
    padding:0.1rem 1.2rem;
    line-height: 2rem;
    font-size: 0.8rem;
    background-color: white;
    border-bottom: 0.1rem solid ghostwhite;
  }
  .history_bl{
    padding-left: 0.5rem;
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
  .clearp{
    padding: 0.8rem;
    text-align: center;
    background-color: white;
  }
  .history_hang{
    display: flex;
    justify-content: space-between;
  }
  .deleteone{
    font-size: 1.1rem;
  }
</style>
