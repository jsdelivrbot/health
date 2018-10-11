<template>
  <div class="inquiry">
    <div>
      <div>
        <div><img src="../assets/ren.png" alt=""></div>
        <div>
          <div><span>李大仁</span><span>主治医生</span></div>
          <div><span>绵阳市中心医院</span><span>心理科</span></div>
        </div>
      </div>
      <div>医生将在24小时内回复，请耐心等待</div>
    </div>
    <div class="first">第一次提问</div>
    <div class="tiwen">
      <div>
        <div><span></span><span>患者名</span></div>
        <div>瓦达所大所多撒大所多撒多撒多撒多撒大所多撒多撒大所大所多撒多撒大所大多撒多撒</div>
        <div>
          <img src="../assets/timg.jpg" alt="">
          <img src="../assets/timg.jpg" alt="">
          <img src="../assets/timg.jpg" alt="">
        </div>
        <div><span>提问时间:</span><span>2017-12-02</span><span>10:56</span></div>
      </div>
    </div>
    <div class="zaici" @click="pinglun">评论</div>
    <div class="bg" v-if="info.bg"></div>
    <div class="pinglun" v-if="info.pins">
      <div class="p1">评价
        <div @click="clo"></div>
      </div>
      <div class="p2">
        <el-rate
          class="p2-el"
          v-model="value1"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
      </div>
      <div class="p3">
        <textarea maxlength="80" placeholder="请你对医生的服务做出客观的评价，您的评价会让
医生的服务，服务的更好。" @input="descInput" v-model="info.desc"></textarea>
        <div>{{info.remnant}}/80</div>
      </div>
      <div class="p4" @click="nexts">匿名提交</div>

    </div>

  </div>
</template>
<style lang="less" scoped>
  @fontSize_14: 14px;
  @fontSize_12: 12px;
  .pinglun {
    width: 100%;
    height: 25rem;
    position: absolute;
    left: 0;
    bottom: 0;
    background: #fff;
    & > div {
      box-sizing: border-box;
    }
    & > .p1 {
      text-align: center;
      color: #44b2fd;
      height: 4rem;
      line-height: 4rem;
      font-size: 16px;
      border-bottom: 1px solid #eee;
      position: relative;
      & > div {
        width: 2rem;
        height: 2rem;
        background: url("../assets/cacaca.png" )no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        border-radius: 50%;
        position: absolute;
        right: 0;
        top: 1rem;
      }
    }
    & > .p2 {
      width: 100%;
      height: 5rem;
      & > .p2-el {
        height: 5rem;
        line-height: 5rem;
      }
    }
    & > .p3 {
      width: 100%;
      height: 9rem;
      border-bottom: 1px solid #eeeeee;
      position: relative;
      margin-bottom: 3rem ;
      & > textarea {
        border: none;
        outline: none;
        width: 100%;
        height: 9rem;
        letter-spacing: .1rem ;
        font-size: @fontSize_14;
      }
      & > div {
        position: absolute;
        font-size: @fontSize_14;
        color: #bdbdbd;
        bottom: 1rem;
        right: 1rem;
      }
    }
    & > .p4 {
      width: 100%;
      height: 5rem;
      line-height: 5rem;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #44b2fd;
      color: #ffffff;
      text-align: center;
      font-size: @fontSize_14;
    }
  }
  .inquiry {
    width: 100%;
    height: 100%;
   & > .bg {
      width: 100%;
      height: 100%;
      background: #000;
      opacity: .5;
       position: absolute;
       top: 0;
       left: 0;
    };
    & > div {
      box-sizing: border-box;
      padding:0 1rem ;
    }
    & > div:nth-child(1) {
      width: 100%;
      height: 13rem;
      & > div:first-child {
        width: 100%;
        height: 9rem;
        font-size: 0;
        border-bottom: .1rem solid #eee;

        & > div {
          display: inline-block;
          vertical-align: top;
        }
        & > div:first-child {
          width: 25%;
          height: 9rem;
          & > img {
            width: 6rem;
            height: 6rem;
            margin-top: 1.5rem;
          }
        }
        & > div:last-child {
          width: 75%;
          height: 9rem;
          padding:  1rem 0;
          box-sizing: border-box;
          font-size:  @fontSize_14;
          & > div:first-child {
            & > span:last-child {
              color: #999999;
            }
          }
          & > div {
            width: 100%;
            height: 3.5rem;
            line-height: 3.5rem;
            & > span:first-child {
              margin-right: 2rem;
            }
          }
        }
      }
      & > div:last-child {
        width: 100%;
        height: 4rem;
        text-align: center;
        line-height: 4rem;
        color: #37acfd;
        font-size:  @fontSize_14;
      }
    }
    & > .tiwen {
      width: 100%;

      & > div:nth-child(1) {
        width: 100%;
        height: 5rem;
        & > div:nth-child(1) {
          font-size:  @fontSize_14;
          & > span {
            vertical-align: top;
          }
          & > span:nth-child(1) {
            display: inline-block;
            width: 3rem;
            height: 3rem;
            margin-top: 1rem;
            background: url("../assets/huiren.png" )no-repeat ;
            background-size: cover;
          }
          & > span:last-child {
            display: inline-block;
            width: calc(~ '100% - 3rem');
            height: 3rem;
            line-height: 3rem;
            margin-top: 1rem;
            padding-left: 1rem;
            box-sizing: border-box;
          }
        }
        & > div:nth-child(2) {
          width: 100%;
          font-size:  @fontSize_12;
          letter-spacing: .1rem;
          color: #797979;
          padding: 1rem 0;
        }
        & > div:nth-child(3) {
          width: 100%;
          height: 7rem;
          padding: 1rem 0;
          & > img {
            width: 6rem;
            height: 6rem;
            padding-right: .5rem;
          }
        }
        & > div:nth-child(4) {
          width: 100%;
          height: 4rem;
          font-size: 0;
          & > span {
            display: inline-block;
            height: 3rem;
            font-size:  @fontSize_14;
            line-height: 3rem;
          }
          & > span:first-child {
            width: 20%;
          }
          & > span:nth-child(2) {
            width: 30%;
          }
          & > span:nth-child(3){
            width: 10%;
          }
        }
      }
    }
  }
  .zaici {
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    color: #ffffff;
    background-color: #44b2fd;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size:  @fontSize_14;
  }
  .first {
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    font-size:  @fontSize_14;
    color: #83889a;
    background-color: #f8f8f8;
  }
</style>
<script>
  export  default  {
    data () {
      return {
        value1: null,
        info: {
          bg: false,
          desc: null,
          remnant: 0,
          pins: false
        }
      }
    },
    methods: {
      pinglun () {
        this.info.bg = true;
        this.info.pins = true;
      },
      descInput() {
        this.info.remnant = this.info.desc.length;
      },
      clo () {
        this.info.bg = false;
        this.info.pins = false;
      },
      nexts () {
        this.$router.push('/inquiry5');
      }
    }
  }
</script>
