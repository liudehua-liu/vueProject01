<template>
  <div class="totop" @click.stop="totop" v-show="isshow">
    <i class="iconfont" style="font-size: 1.6rem; margin: 0.1rem 0.7rem">&#xe63f;</i>
    <div class="totopfont">返回顶部</div>
  </div>
</template>

<script>
    export default {
        name: "Totop",
     data(){
          return{
            isshow:false
          }
      },
      mounted () {
        window.addEventListener('scroll', this.scrollToTop);
      },
      destroyed () {
        window.removeEventListener('scroll', this.scrollToTop);
      },
      methods:{
        totop(){
          let timer = setInterval(() => {
            let ispeed = Math.floor(-this.scrollTop / 5);
            document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + ispeed;
            if (this.scrollTop === 0) {
              clearInterval(timer);
            }
          }, 16);
        },
        scrollToTop () {
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          this.scrollTop = scrollTop;
          if (this.scrollTop >60) {
            this.isshow = true;
          } else {
            this.isshow = false;
          }
        }
      }
    }

</script>

<style scoped>
  .totop{
    width: 3rem;
    height: 3rem;
    position :fixed;
    left :80%;
    top:80%;
    border :0.03rem solid black;
  }
  .totopfont{
    width:3rem;
    height: 1rem;
    text-align :center;
    font-size :0.5rem;
    float :left;
  }
</style>
