<template>
  <div class="food">
    <Headli1 :title="citywhere"></Headli1>
    <Toplist ></Toplist>
    <List style="margin-top: 5.375rem" ref="list"></List>
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
            citywhere: "",
          }
      },
      created(){
          this.citywhere=this.$router.query.title;
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
