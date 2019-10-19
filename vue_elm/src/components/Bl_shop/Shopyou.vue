<template>
    <div class="shopyou">
      <div class="shopyou_title">
      <i class="icon-changyongtubiao-xianxingdaochu-zhuanqu- iconfont"></i>
        <h3>商家详情</h3>
      </div>


      <!--第二部分-->
      <div class="twofen">
        <div class="twofen_title">活动与属性</div>
        <div class="twofen_t">
          <p><span class="ospano">{{dians.activities[0].icon_name}}</span>
            <span>{{dians.activities[0].description}}(APP专享)</span>
          </p>

          <p><span class="tspant">{{dians.activities[1].icon_name}}</span>
            <span>{{dians.activities[1].description}}(APP专享)</span>
          </p>

          <p>
            <span class="sspant">{{dians.supports[0].icon_name}}</span>
            <span>{{dians.supports[0].description}}(APP专享)</span>
          </p>

          <p>
            <span class="fspant">{{dians.supports[1].icon_name}}</span>
            <span>{{dians.supports[1].description}}(APP专享)</span>
          </p>
        </div>
      </div>

      <!--第三部分-->
     <div class="threefen">
        <div class="threefen_title">
          <p>食品监督安全提示</p>
          <p class="rendes" @click="qiyerenzheng(dians)">企业认证详情</p>
          <i class="icon-youjiantou iconfont iding"></i>
        </div>

       <!--第三部分的第二部分-->
       <div class="xinyu">
         <div class="imgsmile"><i class="icon-xiaolianchenggong iconfont smile"></i>
         </div>
         <div class="imgyou">
           <p>监督检查结果: <span class="lianghao">良好</span></p>
           <p>检查日期:</p>
         </div>
       </div>
     </div>


      <!--第四部分-->
      <div class="disi">
          <div class="disi_titie">商家信息</div>
          <ul class="disides">
          <li>{{dians.name}}</li>
            <li>地址:  {{dians.address}}</li>
            <li>营业时间:  [{{dians.opening_hours[0]}}]</li>
            <li>
              <span>营业照</span>
              <span><i class="icon-youjiantou iconfont iding"></i></span>
              </li>
            <li>
              <span>餐饮许可证</span>
              <span><i class="icon-youjiantou iconfont iding"></i></span>
              </li>
          </ul>
      </div>


    </div>
</template>

<script>
    export default {
        name: "Shopyou",
      data(){
          return{
            dians:""
          }
      },
      methods:{
        qiyerenzheng(v){
          this.$router.push({path:"/foodjiandu",query:{fooddes:v}});
        }
      },
      mounted(){
          // this.$router.query.diandian;
          this.dians=this.$route.query.diandian;
          console.log(this.dians);
      }
    }
</script>

<style scoped>
@import "//at.alicdn.com/t/font_1452315_bn9wwlzbot9.css";
@import "//at.alicdn.com/t/font_1452315_2izd361dkp7.css";
/*笑脸*/
@import "//at.alicdn.com/t/font_1452315_wolnnlbeat.css";

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
    left: 0.3rem;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .smile{
    color:white;
    padding-left: 0.4rem;
    font-size: 3rem;
  }
  .iding{
    position: absolute;
    left: 93%;
    color: #999;
    font-size: 0.9rem;
  }
  .shopyou{
    width: 100%;
    height: 41.6rem;
    background-color: rgb(245,245,245);
  }
  .shopyou_title{
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    color: white;
    text-align: center;
    position: relative;
    background-color: rgb(49,144,232);
  }
  .twofen,.threefen,.disi{
    width: 100%;
    margin-top: 0.5rem;
    background-color: white;
    color: #999;
  }
  .twofen_t{
    width: 94%;
    padding: 3%;
    line-height: 2rem;
    font-size: .8rem;
  }
  .twofen_title,.threefen_title,.disi_titie{
    width: 94%;
    padding: 3%;
    color: #333;
    font-weight: bold;
    border-bottom: 0.05rem solid gainsboro;
  }
  .ospano,.tspant,.sspant,.fspant{
    font-size: .8rem;
    color: #fff;
    padding: .1rem;
    border: 1px;
    border-radius: .1rem;
    margin-right: .2rem;
  }
  .ospano{
  background-color: rgb(240, 115, 115);
   }
  .tspant{
    background-color: rgb(112, 188, 70)
  }
  .sspant{
    background-color: rgb(153, 153, 153);
  }
  .fspant{
    background-color: rgb(87, 169, 255);
  }
  .threefen_title{
    display: flex;
    position: relative;
    justify-content: space-between;
  }
  .rendes{
    color: #999;
    margin-right:1rem;
  }
  .xinyu{
    width: 94%;
    padding: 3%;
    display: flex;
  }
  .imgsmile{
    width:3rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    border-radius: 50%;
    background-color:rgb(126, 211, 33);;
    margin-right: 1rem;
  }
  .imgyou{
    font-size: .8rem;
    color: #666;
    line-height: 1.8rem;
  }
  .disides{
    width: 96%;
    padding-left: 4%;
  }
.disides li{
  padding:4% 0;
  font-size: .8rem;
  color: #666;
  border-bottom: .025rem solid #f5f5f5;
}
  .lianghao{
    color: #7ed321;
    font-size: .8rem;
    font-weight: bold;
  }
</style>
