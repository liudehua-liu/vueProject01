<template>
    <div class="headli">
      <router-link :to="{path:'/search'}">
        <i class="iconfont" style="font-size: 1.5rem; margin: 0.25rem 1rem;color: white">&#xe60b;</i>
      </router-link>
      <router-link :to="{path:'/city'}">
        <div class="citywhere">{{this.citywhere}}</div>
      </router-link>
      <router-link :to="{path:'/home'}">
        <i class="iconfont" style="font-size: 1.5rem; margin: 0.35rem 1rem;color: white">&#xe60d;</i>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "Headli",
      props:{
          citywhere:{
            type:String,
            default:"aaaaaaaaa",
          },
        alldata:{
          type:Array,
          default:[]
        },
      }
    }
</script>

<style scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 1453550 */
    src: url('//at.alicdn.com/t/font_1453550_q6yp8k5ttn8.eot');
    src: url('//at.alicdn.com/t/font_1453550_q6yp8k5ttn8.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1453550_q6yp8k5ttn8.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1453550_q6yp8k5ttn8.woff') format('woff'),
    url('//at.alicdn.com/t/font_1453550_q6yp8k5ttn8.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1453550_q6yp8k5ttn8.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:0.5rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    float :left;
  }
  .headli{
    height: 2.5rem;
    width: 100%;
    background-color: dodgerblue;
    position: fixed;
    z-index: 999;
  }
  .citywhere{
    width: 16.4rem;
    height: 2.5rem;
    font-size: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    padding-top: 0.4rem;
    float: left;
    overflow :hidden;
    text-overflow: ellipsis;
  }
</style>
