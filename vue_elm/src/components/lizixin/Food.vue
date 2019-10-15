<template>
  <div class="food">
    <Headli1 :citywhere="citywhere"></Headli1>
    <Toplist></Toplist>
  </div>

</template>

<script>
  import Toplist from './Toplist'
  import Headli1 from './Headli1'
    export default {
        name: "Food",
      props:{
        citywhere:{
          type:String,
          default:"food"
        }
      },
      components:{Toplist,Headli1},
      data(){
          return{

          }

      },

    }
</script>

<style scoped>
  .food{
    width: 100%;
  }
</style>
