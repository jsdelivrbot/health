<template>
   <div class="addressAddchange">
   <div class="top"><i class="el-icon-arrow-left" @click="back_index"></i><span>{{text_title}}</span></div>
      <div class="addressAddchange-background">     
        <div class="address-table">
          <ul>
            <li>
              <div>
                <span>收货人</span>
                <input type="text" v-model="info.userName">
              </div>
            </li>
            <li>
              <div>
                <span>联系电话</span>
                <input type="text" v-model="info.phone">
              </div>
            </li>
            <li>
              <div>
                <span>所在地区</span>
                <div id="trigger5">{{info.region}}</div>
                <img src="../../assets/address/addressAddchange-left.png">
              </div>
            </li>
            <li>
              <div class="address">
                <span>详细地址</span>
                <mt-field class="addresinput"  placeholder="详细地址" type="textarea" rows="4" v-model="info.text"></mt-field>
              </div>
            </li>
            <li>
              <div class="SWT">
                <span>设为默认</span>
                <mt-switch class="switch1" v-model="info.defaulted"></mt-switch>
              </div>
            </li>  
          </ul>
        </div>

        <div class="address-bottom">
          <div @click="submit">
            <span>保 存</span>
          </div>
        </div>

      </div>  
   </div>
</template>            

<style scoped lang="less" scoped>
.addressAddchange {
  width: 100%;
  height: 100%;
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
.addressAddchange-background {
  background-color: #f7f7f7;
  background-size: cover;
  width: 100%;
  height: calc(~"100% - 4rem");
  overflow-y: scroll;
}
.address{

  box-sizing: border-box;
  font-size: 0;
  &>span{
    display: inline-block;
    width: 20%;
    vertical-align: top;
    box-sizing: border-box;
    font-size: 1.4rem;
    text-align: center;
    line-height: 3rem;
    

  }
  .addresinput{
     display: inline-block;
     box-sizing: border-box;
     width: 80%;
     line-height: 3rem;
     font-size: 1.4rem;
     border: 1px solid white;
     //border-left: 1px solid #e7e7e7;
  }
  textarea{
    font-size: 14px!important;
    border: 1px solid white!important;
  }
}
.SWT{
  width:100%;
  height:100%;
  box-sizing: border-box;
  position: relative;
.switch1{
    display: inline-block;
    position: absolute;
    right: 0;
    top: 1rem;
  }
}
  
.address-table {
  background-color: #fff;
  width: 100%;
  & > ul {
    margin-top: 0.5rem;
    width: 100%;
    & > li:nth-child(1) {
      border-bottom: 1px solid #e7e7e7;
      width: 100%;
      list-style-type: none;
      & > div:nth-child(1) {
        line-height: 5rem;
        height: 5rem;
        & > span:nth-child(1) {
          font-size: 1.4rem;
          margin-left: 2%;
          color: #828282;
        }
        & > input {
          height: 3rem;
          width: 73%;
          float: right;
          margin-right: 5%;
          margin-top: 1rem;
          color: #1c1c1c;
          font-size: 1.4rem;
        }
      }
    }
    & > li:nth-child(2) {
      border-bottom: 1px solid #e7e7e7;
      width: 100%;
      list-style-type: none;
      & > div:nth-child(1) {
        line-height: 5rem;
        height: 5rem;
        & > span:nth-child(1) {
          margin-left: 2%;
          font-size: 1.4rem;
          color: #828282;
        }
        & > input {
          height: 3rem;
          width: 73%;
          float: right;
          margin-right: 5%;
          margin-top: 1rem;
          color: #1c1c1c;
          font-size: 1.4rem;
        }
      }
    }
    & > li:nth-child(3) {
      border-bottom: 1px solid #e7e7e7;
      width: 100%;
      list-style-type: none;
      & > div:nth-child(1) {
        line-height: 5rem;
        height: 5rem;
        & > span:nth-child(1) {
          margin-left: 2%;
          font-size: 1.4rem;
          color: #828282;
          margin-right: 4%;
          float: left;
        }
        & > div:nth-child(2) {
          height: 5rem;
          width: 63%;
          float: left;
          color: #1c1c1c;
          font-size: 1.4rem;
          line-height: 5rem;
        }
        & > img {
          width: 0.8rem;
          float: right;
          margin-top: 1.7rem;
          margin-right: 5%;
        }
      }
    }
    & > li:nth-child(4) {
      border-bottom: 1px solid #e7e7e7;
      width: 100%;
      list-style-type: none;
      color:#828282;
    }
    & > li:nth-child(5) {
      border-bottom: 1px solid #e7e7e7;
      width: 100%;
      list-style-type: none;
      & > div:nth-child(1) {
        line-height: 5rem;
        height: 5rem;
        & > span:nth-child(1) {
          margin-left: 2%;
          font-size: 1.4rem;
          color: #828282;
        }
        & > img {
          width: 4.5rem;
          float: right;
          margin-right: 3%;
          margin-top: 1rem;
        }
      }
    }
  }
}
.address-bottom {
  height: 5rem;
  width: 100%;
  bottom: 0;
  background-color: #fff;
  padding-top: 1.5rem;
  & > div {
    height: 3.5rem;
    width: 90%;
    margin-left: 2%;
    background-color: #f26f16;
    border-radius: 8px;
    text-align: center;
    line-height: 3.5rem;
    color: #fff;
    font-size: 1.4rem;
  }
}
</style>
<script>
import { Toast, Indicator, Field, Switch, Picker } from "mint-ui";
import MobileSelect from "mobile-select";
export default {
  components: {
    Field,
    Picker,
    Switch,
  },
  data() {
    return {
      lists: {},
      info: {
        introduction: "",
        userName: "",
        address: "",
        defaulted: false,
        phone: "",
        region:"",
        text:"",
      },
      text_title:"新增收货地址",
      addresslist:{},
      url_s: this.$store.state.skyUrl, /* 四凯测试 */
      from_perscript:"",
    };
  },
  created() {
    this.Ischange();
    this.query();
  },
  methods: {
    //地区查询
    query() {
      /* 所在地区选项 */
      this.axios
        .get( this.url_s +"/ReceiptConfig/findRegion")
        .then(res => {
          let data= res.data;
          var regionName = ""
              var mobileSelect5 = new MobileSelect({
                  trigger: "#trigger5",
                  title: "地区选择",
                  wheels: [ {data: data}],
                  keyMap: {
                      id:'id',
                      value:"regionName",
                      childs:'children'
                  },
                  callback: function(indexArr, data) {
                   
                  }
              });
             this.addresslist = mobileSelect5
        });
    },
    //判断是否是修改
    Ischange(){
      if(this.$route.query.ReceiptConfigId != undefined){
         this.change();
      }
      //判断是否是从处方页面过来的
      if(this.$route.query.recipeId != undefined){
        this.from_perscript = true
      }else{
        this.from_perscript = false
      }
      console.log('query',this.$route.query)
    },
    //修改
    change(){
      console.log(localStorage)
      this.text_title = "修改收货地址"
      this.axios
        .get(this.url_s + "/ReceiptConfig/findReceiptConfig",{
          params:{
            ReceiptConfigId:this.$route.query.ReceiptConfigId
          }
        })
        .then(res => {
          this.info = res.data;
          if(res.data.defaulted == 0){
            this.info.defaulted = false;
          }else{
            this.info.defaulted = true;
          }
        });
    },
    //提交
    submit() {
      var region = '';        //地区选择的值
      if(this.addresslist.curValue !=null){
        this.addresslist.curValue.map(_=>{
          region += _.regionName
        })
      }
      if(region == ""){
          region = this.info.region
      }
      if(region ==""){
        return Toast("请选择所在地区")
      }
      if(this.info.text ==""){
         return Toast("详细地址不能为空")
      }
      if(this.info.text.length < 5){
        return Toast("详细地址不少于五个字")
      }
      this.info.address = region +" "+this.info.text 
      let userid = localStorage.getItem("userid")
      var instance = Toast("加载中...");
      let defaulted = "";
      if (this.info.defaulted == false) {
        defaulted = 0;
      } else {
        defaulted = 1;
      }
      this.axios
        .get(this.url_s + "/ReceiptConfig/addReceiptConfig", {
          params: {
            userId: userid,
            userName: this.info.userName,
            address: this.info.address,
            phone: this.info.phone,
            defaulted: defaulted,
            id:localStorage.getItem("ReceiptConfigId")
          }
        })
        .then(res => {
          console.log("res", res);
          if (res.data == true) {
            Toast("添加成功.");
            if(this.from_perscript == true){
              this.$router.push({name:"addressChoice",query:{
                "recipeId":this.$route.query.recipeId,
                "perscript":true
              }})
            }else{
              this.$router.push("./addressManagement");
              localStorage.removeItem("ReceiptConfigId")
            }
          } else {
            Toast(res.data);
          }
            instance.close(); 
        })
        .catch(err => {
          instance.close();
          Toast("加载失败...");
        });
    },
    back_index() {
      if(this.from_perscript == true){
        this.$router.push({name:"addressChoice",query:{
          "recipeId":this.$route.query.recipeId
        }})
      }else{
        this.$router.push("./addressManagement");
        localStorage.removeItem("ReceiptConfigId")
      }
    }
  }
};
</script>
