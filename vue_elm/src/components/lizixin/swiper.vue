<template>
  <div class="maxbox"><router-view></router-view>
  <div class="bunder_c">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(v,i) in pagebtn" :key="i">
        <router-link :to="{path:'/food',query:{title:btnname}}" class="titleset" v-for="(btnname,index) in pagepro[i]" :key="index">
          <img :src="imghead+btnname[1]">
          <p>{{btnname[0]}}</p>
        </router-link>
        <div style="width: 100%;height: 0.5rem;float: left"></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
    <Totop></Totop>

  <div class="bunder_b" >
    <div class="near1"><i class="iconfont" style="font-size: 1rem; margin: 0 0.4rem">&#xe601;</i><p>附近商家</p></div>
    <List></List>
  </div>
  </div>
</template>
<script>
import Totop from './Totop'
import List from './List'
  export default {
  components:{Totop,List},
  name: "HomeSwiper",
    // components: {
    //   swiper,
    //   swiperSlide
    // },
    props:{
      toswiper:{
        type: Array,
        default: function () {
          return [31.22967,121.4762];
          }
      },
    },
  data() {
    return {
      imghead:"http://fuss10.elemecdn.com",
      seller:[],
      btntitle:[],
      titlepro:[],
      pagebtn:[],
      pagepro:[],
      imgurl:[],

      swiperOption: {
        loop: true,
        speed:1000,
        autoplay : {
          delay:3000
        },
        touchMoveStopPropagation : false,
        pagination :{
          el: '.swiper-pagination',
          clickable :true,
        }
      },
    };
  },
    created(){
      //发起网络请求
      this.axios.get("https://elm.cangdu.org/v2/index_entry").then((response) => {
        this.seller = response.data;
      }).then(()=>{
        //处理所有商品,得到分类的名字
        let arr = [];
        this.seller.forEach((v)=>{
          arr = [...new Set([...arr, [v.title,v.image_url]])];
        });
        this.btntitle= arr;
        this.titlecount();
      });
    },
    methods:{

      titlecount(){
        // 计算展示当前商品所需的页数
        const count = Math.ceil(this.btntitle.length / 8);
        let arr = [];
        for (let i = 1; i <= count; i++) {
          arr.push(i);
        }
        this.pagebtn = arr;
        this.dealtitlepro(this.pagebtn.length );
      },
      // 处理每一页数据
      dealtitlepro(page){
        for (let i=0;i<page;i++) {
          this.pagepro[i] = this.btntitle.slice(i*8, (i+1)*8);
        }
      },
    }

}
</script>
<style lang="stylus" scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 1453550 */
    src: url('//at.alicdn.com/t/font_1453550_q2208uu7hv.eot');
    src: url('//at.alicdn.com/t/font_1453550_q2208uu7hv.eot?#iefix') format('embedded-opentype'),
      url('//at.alicdn.com/t/font_1453550_q2208uu7hv.woff2') format('woff2'),
      url('//at.alicdn.com/t/font_1453550_q2208uu7hv.woff') format('woff'),
      url('//at.alicdn.com/t/font_1453550_q2208uu7hv.ttf') format('truetype'),
      url('//at.alicdn.com/t/font_1453550_q2208uu7hv.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:0.5rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    float :left;
  }

  .maxbox{
    width: 100%;
    height: 100%;
    padding-top :2.375rem;
  }
  .bunder_c{
    width: 100%;
    height: 12.5rem;
    border-bottom: 0.625rem solid #999999;
  }
    .bunder_b{
      padding-bottom :3rem;
    }
  .titleset{
    width: 5.7rem;
    height: 6rem;
    margin :0 0.05rem ;
    float :left;

  }
  .titleset img {
    width: 2.5rem;
    height:2.5rem;
    margin:0.5rem 1.6rem;
  }
  .titleset p{
    font-size :0.8rem;
    line-height :0.8rem;
    text-align :center;
  }
  .near1{
    width: 100%;
    height: 2rem;
    font-size :1rem;
    line-height :1rem;
    color :#999999;
    padding-top :0.5rem;
  }

</style>
