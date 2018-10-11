<template>
  <div class="hello">
    <div class="body">
      <div id="log">
        <div>
          <img src="../assets/logo2.png" style="margin-left: 1rem;" >
        </div>
      </div>
      <div class="tishi">
        <p class="p">完成互联网医院账号创建</p>
        <p>完成账号创建后，您的支付宝钱包和互联网医院账号都可可以用于登录</p>
      </div>
      <div id="phone" class="form-inputs div_bot">
        <div class="denglu">
          <span>登录名:</span><span>123456789</span>
        </div>

      </div>

      <div id="verification" class="password">
          <input  type="text" name=""  placeholder="请设置密码">
      </div>
      <div class="tongyi" style="margin-top: 1rem;">
        <div>
          <img :src="info.src" alt="">
        </div>
        <div><span>同意</span><span>《互联网医院用户使用协议》</span></div>
      </div>
      <div class="register bangding" @click="btn_click">
        注册并绑定账户
      </div>
    </div>

    <!--<div id="tan">-->

    <!--</div>-->
  </div>
</template>
<style lang="less" scoped>
  @import "./../css/a";
</style>
<script>
  export default {
    data () {
      return {
        info: {
          src: require('../assets/juxinggou.png')
        }
      }
    },
    methods: {
      btn_click () {
        this.$router.push('/zhuce')
      }
    }
  }
</script>
