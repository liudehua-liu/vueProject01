<template>
  <div class="headli">
    <div @click="jian">
      <i class="iconfont" style="font-size: 1.5rem; margin: 0.45rem 1rem;color: white">&#xe60c;</i>
    </div>
      <div class="citywhere">{{this.title}}</div>
  </div>
</template>

<script>
  export default {
    name: "Headli1",
    props:{
      title:{
        type:String,
        default:"aaaaaaaaa",
      },
      alldata:{
        type: Array,
        default: []
      }
    },
    data(){
      return{
        calldata:[],
        lastone:"",
        towhere:{path:"/"+this.lastone},
        jianli:false
      }
    },
    created(){
      this.calldata=this.alldata;
      this.lastone=this.alldata[this.alldata.length-1];
      this.calldata.pop();
      this.$set(this.towhere,"path","/"+this.lastone);
    },

    methods:{
      jian(){
          this.storage.set("alldata",this.calldata);
          this.$router.push(this.towhere);
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
  .headli{
    height: 2.5rem;
    width: 100%;
    background-color: dodgerblue;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
  }
  .citywhere{
    width: 16.4rem;
    height: 2.5rem;
    font-size: 1.2rem;
    line-height: 1.5rem;
    text-align: center;
    padding-top: 0.4rem;
    color: white;
    float: left;
    overflow :hidden;
    text-overflow: ellipsis;
  }
</style>
