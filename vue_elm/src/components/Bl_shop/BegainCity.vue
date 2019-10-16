<template>
    <div class="begaincity">
      <div class="city_title">
           <p>ele.me</p>
        <router-link :to="{path:'/longin'}">登录|注册</router-link>
      </div>

      <!--当前定位城市-->
      <div class="gpscity">
        <div class="gpsone">
          <p>当前定位城市:</p>
          <p>定位不准时，请在城市列表中选择</p>
        </div>
       <div class="cityname">
         <p>郑州</p>
         <i class="icon-changyongtubiao-xianxingdaochu-zhuanqu- iconfont"></i>
         </div>
      </div>

      <!--热门城市-->
      <div class="recity">
       <p class="retitle">热门城市</p>
        <ul>

            <li v-for="(p,i) in recity" :key="i">
              <router-link :to="{path:'/twosearch',query:{cityName:p}}">
              </router-link>
              {{p.name}}</li>

        </ul>
      </div>

      <!--按字母开头拍城市顺序-->
      <div class="allcitys">
        <ul v-for="(x,i) in cityT" :key="i">
          <p class="zimu">{{x}}</p>

            <li class="yin" v-for="(m,n) in  allcity[x]" :key="n">
              <router-link :to="{path:'/twosearch',query:{cityName:m}}">
              {{m.name}}
              </router-link>
            </li>



          <div class="emp"></div>
        </ul>
      </div>

    </div>
</template>

<script>
    export default {
        name: "BegainCity",
      data(){
          return{
            recity: [],
            allcity:[],
            cityT:[],
            cityName:[]

          }
      },
        mounted(){
        //  热门城市
        this.axios.get("https://elm.cangdu.org/v1/cities?type=hot").then((response) => {
          // console.log(response.data);
          this.recity=response.data;
          console.log(this.recity)
        });

          // 所有城市
          this.axios.get("https://elm.cangdu.org/v1/cities?type=group").then((res) => {
            this.allcity=res.data;
            // this.allcity=this.allcity;
            console.log(this.allcity);
            for(let k in res.data){
              this.cityT.push(k);
            }
            this.cityT=this.cityT.sort();


          })
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452315_g1l4ftfuppw.css";
  .iconfont{
    color: black;
    font-weight: bold;
  }
*{
  padding: 0;
  margin: 0;
}
  html,body{
    width: 100%;
    height: 100%;
  }
  .begaincity{
    width: 100%;
    height: 41.6rem;
    background-color: rgb(245,245,245);
  }
  .city_title{
    width: 94%;
    padding: 0 3%;
    height: 3rem;
    color: white;
    line-height: 3rem;
    display: flex;
    justify-content: space-between;
    background-color: rgb(49,144,232);
  }
  .city_title a{
  color: white;
  }
  .gpscity{
    width: 100%;
    background-color: white;
  }
  .gpsone,.cityname{
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    color: grey;
    border-bottom: 0.05rem solid lightgray;
  }
 .cityname{
   font-size: 1.1rem;
   color: dodgerblue;
  }
  /*热门城市*/
 .cityname,.gpsone,.cityname{
    width: 94%;
    padding:3%;
  }
  .recity{
    width: 100%;
    background-color: white;
    margin-top: 0.8rem;
    border-top: 0.07rem solid lightgray;
  }
  .retitle{
    width: 97%;
    border-bottom: 0.05rem solid lightgray;
    padding: 1% 0;
    padding-left: 3%;
    font-size: 0.8rem;
  }


  .recity ul,.allcitys{
    width: 100%;
    overflow: hidden;
  }
  .allcitys{
    margin-top: 0.8rem;
    background-color: white;
  }
 .recity ul li,.allcitys li{
   width: 25%;
   float: left;
   text-align: center;
   padding: 2%;
   border-bottom: .025rem solid #e4e4e4;
   border-right: .025rem solid #e4e4e4;
   box-sizing: border-box;
   color: dodgerblue;
 }
  .allcitys p{
    width: 100%;
  }
  .allcitys ul{
    border-bottom: .025rem solid #e4e4e4;
  }
  .allcitys li{
    color: #666;
  }
  .yin{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .yin a{
    color: #666;
  }
  .zimu{
    width: 100%;
    padding-top: 0.5rem;
    padding-bottom: 3%;
    padding-left: 1rem;
    font-size: 0.8rem;
    border-bottom: .025rem solid #e4e4e4;
  }
  .emp{
    clear: both;
  }
</style>
