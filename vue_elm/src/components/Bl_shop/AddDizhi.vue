<template>
  <div class="adddizhi">
    <!--头部-->
    <div class="addzhi_title">添加地址
      <router-link class="aaa" :to="{path:'/addD'}">
        <i class="icon-zuojiantou iconfont"></i>
      </router-link>
    </div>

    <!--添加地址-->
    <div class="addcont">
      <div class="phonep">
        <div class="phname">联系人</div>
        <div class="name_r">
          <input type="text" placeholder="你的名字" class="add_put" v-model="myname">


          <!------------------------------------->
          <van-radio-group v-model="radio" class="cha_dchoose">
            <van-radio name="1" checked-color="#07c160" class="mir">先生</van-radio>
            <van-radio name="2" checked-color="#07c160" class="mir">女士</van-radio>
          </van-radio-group>
          <!---------------------------------------->
        </div>
      </div>

      <div class="phone_bl">
        <div class="phname">联系电话</div>
        <div class="addbao">
          <input type="text" placeholder="您的手机号" v-model="mytel">
          <div class="addbei">+</div>
        </div>
      </div>
      <div class="eatdi">
        <div class="songcan">送餐地址</div>
        <div class="nnnn">
          <router-link :to="{path:'/searchdizhi'}"><input type="text" placeholder="小区/写字楼/学校等" class="xxx" v-model="where"></router-link>
          <input type="text" placeholder="详细地址(如门牌号等)" class="desdizhi" v-model="jtdz">
        </div>
      </div>
      <div class="biao_bl">
        <div class="biaoqian">标签</div>
        <input type="text" placeholder="无/家/学校/公司" class="nmnv">
      </div>
    </div>
    <!--最下边确定按钮-->
    <div class="btnn_bl" @click="pleasesure">确定</div>

    <!--定位弹出来的弹框-->
    <div class="dingtan" v-show="temp">
      <p class="tanhao">!</p>
      <p class="msg_my">请输入姓名</p>
      <p class="queren_bl" @click="temp=!temp">确认</p>
    </div>
    <!--定位弹出来的弹框结束-->

  </div>
</template>

<script>
  export default {
    name: "AddDizhi",
    data() {
      return {
        temp:false,
        radio: '1',
        myname: "",
        mytel: "",
        myarry: "",
        where:"",
        jtdz:""
      }
    },
    methods: {
      pleasesure() {
        if(this.myname==""&&this.mytel==""&&this.jtdz==""&&this.where==""){
          this.temp=true;
        }else{
          this.$router.push({path:"/searchdizhi"});

        }

      }
    }

  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452315_3dl8zw84e3a.css";

  .iconfont {
    font-size: 1.7rem;
    position: absolute;
    left: 0.3rem;
    top: 0;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .aaa {
    color: white;
  }

  html, body {
    width: 100%;
    height: 100%;
    background-color: lightgray;
  }

  .adddizhi {
    width: 100%;
    height: 41.3rem;
    background-color: rgb(245, 245, 245);
  }

  input {
    background: none;
    border: none;
  }

  .addzhi_title {
    width: 100%;
    height: 10%;
    line-height: 3rem;
    font-weight: bold;
    font-size: 1.3rem;
    color: white;
    text-align: center;
    position: relative;
    background-color: rgb(49,144,232);
  }

  .addcont {
    width: 90%;
    height: 20rem;
    padding: 0 5%;
    background-color: white;
  }

  .phonep {
    width: 100%;
    height: 33%;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.08rem solid ghostwhite;
  }

  .phname {
    width: 30%;
    padding-top: 1rem;
  }

  .biaoqian {
    width: 30%;
  }

  .name_r {
    width: 70%;
  }

  .add_put {
    height: 45%;
    width: 100%;
    background: none;
    border: none;
    border-bottom: 0.08rem solid ghostwhite;
  }

  .cha_dchoose {
    padding-right: 5rem;
    display: flex;
    justify-content: space-between;
  }

  .mir {
    padding: 1.2rem 0;
  }

  .phone_bl {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.08rem solid ghostwhite;
  }

  .addbei {
    font-size: 2.5rem;
    color: deepskyblue;
  }

  .addbao {
    width: 70%;
    display: flex;
    justify-content: space-between;

  }

  .eatdi {
    display: flex;
    justify-content: space-between;
  }

  .songcan {
    width: 30%;
    padding-top: 1rem;
    border-bottom: 0.08rem solid ghostwhite;
  }

  .nnnn, .nmnv {
    width: 70%;
  }

  .biao_bl {
    display: flex;
    padding: 1rem 0;
    justify-content: space-between;
  }

  .btnn_bl {
    margin: 0 5%;
    text-align: center;
    padding: 0 40%;
    height: 3rem;
    margin-top: 1rem;
    background-color: rgb(76, 217, 100);
    border-radius: 0.5rem;
    line-height: 3rem;
    color: white;
  }

  .xxx {
    width: 100%;
    padding: 1rem 0;
    border-bottom: 0.08rem solid ghostwhite;
  }

  .desdizhi {
    padding: 1rem 0;
  }
  .dingtan{
    width: 70%;
    margin:0 auto;
    border-radius: 0.5rem;
    background-color: white;
    position: absolute;
    left: 15%;
    top:29%;
    text-align: center;
    padding-top: 1rem;
  }
  .msg_my{
  padding: 1rem 0;
  }
  .tanhao{
    margin: 0 auto;
    width: 3.5rem;
    height:3.5rem;
    line-height: 3.5rem;
    border: 0.2rem solid darkorange;
    border-radius: 50%;
    font-size: 3rem;
    color:orange;
  }
  .queren_bl{
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: 0.5rem;
    text-align: center;
    background-color: rgb(76, 217, 100);
  }
</style>
