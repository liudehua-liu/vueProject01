<template>
  <div id="shopshow">
    <ul>
      <router-link  v-for="(p,index) in footsData" :key="index"  class="lifoot" :to="{path:'/ping/dexshop'+index}">
      <li class="lifoot">{{p.name}}</li>
      </router-link>
      <router-view></router-view>
    </ul>




    <!----------------------------------------------------------------->
    <van-tree-select
      height="55vw"
      :items="items"
      :main-active-index.sync="activeIndex"
    >
      <template slot="content">
        <van-image v-if="activeIndex === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <van-image v-if="activeIndex === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
      </template>
    </van-tree-select>
    export default {
    data() {
    return {
    activeIndex: 0,
    items: [{ text: '分组 1' }, { text: '分组 2' }]
    }
    }
    }
    <!----------------------------------------------------------------->

  </div>
</template>

<script>
  export default {
    name: "shopShow",
    data(){
      return{
        footsData:[],
        desData:[]
      }
    },

    mounted(){
      this.axios.get("https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1").then((response) => {
        this.footsData=(response.data.slice(0, 5));
        console.log(this.footsData);
        // this.desData=this.footsData.description;
        // // console.log(this.desData);
        // for(let i in this.footsData){
        //   console.log(i.name);
        // }
        this.footsData.forEach((v,i)=>{
          console.log(v.description,i);
        })
      });






    },


  }
</script>

<style scoped>
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
</style>

