<template>
   <div class="addD">
    <div class="addD_title">
      <router-link :to="{path:'/surebuy'}"><i class="icon-zuojiantou iconfont"></i></router-link>
      选择地址
    </div>

     <router-link :to="{path:'/dizhi'}" class="footer_a">
       <div class="yuanadd">+</div>
       <span class="adda_bl">新增收货地址</span>
     </router-link>
   </div>
</template>

<script>
    export default {
        name: "AddD"
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452315_3dl8zw84e3a.css";
  *{
    padding: 0;
    margin: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  .iconfont{
    color: white;
    font-size:1.5rem;
    position: absolute;
    left: 0.3rem;
  }
  .addD{
    width: 100%;
    height: 41.3rem;
    background-color: white;
    position: relative;
  }
  .addD_title{
    width: 100%;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    font-size: 1.3rem;
    color: white;
    font-weight:bold;
    background-color: royalblue;
  }
  .yuanadd{
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.3rem;
    border: 0.05rem solid royalblue;
    border-radius: 50%;
    font-size: 1.5rem;
    text-align: center;
    display: inline-block;
  }
  .footer_a{
    width: 100%;
    position: fixed;
    top:39rem;
    left: 0;
    color:royalblue;
    text-align: center;

  }
  .adda_bl{
    color: powderblue;
    font-size: 1.2rem;
    vertical-align: 0.07rem;
  }
</style>
