<template>
   <div class="ConsultancyXQ">
   <div class="top"><i class="el-icon-arrow-left" @click="back"></i><span>咨询订单详情</span></div>
      <div class="Consultancy-background">
         <div  class="top-ConsultancyXQ">
            <div>
               <span>订单号：</span>
               <span>{{info.order.orderNum}}</span>
               <span>{{info.order.status==0 ?"等待付款":(info.order.status =="1"?"已支付":(info.order.status == "5"?"取消订单":(info.order.status == "6"?"退款":(info.order.status == "9"?"已完成":"已取消"))))}}</span>
            </div>
            <div>
               <span>就诊人：</span>
               <span>{{info.patients.patientName}}</span>
            </div>
         </div>
         <div class="middle-ConsultancyXQ">
            <div>
               <span><img src="../../assets/consultancyXQ-left.png"></span>
               <span>网络门诊</span>
               <span>{{info.order.currency == 'RMB'? "元":info.order.currency}}</span> 
               <span>{{info.order.amount}}</span>                            
            </div>
            <div>
               <span><img v-bind:src="url_s+info.doctor.userInfo.avatarUrl"></span>
               <span>{{info == null?"暂无":info.doctor.doctorName}}</span>
               <span>{{info == null?"暂无":info.doctor.office}}</span>              
               <span>{{info == null?"暂无":info.doctor.hospitalName}}</span>
               <span>{{info == null?"暂无":info.doctor.offlinePositionName}}</span>                
            </div>

            <div>
               <span>下单时间：</span>
               <span>{{info.order.createDate}}</span>
            </div>

            <div>
               <span>完成时间：</span>
               <span>{{info.order.completeDate == null ? "咨询订单未完成":info.order.completeDate}}</span>                      
            </div>

            <div>
               <span>问诊记录</span>
               <span><img src="../../assets/consultancyXQ-right.png"></span>                      
            </div>

         </div>
      </div>
       <div class="bottom-ConsultancyXQ">
            <div>
               <span>咨询订单{{info.order.status==0 ?"等待付款":(info.order.status =="1"?"已支付":(info.order.status == "5"?"取消订单":(info.order.status == "6"?"退款":(info.order.status == "9"?"已完成":"已取消"))))}}</span>
               <span v-if="info.order.status == 9" @click="buyagain(info.doctor.doctorId)">再次购买</span>
               <span v-if="info.order.status == 1">去咨询</span>
            </div>
         </div>  
   </div>
</template>


<style scoped lang="less" scoped>
.ConsultancyXQ{width:100%;height:100%;}
.top{  
        width: 100%;
        height: 4rem;
        line-height: 4rem;
        font-size: 17px;
        text-align: center;
        border-bottom: 0.1rem solid #e7e7e7;
        color: #444444;
        & > i{
            position: absolute;
            left: 1.2rem;
            top: 1.0rem;
            font-size: 24px;
        } 
        & >img{
            position: absolute;
            right: 1.5rem;
            top: 1.4rem;              
        }
  } 

.Consultancy-background{
    background-color:#f1f1f1  ;
    width:100%;height:calc(~"100% - 10rem") ;
}
     
.top-ConsultancyXQ{
    float:left;
    width: 100%;
    height: 9.2rem;
    & > div:nth-child(1){float: left;width: 100%; margin-top:0.6rem;
           background-color: #fff;height: 4rem;
            & > span:nth-child(1){line-height: 4rem;margin-left:5%;float:left;color:#4f4747;} 
            & > span:nth-child(2){line-height: 4rem; float:left;color:#4f4747;} 
            & > span:nth-child(3){line-height: 4rem;margin-right:5%;float:right;color:#a8a8a8;}        
         }
    & > div:nth-child(2){float: left;width: 100%; border-top:1px solid #c8c8c8;
           background-color: #fff;height: 4rem; 
            & > span:nth-child(1){line-height: 4rem;margin-left:5%;float:left;} 
            & > span:nth-child(2){line-height: 4rem; float:left;}        
         }     
  }

.middle-ConsultancyXQ{ 
    float:left;
    height: calc(~"100% - 9.2rem");
    width: 100%;
    background-color: #fff;
    & > div:nth-child(1){
           border-top:1px solid #c8c8c8;
           border-bottom:1px solid #c8c8c8;
           background-color:#fff;
           height: 4rem;
           line-height: 4rem;
           background-image:url(../../assets/consultancyXQ-BG.png);
           background-size:cover;
           & > span:nth-child(1){
               margin-left: 5%;
               float:left;             
               height: 4rem;
               line-height: 5rem;
               & > img{
                   width:0.4rem;
                   }
           }
           & > span:nth-child(2){
               margin-left: 5%;
               float:left;      
               height: 4rem;
               line-height: 4rem;
           }
           & > span:nth-child(3){
               margin-left:1%;
               float:right;      
               height: 4rem;
               line-height: 4rem;
               margin-right:5%;
           }
           & > span:nth-child(4){
               color:#eaa54b;
               float:right;      
               height: 4rem;
               line-height: 4rem;
           }
         }
    & > div:nth-child(2){
           background-color:#fff;
           height: 7rem;
           line-height: 7rem; 
           border-bottom:1px solid #c8c8c8;
                     
           & > span:nth-child(1){
               color:#eaa54b;
               float:left;      
               height: 6rem;
               margin-left: 5%;
               margin-top: 1rem;
               width:6rem;
               & >img{
                   width:4rem;
                   height: 4rem;
                   border-radius: 50%;
               }
           }
           & > span:nth-child(2){
               color:#4f4747;
               float:left;      
               height: 4rem;
               line-height: 4rem;
               margin-left: 3%;
               margin-top:1.5rem;
   
           }
           & > span:nth-child(3){
               color:#a29c9c;
               float:left;      
               height: 4rem;
               line-height: 4rem;
               margin-right: 20%;
               margin-top:1.5rem;
               margin-left: 3%;
           }
           & > span:nth-child(4){
               margin-left: 3%;
               color:#a29c9c;
               float:left;      
               height: 4rem;
               line-height: 4rem;
           }
            & > span:nth-child(5){
               color:#a29c9c;
               float:left;      
               height:2rem;
               line-height: 2rem;
               margin-left: 3%;
           }
         }
    & > div:nth-child(3){        
           background-color:#fff;
           height: 4rem;
           line-height: 4rem; 
           border-bottom:1px solid #c8c8c8;
           & > span:nth-child(1){
               margin-left: 5%;               
               float:left; 
               color:#4f4747;                    
           }
            & > span:nth-child(2){
               margin-left: 2%;                       
               float:left;        
               color:#4f4747;             
           }
           & > span:nth-child(3){  
               margin-left: 3%;                           
               float:left;      
               color:#4f4747;               
           }           
         }  
    & > div:nth-child(4){
           background-color:#fff;
           height: 4rem;
           line-height: 4rem; 
           border-bottom:1px solid #c8c8c8;
            & > span:nth-child(1){
               margin-left: 5%;               
               float:left;     
               color:#4f4747;                
           }
            & > span:nth-child(2){
               margin-left: 2%;                       
               float:left;         
               color:#4f4747;            
           }          
         }        
    & > div:nth-child(5){
           background-color:#fff;
           height: 4rem;
           line-height: 4rem; 
           border-bottom:1px solid #c8c8c8;
           & > span:nth-child(1){
               margin-left: 5%;               
               float:left;     
               color:#4f4747;                
           }          
           & > span:nth-child(2){
               height: 3.5rem;
               margin-top:0.5rem;               
               margin-right: 5%;               
               float:right;                                
           }          
         }        

  }

.bottom-ConsultancyXQ{
    background-color:#f1f1f1;
    width:100%;
    height:6rem;
    float:left;
    & > div{
        width:100%;
        height:100%;
        & > span:nth-child(1){            
            line-height: 6rem;
            margin-left:5%;
            color:#4f4747;
            font-size: 1.3rem;           
            }  
        & > span:nth-child(2){                            
               float:right;       
               background-image:url(../../assets/consultancyXQ-Bt2.png);
               height: 6rem;
               width:8rem;
                background-size:cover;
                text-align:center;
                margin-left: -2.5rem;
                line-height: 6rem;
                text-align: center;
                text-shadow: 8px 0px 0px #fff;
                color: rgba(0, 0, 0, 0);
                font-size: 1.3rem;
           }          
        & > span:nth-child(3){
                float:right;   
                background-image:url(../../assets/consultancyXQ-Bt1.png);
                background-size:cover;
                height: 6rem;
                text-align: center;
                text-shadow: -8px 0px 0px #fff;
                color: rgba(0, 0, 0, 0);
                width:9rem; 
                line-height: 6rem; 
                font-size: 1.3rem;                                              
           }                
        } 
  }  
</style>

<script>
export default {
  data(){
    return{
        url_s: this.$store.state.schlwyyUrl+"/doctor",
        urls: this.$store.state.skyUrl,
        info:{
            patients:{
                patientName:"",
            },
            order:{
                orderNum:"",
            },
            doctor:{
                userInfo:{},
            },
            status:"",
        },
    }
  },
  created(){
    this.querylist();
  },
  methods:{
      querylist() {
        let orderNum = localStorage.getItem("orderNum");        //订单号
        this.axios    
            .get( this.urls+"/OrderController/findOr", {
            params: {
                orderNum : orderNum
            }
            })
            .then(res => {
                console.log(res)
                this.info = res.data;
            });
      },
      buyagain(doctorId){           //再次购买
        localStorage.setItem("doctorId", doctorId);
        this.$router.push("/doctorIntroduce");
      },
      back(){
        this.$router.push("../consultancy")
      },
  }
}
</script>
