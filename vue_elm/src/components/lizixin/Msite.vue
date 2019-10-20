<template>
  <div class="homediv">
    <Headli :citywhere="citywhere" :alldata="alldataadd"></Headli>
    <HomeSwiper ref="shop"></HomeSwiper>
    <Footli :toprop="'li1'" :alldata="alldataadd"></Footli>
  </div>
</template>

<script>
  import HomeSwiper from "./swiper"
  import Headli from "./Headli"
  import Footli from "./Footli"
  import List from "./List"
    export default {
        name: "Msite",
      components:{HomeSwiper,Headli,Footli,List},
      data(){
        return{
          citywhere:"",
          toswiper: [31.22967,121.4762],
          ball:[],
          alldataadd:["msite"]
        }
      },
      methods:{
        test(){
        }
      },
      created(){
          if(this.storage.get("citywhere")!=undefined){
        this.citywhere=this.storage.get("citywhere");
        this.toswiper=this.storage.get("toswiper");
      }
        if (this.$router.query!=undefined) {
            this.citywhere=this.$router.query.citywhere;
            this.toswiper=this.$router.query.local;
            this.storage.set("citywhere",this.citywhere);
            this.storage.set("toswiper",this.toswiper);
          }

        this.storage.set("alldata",this.alldataadd)
        this.axios.get("https://elm.cangdu.org/shopping/restaurants?latitude="+this.toswiper[0]+"&longitude="+this.toswiper[1]).then((response) => {
          this.ball = response.data;
          this.$refs.shop.getda(this.ball);
        });

      },
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
  }
</style>
