<template>
  <div>
  <router-link :to="{path:'/cart',query:{dianName:v}}" class="choosedli" v-for="(v,i) in ball" :key="i">
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
        <div class="litip">￥{{v.float_minimum_order_amount}}起送/{{v. piecewise_agent_fee.tips}}</div>
        <div class="righttip">
          <div class="tipdes1">{{v.distance}}/</div>
          <div class="tipdes2">{{v.order_lead_time}}</div>
        </div>
      </div>
    </div>
  </router-link>
  </div>
</template>

<script>
    export default {
        name: "List",
      props:{
        toswiper:{
          type:Array,
          default: function () {
            return[];
          }
        },
        title:{
          type:String,
          default:""
        }
      },
      data(){
          return{
            liimghead:"http://elm.cangdu.org/img/",
            ball:[],
            cball:[],
            mball:[],
            starts:[],
            shaixuan3data:[],
            paidata:{ch:""},
            getcheck: "" ,
          }
      },
      created(){
        this.cball=this.toswiper;
        this.ball = this.toswiper;
        this.mball=this.toswiper;
        if (this.title!="") {
          this.shaixuan0(this.title);
        }
        this.listshow();
      },
      methods:{
          listshow(){
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
          },
        getda(data){
          this.cball=data;
          this.ball = data;
          this.mball=data;
          this.listshow();
        },
        pai(ch){
            this.paidata=ch;
          if (this.ball[0]==undefined) {
            this.ball=[];
          }
            if (ch.ch!="" && this.ball!=[]){
              let arr=[];
              this.ball.forEach((v)=>{
                if (ch.ord1==0 && ch.ord2==0) {
                  arr.push(v[ch.ch]);

                }else{
                  let mid=v[ch.ch].slice(ch.ord1);
                  mid=mid.slice(0,-ch.ord2);
                  let time=mid.split("小时");
                  if (time.length==2) {
                    mid=parseFloat(time[0])*60+parseFloat(time[1]);
                  }
                  let num=parseFloat(mid);
                  arr.push(num);
                }
              });
              if (ch.m=="max"){
                for (let i=1;i<this.ball.length;i++){
                  for (let j=0;j<i;j++){
                    if(arr[i-j]>arr[i-j-1]){
                      let exchangehelp=arr[i-j-1];
                      arr[i-j-1]=arr[i-j];
                      arr[i-j]=exchangehelp;
                      exchangehelp=this.ball[i-j-1];
                      this.ball[i-j-1]=this.ball[i-j];
                      this.ball[i-j]=exchangehelp;

                    }else {
                      break;
                    }
                  }
                }
              } else {
                for (let i=1;i<this.ball.length;i++){
                  for (let j=0;j<i;j++){
                    if(arr[i-j]<arr[i-j-1]){
                      let exchangehelp=arr[i-j-1];
                      arr[i-j-1]=arr[i-j];
                      arr[i-j]=exchangehelp;
                      exchangehelp=this.ball[i-j-1];
                      this.ball[i-j-1]=this.ball[i-j];
                      this.ball[i-j]=exchangehelp;
                    }else {
                      break;
                    }
                  }
                }
              }

            }
          this.listshow;
          this.$set(this.ball,0,this.ball[0]);
          if (this.ball[0]==undefined) {
            this.ball=[];
          }
        },
        shaixuan0(cate){
          this.ball=[];
          if (this.cball!=[]) {
            this.cball.forEach((v)=>{
              let s=v.category.split("/");
              if (s[0]==cate) {
                this.ball.push(v);
              }
            });
            this.mball=this.ball;
          }
        },
        shaixuan1(cate){
            this.ball=[];
          this.cball.forEach((v)=>{
            let s=v.category.split("/");
            if (s[1]==cate) {
              this.ball.push(v);
            }
          });
          this.mball=this.ball;
          this.pai(this.paidata);
          this.shaixuan3(this.shaixuan3data);
        },
        shaixuan3(cate){
            if (cate!=[]){
              this.shaixuan3data=cate;
              this.ball=this.mball;
              let a=cate.includes('蜂鸟专送');
              let b=cate.length;
              let c=0;
              if (a==true){
                c=1;
                let arrf=[]
                this.ball.forEach((v)=>{
                  if (v.delivery_mode.text=="蜂鸟专送") {
                    arrf.push(v);
                  }
                });
                this.ball=arrf;
              }
              let arr=[];
              this.ball.forEach((v1)=>{
                let arr1=[];
                v1.supports.forEach((v2)=>{
                  arr1.push(v2.icon_name);
                });
                if (arr1.length>=b-c){
                  let arr2=[...new Set([...arr1,...cate])];
                  if (arr2.length<=arr1.length+c) {
                    arr.push(v1);
                  }
                }
              });
              this.ball=arr;
            }

        }

      }
    }
</script>

<style scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 1453550 */
    src: url('//at.alicdn.com/t/font_1453550_zsehno33v.eot');
    src: url('//at.alicdn.com/t/font_1453550_zsehno33v.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1453550_zsehno33v.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1453550_zsehno33v.woff') format('woff'),
    url('//at.alicdn.com/t/font_1453550_zsehno33v.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1453550_zsehno33v.svg#iconfont') format('svg');
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
    display: block;
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
