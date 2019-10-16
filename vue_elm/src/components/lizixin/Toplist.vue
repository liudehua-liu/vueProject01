<template>
  <div class="toplistbox">
    <div style="width: 100%;height:2.6rem;border-bottom: 0.02rem solid #D4D4D4">
    <div class="list1" @click="dropdown(),clist1('showlist1')">
      <div class="list1con"><div class="listf">{{fenlei}}</div><i class="iconfont ">&#xe604;</i></div>
    </div>
    <div class="list1" @click="clist1('showlist2')" style="border-left: 0.01rem solid #EBEBEB;border-right: 0.01rem solid #EBEBEB">
      <div class="list1con"><div class="listf">排序</div><i class="iconfont ">&#xe604;</i></div>
    </div>
    <div class="list1" @click="clist1('showlist3')">
      <div class="list1con"><div class="listf">筛选</div><i class="iconfont ">&#xe604;</i></div>
    </div>
  </div>

  <div class="droplist">
    <div class="drop1" v-show="showlist1">
      <div class="dropli1" v-for="(v,i) in list1btn" :key="i" :style="allgray" :ref="'whitechange'+i" @click.stop="drop11(v[0],'whitechange'+i)" >
        <img :src="imghead+v[2]" class="dropli1img">
        <div class="showlistf1">{{v[0]}}</div>

        <i class="iconfont sla2">&#xe61f;</i>
        <div class="showlistn1">{{v[1]}}</div>
      </div>
    </div>
    <swiper class="drop11 "  v-show="showlist1" :style="list11height" :options="swiperOption" style="width: 48%;float: right">
          <swiper-slide class="dropli1" v-for="(v,i) in list11btn" :key="i" style="border-bottom: 0.05rem solid #f0f0f0">
            <div style="width: 100%;height: 100%;" @click.stop="shaixuan1(v[0])">
            <div class="showlistf1" >{{v[0]}}</div>
            <div class="showlistn1" style="color:black;background-color: white">{{v[1]}}</div>
            </div>
          </swiper-slide>
    </swiper>

    <div class="drop2" v-show="showlist2">
      <div class="drop2li" v-for="(v,i) in drop2data" :key="i" @click.stop="tolist(v[2]),drop2lishow(i)">
        <i class="iconfont drop2lii" v-html="v[0]" :style="{color:v[3]}"></i>
        <div class="drop2lif">
          <div style="float: left" :ref="'drop2lif'+i">{{v[1]}}</div>
          <i class="iconfont" style="float: right;line-height: 1.1rem;color: white" :ref="'drop2lii'+i">&#xe614;</i>
        </div>

      </div>
    </div>

    <div class="drop2" v-show="showlist3">
      <div class="drop2">
        <div class="drop31f">配送方式</div>
        <div class="drop2" style="padding-left: 0.8rem">
          <div class="drop3li"  @click.stop="shaixuantrue[6]=!shaixuantrue[6],cdrop3li(6)">
            <i class="iconfont drop3i" style="color:blue;" v-show="!shaixuantrue[6]">&#xe60a;</i>
            <i class="iconfont drop3i" style="color:#3B96E9; font-size: 1.05rem " v-show="shaixuantrue[6]">&#xe614;</i>
            <div class="drop31boxf" ref="drop33li6">蜂鸟专送</div>
          </div>
        </div>
      </div>
      <div class="drop2" style="padding-bottom: 1rem">
        <div class="drop31f">商家属性(可以多选)</div>
        <div class="drop2" style="padding-left: 0.8rem">
          <div class="drop3li" v-for="(v,i) in drop3li" :key="i" @click.stop="shaixuantrue[i]=!shaixuantrue[i],cdrop3li(i)">
            <div class="drop3lif" :style="{color:v[2],border:'0.05rem solid '+v[2]}" v-show="!shaixuantrue[i]">{{v[0]}}</div>
            <i class="iconfont drop3i" style="color:#3B96E9;font-size: 1.05rem" v-show="shaixuantrue[i]">&#xe614;</i>
            <div class="drop31boxf" :ref="'drop33li'+i">{{v[1]}}</div>
          </div>
        </div>
      </div>
      <div class="drop2" style="background-color: #F1F1F1">
        <div class="drop321" @click.stop="cdrop3li(7)">清空</div>
        <div class="drop321" style="background-color: #56D176;color: white" @click.stop="addshaixuan">{{shaixuannum}}</div>
      </div>
    </div>

  </div>
  </div>
</template>

<script>

    export default {
      props:{
        choosedlist:{
          type:String,
          default:"异国料理"
        }
      },
        name: "Toplist",
      data(){
          return{
            swiperOption: {
              direction: 'vertical',
              slidesPerView: 'auto',
              freeMode : true,
            },
            imghead:"http://elm.cangdu.org/img/",
            list1:[],
            list11:[],
            list1btn:[],
            list11btn:[],
            fenlei:"分类",
            showlist1:false,
            showlist2:false,
            showlist3:false,
            showlist:"",
            list11height:{},
            allgray:{backgroundColor:"#F1F1F1"},
            drop2data:[
              ["&#xe689","智能排序",{ch:""},"#6BA5D6"],
              ["&#xe656;","距离最近",{ch:"distance",m:"min",ord1:0,ord2:2},"#8CC9E7"],
              ["&#xe609;","销量最高",{ch:"recent_order_num",m:"max",ord1:0,ord2:0},"#F49696"],
              ["&#xe607;","起送价最低",{ch:"float_minimum_order_amount",m:"min",ord1:0,ord2:0},"#EAC341"],
              ["&#xe661;","配送速度最快",{ch:"order_lead_time",m:"min",ord1:0,ord2:2},"#72D8CD"],
              ["&#xe606;","评分最高",{ch:"rating",m:"max",ord1:0,ord2:0},"#F2C682"]],
            drop3li:[
              ["品","品牌商家","#62C9EB"],
              ["保","外买保","#C5C5C5"],
              ["准","准时达","#6BB3FF"],
              ["新","新店","#EB9347"],
              ["付","在线支付","#FF7133"],
              ["票","开发票","#ADADAD"],
            ],
            shaixuannum:"确定",
            shaixuandata:[],
            shaixuantrue:[false,false,false,false,false,false,false],
          }
      },
      methods:{
        dropdown(){
            this.axios.get(" https://elm.cangdu.org/shopping/v2/restaurant/category").then((response) => {
              this.list1 = response.data;
            }).then(()=>{
              //处理所有商品,得到分类的名字
              this.list1btn=this.fenleifun(this.list1);
            });
        },
        drop11(list1click,index){
          this.list1.forEach((v)=>{
            if (list1click==v.name) {
              this.list11=v.sub_categories;

            }
          });
          this.list11btn=this.fenleifun(this.list11);
          this.list11height={height:this.list1btn.length*3+"rem"};
          for (let i=0;i<this.list1btn.length;i++){
            this.$refs["whitechange"+i][0].style.backgroundColor="#F1F1F1";
          }
          this.$refs[index][0].style.backgroundColor="white";
        },
        drop2lishow(index){
          for (let i=0;i<this.drop2data.length;i++){
            this.$refs["drop2lif"+i][0].style.color="#666666";
            this.$refs["drop2lii"+i][0].style.color="white";
          }
          this.$refs["drop2lif"+index][0].style.color="#6AAFEE";
          this.$refs["drop2lii"+index][0].style.color="#6AAFEE";
          this.clist1("showlist2");
        },
        fenleifun(arr1){
          let arr = [];
          arr1.forEach((v)=>{
            arr.push([v.name,v.count,v.image_url]);
          });
          for (let i=1;i<arr.length;i++){
            for (let j=0;j<i;j++){
              if(arr[i-j][1]>arr[i-j-1][1]){
                let exchangehelp=arr[i-j-1];
                arr[i-j-1]=arr[i-j];
                arr[i-j]=exchangehelp;
              }else {
                break;
              }
            }
          }
          return arr;
        },
        tolist(ch){
            this.$parent.appGetMsg(ch);
        },
        clist1(li1){
          if (this.showlist==li1){
            this[li1]=!this[li1];
          }else{
            this.showlist1=false;
            this.showlist2=false;
            this.showlist3=false;
            this[li1]=true;
            this.showlist=li1;
          }

        },
        shaixuan1(cate){
          this.$parent.appshaixuan1(cate);
          this.clist1("showlist1");
        },
        addshaixuan(){
            let arr=[];
            this.shaixuantrue.forEach((v,i)=>{
              if (v==true) {
                if (i==6) {
                  arr.push("蜂鸟专送");
                }else {
                  arr.push(this.drop3li[i][0]);
                }
              }
            });
            this.shaixuandata=arr;
            if (this.shaixuandata!=[]){
              this.$parent.appshaixuan3(this.shaixuandata);
            }
            this.clist1("showlist3");
        },
        cdrop3li(li){
          if (li==7){
            this.shaixuantrue=[false,false,false,false,false,false,false];
          }
          this.$set(this.shaixuantrue,0,this.shaixuantrue[0]);
          let arr=0;
          this.shaixuantrue.forEach((v,i)=> {
            if (v==true) {
              arr++;
              if (i==6) {
                this.$refs["drop33li"+i].style.color="#3B96E9";
              }else {
                this.$refs["drop33li"+i][0].style.color="#3B96E9";
              }
            }else {
              if (i==6) {
                this.$refs["drop33li"+i].style.color="black";
              }else {
                this.$refs["drop33li"+i][0].style.color="black";
              }
            }
          });
          if (arr==0){
            this.shaixuannum="确定";
          } else {
            this.shaixuannum="确定("+arr+")";
          }
        },
      },
    }
</script>

<style scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 1453550 */
    src: url('//at.alicdn.com/t/font_1453550_c62rq0xfnat.eot');
    src: url('//at.alicdn.com/t/font_1453550_c62rq0xfnat.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1453550_c62rq0xfnat.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1453550_c62rq0xfnat.woff') format('woff'),
    url('//at.alicdn.com/t/font_1453550_c62rq0xfnat.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1453550_c62rq0xfnat.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:0.8rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .toplistbox{
    width: 100%;
    position: fixed;
    left: 0;
    top: 2.375rem;
    background-color: white;
    z-index: 998;
  }
  .list1{
    width: 7.8rem;
    height: 2rem;
    float: left;
    font-size: 0.8rem;
    line-height: 1.4rem;
    text-align: center;
    margin: 0.3rem 0;
  }
  .list1con{
    height: 1.4rem;
    float: left;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .listf{
    float: left;
    margin-right: 0.2rem;
  }
  .droplist{
    width: 100%;
    float: left;
  }
  .drop1{
    width: 50%;
    background-color: #F1F1F1;
    float: left;
  }
  .dropli1{
    width: 100%;
    height: 3rem;
  }
  .dropli1img{
    width: 1.4rem;
    height: 1.4rem;
    margin: 0.8rem 0.5rem;
    float: left;
  }
  .showlistf1{
    height: 1.4rem;
    float: left;
    font-size: 0.6rem;
    line-height: 1.4rem;
    text-align: center;
    margin: 0.8rem 0.3rem;
  }
  .showlistn1{
    height: 0.6rem;
    padding: 0.2rem;
    float: right;
    border-radius: 0.5rem;
    color: white;
    background-color: #CCCCCC;
    font-size: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    margin:1rem 0.5rem;
  }
  .sla2{
    float: right;
    font-size: 0.6rem;
    margin:1rem 0.5rem;
  }
  .drop11{
    width: 50%;
    float: left;
  }

  .drop2{
    width: 100%;
    float: left;
  }
  .drop2li{
    width: 100%;
    height: 3.5rem;
  }
  .drop2lii{
    width: 1.1rem;
    font-size: 1.1rem;
    padding: 1.2rem;
    float: left;
    line-height: 1.1rem
  }
  .drop2lif{
    width: 76%;
    border-bottom: 0.01rem solid #CCCCCC ;
    font-size: 1.09rem;
    padding: 1rem;
    float: right;
  }
  .drop31f{
    width: 100%;
    height: 2.5rem;
    font-size: 0.6rem;
    line-height: 2.5rem;
    padding-left: 0.95rem;
    float: left;
  }

  .drop3li{
    width: 6rem;
    height: 1.4rem;
    padding: 0.2rem;
    border-radius: 0.1rem;
    border: 0.05rem solid #D4D4D4;
    float: left;
    margin: 0.25rem ;
  }
  .drop3i{
    font-size: 1.3rem;
    line-height: 1.3rem;
    padding: 0.1rem 0.2rem;
    float: left;
   }
  .drop31boxf{
    float: left;
    font-size: 0.7rem;
    padding: 0.15rem;
  }
  .drop3lif{
    width: 1.2rem;
    height:1.2rem;
    text-align: center;
    line-height: 1.2rem;
    border-radius: 0.2rem;
    margin: 0.05rem 0.2rem;
    float: left;
  }
  .drop321{
    width: 10.7rem;
    height: 2.8rem;
    font-size: 1.2rem;
    line-height: 2.8rem;
    text-align: center;
    border-radius: 0.4rem;
    background-color: white;
    margin: 0.5rem;
    float: left;
  }
</style>
