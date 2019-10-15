<template>
    <div class="pricetou">
      <div class="dingtou">
        <router-link class="tou_a" :to="{path:'/surebuy'}">
          <i class="icon-zuojiantou iconfont"></i>
        </router-link>
        订单备注
      </div>

      <!--内容-->
    </div>
</template>

<script>
    export default {
        name: "PriceTou"
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452315_m706g68azpk.css";
*{
  margin: 0;
  padding: 0;
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
  .pricetou{
    width: 100%;
    height: 41.3rem;
    background-color: rgb(245,245,245);
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
</style>
