<template>
  <div id="shopshow">
    <van-sidebar class="leftNav" v-model="activeKey">
      <van-sidebar-item @click="showf(p)"  v-for="(p,index) in footsData" :key="index" :title="p.name" />
    </van-sidebar>

    <!--左边侧边栏-->
    <!----------------------------------------------------------------->
    <!--<van-sidebar class="leftNav" v-model="activeKey">-->
      <!--&lt;!&ndash;<van-sidebar-item title="标签名称" dot />&ndash;&gt;-->
      <!--<van-sidebar-item @click="showf(p)"  v-for="(p,index) in footsData" :key="index" :title=""  info="5" />p.name-->
      <!--&lt;!&ndash;<van-sidebar-item title="标签名称" info="99+" />&ndash;&gt;-->
    <!--</van-sidebar>-->



    <!----------------------------------------------------------------->

    <!--右边部分-->
    <div class="showFoods">

      <!--右边头-->
      <div class="showTitle">
      <span class="shown" v-for="(y) in navname">{{y}}</span>
      <span class="showd" v-for="(x,index) in showtitle" :key="index">{{x}}</span>
        <span @click="showbtn">...</span>
    </div>

      <!--右边身-->

<router-link v-for="(v,i) in showfoods" :key="i" :to="{path:'/dianxiang',query:{dianDes:v}}">
       <div class="lopa">
         <div class="foosLeft">
           <img class="shopimg" :src="'http://elm.cangdu.org/img/'+v.image_path" alt="">
         </div>
         <div class="footsRight">
           <h4>{{v.name}}</h4>
           <p class="pd">{{v.description}}</p>
           <p class="ssssss">月销售{{v.month_sales}}份，好评率{{v.satisfy_rate}}%</p>
           <p class="salez">折扣</p>
           <!--<p>{{v.activity.image_text}}</p>-->
           <!--<p>{{v.specfoods[i].price}}</p>-->
           <div class="tianjia">
           <span>￥20</span><span class="tj">+</span>
           </div>
         </div>
         <div class="emp"></div>
       </div>
      </router-link>
    </div>

  </div>
</template>

<script>
  export default {
    name: "shopShow",
    data(){
      return{
        navname:'',
        activeKey: 0,
        footsData:[],
        desData:[],
        activeIndex: 0,
        showfoods:'',
        showtitle:'',
        showId:"",
        showUrl:"https://elm.cangdu.org/shopping/v2/menu?restaurant_id="
      }
    },
    mounted(){
      this.showId=this.$route.query.dianName.id;
      this.axios.get(this.showUrl+this.showId).then((response) => {
        this.footsData=(response.data);
      })
    },
    methods:{
       showf (v){
        this.navname=v.name;
        this.showfoods=v.foods;
        this.showtitle=v.description;
        // console.log(this.showfoods);
     },
    //  三个小点
      showbtn(){
         alert("这个我还没做，具体来说我不会做，我只会做一个弹框");
      }
    },
  }
</script>

<style scoped>
  /**{*/
    /*padding: 0;*/
    /*margin: 0;*/
  /*}*/
  body,html{
    width: 100%;
    height: 100%;
  }
#shopshow{
  width: 100%;
  height: 80%;
  background-color:ghostwhite;
}
  .lifoot{
    width: 25%;
    height: 4rem;
    line-height: 4rem;
    color: black;
    text-align: center;
    text-decoration: none;
    border-bottom: 0.01rem solid lightgray;
  }
  .leftNav{
    width:25%;
    overflow: hidden;
    float: left;
  }
  .showFoods{
    width: 75%;
    float: right;
    background-color: red;
  }
  .showTitle{
    color: black;
    height: 2.7rem;
    line-height: 3rem;
    font-size: 0.7rem;
    background-color:gainsboro;
  }
  .shown{
    font-size: 1.1rem;
  }
  .showd{
    font-size: 0.8rem;
    color: darkgrey;
  }
  .lopa{
    width:100%;
    height: 7rem;
    background-color: white;
    color: black;
    padding: 0.5rem 0;
    border-bottom:0.05rem solid lightgray;
  }
  .foosLeft{
     width: 20%;
    height: 5rem;
    float: left;
    text-align: center;
    margin-right: 2%;
  }
  .footsRight{
    width: 78%;
    height: 5rem;
    float: left;
  }
  .pd{
    font-size: 0.7rem;
    color:gray;
    padding: 0.2rem 0;
  }
  .shopimg{
    width: 90%;
  }
  .tianjia{
    color: orangered;
    display: flex;
    font-weight: bold;
    justify-content: space-between;
  }
.tj{
  display: inline-block;
  width: 1.3rem;
  height: 1.3rem;
  line-height: 1.1rem;
  border-radius: 50%;
  text-align: center;
  font-size: 1.3rem;
  background-color: dodgerblue;
  color: white;
  margin-right:1rem;
}
.salez{
  width: 1.6rem;
  border-radius: 40%;
  /*border: 0.09rem solid crimson;*/
  color: red;
  font-size: 0.2rem;
  margin: 0.3rem 0;
}
.ssssss{
  font-size: 0.8rem;
}
h4{
  overflow: hidden;
}
  .emp{
    clear: both;
  }
</style>

