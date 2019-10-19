<template>
  <div class="orderhome">
    <Headli1 :title="title" :alldata="alldata"></Headli1>
    <div class="formcss">
      <div style="float: left;border-radius: 0.5rem;overflow: hidden;margin-right: 0.5rem">
        <input type="text" name="keywork" v-model="inputdata" placeholder="请输入商家或美食名称" class="inpcss" v-on:change="change()">
        <i class="iconfont icss1">&#xe66a;</i>
      </div>
      <div type="submit" class="subcss" @click="jiao">提交</div>
    </div>
    <div style="width: 100%;float: left" v-show="lishi">
      <div class="gekai">搜索历史</div>
      <div class="licss">
        <div class="lif">11111</div>
        <i class="iconfont lii">&#xe66a;</i>
      </div>
      <div class="qingcss">清空搜索历史</div>
    </div>
    <div class="qingcss" style="color: black" v-show="meiyou">很抱歉！无搜索结果</div>
    <List :toswiper="ball"></List>
    <Footli :toprop="'li2'" :alldata="alldataadd"></Footli>
  </div>

</template>

<script>
  import Headli1 from './Headli1'
  import Footli from "./Footli"
  import List from './List'
  export default {
    name: "Search",
    components:{Headli1,Footli,List},
    data(){
      return{
        title:"搜索",
        alldata:["msite"],
        alldataadd:[],
        inputdata:"",
        filldata:[],
        ball:[],
        meiyou:false,
        lishi:false,
        toswiper:[31.22967,121.4762],
      }
    },
    created(){
      if(this.storage.get("alldata")!=undefined && this.storage.get("filldata")!=undefined && this.storage.get("toswiper")!=undefined){
        this.alldata=this.storage.get("alldata");
        this.filldata=this.storage.get("filldata");
        this.toswiper=this.storage.get("toswiper");
      }else {
        if (this.storage.get("alldata")==undefined) {
          this.storage.set("alldata",this.alldata);
        }else {
          this.alldata=this.storage.get("alldata");
        }
        this.storage.set("filldata",this.filldata);
        this.storage.set("toswiper",this.toswiper);
      }
      this.alldataadd=this.alldata.concat("search");
      this.storage.set("alldata",this.alldataadd);
    },
    methods:{
      jiao(){
        this.filldata.concat(this.inputdata);
        this.axios.get("https://elm.cangdu.org/v4/restaurants?geohash="+this.toswiper[0]+","+this.toswiper[1]+"&keyword="+this.inputdata).then((response) => {
          this.ball = response.data;
          this.lishi=false;
        }).catch(()=>{
          this.meiyou=true;
          this.lishi=false;
        });
      },
      change(){
        if (this.inputdata==""){
          this.meiyou=false;
          this.lishi=true;
        }
      },
    }
  }
</script>

<style scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 1453550 */
    src: url('//at.alicdn.com/t/font_1453550_pnw16x47z5e.eot');
    src: url('//at.alicdn.com/t/font_1453550_pnw16x47z5e.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1453550_pnw16x47z5e.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1453550_pnw16x47z5e.woff') format('woff'),
    url('//at.alicdn.com/t/font_1453550_pnw16x47z5e.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1453550_pnw16x47z5e.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:0.5rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    float :left;
  }
  .orderhome{
    width: 100%;
    height: 40rem;
    background-color: #F5F5F5;
  }
  .formcss{
    width: 95%;
    height:2.4rem;
    padding: 0.6rem;
    margin-top: 2.5rem;
    float: left;
    background-color: white;
  }
  .inpcss{
    width: 15.3rem;
    height: 2.4rem;
    float: left;
    padding-left: 0.3rem;
    background-color: #F2F2F2;
    border:none;
    outline:medium;
  }
  .icss1{
    width: 1rem;
    height: 2.4rem;
    float: left;
    text-align: center;
    line-height: 2.4rem;
    padding-right: 0.5rem;

    background-color: #F2F2F2;
  }
  .subcss{
    width: 20%;
    height: 2.4rem;
    font-size: 1rem;
    color: white;
    background-color: #3091E8;
    text-align: center;
    line-height: 2.4rem;
    float: left;
    border-radius: 0.5rem;
  }
  .gekai{
    width: 100%;
    height: 2.5rem;
    color: #666666;
    font-size: 0.9rem;
    line-height: 2.5rem;
    padding-left: 1rem;
    float: left;
    background-color: #F5F5F5;
  }
  .licss{
    width: 100%;
    height: 3rem;
    background-color: white;
    float: left;
    font-size: 1rem;
    margin-top: 0.2rem;
  }
  .lif{
    height: 1rem;
    font-size: 1rem;
    line-height: 1rem;
    overflow :hidden;
    text-overflow: ellipsis;
    float: left;
    color: #666666;
    padding:1rem 1rem;
  }
  .lii{
    height: 1rem;
    font-size: 1rem;
    float: right;
    line-height: 1rem;
    color: #666666;
    margin:1rem 1rem;
  }
  .qingcss{
    width: 100%;
    height: 1rem;
    padding: 1rem 0;
    background-color: white;
    color: #3091E8;
    float: left;
    font-size: 1rem;
    line-height: 1rem;
    text-align: center;
    margin-top: 0.2rem;
  }
</style>
