<template>
    <div id="ping">

      <!--店铺综合评价-->
      <div class="diandes">
        <div class="dL">
          <h4>{{pData.food_score.toFixed(1)}}</h4>
          <p class="zhpj">综合评价</p>
          <p class="hp_bl">高于周边商家 {{}}%</p>
        </div>
        <div class="dR">
          <div>服务态度
            <van-rate
              v-model="value"
              allow-half
              void-icon="star"
              void-color="#eee"
              size="0.01rem"
              gutter="0.001rem"
            />
           <span>{{value.toFixed(1)}}</span>
            </div>
          <div>菜品评价
            <van-rate
              v-model="value"
              allow-half
              void-icon="star"
              void-color="#eee"
              size="0.01rem"
              gutter="0.001rem"
            />
            {{value.toFixed(1)}}</div>
          <p>送达时间 {{pData.deliver_time}}分钟</p>
        </div>
      </div>


      <!--全部评论-->
      <div class="pshow">

        <!--全部综合的信息-->

        <span @click="temp=index" v-for="(p,index) in pingData" :key="index" :class="index==temp?'changecolor':'pblue'">{{p.name}}({{p.count}})</span>

      </div>


      <!--用户的评价-->
      <div class="userping" v-for="(ietm,index) in userData" :key="index">
        <div class="userL">
          图片搞不定
         <!--<img :src="'http://elm.cangdu.org/img/'+item.avatar+'.jpg'">-->
        </div>

        <!--用户评价右侧详情-->
        <div class="userR">
          <div class="username"><span>{{ietm.username}}</span><span>{{ietm.rated_at}}</span></div>

          <!--五角星按时送达-->
          <div>
            <van-rate
              v-model="value"
              allow-half
              void-icon="star"
              void-color="#eee"
              size="0.01rem"
              gutter="0.001rem"
            />

            <span class="anshi">{{ietm.time_spent_desc}}</span>
          </div>

          <!--用户晒图下方底-->
          <div>
            <span v-for="(v,i) in ietm.item_ratings">
              <img :src="'https://fuss10.elemecdn.com/'+v.image_hash+'.jpeg'" alt="" class="eatimg">
            </span>
            <br>
            <span class="food_name" v-for="(v,i) in ietm.item_ratings">{{v.food_name}}</span>
          </div>

        </div>
      </div>



      <!--尾部结束-->
    </div>
</template>

<script>
    export default {
        name: "Ping",
      data(){
          return{
            pingData:[],
            pData:[],
            value: '',
            userData:'',
            temp:""
          }
      },
      methods:{
        changecolor(i){
         // this.index.background="red";
         //  this.styles='changcolor';
        }
      },
      mounted(){
        this.axios.get("https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags").then((response) => {
          this.pingData=(response.data);
        }),
          this.axios.get("https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/scores").then((response) => {
            this.pData=(response.data);
            this.value=this.pData.service_score;
            // console.log(this.value);
          }),
          this.axios.get("https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10").then((response) => {
            // console.log(response.data);
            this.userData=response.data;
            // console.log(this.userData);

           // console.log(response.data.item_ratings);
          })

      },
    }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  html,body{
    width: 100%;
    height: 100%;

  }
#ping{
  width: 100%;
  height: 80%;
  background-color: ghostwhite;
}
  .diandes{
    width: 80%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    color: black;
    padding:5% 10%;
  }
  .dL{
    width:35%;
    text-align: center;
    padding-right:10%;
  }
  .dR{
    width: 55%;
    font-size: 0.9rem;
    line-height: 1.5rem;
    color: #666;
  }
  .dL h4{
    font-size: 1.6rem;
    color: orangered;
  }
  .pshow, .userping{
    width: 94%;
    color: black;
    background-color: white;
    padding:3%;
    border-bottom: 0.01rem solid lightgray;
  }
  .pshow{
    margin-top: 0.8rem;
  }
  .pblue,.changecolor{
    display: inline-block;
    padding: 0.3rem;
    margin-right: 0.6rem;
    margin-bottom:0.3rem;
    border-radius: 8%;
    background-color: powderblue;
  }
  .changecolor{
    background-color:lightskyblue;
  }
  .userping{
    display: flex;
    justify-content: space-between;
  }
  .userL{
    width: 20%;
    margin-right: 5%;
    text-align: center;
  }
  .userR{
    width: 75%;
  }
  .hp_bl{
    color: gray;
    font-size: 0.7rem;
  }
  .zhpj{
   color:#666;
  }
  .username{
    display: flex;
    justify-content: space-between;
  }
  .anshi{
    font-size: 0.9rem;
    color: #666;
  }
  .food_name{
    width: 15%;
    margin-right: 5%;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 0.05rem solid gainsboro;
    border-radius: 10%;
    padding: 0.3rem 0.3rem;
    font-size: 0.8rem;
    color: #666;
    margin:0.2rem 0;
  }
  .eatimg{
    width: 25%;
  }
</style>
