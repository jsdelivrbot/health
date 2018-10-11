import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  // 定义状态
  state: {
    schlwyyUrl: 'http://www.schlwyy.com:8686', //--正式环境  http://www.schlwyy.com/sk-h-inquiry
    hlwyyUrl: 'http://hlwyy.zwytest.jksczy.cn', //--测试环境
    weChatUrl: 'http://www.schlwyy.com/sk-h-inquiry', //微信服务url //http://weixin.fuwu.jkscw.com.cn
    skyUrl: 'http://www.schlwyy.com/sk-h-inquiry', //四凯测试url http://weixintest.jkscw.com.cn/sk-h-inquiry
  },
})

export default store
