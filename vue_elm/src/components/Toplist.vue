<template>
  <div class="toplistbox">
    <div style="width: 100%;">
    <div class="list1" @click="dropdown">
      <div class="list1con"><div class="listf">{{fenlei}}</div><i class="iconfont ">&#xe604;</i></div>
    </div>
    <div class="list1" style="border-left: 0.01rem solid #EBEBEB;border-right: 0.01rem solid #EBEBEB">
      <div class="list1con"><div class="listf">排序</div><i class="iconfont ">&#xe604;</i></div>
    </div>
    <div class="list1">
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
    <swiper class="drop11 " @click.stop="" v-show="showlist1" :style="list11height" :options="swiperOption" style="width: 48%;float: right">
          <swiper-slide class="dropli1" v-for="(v,i) in list11btn" :key="i" style="border-bottom: 0.05rem solid #f0f0f0">
            <div class="showlistf1">{{v[0]}}</div>
            <div class="showlistn1" style="color:black;background-color: white">{{v[1]}}</div>
          </swiper-slide>
    </swiper>

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
              mousewheel: true,
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
            list11height:{},
            allgray:{backgroundColor:"#F1F1F1"}

          }
      },
      methods:{
        dropdown(){
            this.axios.get(" https://elm.cangdu.org/shopping/v2/restaurant/category").then((response) => {
              this.list1 = response.data;
            }).then(()=>{

              //处理所有商品,得到分类的名字
              this.list1btn=this.fenleifun(this.list1);
              this.showlist1=!this.showlist1;
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
      },
    }
</script>

<style scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 1453550 */
    src: url('//at.alicdn.com/t/font_1453550_qowlaywliji.eot');
    src: url('//at.alicdn.com/t/font_1453550_qowlaywliji.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1453550_qowlaywliji.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1453550_qowlaywliji.woff') format('woff'),
    url('//at.alicdn.com/t/font_1453550_qowlaywliji.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1453550_qowlaywliji.svg#iconfont') format('svg');
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
</style>
