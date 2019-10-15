<template>
  <div>
  <div class="choosedli" v-for="(v,i) in ball" :key="i">
    <img :src="liimghead+v.image_path" class="sellerliimg">
    <div class="liright">
      <div class="liright1">
        <div class="pingpai">品牌</div>
        <div class="liname">{{v.name}}</div>
        <div class="rightsupports">
          <div class="supports" v-for="(supv,supi) in v.supports" :key="supi">{{supv.icon_name}}</div>
        </div>
      </div>
      <div class="liright2">
        <i class="iconfont" v-for="(startv,starti) in starts[i]" :key="starti" :style="startv">&#xe600;</i>
        <div class="code">{{v.rating}}</div>
        <div class="sellsum">月售{{v.recent_order_num}}单</div>
        <div class="rightsup2">
          <div class="fengniao">{{v.delivery_mode.text}}</div>
          <div class="zhunshi">准时达</div>
        </div>

      </div>
      <div class="liright3">
        <div class="litip">￥20起送/{{v. piecewise_agent_fee.tips}}</div>
        <div class="righttip">
          <div class="tipdes1">{{v.distance}}/</div>
          <div class="tipdes2">{{v.order_lead_time}}</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "List",
      props:{
        toswiper:{
          type: Array,
          default: function () {
            return [31.22967,121.4762];
          }
        },
      },
      data(){
          return{
            liimghead:"http://elm.cangdu.org/img/",
            ball:[],
            starts:[],
          }
      },
      created(){
        this.axios.get("https://elm.cangdu.org/shopping/restaurants?latitude="+this.toswiper[0]+"&longitude="+this.toswiper[1]).then((response) => {
          this.ball = response.data;
        }).then(()=>{
          this.starts=[];
          this.ball.forEach((v)=>{
            let xing1= parseInt(v.rating);
            let xing2= ((v.rating*10)%10)*25;
            let arr=[];
            for (let i=0;i<5;i++){
              if (i<xing1) {
                arr.push({color:"#ff9A0D" });
              }else if(i<xing1+1){
                arr.push({color:"rgb("+xing2+",0,0)"});
              }else{
                arr.push({color:"#D1D1D1"});
              }
            }
            this.starts.push(arr);
          });
        });
      },
    }
</script>

<style scoped>
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
  .choosedli{
    width: 100%;
    height: 6rem;
    padding :1rem 0.2rem 0.5rem 0.5rem;
    border-bottom :0.1rem solid #999999;
  }
  .sellerliimg{
    width:3.75rem ;
    height: 3.75rem;
    float :left;
  }
  .liright{
    width: 18rem;
    height: 3.75rem;
    float :left;
    padding-left :0.5rem;
  }
  .liright1{
    width: 100%;
    height: 1rem;
    margin-bottom :1rem;
  }
  .liright2{
    height: 1rem;
    width: 100%;
    margin-bottom :1rem;
  }
  .liright3{
    height: 0.75rem;
    width: 100%;
  }
  .pingpai{
    width: 2rem;
    height: 0.8rem;
    padding :0.1rem 0;
    margin-right :0.3rem;
    font-size :0.8rem;
    line-height :0.8rem;
    text-align :center;
    background-color : #ffc416;
    float :left;
  }
  .liname{
    width: 9rem;
    height: 1rem;
    font-size :1rem;
    line-height :1rem;
    float :left;
    overflow :hidden;
    text-overflow: ellipsis;
  }
  .rightsupports{
    width: 3rem;
    height: 0.9rem;
    margin-top :0.1rem;
    float :right;
  }
  .supports{
    width: 0.8rem;
    height: 0.9rem;
    font-size :0.5rem;
    line-height :0.8rem;
    text-align :center;
    padding :0.02rem;
    margin :0 0.01rem;
    color:#999999;
    border :0.005rem solid #999999;
    float :left;
  }
  .code{
    font-size :0.5rem;
    line-height :0.8rem;
    margin-left :0.3rem;
    color :#ff9A0D;
    float :left;
  }
  .sellsum{
    font-size :0.4rem;
    line-height :0.8rem;
    margin-left :0.3rem;
    color :#D1D1D1;
    float :left;
  }
  .rightsup2{
    height: 1rem;
    float :right;
  }
  .fengniao{
    height: 1rem;
    font-size :0.5rem;
    text-align :center;
    color :white;
    background-color :#3190E8;
    float: left;
    margin-right :0.15rem;
  }
  .zhunshi{
    height: 0.7rem;
    font-size :0.5rem;
    text-align :center;
    line-height :0.8rem;
    color :#3190E8;
    border :0.15rem solid #3190E8;
    float: left;
  }
  .litip{
    font-size :0.75rem;
    line-height :0.8rem;
    color :#666666;
    padding-left:0.2rem;
    float :left;
  }
  .righttip{
    font-size :0.75rem;
    padding-right:0.2rem;
    float :right;
  }
  .tipdes1{
    color: #999999;
    float: left;
  }
  .tipdes2{
    color: #3190E8;
    float :left;
  }

</style>
