<template>
  <div class="jilu">
    <div >
      <div>正在进行的问诊</div>
      <div>
        <ul class="ul">
          <li v-for="i in str" @click="jinxing(i.orderId)" v-if="recoilState[i.status] !== '已完成' && recoilState[i.status] !== '已失效'">
            <div><div :style="{backgroundImage:`url(${docUrl + i.doctorAvatarUrl})`}"></div></div>
            <div>
              <div>{{i.doctorName}}医生</div>
              <div v-if="false">这是最后一条消息</div>
              <div>{{i.createTime}}</div>
              <div class="xxx">{{recoilState[i.status]}}</div>
            </div>
            <div>
              <div></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div>已结束的问诊</div>
      <div>
        <ul class="ul">
          <li v-for="i in str" @click="orderId(i.orderId)" v-if="recoilState[i.status] === '已完成' || recoilState[i.status] === '已失效'">
            <div><div :style="{backgroundImage:`url(${docUrl + i.doctorAvatarUrl})`}"></div></div>
            <div>
              <div>{{i.doctorName}}医生</div>
              <div v-if="false">这是最后一条消息</div>
              <div>{{i.createTime}}</div>
              <div class="xxx">{{recoilState[i.status]}}</div>
            </div>
            <div>
              <div></div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @fontSize_14: 14px;
  @fontSize_12: 12px;
  ::-webkit-scrollbar {/*滚动条整体样式*/
    width: 0;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 0;
  }
  .jilu {
    width: 100%;
    height: 100%;
    background: #f8f8f8;
    overflow-x: hidden;
    & > div:nth-child(1) {
      width: 100%;
      background: #fff;
      box-sizing: border-box;
      margin: 2rem 0rem;
      & > div:first-child {
        padding: 0 1rem;
        width: 100%;
        height: 4rem;
        line-height: 4rem;
        color: #83889a;
        font-size: @fontSize_14;
        border-bottom: .1rem solid #eee;
      }
    }
    & > div:nth-child(2) {
      width: 100%;
      & > div:first-child {
        padding: 0 1rem;
        width: 100%;
        height: 4rem;
        line-height: 4rem;
        color: #83889a;
        font-size: @fontSize_14;
        border-bottom: .1rem solid #eee;
      }
    }
    & > div:nth-child(2) {
      background: #ffffff;
    }
    .ul {
      width: 100%;
      padding: 0 1rem;
      & > li {
        width: 100%;
        height: 12rem;
        overflow: hidden;
        font-size: 0;
        border-bottom: .1rem solid #eee;
        & > div {
          vertical-align: top;
          display: inline-block;
          font-size: @fontSize_14;
        }
        & > div:first-child {
          width: 25%;
          height: 12rem;
          overflow: hidden;
          & > div {
            width: 7rem;
            height: 7rem;
            border-radius: 50%;
            background: url("../assets/ren.png") no-repeat;
            background-size: cover;
            margin-top: 2.5rem;
            margin-left: calc(~ '50% - 3.5rem');
          }
        }
        & > div:nth-child(2) {
          padding: 3rem 0;
          box-sizing: border-box;
          width: 60%;
          position: relative;
          & > div {
            height: 3rem;
            line-height: 3rem;
            letter-spacing: .1rem ;
          }
          & > div:nth-child(2), & > div:nth-child(3) {
            font-size: @fontSize_12;
            color: #999999;
          }
          .xxx {
            position: absolute;
            width: 6rem;
            height: 3rem;
            top: 4.5rem;
            right: 1rem;
            color: #999999;
            text-align: right;
          }
        }
        & > div:last-child {
          width: 13%;
          height: 12rem;
          & > div {
            width: .9rem;
            height: 1.5rem;
            background: url("../assets/bg_right.png") no-repeat;
            -webkit-background-size: cover;
            background-size: cover;
            margin-top: 5.25rem ;
            margin-left: calc(~ '50% - .85rem');
          }
        }
      }
    }
  }
</style>
<script>
  export  default {
    data  () {
      return {
        urls:  'http://www.schlwyy.com:8686/hlwyy-new',
        info: [{}],
        str: [{}],
        recoilState: {
          ANSWERED : '已回答',
          CREATED: '已创建',
          COMPLETE: '已完成',
          EVALUATED: '已评价',
          OVERTIME: '已失效'
        },
        docUrl: 'http://www.schlwyy.com:8686/doctor',
      }
    },
    mounted() {
//      this.queryInterrogation1();
      this.queryInterrogation2();
    },
    methods: {
      //查询所有问诊记录
      queryInterrogation2 () {
        let  token = this.$route.query.token ;
        localStorage.setItem('token',token);
        //获取就诊人ID
//        let  token = localStorage.getItem('token') ;
////        localStorage.setItem('token',token);
        let _this = this;
        _this.axios.get(_this.urls + 'api/graphic_inquiry/',{
          params: {
//            orderId: orderId,
            token: token,
            page_index: 1,
            page_size: 2000
          }
        }).then(function (response) {
          _this.str = response.data.reverse();
          console.log(response.data);
        }).catch(function (err) {
          this.$router.push('/menzhen');
        });
      },
      //查询当前问诊记录
      queryInterrogation1 () {
        //获取url参数值
        let  token = this.$route.query.token ;
//        let  token = localStorage.getItem('token') ;
//        localStorage.setItem('token',token);
        let orderId = localStorage.getItem('orderId');
        //获取就诊人ID
        let _this = this;
        _this.axios.get(_this.urls + 'api/graphic_inquiry/',{
          params: {
            orderId: orderId,
            token: token,
            page_index: 1,
            page_size: 2000
          }
        }).then(function (response) {
          _this.info = response.data;
          console.log(response.data);
//          var docUrl =  response.data[0];
//          _this.info.dOc = response.data[0];
//          _id = response.data[0].id;
//          //...
//          _this.axios.get(_this.urls + '/api/graphic_inquiry/'+ _id + '/question',{
//            params: {
//              id: _id,
//              token: token,
//              page_index: 1,
//              page_size: 2000
//            }
//          }).then(function (response) {
//            _this.lists = response.data;
////            _this.info.dOc = dOc;
//            console.log(response.data)
//          })
        });
      },
      jinxing (id) {
        localStorage.setItem("orderId", id);
        this.$router.push('/inquiry');
      },
      orderId (id) {
        localStorage.setItem('orderId1',id);
        this.$router.push('/inquiry5');
      }
    }
  }

</script>
