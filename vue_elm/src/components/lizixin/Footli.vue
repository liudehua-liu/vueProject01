<template>
  <div class="footli" >
    <router-link :to="{path:'/msite'}" >
      <div class="footlibox" @click.stop="changeone('li1')">
        <i class="iconfont " :style="datali1">&#xe688;</i>
        <div class="footfont">外卖</div>
      </div>
    </router-link>
    <router-link :to="{path:'/search'}" >
      <div class="footlibox" @click.stop="changeone('li2')">
        <i class="iconfont" :style="datali2">&#xe672;</i>
        <div class="footfont">搜索</div>
      </div>
    </router-link>
    <router-link :to="{path:'/order'}" >
      <div class="footlibox" @click.stop="changeone('li3')">
        <i class="iconfont " :style="datali3">&#xe602;</i>
        <div class="footfont">订单</div>
      </div>
    </router-link>
    <router-link :to="{path:'/profile'}" >
      <div class="footlibox" @click.stop="changeone('li4')">
        <i class="iconfont " :style="datali4">&#xe612;</i>
        <div class="footfont">我的</div>
      </div>

    </router-link>
  </div>

</template>

<script>
    export default {
        name: "Footli",
      props:{
        toprop:{
          type:String,
          default:"li1"
        },
      },
      data(){
          return{
            datali1:{fontSize:"1.3rem", margin: "0.2rem 2.05rem",color:"#999999"},
            datali2:{fontSize:"1.3rem", margin: "0.2rem 2.05rem",color:"#999999"},
            datali3:{fontSize:"1.3rem", margin: "0.2rem 2.05rem",color:"#999999"},
            datali4:{fontSize:"1.3rem", margin: "0.2rem 2.05rem",color:"#999999"},

        }
      },
      methods:{
          changeone(propshow){
            this.datali1={fontSize:"1.3rem", margin: "0.2rem 2.05rem",color:"#999999"};
            this.datali2={fontSize:"1.3rem", margin: "0.2rem 2.05rem",color:"#999999"};
            this.datali3={fontSize:"1.3rem", margin: "0.2rem 2.05rem",color:"#999999"};
            this.datali4={fontSize:"1.3rem", margin: "0.2rem 2.05rem",color:"#999999"};
            switch(propshow) {
              case "li1":
                this.datali1={fontSize:"1.3rem", margin: "0.2rem 2.05rem",color:"#3190E8"};
                break;
              case "li2":
                this.datali2={fontSize:"1.3rem", margin: "0.2rem 2.05rem",color:"#3190E8"};
                break;
              case "li3":
                this.datali3={fontSize:"1.3rem", margin: "0.2rem 2.05rem",color:"#3190E8"};
                break;
              case "li4":
                this.datali4={fontSize:"1.3rem", margin: "0.2rem 2.05rem",color:"#3190E8"};
                break;

            }

          }
      }
    }
</script>

<style scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 1453550 */
    src: url('//at.alicdn.com/t/font_1453550_z1qbjuazlz8.eot');
    src: url('//at.alicdn.com/t/font_1453550_z1qbjuazlz8.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1453550_z1qbjuazlz8.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1453550_z1qbjuazlz8.woff') format('woff'),
    url('//at.alicdn.com/t/font_1453550_z1qbjuazlz8.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1453550_z1qbjuazlz8.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:0.5rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    float :left;
  }
  .footli{
    height: 3rem;
    width: 100%;
    background-color: white;
    position: fixed;
    left: 100%;
    top: 100%;
    transform: translate(-100%,-100%);
  }
  .footlibox{
    width: 5.85rem;
    height: 3rem;
    float: left;
  }
  .footfont{
    width: 100%;
    height: 1.3rem;
    font-size: 0.5rem;
    line-height: 0.9rem;
    text-align: center;
    float: left;
    color: #999999;
  }
</style>
