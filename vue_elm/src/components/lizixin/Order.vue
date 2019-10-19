<template>
  <div class="orderhome">
    <Headli1 :title="title" :alldata="alldata"></Headli1>
    <div class=""></div>
    <Footli :toprop="'li3'" :alldata="alldataadd"></Footli>
  </div>

</template>

<script>
  import Headli1 from './Headli1'
  import Footli from "./Footli"
    export default {
        name: "Order",
      components:{Headli1,Footli},
      data(){
          return{
            title:"订单列表",
            alldata:["msite"],
            alldataadd:[],
            listdata:[],
          }
      },
      created(){
        if(this.storage.get("alldata")!=undefined && this.storage.get("listdata")!=undefined){
          this.alldata=this.storage.get("alldata");
          this.listdata=this.storage.get("listdata");
        }else {
          if (this.storage.get("alldata")==undefined) {
            this.storage.set("alldata",this.alldata);
          }else {
            this.alldata=this.storage.get("alldata");
          }
          this.storage.set("listdata",this.listdata);
        }
        this.alldataadd=this.alldata.concat("order");
        this.storage.set("alldata",this.alldataadd);
      },
    }
</script>

<style scoped>
  .orderhome{
    width: 100%;
    height: 100%;
  }
</style>
