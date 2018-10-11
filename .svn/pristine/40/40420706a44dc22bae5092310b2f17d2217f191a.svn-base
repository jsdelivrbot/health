<template>
   <div class="addressChoice">
   <div class="top"><i class="el-icon-arrow-left" @click="back_index"></i><span>选择收货地址</span></div>
      <div class="addressChoice-background">      
        <div class="address-BG">        
          <div class="address-content">                        
              <ul>
                  <li v-for="list in lists" @click="selAddress(list.address,list.userName,list.id,list.phone)">
                     <div class="boundary-line"></div>                     
                     <div>
                        <span>收货人：</span>
                        <span>{{list.userName}}</span>
                        <span>{{list.phone}}</span>
                     </div>
                     <div>
                         <span v-if="list.defaulted == 1">[默认地址]</span>
                         <p>{{list.address}}</p>
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
        <div class="address-bottom">
            <div @click="admanage">
                <span>管理收货地址</span>
            </div>
        </div>

      </div>  
   </div>
</template>

<style scoped lang="less" scoped>
.addressChoice {
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
.addressChoice-background {
  background-color:#f7f7f7;
  background-size: cover;
  width: 100%;
  height: calc(~"100% - 4rem");
  overflow-y: scroll;
  
}
.address-BG{
    background-color: #fff;
    height: auto;
    width: 100%;
   
}
.boundary-line{
    height: 2rem;
    width: 100%;
    background-color: #fff;
}
.address-content{
    background-color: #fff;
    width: 100%;        
    & > ul{
        list-style-type: none;
        width: 100%;
        & > li{            
            border-bottom:0.5rem solid #f7f7f7 ;
            & > div:nth-child(2){
                margin-left: 8%;             
                
                width: 70%;
                color: #606060;
                font-size: 1.3rem;
                & > span:nth-child(1){

                }
                & > span:nth-child(2){
                    
                }
                & > span:nth-child(3){
                    margin-left: 8%;                    
                }
            }
            & > div:nth-child(3){
                margin-left: 8%;
                width: 70%;
                margin-top: 4%;               
                font-size: 1.3rem;  
                margin-bottom: 6%;              
                & > span:nth-child(1){
                    color:#f26f16;
                    float: left;
                }
                & > p{
                    color: #606060;                   
                }
            }
        }
    }
}

.add{
    height: 4rem;
    line-height: 4rem;
    width: 100%;
    text-align: center;
    margin-top: 5%;    
    margin-bottom: 15%;
    & > div{
        height: 4rem;
        width: 50%;
        line-height: 2rem; 
        display: inline;      
        & > img{
            width: 2rem;
            height: 2rem;
            }
        & > span{
            vertical-align: text-bottom;
            font-size: 1.4rem;

        }
    }
}

.address-bottom{
    height: 5rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color:#f7f7f7;
    & > div{
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
}

</style>

<script>
import { Toast, Indicator, Spinner, MessageBox } from "mint-ui";
export default {
  data() {
    return {
      lists: {},
      url_s: this.$store.state.skyUrl /* 四凯测试 */
    };
  },
  created() {
    this.query();
  },
  methods: {
    query() {
      /* 收货地址选择*/
      console.log('query',this.$route.query)
      let userid = localStorage.getItem("userid");
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
    selAddress(address,userName,id,phone){
     this.$router.push({ name:"PrescriptionPay",
      query:{
        "userName":userName,
        "address":address,
        "id":id,
        "phone":phone,
        "recipeId": this.$route.query.recipeId
      }});
    },
    //管理收货地址
    admanage(){
        this.$router.push({name:"addressManagement",query:{
            "recipeId":this.$route.query.recipeId,
            "perscript": true
        }})
    },
    //新增收货地址
    add() {
        this.$router.push({name:"addressAddchange",query:{
            "recipeId":this.$route.query.recipeId,
            "perscript": true
        }})
    },
    back_index() {
      this.$router.push({ name:"PrescriptionPay",query:{"recipeId":this.$route.query.recipeId}});
    }
  }
};
</script>