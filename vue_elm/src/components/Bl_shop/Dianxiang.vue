<template>
    <div class="dianxiang">
      <div class="xiangtitle">
        <router-link :to="{}">
          <i class="icon-changyongtubiao-xianxingdaochu-zhuanqu-1 iconfont"></i>
        </router-link>

        <h3>{{desARR.name}}</h3>
      </div>
      
      <!--图片-->
      <div class="desimg">
        <img data-v-a51691c2="" :src="'//elm.cangdu.org/img/'+desARR.image_path">
      </div>
      <p class="desppp">{{desARR.description}}</p>

      <div class="dianaaaa">
        <p>{{desARR.name}}</p>
        <div class="xiangxing">评分

        <!--------------------------->
          <van-rate
            v-model="value"
            allow-half
            size="0.5rem"
            gutter="0.001rem"
            void-icon="star"
            void-color="#eee"
            class="cha_start"
          />
          <!------------------------------->
          <p>{{desARR.rating}}</p>
        </div>
        <div class="xiangfoot"><span>月售{{desARR.month_sales}}单</span> <span>售价￥{{desARR.specfoods[0].price}}起</span></div>
        <div class="xiangfoot"><span>评论数{{desARR.rating_count}}</span> <span>好评率{{desARR.satisfy_rate}}%</span></div>
      </div>


    </div>
</template>

<script>
    export default {
        name: "Dianxiang",
      data(){
          return{
            desARR:"",
            value:2.5
          }
      },
      mounted(){
          this.$route.query.dianDes;
        this.desARR=this.$route.query.dianDes
        console.log(this.desARR);
        this.value=desARR.rating;
      }
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
    left: 0.5rem;
    font-weight: bold;
    font-size: 1.2rem;
    color: white;
  }
  .dianxiang{
    width: 100%;
    height: 41.6rem;
    background-color: white;
  }
  .xiangtitle{
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    position: relative;
    text-align: center;
    color: white;
    background-color: rgb(49,144,232);
  }
  .desimg{
    width: 100%;
    height: 55%;
  }
  .desimg img{
    width: 100%;
  }
  .desppp{
    padding: 2%;
    color: #666;
    font-size: 0.8rem;
  }
  .dianaaaa{
    width: 96%;
    padding: 2%;
  }

  .xiangfoot{
    width: 100%;
    /*display: flex;*/
    /*justify-content: space-between;*/
  }
  .xiangxing{
    display: flex;
    /*justify-content: space-between;*/
  }
  .cha_start{

  }
</style>
