<template>
    <fieldset class="fnc">
      <div id="app">
        <div id="head">
          <router-link :to="{path:'/home'}">
            <i class="iconjiantou-px--copy-copy iconfont"></i>
          </router-link>
          <span class="my">会员中心</span>
        </div>
        <p class="lcs">为账户购买会员</p>
        <div class="lol">
          <router-link :to="{path:'/vipdes'}" class="kt">
          <div class="lpl">
            <span>会员特权</span>
            <i class="iconchangyongtubiao-xianxingdaochu-zhuanqu-1 iconfont right"></i>
            <span class="rng">会员说明</span>
          </div>
          </router-link>
          <div class="msi">
            <div>
              <i class="iconyewutubiaosheng iconfont sheng"></i>
            </div>
            <div class="skt">
              <h4>减免配送费</h4>
              <p>每月减免30单，每日可减免3单，每单最高减4元</p>
              <p>蜂鸟专送专享</p>
            </div>
          </div>
          <div class="msi msi2">
            <div>
              <i class="iconhongbao iconfont sheng"></i>
            </div>
            <div class="skt">
              <h4>减免配送费</h4>
              <p>每月减免30单，每日可减免3单，每单最高减4元</p>
              <p>蜂鸟专送专享</p>
            </div>
          </div>
        </div>

        <div class="vip">
          <div class="akl">开通会员</div>
          <div class="theshy">
            <p class="raven">1个月 <span>¥20</span></p>
            <router-link :to="{path:'/payment'}">
            <p class="sword">购买</p>
            </router-link>
          </div>
        </div>
        <router-link :to="{path:'/usecart'}" class="mark">
        <div class="lpl2">
          <span>兑换会员</span>
          <i class="iconchangyongtubiao-xianxingdaochu-zhuanqu-1 iconfont right"></i>
          <span class="rng">使用卡号卡密</span>

        </div>
        </router-link>
        <router-link :to="{path:'/invoice'}" class="mark">
        <div class="lpl2">
          <span>购买记录</span>
          <i class="iconchangyongtubiao-xianxingdaochu-zhuanqu-1 iconfont right"></i>
          <span class="rng">开发票</span>
        </div>
        </router-link>
      </div>
    </fieldset>
</template>

<script>
    export default {
        name: "VipCard"
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452054_wmj4ptrhqmh.css";
  @import "//at.alicdn.com/t/font_1452054_oyt0tqls2o.css";
  @import "//at.alicdn.com/t/font_1452054_9c5k3s6xnyv.css";
  #app {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;

  }
  #head {
    background-color: #3190e8;
    height: 2.8rem;
    text-align: center;
    line-height: 2.8rem;
  }
  .iconfont {
    font-size: 1.5rem;
    float: left;
    margin-left: 0.3rem;
    color: white;
  }
  .my{
    color: white;
    font-size: 1.5rem;
    font-family: "楷体";
    font-weight: 900;
  }
  .lcs {
    color: #999;
    font-size: 0.9rem;
    height: 3rem;
    line-height: 3rem;
    margin-left: 1rem;
  }
  .lol {
    background-color: #fff;
  }
  .lpl {
    border-bottom: 0.1rem solid whitesmoke;
    margin-left: 1rem;
    height: 3rem;
    line-height: 3rem;
    background-color: #fff;

  }
  .kt {
    text-decoration: none;
  }
  .lpl2 {
    border-bottom: 0.1rem solid whitesmoke;
    margin-top: 0.7rem;
    padding-left: 1rem;
    height: 3rem;
    line-height: 3rem;
    background-color: #fff;
  }
  .mark {
    text-decoration: none;
  }
  .msi {
    border-bottom: 0.1rem solid whitesmoke;
    margin-left: 1rem;
    height: 6rem;
    background-color: #fff;
    /*line-height: 6rem;*/
  }
  .msi2 {
    border: none;
  }
  .rng {
    display: inline-block;
    font-size: .9rem;
    color: #999;
    /*text-align: right;*/
    float: right;

  }
  .right {
    color: #999;
    float: right;
    margin-left: 1rem;
    font-size: 1rem;
  }
  .sheng {
    color: #3190e8;
    font-size: 3rem;
    line-height: 6rem;
    margin-left: -.2rem;
  }
  .skt {
    padding-top: 1.5rem;
    margin-left: 3.5rem;
  }
  .skt p {
    color: #999;
    font-size: 0.8rem;
  }
  .vip {
    margin-top: .7rem;
    background-color: #fff;
  }
  .akl {
    height: 3rem;
    background-color: white;
    line-height: 3rem;
    margin-left: 1rem;
    border-bottom: 0.1rem solid whitesmoke;
  }
  .theshy {
    height: 4rem;
    background-color: white;
    line-height: 4rem;
    margin-left: 1rem;
    overflow: hidden;
  }
  .raven {
    float: left;
  }
  .raven span {
    color: #f60;
    font-weight: 900;
  }
  .sword {
    float: right;
    width: 4rem;
    background-color:white;
    text-align: center;
    height: 2rem;
    margin-top: .9rem;
    padding-bottom: .3rem;
    margin-right: 1rem;
    font-size: .9rem;
    line-height:2.4rem;
    border: 0.1rem solid #f60;
    border-radius: 0.4rem;
    color:#f60 ;
  }

</style>
