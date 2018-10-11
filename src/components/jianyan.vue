<template>
  <div id="abs">
    <slot></slot>
    <div>
      <div>
        <div>问诊须知:</div>
        <p>1、单次问诊服务有效时间为24小时，以医生回复患者第一条消息时间算起;</p>
        <p>2、单次咨询包含5次提问，次数用完后本次门诊咨询服务结束;</p>
        <p>3、提问成功后，若医生在24小时内未回复，订单费用将在每周二或周五进行退回，若有疑问请电话咨询客服电话400-800-1335。</p></div>
      <!-- <div>
        <div>退费规则:</div>
        <p>医生24小时未回复，系统将在两个工作日内</p>
        <p>自动完成退费</p></div> -->
    </div>
  </div>
</template>

<style lang="less" scoped>
  @fontSize_14: 14px;
  @fontSize_12: 12px;
  #abs {
    width: 100%;
    height: 25rem;
    background: #f8f8f8;
    border-bottom: 0rem;
    & > div {
      width: 100%;
      height: 20rem;
      padding: 1rem 0;
      & > div:first-child {
        height: 10rem;
        & > div {
          height: 4rem;
          line-height: 4rem;
          font-size: @fontSize_14;
        }
        & > p {
          width: 90%;
          line-height: 2rem;
          color: #bdbdbd;
          font-size: @fontSize_12;
        }
      }
      & > div:last-child {
        width: 100%;
        & > div {
          height: 4rem;
          line-height: 4rem;
          font-size: @fontSize_14;
        }
        & > p {
          width: 90%;
          line-height: 2rem;
          color: #bdbdbd;
          font-size: @fontSize_12;
        }
      }
    }
  }

</style>
