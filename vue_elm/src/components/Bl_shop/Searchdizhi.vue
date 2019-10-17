<template>
    <div class="soudi">

     <div class="soudi_title">
       <router-link :to="{path:'/dizhi'}">
         <i class="icon-changyongtubiao-xianxingdaochu-zhuanqu-1 iconfont"></i>
       </router-link>
       <h3>搜索</h3>
     </div>

      <!--搜索框-->
      <div class="soukuang">
        <input type="text" placeholder="请输入小区/写字楼/学校等">
        <span @click="getdress">搜索</span>
      </div>

      <!--下边一段浅色文字-->
      <div class="tixing">
        <p>找不到地址？</p>
        <p>尝试输入小区、写字楼或学校名</p>
        <p>详细地址（如门牌号等）可稍后输入哦</p>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Searchdizhi",
        methods:{
          getdress(){
            this.axios.get("https://elm.cangdu.org/v1/users/1/addresses").then((response) => {
              this.footsData=(response.data);
              console.log( this.footsData);
            })
          }
        },

    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452315_jv27lblaflj.css";
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
    left: 0.3rem;
    font-weight: bold;
    font-size: 1.2rem;
   }
  .soudi_title a{
    color: white;
  }
.soudi_title{
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  color: white;
  text-align: center;
  position: relative;
  background-color: rgb(49,144,232);
}
  .soukuang{
    width: 94%;
    padding: 3%;
  }
  .soukuang input{
    width: 71%;
    padding: 2%;
    margin-right: 3%;
    border-radius:5%;
    background-color: rgb(245,245,245);
  }
  .soukuang span{
    padding:2% 5%;
    color: white;
    border-radius: 10%;
    background-color: rgb(49,144,232);
  }
  .tixing{
    text-align: center;
    margin-top: 55%;
    font-size: 0.8rem;
    color:lightgray;
  }
</style>
