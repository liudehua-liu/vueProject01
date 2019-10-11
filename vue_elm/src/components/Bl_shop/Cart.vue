<template>
<div class="cart_one">
<i class="icon-arrow-right iconfont "></i>
     <div class="flex-container">
       <div class="flex-item"><img src="http://elm.cangdu.org/img/164ad0b6a3917599.jpg" alt="">
       </div>
       <div class="flex-item1">
         <h4>效果演示</h4>
         <p>商家配送/分钟送达/配送费￥5</p>
         <p>公告:用餐高峰请提前下单，谢谢</p>
       </div>

     </div>

</div>
</template>

<script>
    export default {
        name: "Cart"
    }
</script>

<style scoped>
/*@import "//at.alicdn.com/t/font_1452315_vikot1os8sc.css";*/
@import "//at.alicdn.com/t/font_1452315_dfhjtur1rx.css";
  *{
    padding: 0;
    margin: 0;
  }
.iconfont{
  font-size: 20px;
 font-weight: bolder;
  position: absolute;
  left: 7px;
  top:7px;
}
  .cart_one{
    width: 100%;
    color: white;
    height: 100%;
    background-color: yellow;
  position: relative;
  }

.flex-container {
  display: -webkit-flex;
  align-items: stretch;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  height: 20%;
  background-color: lightgrey;
}

.flex-item {
  width: 20%;
  background-color: cornflowerblue;
}
.flex-item1 {
  display: -webkit-flex;
  flex-direction: column;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  width: 80%;
  background-color: cadetblue;
}

  .flex-item1>p{
    font-size: 14px;
  }
.flex-item img{
  width: 90%;
  justify-content: space-between;
}
</style>
