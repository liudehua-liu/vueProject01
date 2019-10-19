<template>
    <div class="foodjiandu">

      <div class="jiandu_title">
        <router-link :to="{path:'/shopyou'}">
        <i class="icon-changyongtubiao-xianxingdaochu-zhuanqu- iconfont"></i>
        </router-link>
        <h3>食品监督安全公示</h3>
      </div>

      <!--第二部分-->

        <div class="jiandutwo">
          <div class="jiandutwo_title">
            <p >食品监督安全提示</p>
          </div>

          <div class="xinyus">
            <div class="imgsmiles">
              <i class="icon-xiaolianchenggong smiles iconfont"></i>
            </div>
            <div class="imgyous">
              <p>监督检查结果: <span class="lianghaos">良好</span></p>
              <p>检查日期:</p>
            </div>
          </div>
        </div>

      <!--第三部分-->
      <div class="threes">
        <p class="gongtitile">工商登记信息</p>
        <ul class="gongul">
          <li>企业名称</li>
          <li>工商执照注册号</li>
          <li>注册资本</li>
          <li>注册地址</li>
          <li>属地监管所</li>
          <li>法定代表热人</li>
          <li>经营范围</li>
        </ul>
      </div>


      <div class="threes">
        <p class="gongtitile">餐饮许可证</p>
        <ul class="gongul">
          <li>营业范围</li>
          <li>许可证有效期</li>
          <li>许可证号</li>
          <li>发证时间</li>
        </ul>
      </div>


    </div>
</template>

<script>
    export default {
        name: "Foodjiandu"
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452315_bn9wwlzbot9.css";
  @import "//at.alicdn.com/t/font_1452315_wolnnlbeat.css";
  *{
    padding: 0;
    margin: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  .foodjiandu{
    width: 100%;
    height: 41.6rem;
    background-color: rgb(245,245,245);
  }
  .smiles{
    /*width: 100%;*/
    color:white;
    padding-left: 0.39rem;
    font-size: 10rem;
    zoom: 2.5;
  }
  .iconfont{
    position: absolute;
    left: 0.3rem;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .soudi_title a{
    color: white;
  }
  .jiandu_title{
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    color: white;
    text-align: center;
    position: relative;
    background-color: rgb(49,144,232);
  }

  .jiandutwo_title{
    width: 94%;
    padding: 3%;
    color: #333;
    font-weight: bold;
    background-color: white;
    border-bottom: 0.05rem solid gainsboro;
  }
  .xinyus{
    width: 94%;
    padding: 3%;
    display: flex;
    background-color: white;
  }
  .imgsmiles{
    width:3rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    border-radius: 50%;
    background-color:rgb(126, 211, 33);;
    margin-right: 1rem;
  }
  .imgyous{
    font-size: .8rem;
    color: #666;
    line-height: 1.8rem;
  }
  .lianghaos{
    color: #7ed321;
    font-size: .8rem;
    font-weight: bold;
  }
  .threes{
    width: 100%;
    background-color: white;
    margin-top: 0.5rem;
  }

  .gongtitile{
    padding:2% 5%;
    font-size: 1.1rem;
    border-bottom: 0.05rem solid gainsboro;
  }
  .gongul{
    width: 90%;
    padding:2% 5%;
  }
  .gongul li{
    line-height: 2rem;
    color: #333;
  }
</style>
