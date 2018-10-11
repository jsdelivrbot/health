<template>
   <div class="Card_Del">
   <div class="top"><i class="el-icon-arrow-left" ></i><span>就诊卡</span><img src="../../assets/card/Visits_Card-rightTop.png"></div>
      <div class="Visits_Card-background">
         <div class="Card">
            <ul>
               <li>
                  <div>
                      <img src="../../assets/card/Visits_Card-title.png">
                      <span>川大附属医院</span>
                      <span>
                          <input type="checkbox" name='card'>
                          <img id="noCheck" src="../../assets/card/Visits_Card-nocheck.png">
                      </span>
                  </div>
                  <div>22152302353125562235
                  </div>
                  <div>
                      <span>王大陆</span>
                      <span>513030188807111256</span>
                  </div>
               </li>

               <li>
                  <div>
                      <img src="../../assets/card/Visits_Card-title.png">
                      <span>川大附属医院</span>
                      <span>
                          <img id="Check" src="../../assets/card/Visits_Card-check.png">
                      </span>
                  </div>
                  <div>22152302353125562235
                  </div>
                  <div>
                      <span>王大陆</span>
                      <span>513030188807111256</span>
                  </div>
               </li>

               <li>
                  <div>
                      <img src="../../assets/card/Visits_Card-title.png">
                      <span>川大附属医院</span>
                      <span>
                          <img id="noCheck" src="../../assets/card/Visits_Card-nocheck.png">
                      </span>
                  </div>
                  <div>22152302353125562235
                  </div>
                  <div>
                      <span>王大陆</span>
                      <span>513030188807111256</span>
                  </div>
               </li>

               <li>
                  <div>
                      <img src="../../assets/card/Visits_Card-title.png">
                      <span>川大附属医院</span>
                      <span>
                          <img id="noCheck" src="../../assets/card/Visits_Card-nocheck.png">
                      </span>
                  </div>
                  <div>22152302353125562235
                  </div>
                  <div>
                      <span>王大陆</span>
                      <span>513030188807111256</span>
                  </div>
               </li>

            </ul>
         </div>
         <div class="Visits_Card-bottom">
            <div>
               <img src="../../assets/card/Visits_Card-del.png">
               <span>删除就诊卡</span>
            </div>
         </div>
      </div>
   </div>
</template>


<style scoped lang="less" scoped>
.Card_Del{width:100%;height:100%;}
.Visits_Card-background{
        background-color:#fff;
        width:100%;height:calc(~"100% - 4rem") ;
        overflow-y: scroll;

     }
.top{
        width: 100%;
        height: 4rem;
        line-height: 4rem;
        font-size: 17px;
        text-align: center;
        border-bottom: 0.1rem solid #e7e7e7;
        color: #444444;
        background-color:#fff;
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

.Card{
    width:100%;
    height:90%;
    & > ul{
        margin-bottom: 15%;
        margin-top: 5%;
        width:100%;
        & > li{
            list-style: none;
            margin-left:3%;
            width:94%;
            height:14rem;
            background-image:url(../../assets/card/Visits_Card-IcBG.png);
            background-size:100% 100%;
            margin-bottom: 5%;
            & > div:nth-child(1){
                width: 91%;
                margin-left: 6%;
                height: 5rem;
                & > img{
                    margin-top: 5%;
                    float: left;
                }
                & > span:nth-child(2){
                    font-size: 1.5rem;
                    float: left;
                    margin-top: 8%;
                    color: #fff;
                    margin-left: 3%;
                }
                & > span:nth-child(3){
                    float: right;
                    height: 3rem;
                    width: 15%;
                    & > img{
                        height: 3.3rem;
                        width: 3.5rem;
                        margin-left: 15%;
                        margin-top: 15%;
                    }
                }
            }
            & > div:nth-child(2){
                text-align: center;
                font-size: 1.6rem;
                color: #fff;
                text-shadow: 0 0 0.25px #606060;
                margin-top: 2%;
            }
            & > div:nth-child(3){
                height: 5rem;
                width: 90%;
                margin-left: 6%;
                & > span:nth-child(1){
                    float: left;
                    line-height: 5.5rem;
                    height: 3rem;
                    width: 100%;
                    color: #fff;
                    font-size: 1.2rem;

                }
                & > span:nth-child(2){
                    float: left;
                    line-height: 2.5rem;
                    height: 2rem;
                    color: #fff;
                    font-size: 1.2rem;

                }
            }
        }
    }
}
.Visits_Card-bottom{
    height: 15%;
    text-align: center;
    width: 100%;
    position: fixed;
    background-color: #fff;
    & > div {
        margin-top: 2%;
        & > span{
            vertical-align: super;
            color: #444444;
            font-size: 1.2rem;
        }
    }
}


</style>
