<template>
  <div class="food">
    <Headli1 :title="title" :alldata="alldata"></Headli1>
    <Toplist></Toplist>
    <List style="margin-top: 5.375rem" ref="list" :title="title"></List>
  </div>

</template>

<script>
  import Toplist from './Toplist'
  import Headli1 from './Headli1'
  import List from './List'

    export default {
        name: "Food",
      components:{Toplist,Headli1,List},
      data(){
          return{
            title: "",
            ball:[],
            alldata:["msite"]
          }
      },
      created(){
        this.title=this.$route.query.title;
        this.ball=this.$route.query.ball;
      },
      updated(){
        this.$refs.list.getda(this.ball);
      },
      methods:{
        appGetMsg(v){
          this.$refs.list.pai(v);
        },
        appshaixuan1(cate){
          this.$refs.list.shaixuan1(cate);
        },
        appshaixuan3(cate){
          this.$refs.list.shaixuan3(cate);
        }
      }

    }
</script>

<style scoped>
  .food{
    width: 100%;
  }
</style>
