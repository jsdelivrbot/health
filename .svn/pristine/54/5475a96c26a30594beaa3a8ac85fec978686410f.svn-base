<template>
   <div class="addressManagement">
   <div class="top"><i class="el-icon-arrow-left" @click="back_index"></i><span>收货地址管理</span></div>
      <div class="addressManagement-background">      
        <div class="address-BG">        
          <div class="address-content">                        
              <ul>
                  <li v-for="list in lists">
                     <div class="boundary-line"></div>                     
                     <div>
                         <span>收货人：</span>
                         <span>{{list.userName}}</span>
                         <span>{{list.phone}}</span>
                     </div>
                     <div>                         
                         <p>{{list.address}}</p>
                     </div>
                     <div class="boundary-bottom">
                         <div>
                             <input type="radio" name="radio" @change="change(list.id)" :checked="list.defaulted ==1?true:false">
                             <span>默认地址</span>
                         </div>
                         <div>
                             <div @click="edit(list.id)">
                                 <img src="../../assets/address/addressManagement-editor.png">
                                 <span>编辑</span>
                             </div>
                             <div @click="del(list.id)">
                                 <img src="../../assets/address/addressManagement-Del.png">
                                 <span>删除</span>
                             </div>
                         </div>
                     </div>
                  </li>
              </ul>
          </div>
        </div>  
        <div class="add" @click="add">
           <div>
               <img src="../../assets/address/address-add.png">
               <span>新增收货地址</span>
           </div>
        </div>
<!--         <div class="address-bottom">
            <div>
                <span>保 存</span>
            </div>
        </div> -->

      </div>  
   </div>
</template>

<style scoped lang="less" scoped>
 input[type="radio"] {
  width: 2rem;
  height: 2rem;
  -webkit-appearance: none; /*清除复选框默认样式*/
  background: url("../../assets/address/addressManagement-nocheck.png") no-repeat; /*复选框的背景图，就是上图*/
  background-size: cover;
  vertical-align: middle;
}
input[type="radio"]:checked {
  -webkit-appearance: none; /*清除复选框默认样式*/
  background: url("../../assets/address/addressManagement-check.png") no-repeat; /*复选框的背景图，就是上图*/
  background-size: cover;
  height: 2rem; /*高度*/
  vertical-align: middle;
  width: 2rem;
}
.addressManagement {
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
.addressManagement-background {
  background-color: #f7f7f7;
  background-size: cover;
  width: 100%;
  height: calc(~"100% - 4rem");
  overflow-y: scroll;
}
.address-BG {
  background-color: #fff;
  height: auto;
  width: 100%;
}
.boundary-line {
  height: 1.5rem;
  width: 100%;
  background-color: #fff;
}
.address-content {
  background-color: #fff;
  width: 100%;
  & > ul {
    list-style-type: none;
    width: 100%;
    & > li {
      border-bottom: 0.5rem solid #f7f7f7;
      & > div:nth-child(2) {
        margin-left: 8%;

        width: 70%;
        color: #606060;
        font-size: 1.3rem;
        & > span:nth-child(1) {
        }
        & > span:nth-child(2) {
        }
        & > span:nth-child(3) {
          margin-left: 8%;
        }
      }
      & > div:nth-child(3) {
        margin-left: 8%;
        width: 70%;
        margin-top: 4%;
        font-size: 1.3rem;
        margin-bottom: 6%;
        & > span:nth-child(1) {
          color: #f26f16;
          float: left;
        }
        & > p {
          color: #606060;
        }
      }
    }
  }
}

.boundary-bottom {
  border-top: 1px solid #c8c8c8;
  height: 3rem;
  line-height: 3rem;
  & > div:nth-child(1) {
    margin-left: 8%;
    width: 42%;
    float: left;
    height: 3rem;
    & > img {
      height: 1.9rem;
      vertical-align: middle;
    }
    & > span {
      margin-left: 2%;
      color: #f26f16;
    }
  }
  & > div:nth-child(2) {
    width: 50%;
    float: left;
    height: 3rem;
    & > div:nth-child(1) {
      width: 37%;
      float: left;
      margin-left: 13%;
      & > img {
        height: 1.9rem;
        vertical-align: middle;
      }
      & > span {
        margin-left: 1%;
        color: #606060;
      }
    }
    & > div:nth-child(2) {
      width: 37%;
      float: left;
      margin-left: 13%;
      & > img {
        height: 1.9rem;
        vertical-align: middle;
      }
      & > span {
        margin-left: 1%;
        color: #606060;
      }
    }
  }
}

.add {
  height: 4rem;
  line-height: 4rem;
  width: 100%;
  text-align: center;
  margin-top: 5%;
  margin-bottom: 15%;
  & > div {
    height: 4rem;
    width: 50%;
    line-height: 2rem;
    display: inline;
    & > img {
      width: 2rem;
      height: 2rem;
    }
    & > span {
      vertical-align: text-bottom;
      font-size: 1.4rem;
    }
  }
}

/* .address-bottom {
  height: 5rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #f7f7f7;
  & > div {
    height: 3.5rem;
    width: 90%;
    margin-left: 5%;
    background-color: #f26f16;
    border-radius: 8px;
    text-align: center;
    line-height: 3.5rem;
    color: #fff;
    font-size: 1.4rem;
    margin-top: 0.5rem;
  }
} */

#check {
  height: 1.9rem;
  vertical-align: middle;
}

#nocheck {
  height: 1.9rem;
  vertical-align: middle;
}
</style>
<script>
import { Toast, Indicator, Spinner, MessageBox } from "mint-ui";
import $ from "jquery";
export default {
  data() {
    return {
      lists: {},
      url_s: this.$store.state.skyUrl, /* 四凯测试 */
      from_perscript:"",
    };
  },
  created() {
    this.query();
  },
  watch:{
    "":function(){
      
    }
  },
  methods: {
    query() {
      //判断是否是从处方页面过来的
      if(this.$route.query.recipeId != undefined){
        this.from_perscript = true
      }else{
        this.from_perscript = false
      }
      /* 其他就诊人信息 */
      console.log('query',this.$route.query)
      let userid = localStorage.getItem("userid")
      var instance = Toast("加载中...");
      this.axios
        .get(this.url_s + "/ReceiptConfig/findReceiptConfigList", {
          params: {
            userId: userid
          }
        })
        .then(res => {
          console.log("res", res);
          this.lists = res.data;
          instance.close();
        })
        .catch(err => {
          instance.close();
          Toast("加载失败...");
      });
    },
    //删除订单
    del(id){
        MessageBox.confirm("确定删除?").then(action => {
            this.axios
            .get(this.url_s+"/ReceiptConfig/deleteReceiptConfig", {
                params: {
                    ReceiptConfigId:id
                }
            })
            .then(res => {
                console.log("del", res);
                if (res.data == true) {
                    Toast("删除成功.");
                    this.query();
                } else {
                    Toast("删除失败");
                }
            }).catch(err => {
                Toast(err);
            });
        });
    },
    //设置默认收货地址
    change(receipiConfigId){
      console.log($(this))
      this.axios
        .get(this.url_s+"/ReceiptConfig/ChangeDefault", {
            params: {
                userId:localStorage.getItem("userid"),
                receipiConfigId:receipiConfigId
            }
        })
        .then(res => {
            
            if (res.data == true) {
                Toast("已设置为默认收货地址.");
                this.query();
            } else {
                Toast("设置失败");
            }
        }).catch(err => {
            Toast(err);
        });
    },
    //修改地址
    edit(id){
        localStorage.setItem("ReceiptConfigId",id)
        this.$router.push({name:"addressAddchange",query:{
          "ReceiptConfigId":id,
          "recipeId":this.$route.query.recipeId,
          "perscript": true
        }})
    },
    add() {
        this.$router.push({name:"addressAddchange",query:{
            "recipeId":this.$route.query.recipeId,
            "perscript": true
        }})
    },
    back_index() {
      if(this.from_perscript == true){
        this.$router.push({name:"addressChoice",query:{"recipeId":this.$route.query.recipeId}})
      }else{
        this.$router.push("../visitMange");
      }
    }
  }
};
</script>
