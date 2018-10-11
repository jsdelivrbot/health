<template>
  <div class="tiwens">
    <div>
        <div>
          <div><img src="../assets/ren.png" alt=""></div>
        <div>
          <div><span>李大仁</span><span>主治医生</span></div>
          <div><span>绵阳市中心医院</span><span>心理科</span></div>
        </div>
      </div>
    </div>
    <Photo class="a"></Photo>
    <div class="sub" @click="next">提交</div>
  </div>

</template>
<style lang="less" scoped>
  @fontSize_14: 14px;
  @fontSize_12: 12px;
  .tiwens {
    width: 100%;
    overflow: hidden;
   & > div:nth-child(1) {
      width: 100%;

      & > div:first-child {
        width: 100%;
        height: 9rem;
        font-size: 0;
        padding: 0 1rem;
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
          padding: 1rem 0;
          box-sizing: border-box;
          font-size: @fontSize_14;
          & > div:first-child {
            & > span:last-child {
              color: #999999;
            }
          }
          & > div {
            width: 100%;
            height: 3.5rem;
            font-size: @fontSize_14;
            line-height: 3.5rem;
            & > span:first-child {
              margin-right: 2rem;
            }
          }
        }
      }
    }
  }
  .sub {
    width: 100%;
    height: 5rem;
    text-align: center;
    line-height: 5rem;
    background-color: #44b2fd;
    color: #ffffff;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: @fontSize_14;
  }
  .a {
    padding: 0 1rem;
    border-bottom: .1rem solid #eee;
  }
</style>
<script>
  import Photo from './photo.vue'
  export default  {
    components: {Photo},
    data () {
      return {
        info: {

        }
      }
    },
    methods: {
      next () {
        this.$router.push('/inquiry3')
      }
    }
  }
</script>

