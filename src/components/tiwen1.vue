<template>
  <div class="tiwens">
    <div>
      <div>
        <div>
          <img :src="docUrl+info.res.userInfo.avatarUrl" alt="" v-if="info.res.userInfo.avatarUrl != ''">
          <img class="li-people" src="../assets/titile-head.png" v-else>
        </div>
        <div>
          <div><span>{{info.res.doctorName}}</span><span>{{info.res.unitsName}}</span></div>
          <div><span>{{info.res.hospitalName}}</span><span></span></div>
        </div>
      </div>
    </div>
    <!--<Photo class="a" @click="upPhoto"></Photo>-->
    <div class="textarea">
      <textarea placeholder="请仔细描述您需要咨询的问题，以及您需要的帮助(最小输入10字)" maxlength="500"
                @input="descInput" v-model="info.desc" ></textarea>
      <div><span>{{info.remnant}}</span><span>/</span><span>500</span></div>
    </div>
    <div class="zhaopian" >
      <div @click="upPhoto"><img src="../assets/zhaopian1.png" alt=""></div>
      <div v-if="info.updown">
        <p >上传图片资料</p>
        <div>
          <p>检验检查报告，病症部位照片等图片信息 </p>
          <p>(最多上传5张)</p>
        </div>
      </div>
      <div class="aImg">
        <span v-for="(img,index) in info.imgs" class="imgSpan">
          <img :src="img" alt="" class="imgSingle" >
          <img @click="delImg(index)" class="delImg" src="../assets/imgDel.png"/>
        </span>
      </div>
    </div>

    <!--<div class="upOto">-->
    <!--<el-upload-->
    <!--action="https://jsonplaceholder.typicode.com/posts/"-->
    <!--list-type="picture-card"-->
    <!--:on-preview="handlePictureCardPreview"-->
    <!--:on-remove="handleRemove">-->
    <!--<i class="el-icon-plus"></i>-->
    <!--</el-upload>-->
    <!--<el-dialog :visible.sync="dialogVisible" size="tiny">-->
    <!--<img width="100%" :src="dialogImageUrl" alt="">-->
    <!--</el-dialog>-->
    <!--</div>-->
    <div class="sub" @click="tooTiWen">提交</div>
    <div style="width: 150px;height: 150px;z-index:20;background: #fff;position: fixed;top: 30%;left: calc(50% - 75px);text-align: center;line-height: 150px ;font-size: 1.4rem;border-radius: 2rem" v-if="info.x">图片上传中...</div>
    <div class="bg" v-if="info.bg" style="width: 100%;height: 100%;background: #000;opacity: .5;position: absolute;top: 0;left: 0;"></div>
  </div>

</template>
<style lang="less" scoped>
  @fontSize_14: 14px;
  @fontSize_12: 12px;
  .aImg {
    box-sizing: border-box;
    width: 80% !important;
    font-size: 0;
    overflow: hidden;
    margin-top: 0 !important;
    & > img {
      width: 50px;
      height: 50px;
      margin-top: 10px;
      margin-right: 2px;
    }
  }
  .imgSpan {
    position: relative;
    width: 4.2rem;
    height: 4.2rem;
    display: inline-block;
    background: #fff;
    margin-right: 0.6rem;
  }
  .delImg {
    width: 15px;
    height: 15px;
    position: absolute;
    top: -5px;
    right: -5px;
  }
  .imgSingle {
    width: 4rem;
    height: 4rem;
  }
  @media only screen and (max-width: 360px) {
    .imgSpan {
      margin-right: 0.5rem;
    }
    .imgSpan,
    .upimg {
      width: 3.5rem !important;
      height: 3.5rem !important;
    }
  }
  .textarea {
    width: 100%;
    height: 12rem;
    padding: 0 .5rem;
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
    height: 10rem;
    font-size: 0;
    letter-spacing: 0;
    padding-left: 0rem;
    margin-top: 2rem;
    border-bottom: .1rem solid #e6e1e1;
    & > div {
      display: inline-block;
      vertical-align: top;
      font-size: @fontSize_12;
    }
    & > div:first-child {
      width: 20%;
      height: 10rem;
      display: inline-block;
      & > img {
        width: 4rem;
        height: 4rem;
        margin-top: 2rem;
        margin-left: calc(~ '50% - 2rem');
      }
    }
    & > div:nth-child(2) {
      width: 70% ;
      height: 10rem;
      display: inline-block;
      box-sizing: border-box;
      padding: 2rem 0;
      margin-top: 1rem;
      & > p:first-child {
        font-family: PingFang-SC-Medium;
        font-size: 1.7rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 0rem;
        letter-spacing: 0rem;
        color: #333333;
        height: 2rem;
      }
      & > div {
        height: 4rem;
        color: #bdbdbd;
        & > p {
          height: 2rem;
          line-height: 2rem;
        }
      }
    }
  }
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
    .imgSpan{position: relative;width: 4.2rem;height: 4.2rem;display: inline-block;background: #fff;margin-right: 0.6rem;}
.delImg{width: 15px;height: 15px;position: absolute;top: -5px;right: -5px;}
.phoneNum input{width: 100% !important;}
textarea{resize: none;}
.describe{padding: 0 1rem !important;box-sizing: border-box;}
.describe textarea{height: 8rem !important;text-align: justify;}
.shangchuan{position: fixed;}
.font_hint{right: 1rem !important;}
.list_div{box-sizing: border-box;}
.imgSingle{width: 4rem;height: 4rem;}
@media only screen and (max-width: 360px) {
  .imgSpan{margin-right: 0.5rem;}
  .imgSingle,.imgSpan,.upimg{width: 3.5rem !important;height: 3.5rem !important;}
}
</style>
<script>
  import Photo from './photo.vue'
  export default  {
    components: {Photo},
    data () {
      return {
        docUrl: this.$store.state.schlwyyUrl+"/doctor",  /* 医生头像图片 */
        url_s:  this.$store.state.skyUrl,     /* 四凯测试 */
        info: {
          img: '',
          res: {
            userInfo:{
              avatarUrl:""
            }
          },
          desc: null,
          remnant: 0,
          imgs: [],
          bg: false,
          x: false,
          updown: true,
        },
        dialogImageUrl: '',
        dialogVisible: false,
        images: {
          serverId: ''
        },
        positivePhoto: [],
        p: true
      }
    },
    mounted() {
      this.queryInterrogation();
      this.yyClick();
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      descInput () {
        this.info.remnant = this.info.desc.length;
      },
      yyClick () {
        let _this = this;
        var _url = location.href;
        if (location.hash.length) {
          _url = _url.substr(0, _url.indexOf(location.hash));
        }
        _this.info.url = _url;
        this.axios.get( _this.$store.state.weChatUrl + "/weixinFHW/consultation/openWxJs",{
          params: {
            url: _url
          }
        }).then(function (response) {
          wx.config({
            debug: false, //调试阶段建议开启
            appId: response.data.appid,//APPID
            timestamp: response.data.timestamp,//上面main方法中拿到的时间戳timestamp
            nonceStr: response.data.noncestr,//上面main方法中拿到的随机数nonceStr
            signature:  response.data.signature,//上面main方法中拿到的签名signature
            jsApiList: [
              //所有要调用的 API 都要加到这个列表中
              "chooseImage",//从本地的相册、图库选择图片
              "uploadImage",
              'chooseWXPay'
            ],
          });
        });
      },
      upPhoto() {
        var _this = this;
  //    this.info.show = false;
        _this.info.updown = false;
        var imgCout = 5 - _this.info.imgs.length;
        if(imgCout<=0){
          MessageBox('提示', '最多只能传五张照片');
          return false;
        }
  //      _this.images.serverId = '';
  //      _this.info.imgs = [];
        //上传图片
        wx.chooseImage({
          count: imgCout, // 默认9
          sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
          success: function(res) {
  //            _this.images.localId = res.localIds;返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
  //          _this.info.imgs.push(res.localIds);
              _this.info.bg = true;
              _this.info.x = true;
  //          _this.info.imgs = _this.info.imgs.concat(res.localIds);
              _this.syncUpload(res.localIds);
            
          }
        });
      },
      syncUpload(localIds) {
        let _this = this;
          let localId = localIds.shift();
          wx.uploadImage({
            localId: localId.toString(), // 需要上传的图片的本地ID，由chooseImage接口获得
            isShowProgressTips: 0, // 默认为1，显示进度提示
            success: function (res) {
              //获取serverId
  //            alert('拿到serverid'+res.serverId);
              _this.info.imgs.push(localId);
              if(_this.info.imgs.length>0){
                _this.info.updown = false;
              }
              else{
                _this.info.updown = true;
              }
              
              _this.images.serverId += ',' + res.serverId;
              
              setTimeout(function () {
                if(localIds.length > 0) {
                  _this.syncUpload(localIds);
                }else {
                  _this.isWx(_this.images.serverId);
                }
              },0);
            },
          });
      },
      isWx(x) {
        let _this = this;
        _this.axios.get(_this.$store.state.weChatUrl + '/weixinFHW/consultation/imgInfo',{
          params: {
            serviceId: x
          }
        }).then(function ( response) {
            let imgUrl = response.data.positivePhoto;
            _this.info.bg = false;
            _this.info.x = false;
            _this.positivePhoto = imgUrl;
        })
      },
      delImg(index){
        let _this =this;
        _this.info.imgs.splice(index,1);
        if(_this.info.imgs.length>0){
          _this.info.updown = false;
        }
        else{
          _this.info.updown = true;
        }
        _this.images.serverId = _this.images.serverId.split(',');
        _this.images.serverId.splice(index+1,1);
        _this.images.serverId =  _this.images.serverId.join(',');
        _this.isWx(_this.images.serverId);
      },
      //提问
      tooTiWen () {
        let token =  localStorage.getItem('token');
        let _this = this;
        let id = localStorage.getItem('_id');
        let config = {
          headers : {
            'Content-Type':'application/json;charset=UTF-8'
          },
        };
        //创建图文问诊
        if(_this.info.desc ==""||_this.info.desc == null){
          alert("请输入问诊内容")
          return 
        }
        if(_this.info.desc.length < 10) {
          alert('输入问诊内容太短');
          if(_this.info.desc === null) {
            alert('请输入问诊内容');
          }
        }else  {        //_this.$store.state.schlwyyUrl + '/hlwyy-new/api/graphic_inquiry/'+ id + '/question'
          _this.axios.get( _this.url_s + "/ngiqc/createQuestion",{
               params:{ 'id': id,
                'question': _this.info.desc,
                'images': _this.positivePhoto,
              }
            //'token': token
          },config).then(function (res) {
            console.log(res);
            if(res.data.flag != ""  && res.data.flag != undefined ){
              alert(res.data.flag)
            }else{
              _this.$router.push('/inquiry');
            }
          }).catch(function (err) {
            alert('还有咨询医生未回复')
          })
        }
      },
      //查询问诊记录
      queryInterrogation () {
        //let orderId = localStorage.getItem('orderId');
        let id = localStorage.getItem('_id');
        //获取就诊人ID
        let _this = this;  //_this.$store.state.schlwyyUrl + '/hlwyy-new/api/graphic_inquiry/'
        _this.axios.get( _this.url_s +'/ngiqc/findDoctor',{
          params: {
            id: id,
            //token: token,page_index: 1,page_size: 2000
          }
        }).then(res =>{
          _this.info.res = res.data;
        })
      },
      //获取url参数值
      GetQueryString(name)
      {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
      }
    }
  }
</script>

