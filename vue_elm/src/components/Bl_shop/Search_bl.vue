<template>
    <div class="search_bl">
      <div class="search_title">
        <router-link :to="{}">
        <i class="icon-arrowLeft iconfont"></i>
        </router-link>
        搜索
      </div>

      <!--搜索处-->
      <div class="search_div">
        <input type="search" class="search_put" placeholder="请输入商家或没事名称" v-model="searchData">
        <span class="search_submit" @click="searchfoods(searchData)">提交</span>
      </div>


      <!--搜索历史最开始隐藏-->
      <div class="divshow">
        <h4>搜索历史</h4>
        <ul>
          <li v-for="(p,index) in cunData" :key="index"><span>{{p.title}}</span><span @click="removeDom(index)" class="deletex">x</span>   </li>
          <li class="clearall">清空搜索历史</li>
        </ul>
      </div>

      <div class="nullshow" v-if="nullData">很抱歉! 无搜索结果</div>

    </div>

</template>

<script>
    import storage from "../../Storage/storage";

    export default {
        name: "Search_bl",
      data(){
          return{
            searchData:"",
            cunData:[],
            ulshow:false,
            nullData:false
          }
      },
        methods:{
          searchfoods(v){
              this.cunData.push({
                title:this.searchData,
                checked:false
              });
              storage.set("content",this.cunData);
            this.axios.get("https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword="+v).then((response) => {
              if(response.data.status==1){
                //输入的东西成功请求到
                this.ulshow=true;

              }else{
                //输入的东西没有请求到
              this.nullData=true;
              }
              console.log(response.data);
            });

          },
          //点击删除对应纪录
          removeDom(index){
            this.cunData.splice(index,1);

            storage.set('content',this.cunData);
          },
        //  点击清楚所有搜索记录
          clearall(){

          }

        },
      mounted(){
     var aaaaa = storage.get('content');
        console.log(aaaaa);
        if (aaaaa){
          console.log(1231);
          this.cunData = aaaaa;
        }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452315_mckhdr1wlu.css";
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
    left: 0.2rem;
    font-size: 2rem;
    color: white;
  }
  .search_bl{
    width: 100%;
    height: 41.3rem;
    background-color:ghostwhite;
  }
 .search_title{
   width: 100%;
   height: 3rem;
   line-height: 3rem;
   text-align: center;
   position: relative;
   background-color: royalblue;
   color: white;
   font-weight: bold;
 }
  .search_div{
    width: 94%;
    height: 2.3rem;
    line-height: 2.3rem;
    background-color:white;
    padding:3%;
  }
  .search_put{
    width: 74%;
    border-radius:0.3rem;
    background-color:rgb(242,242,242);
    padding-left: 2%;
  }
  .search_submit{
    width: 22%;
    border-radius: 0.3rem;
    background-color:rgb(49,144,232);
    color: white;
    padding: 2% 6%;
  }
  .nullshow{
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    background-color: white;
    margin-top: 0.1rem;
    text-align: center;
  }
  .divshow{
    width: 100%;
    background-color: white;
  }
  .divshow h4{
    width: 94%;
    padding: 0 3%;
    height: 2.5rem;
    line-height: 2.5rem;
    color: dimgray;
    background-color:rgb(242,242,242);
  }
  .divshow li{
    width: 94%;
    padding:3%;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.05rem solid lightgrey;
  }
  .deletex{
    /*font-size: 1.3rem;*/
    font-weight: bold;
    color: grey;
  }
</style>
