<template>
  <div>
    <div class="textarea">
      <textarea placeholder="请仔细描述您需要咨询的问题，以及您需要的帮助(最小输入10字)" maxlength="500"
                @input="descInput" v-model="info.desc" ></textarea>
      <div><span>{{info.remnant}}</span><span>/</span><span>500</span></div>
    </div>
    <div class="zhaopian" >
      <div @click=""><img src="../assets/zhaopian1.png" alt=""></div>
      <div>
        <p >上传图片资料</p>
        <div>
          <p>检验检查报告，病症部位照片等图片信息 </p>
          <p>(最多上传5张)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @fontSize_14: 14px;
  @fontSize_12: 12px;
 .textarea {
    width: 100%;
    height: 12rem;
    position: relative;
   border-bottom: .1rem solid #e6e1e1;
  & > textarea {
      padding-top: 1.5rem;
      padding-bottom: .5rem;
      height: 12rem;
      width: 100%;
      letter-spacing: .1rem;
      font-size:  @fontSize_14;
      border-bottom: .1rem solid #e6e1e1;
    }
  & > div {
      position: absolute;
      bottom: -1rem;
      color: #bdbdbd;
      right: 2rem;
    }
  }
 .zhaopian {
      width: 100%;
      height: 12rem;
      font-size: 0;
      letter-spacing: 0;
      padding-left: 0rem;
  & > div {
      display: inline-block;
      vertical-align: bottom;
      font-size:  @fontSize_12;
      border-bottom: .1rem solid #e6e1e1;
    }
  & > div:first-child {
      width: 25%;
      height: 10rem;
      display: inline-block;
  & > img {
      width: 6rem;
      height: 6rem;
      margin-top: 2rem;
      margin-left: 1rem;
    }
  }
  & > div:last-child {
      width: 75% ;
      height: 10rem;
      display: inline-block;
      padding: 1rem 0;
  & > p:first-child {
      font-family: PingFang-SC-Medium;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 6rem;
      letter-spacing: 0rem;
      color: #333333;
      height: 6rem;
    }
  & > div {
      height: 4rem;
      color: #bdbdbd;
  & > p {
      height: 2rem;
      line-height: 2rem;
      font-size:  @fontSize_12;
    }
  }
  }
  }
</style>
<script>
  export default {
    data () {
      return {
        info: {
          desc: null,
          remnant: 0
        }
      }
    },
    methods: {
      descInput () {
        this.info.remnant = this.info.desc.length;
      },
      textShow () {
        this.info.show = false;
        this.info.quxiaos = true
      },
    }
  }
</script>
