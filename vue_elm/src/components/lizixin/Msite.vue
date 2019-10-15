<template>
  <div class="homediv">
    <Headli></Headli>
    <HomeSwiper></HomeSwiper>
    <Footli></Footli>
  </div>
</template>

<script>
  import HomeSwiper from "./swiper"
  import Headli from "./Headli"
  import Footli from "./Footli"
    export default {
        name: "Msite",
      components:{HomeSwiper,Headli,Footli},
    }
</script>

<style>
  @font-face {
    font-family: 'iconfont';  /* project id 1453550 */
    src: url('//at.alicdn.com/t/font_1453550_1tacxd9xznj.eot');
    src: url('//at.alicdn.com/t/font_1453550_1tacxd9xznj.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1453550_1tacxd9xznj.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1453550_1tacxd9xznj.woff') format('woff'),
    url('//at.alicdn.com/t/font_1453550_1tacxd9xznj.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1453550_1tacxd9xznj.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:0.5rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    float :left;
  }
  .homediv{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
