<template>
   <div class="Consultancy">
   <div class="top"><i class="el-icon-arrow-left" @click="back_index"></i><span>咨询订单</span></div>
   <div class="Consultancy-background">
     <div class="within">
        <div class="personal-top">
            <span>
              <img id="H1-portrait" :src="userurl" v-if="userurl != ''">
              <img  src="../assets/titile-head.png" alt="" v-else>
            </span>
            <span>您好，{{username}} <br>
              <p>您有<span class="H-TipNum">{{count}}</span>个未完成订单</p>
            </span>
        </div>
        <div class="nodata" v-if="nodata">
            <img src="../assets/noDate.png" alt="">
        </div>
        <ul v-loading='loading'>
            <li  v-for="list in lists" >
             <div class="consultancy-box">
              <div class="li-top" @click="nextdetail(list.order.orderId,list.order.status)">
                  <div>
                    <span>订单号：</span>
                    <span>{{list.order.orderNum}}</span>
                    <span v-bind:class="{'li-over' :list.order.status == 1,'li-waite' :list.order.status ==0, 'li-esc' :list.order.status==5}">{{list.order.status==0 ?"等待付款":(list.order.status =="1"?"已支付":(list.order.status == "5"?"取消订单":(list.order.status == "6"?"退款":(list.order.status == "3"?"已完成":"已失效"))))}}</span>
                  </div>
                  <div>
                      <span>
                        <img class="li-people" v-bind:src="url_s+list.doctor.userInfo.avatarUrl" v-if="list.doctor.userInfo.avatarUrl != ''">
                        <img class="li-people" src="../assets/titile-head.png" v-else>
                      </span>
                  <span id="MenZ" v-if="list.order.module == 301">义诊</span> <!--  -->
                  <span id="Yiz" v-else>门诊</span>
                  </div>
                  <div><span>{{list.doctor.doctorName}}</span>
                    <span>{{list.doctor.office}}</span>
                  </div>
                  <div><span>{{list.doctor.hospitalName}}</span><span>{{list.doctor.offlinePositionName}}</span>
                  </div>
     <!--              <div>    {{list.doctor[0].description}}
                    <span>{{list.doctor.good}}</span>
                  </div>  -->
                  <div></div>
                  <div>
                    <span>就诊人：</span>
                    <span>{{list.user.patientName}}</span>
                  </div>
                  <div>
                    <span>下单时间：</span>
                    <span>{{list.order.createDate}}</span>
                  </div>
                  <div>
                    <span>完成时间：</span>
                    <span>{{list.order.completeDate == null||list.order.completeDate == ''?"尚未完成": list.order.completeDate}}</span>
                  </div>
                  <div class="CleanFloat"></div>
              </div>
              <div class="li-top-right" @click="nextdetail(list.order.orderId,list.order.status)">

                <span class="right-enter"><img src="../assets/Consultancy-right.png"></span>
              </div>
              <div class="li-bottom">
                    <span>实付款：&#8197￥</span>
                    <span>{{list.order.amount}} 元</span>
                    <span class="pay" @click="pay(list.order.orderNum,list.order.amount,list.user.patientName,list.user.patientMobile,list.newGraphicInquiryId,list.order.orderId,list.doctor.doctorZxSetting[0].freeClinic,list.doctor.doctorZxSetting[0].remainTimes)" v-if="list.order.status == 0">去付款</span>
                   <!-- <span class="Cancel" v-if="list.order.status == 0" @click="cancel_lists(list.order.orderNum)">取消订单</span> -->
              </div>
             </div>
            </li>
            <li id="li" @click="checkDivScroolTop" v-if="updatamore">
            <span></span><span>加载更多</span>
          </li>
        </ul>
      </div>
   </div>
   </div>
</template>

<style scoped lang="less" scoped>
  @fontSize_14: 14px;
  @fontSize_12: 12px;
.nodata{
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  font-size: 1.4rem;
  text-align: center;
  margin-top: 30%;
  & > img{
    width: 12rem;
  }
}
.Consultancy {
  width: 100%;
  height: 100%;
}

.el-message-box {
  width: 80% !important;
}
.top {
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  font-size: 17px;
  text-align: center;
  border-bottom: 0.1rem solid #e7e7e7;
  color: #444444;
  & > i {
    position: absolute;
    left: 1.2rem;
    top: 1rem;
    font-size: 24px;
  }
  & > img {
    position: absolute;
    right: 1.5rem;
    top: 1.4rem;
  }
}
.Consultancy-background {
  background: url("../assets/Consultancy-BG.png") no-repeat;
  background-size: cover;
  width: 100%;
  height: calc(~"100% - 4rem");
  overflow-y: scroll;
}

.within {
  width: 100%;
  height: 100%;
  & > ul {
    list-style: none;
    margin-bottom: 10%;
    margin-top: 3%;
  }
  ul li {
    height: auto;
    margin: 0 auto;
  }
}

.consultancy-box {
  width: 90%;
  box-shadow: 0px 6px 16px -4px rgba(222, 228, 235, 0.8);
  border-radius: 12px;
  margin-bottom: 5%;
  background-color: #fff;
  margin-left: 5%;
}

.personal-top {
  font-size: 1.2rem;
  width: 100%;
  height: 4.5rem;
  margin-left: 5%;
  margin-top: 6%;
  margin-bottom: 1%;
  & > span:nth-child(1) {
    width: 15%;
    vertical-align: top;
    height: 3.1rem;
    display: inline-block;
    img{
      width: 3.5rem;
      height:3.5rem;
    }
  }
  & > span:nth-child(2) {
    display: inline-block;
    width: 70%;
    height: 3.1rem;
    color: #484848;
    font-size: 1.2rem;
    & > p {
      float: left;
      width: 65%;
      color: #9ea1a4;
      -webkit-transform: scale(0.9, 0.9);
      transform: scale(0.9, 0.9);
      -webkit-transform-origin: left;
      transform-origin: left;
      span {
        color: #e2231a;
      }
    }
  }
  
}
.H2-wlmz {
  margin-left: 5%;
  height: 5%;
  font-size: 1.6rem;
  color: #34353c;
  & > span {
    float: left;
    line-height: 2rem;
    margin-left: 6%;
    letter-spacing: 1px;
  }
}

.li-top {
  width: 90%;
  margin-left: 5%;
  background-color: #fff;
  & > div:nth-child(1) {
    font-size: 1.3rem;
    color: #484848;
    height: 3rem;
    line-height: 3rem;
    & > span:nth-child(3) {
      float: right;
      width: 5rem;
      right: 0.6rem;
      color: #666666;
      text-align: right;
      font-size: 1.2rem;
    }
  }
  & > div:nth-child(2) {
    float: left;
    height: 9rem;
    margin-top: 4%;
    margin-right: 1%;
    & > span img {
      width: 4.4rem;
      height: 4.4rem;
      border-radius: 50%;
    }
    & > span:nth-child(2) {
      display: block;
      text-align: center;
      margin-top: 2%;
    }
  }
  & > div:nth-child(3) {
    float: left;
    width: 65%;
    margin-left: 6%;
    height: 1.3rem;
    margin-top: 4%;
    & > span:nth-child(1) {
      color: #4f4747;
      font-size: 1.3rem;
    }
    & > span:nth-child(2) {
      margin-left: 1rem;
      color: #a29c9c;
    }
  }
  & > div:nth-child(4) {
    float: left;
    width: 65%;
    margin-left: 6%;
    margin-top: 2%;
    & > span:nth-child(1) {
      color: #a29c9c;
    }
    & > span:nth-child(2) {
      margin-left: 1rem;
      color: #a29c9c;
    }
  }

  & > div:nth-child(5) {
    width: 55%;
    float: left;
    margin-left: 6%;
    margin-top: 2%;
    height: 1px;
    background-color: #c8c8c8;
  }
  & > div:nth-child(6) {
    float: left;
    width: 60%;
    margin-left: 6%;
    margin-top: 2%;
    font-size: 1.2rem;
    & > span:nth-child(1) {
      color: #4f4747;
    }
    & > span:nth-child(2) {
      color: #4f4747;
    }
  }
  & > div:nth-child(7) {
    float: left;
    width: 70%;
    margin-left: 6%;
    margin-top: 1%;
    color: #a29c9c;
    margin-bottom: 1%;
  }
  & > div:nth-child(8) {
    float: left;
    width: 70%;
    margin-left: 6%;
    color: #a29c9c;
    margin-bottom: 5%;
  }
}
.li-top-right {
  width: 5%;
  position: relative;
  background-color: #fff;
  margin-left: 95%;

  & > span:nth-child(1) {
    width: 5%;
    display: block;
    position: absolute;
    margin-top: -6.5rem;
  }
}

.li-bottom {
  color: #4f4747;
  margin-left: 5%;
  height: 2.5rem;
  width: 90%;
  line-height: 2.5rem;
  border-top: 1px solid #c8c8c8;
  background-color: #fff;
  & > span:nth-child(3) {
    float: right;
    background-color: #4d76b2;
    width: 18%;
    height: 1.5rem;
    line-height: 1.5rem;
    border-radius: 5px;
    color: #fff;
    display: inline-block;
    text-align: center;
    margin-top: 0.5rem;
    box-shadow: 0 0 0 1px #4d76b2;
  }
  & > span:nth-child(4) {
    float: right;
    background-color: #fff;
    width: 18%;
    height: 1.5rem;
    line-height: 1.4rem;
    border-radius: 5px;
    color: #4d76b2;
    display: inline-block;
    text-align: center;
    margin-top: 0.5rem;
    box-shadow: 0 0 0 1px #4d76b2;
    margin-right: 0.7rem;
  }
}
.CleanFloat {
  clear: both;
}

#H1-portrait {
  width: 4rem;
  height: 4rem;
  box-shadow: 0px 0px 5px 0px #4d76b2;
}
#H2-point {
  height: 2rem;
  float: left;
}
.li-over {
  color: #4d76b2 !important;
}
.li-waite {
  color: #e59042 !important;
}
#li-esc {
  color: #666666;
  right: -1.3rem;
}
#MenZ {
  color: #4d76b2;
}
#Yiz {
  color: #58bf5f;
}
#li {
    width: 100%;
    height: 6rem;
    & > span {
        display: inline-block;
        height: 6rem;
        width: 20%;
        line-height: 6rem;
        text-align: center;
        vertical-align: top;
        font-size: @fontSize_14;
    }
    & > span:nth-child(1) {
        width: 1.5rem;
        height: 1.5rem;
        margin-top: 2.25rem;
        background: url("../assets/xiala.png") no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        margin-left: 40%;
    }
    & > span:nth-child(2) {
        color: #8f8f8f;
        letter-spacing: 0.1rem;
    }
}
</style>
<script>
import { MessageBox, Toast, Indicator } from "mint-ui";
import Photo from './photo.vue';
export default {
  data() {
    return {
      lists: {},
      url_s: this.$store.state.schlwyyUrl + "/doctor",
      urls: this.$store.state.skyUrl,
      userurl: "",
      avatarUrl: "",
      username: "",
      loading: false,
      count: 0 ,
      nodata:"",
      updatamore:"",
      page:"",
    };
  },
  created() {
    this.querylist();
  },
  methods: {
    back_index() {
      this.$router.push("./net_index");
    },
    cancel_lists(orderNum) {
      MessageBox.confirm("确定执行此操作?").then(action => {
        this.axios
          .get(this.urls + "/OrderController/exitOrder", {
            params: {
              orderNum: orderNum
            }
          })
          .then(res => {
            if (res.data) {
              Toast("订单取消成功！！");
            }
          })
          .catch(err => {
            Toast("删除失败！！！");
          });
      });
    },
    querylist() {
      Indicator.open("加载中...");
      this.page = 1;
      this.axios
        .get( this.urls + "/OrderController/findOrder", {
          params: {
            page: this.page,
            openId: localStorage.getItem("openId"), //localStorage.getItem("openId")
            hospitalId: localStorage.getItem("hospitalId")
          }
        })
        .then(res => {
          console.log("shit.list", res);
          Indicator.close();
          if (res.data == "no") {
            this.nodata = true;
          } else {
            this.count = res.data.count;
            this.lists = res.data.date;
            this.username = res.data.userName;
            this.userurl = res.data.userUrl;
            this.updatamore = true;
          }
        })
        .catch(err => {
          Indicator.close();
          Toast("加载失败!!!");
        });
    },
    checkDivScroolTop(){
          //获取节点
          let _this = this;
      let instance = Toast('加载中..');
      _this.page++;
      _this.axios       //this.info.url_s + "/api/doctor/findList"
          .get( _this.urls + "/OrderController/findOrder", {
            params: {
              page: _this.page,
              openId: localStorage.getItem("openId"), //sort: _this.info.paixuStr
              hospitalId: localStorage.getItem("hospitalId")
          }
          })
          .then( res=>{
            instance.close(); 
            if (res.data != "no") {
              _this.lists = _this.lists.concat(res.data.date);
            } else {
              Toast('暂无更多咨询订单')
            }
          }).catch(err=>{
              instance.close(); 
              Toast('加载失败..')
          })
    },
    nextdetail(orderId, status) {
      console.log(orderId);
      if (status == 9) {
        Toast("已失效订单...");
        //this.$router.push("/consult/detail");
      } else if (status == 0) {
        Toast("请先支付");
      } else if (status == 5) {
        Toast("已取消订单");
      } else if (status == 3 || status == 1) {
        /* 到图文咨询页面 */

        this.$router.push({name:"inquiry",query:{
          "orderId":orderId}});
      }
    },
    pay(orderNum,amount,patientName,patientMobile,newGraphicInquiryId,orderId,freeClinic,remainTimes){
      let _this = this
      // if(freeClinic == 1){
      //   if(remainTimes >0){
      //     amount = 0
      //   }
      // }
      console.log('amount',amount)
                //订单号
        /* var orderId = res.data.orderId;
        localStorage.setItem("id", id);
        localStorage.setItem("orderId", orderId); */
        //储存id
        //调用支付
        _this.axios.get( _this.$store.state.weChatUrl + "/weixinFHW/consultation/wxPay", {
          params: {
            orderNo: orderNum,
            money: amount,
  //        money: 0.01,
            userName: patientName,
            userPhone: patientMobile,
            typeStr: 1,
            openId:  localStorage.getItem("openId"),
          }
        }).then(function (response) {
          wx.chooseWXPay({
            timestamp: response.data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: response.data.nonceStr, // 支付签名随机串，不长于 32 位
            package: response.data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
            signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: response.data.paySign, // 支付签名
            success: function (res) {
  //                   	if(res.err_msg == "get_brand_wcpay_request:ok"){
                // 支付成功后的回调函数
                  _this.$router.push({name:"inquiry",
                    query:{"orderId":orderId}
                  });
  //                   	}
  //                   	else{
  //                   		alert("支付失败");
  //                   	}
  //                   	else if(res.err_msg == "get_brand_wcpay_request:cancel"){
  //                   		alert("取消支付");
  //                   	}
  //                   	else if(res.err_msg == "get_brand_wcpay_request:fail"){
  //                   		alert("支付失败");
  //                   	}
            },
          });
        }).catch(function (err) {
          MessageBox('提示', err);
        });
              
    }
  }
};
</script>
