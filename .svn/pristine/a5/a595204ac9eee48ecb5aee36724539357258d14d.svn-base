<template>
    <!-- 弹框 1 -->
    <el-dialog v-if="detailVisible" v-sky-loading="dialogLoading" :title="isAddDetailOne? '新增-合同信息':'修改-合同信息'" size="large" :visible.sync="detailVisible" :close-on-click-modal="false" v-sky-drag>
      <hr class="dialog-hr">
      <div>
        <el-form :model="detailOne" :rules="rules" ref="detailOne" label-width="135px" class="dialogScrollTop" style="padding-right:30px;" :inline="false">
          <el-row>
            <el-col :span="8">
              <el-form-item label="合同类型:">
                <el-select style="width:100%" disabled v-model="detailOne.Dic_Contract_Type" placeholder="请选择活动区域">
                  <el-option label="车辆租赁合同" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="合同编号:">
                <el-input :maxlength="16" v-if="!isAddDetailOne" disabled v-model="detailOne.Contract_Code"></el-input>
                <el-input :maxlength="16" v-if="isAddDetailOne" disabled value="系统默认"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="合同系统报审序号:">
                <el-input :maxlength="16" v-model="detailOne.Reference_Code"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="车辆/牵引车:">
                <el-select v-model="detailOne.VehicleNo" :disabled="!isAddDetailOne" style="width:100%" clearable filterable remote placeholder="请输入内容" :remote-method="querySearchAsync_qyc" @change="handleSelectQian">
                  <el-option v-for="item in restaurants_qyc" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="挂车:">
                <el-select  :disabled="!isAddDetailOne?true:!disableIsVehicle" v-model="detailOne.TrailerNo" style="width:100%" clearable filterable remote placeholder="请输入内容" :remote-method="querySearchAsync_gc" @change="handleSelectGua" @visible-change="visibleChange">
                  <el-option v-for="item in restaurants_gc" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="合同状态:">
                <span class="footer-span" v-text="detailOne.StatusName"></span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="16">
              <el-form-item label="车辆出租方:" prop="Partyb">
                <el-select v-model="detailOne.SettlementName" style="width:100%" clearable filterable remote placeholder="请输入内容" :remote-method="querySearchAsync_jsfDetail" @change="handleSelectJie">
                  <el-option v-for="item in restaurants_jsf" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
             <el-col :span="8">
              <el-form-item label="所属车队:">
                <span class="footer-span" v-text="detailOne.VehicleTeamName"></span>
                <div>
                  <span v-show="detailErrorText" style="color:red;font-size:12px;">车辆/牵引车、挂车不在同一车队!</span>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="统计月份:" prop="Statistic_Month">
                <el-date-picker 
                    :clearable="true" 
                    v-model="detailOne.Statistic_Month"  
                    @change="getStaEndCar" style="width:100%" 
                    type="month" 
                    :editable="false" placeholder="选择日期"
                     :picker-options="pickerOptions"
                    >
                </el-date-picker>
              </el-form-item>
            </el-col>
             <el-col :span="8">
              <el-form-item label="合同开始日期:" prop="Begin_Date">
                <el-date-picker :picker-options="pickerOptions0" :clearable="true" v-model="detailOne.Begin_Date" style="width:100%" type="date" :editable="false" placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="合同结束日期:" prop="End_Date">
                <el-date-picker :picker-options="pickerOptions1" :clearable="true" v-model="detailOne.End_Date" style="width:100%" type="date" :editable="false" placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="合同金额(元):" prop="Total_Expense">
                <el-input  :maxlength="24" v-model="detailOne.Total_Expense"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="合同总金额(元):">
                <span class="footer-span" v-text="detailOne.Total_Expense">系统默认</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="税率:" prop="Dic_Tax_Rate">
                <el-select style="width:100%" v-model="detailOne.Dic_Tax_Rate" placeholder="请选择">
                  <el-option v-for="item in Dic_Tax_RateData" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="合同标的概要:" prop="Description">
                <el-input type="textarea" v-model="detailOne.Description" resize="none" :rows="2"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="备注:">
                <el-input :maxlength="256" type="textarea" v-model="detailOne.Remark" resize="none" :rows="2"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- <el-row>
            <el-col :span="24">
              <el-form-item label="附件上传:">
                <span class="footer-span">系统默认</span>
              </el-form-item>
            </el-col>
          </el-row> -->
          <el-row v-if="!isAddDetailOne">
            <el-col :span="6">
              <el-form-item label="创建人:">
                <span class="footer-span" v-text="detailOne.CreateName"></span>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="创建时间:">
                <span class="footer-span" v-text="detailOne.CreateTime"></span>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="修改人:">
                <span class="footer-span" v-text="detailOne.ModifyName"></span>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="修改时间:">
                <span class="footer-span" v-text="detailOne.ModifyTime"></span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div style="text-align:right;">
                <el-button type="primary" @click="saveInfo(detailOne)" 
                v-if="isAddDetailOne?true:false||(detailOne.StatusName==='合同生效')"
                >保存</el-button>
                <el-button type="primary" @click="detailVisible = false">取消</el-button>
              </div>
              <br>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
</template>
<script>
import Qs from "qs";
import { formatDate } from "@/util/date.js";
import { Total_Expense_Ff, Expense } from "@/reg/commonReg.js";
import {
  successMessage,
  warningMessage,
  errorMessage
} from "@/util/message.js";
export default {
  data() {
    let _this = this;
    return {
      flag:false,
      pickerOptions0: {
        disabledDate(time) {
          if (_this.detailOne.End_Date) {
            let date = formatDate(_this.detailOne.End_Date, "yyyy-MM-dd");
            return time.getTime() > new Date(date).getTime();
          }
        }
      },
      pickerOptions1: {
        disabledDate(time) {
          if (_this.detailOne.Begin_Date) {
            let date = formatDate(_this.detailOne.Begin_Date, "yyyy-MM-dd");
            return time.getTime() < new Date(date).getTime() - 8.64e7;
          }
        }
      },
      pickerOptions: {
        disabledDate(time) {
        let temp = `${new Date().getFullYear()}-${new Date().getMonth()+1}-1`
          return  time.getTime() < new Date(temp).getTime();
        }
      },
      rules: {
        //校验
        Begin_Date: [{ required: true, message: "请选择日期" }], //有效期起
        End_Date: [{ required: true, message: "请选择日期" }], //有效期止
        Statistic_Month: [{ required: true, message: "请选择日期" }], //统计月份
        Total_Expense: [
          { trigger: "blur", required: true, validator: Total_Expense_Ff }
        ], //合同金额（元）
        Partyb: [{ required: true, message: "不能为空" }], //结算方
        Dic_Tax_Rate: [{ required: true, message: "不能为空" }], //税率
        Description: [{ trigger: "blur", required: true, message: "不能为空" }] //合同标的概要
      },
      keyid: "", //保存keyid
      isFirstVisible: false, //是否是第一次加载弹框
      dialogLoading: false, //弹框加载动画
      detailVisible: false, //弹框1 - 隐藏
      isAddDetailOne: false, //修改 - 合同
      Dic_Tax_RateData: [], //税率
      dialogTableVisible: false, //弹框2 - 隐藏
      restaurants_jsf: [], //结算方
      restaurants_qyc: [], //车辆/牵引车
      restaurants_gc: [], //挂车
      detailErrorText: false, //
      disableIsVehicle: true, //控制挂车能不能选
      detailOneShow: {
        Partya: "" //显示值 车队
      },
      // 弹框1
      detailOne: {
        Begin_Date: null, //有效期起
        Change_Expense: null, //差异金额
        Contract_Code: null, //合同编号
        Contract_Date: null, //
        Contract_Status: null, //合同状态
        Contract_TypeName: null, //
        CreateTime: null, //创建时间
        CreateUser: null, //创建人
        CreateName: null, //创建人
        Description: null, //合同标的概要
        Dic_Contract_Type: null, //合同类型
        Dic_Tax_Rate: null, //税率
        End_Date: null, //有效期止
        FK_Trailer: "", //挂车
        TrailerNo: null, //挂车
        FK_Unit: null, //
        FK_Vehicle: "", //车辆/牵引车
        VehicleNo: null, //车辆/牵引车
        IsLinkTransOrder: true, // 车辆 - 车队是否可编辑
        Is_Delete: null, //
        KeyId: null, //
        ModifyTime: null, //修改时间
        ModifyUser: null, //修改人
        ModifyName: null, //修改人
        Old_Contract_Code: null, //
        Partya: null, //车队
        Partyb: null, //
        Reference_Code: null, //合同系统报审序号
        Remark: null, //备注
        SettlementName: null, // 结算方
        Statistic_Month: null, //统计月份
        StatusName: null, //
        Total_Expense: null, //合同总金额
        UnitName: null, //
        VehicleTeamName: "系统默认", //
        IsVehicle: true
      }
    };
  },
  watch: {
    detailVisible: function(curVal, oldVal) {
      setTimeout(function() {
        this.isFirstVisible = true;
      }, 300);
      if (oldVal == true) {
        this.$refs["detailOne"].resetFields();
        this.disableIsVehicle = true;
      }
    },
    // "detailOne.VehicleNo"() {
    //   if (this.detailOne.VehicleNo != null) {
    //     this.disableIsVehicle = true;
    //   }
    // }
  },
  created: function() {
    this.defaultDialogOne();
  },
  methods: {
    // 弹框1 - 默认请求data
    defaultDialogOne: function() {
      this.getDefaultDataQuery(); //结算方
      this.getDefaultDataQuery_qyc(); //车辆/牵引车
      this.getDefaultDataQuery_gc(); //挂车
      this.Dic_Tax_Rate(); //税率
    },
    //是否关联运单
    IsLinkTransOrder: function() {
      // if (this.detailOne.FK_Vehicle && this.detailOne.FK_Trailer) {
        this.axios
          .post("/Contract/ExpendContract/CheckVehicle", {
            VehicleA: this.detailOne.FK_Vehicle,
            VehicleB: this.detailOne.FK_Trailer
          })
          .then(res => {
            if (!res.data.data) {
              //两车在不同车队
              this.detailOne.Partya = "";
              this.detailOne.VehicleTeamName = "";
              this.detailErrorText = true;
            } else {
              //两车在同一车队
              this.detailOne.Partya = res.data.data.value;
              this.detailOne.VehicleTeamName = res.data.data.label;
              this.detailErrorText = false;
            }
          });
      // } else {
      //   this.detailOne.Partya = "";
      //   this.detailOne.VehicleTeamName = "系统默认";
      //   this.detailErrorText = false;
      // }
    },
    // 加载页面默认请求 - data
    defaultAjax: function() {
      this.Dic_Tax_Rate(); //税率
      this.getDefaultDataQuery(); //结算方
    },
    // 查询 - 结算方 - 默认请求
    getDefaultDataQuery: function() {
      this.axios
        .post("/Contract/ExpendContract/GetVendorTransByLike", {
          LikeParam: ""
        })
        .then(res => {
          this.restaurants_jsf = res.data.data;
        });
    },
    // 弹框1 - 车辆/牵引车 - 默认请求
    getDefaultDataQuery_qyc: function() {
      this.axios
        .post("/Contract/ExpendContract/GetVeicle", {
          LikeParam: "",
          IsVeicle: true
        })
        .then(res => {
          this.restaurants_qyc = res.data.data;
        });
    },
    // 弹框1 - 挂车 - 默认请求
    getDefaultDataQuery_gc: function() {
      this.axios
        .post("/Contract/ExpendContract/GetTriler", {
          LikeParam: "",
          IsVeicle: false
        })
        .then(res => {
          this.restaurants_gc = res.data.data;
        });
    },
    //车辆/牵引车 - 模糊输入查询
    querySearchAsync_qyc: function(queryString, cb) {
      this.axios
        .post("/Contract/ExpendContract/GetVeicle", {
          LikeParam: queryString,
          IsVeicle: true
        })
        .then(res => {
          let arr = res.data.data;
          this.restaurants_qyc = arr;
        });
    },
    //挂车 - 模糊输入查询
    querySearchAsync_gc: function(queryString, cb) {
      this.axios
        .post("/Contract/ExpendContract/GetTriler", {
          LikeParam: queryString,
          IsVeicle: false
        })
        .then(res => {
          let arr = res.data.data;
          this.restaurants_gc = arr;
        });
    },
    //结算方 - 弹框1 - 模糊输入查询
    querySearchAsync_jsfDetail: function(queryString, cb) {
      this.axios
        .post("/Contract/ExpendContract/GetVendorTransByLike", {
          LikeParam: queryString
        })
        .then(res => {
          this.restaurants_jsf = res.data.data;
        });
    },
    // 车辆/牵引车 - 选择
    handleSelectQian: function(item) {
      this.detailOne.TrailerNo = ""; //清空挂车 - label
      this.detailOne.FK_Trailer = ""; //清空挂车 - value
      this.disableIsVehicle=true;//取消对挂车的禁用
      for (let i = 0; i < this.restaurants_qyc.length; i++) {
        if (item == this.restaurants_qyc[i].value) {
          this.disableIsVehicle = this.restaurants_qyc[i].isVehicle;
          //如果选择的是牵引车 - 带出挂车信息
          if(this.restaurants_qyc[i].isVehicle){
             this.detailOne.FK_Trailer=this.restaurants_qyc[i].TrailerId;//
             this.detailOne.TrailerNo=this.restaurants_qyc[i].TrailerName;//
          }
        }
      }
      this.detailOne.FK_Vehicle = item;
      if (item!=""&&item != null && !isNaN(item)) {
        this.IsLinkTransOrder();
      }
    },
    visibleChange(bool){
      this.flag = bool;
    },
    // 挂车 - 选择
    handleSelectGua: function(item) {
      if(Boolean(item)){
        if(!this.flag)return
        this.detailOne.FK_Trailer = item;
        if (item!=""&&item != null && !isNaN(item)) {
          this.IsLinkTransOrder();
        }
      }else{
        this.detailOne.FK_Trailer='';
        this.IsLinkTransOrder();
      }
    },
    // 结算方 - 挂车
    handleSelectJie: function(item) {
      this.detailOne.Partyb = item;
    },

    // 编辑表格当前行
    bjClick: function(KeyId) {
      this.keyid = KeyId; //保存keyid
      this.detailErrorText = false;
      this.dialogLoading = true;
      this.isAddDetailOne = false; //修改合同
      this.axios
        .get(
          "/Contract/ExpendContract/Detail?keyId=" +
            KeyId +
            "&_dc=" +
            new Date().getTime()
        )
        .then(res => {
          this.detailVisible = true; //弹框可见
          this.detailOne = res.data.data;
          // 赋值形式控制是否禁用
          this.disableIsVehicle = res.data.data.IsVehicle;
          // console.log(res.data.data.IsVehicle?"牵引车":"单车");
          this.detailOne.Dic_Tax_Rate += ""; //税率
          this.detailOne.Contract_Status += ""; //合同状态
          this.detailOne.Dic_Contract_Type += ""; //合同状态
          this.detailOne.CreateTime = formatDate(
            this.detailOne.CreateTime,
            "yyyy-MM-dd"
          ); //创建时间
          this.detailOne.ModifyTime = formatDate(
            this.detailOne.ModifyTime,
            "yyyy-MM-dd"
          ); //修改时间

          this.dialogLoading = false;
        })
        .catch(error => {
          this.dialogLoading = false;
        });
    },

    // 税率 - 请求
    Dic_Tax_Rate: function() {
      this.axios
        .get("/Contract/ExpendContract/GetTaxRate?_dc=" + new Date().getTime())
        .then(res => {
          this.Dic_Tax_RateData = res.data.data;
        });
    },
    //新增 - add
    addDetailOne: function() {
      this.detailErrorText = false;
      this.detailVisible = true; //弹框可见
      this.isAddDetailOne = true; //新增 - 新增
      this.detailOneShow.Partya = ""; //显示值的车队
      this.detailOne = {
        Begin_Date: null, //有效期起
        Change_Expense: null, //差异金额
        Contract_Code: null, //合同编号
        Contract_Date: null, //
        Contract_Status: "10", //合同状态
        Contract_TypeName: null, //
        CreateTime: null, //创建时间
        CreateUser: null, //创建人
        Description: null, //合同标的概要
        Dic_Contract_Type: "1", //合同类型
        Dic_Tax_Rate: null, //税率
        End_Date: null, //有效期止
        FK_Trailer: "", //挂车
        FK_Unit: null, //
        FK_Vehicle: "", //车辆/牵引车
        IsLinkTransOrder: null, //
        Is_Delete: null, //
        KeyId: 0, //
        ModifyTime: null, //修改时间
        ModifyUser: null, //修改人
        Old_Contract_Code: null, //
        Partya: null, //车队
        Partyb: null, //
        Reference_Code: null, //合同系统报审序号
        Remark: null, //备注
        SettlementName: null, // 结算方
        Statistic_Month: null, //统计月份
        StatusName: null, //
        Total_Expense: null, //合同总金额
        TrailerNo: null, //
        UnitName: null, //
        VehicleNo: null, //
        VehicleTeamName: null, //
        IsVehicle: true
      };
    },
    // 弹框1 - 保存
    saveInfo: function(obj) {
      // 1.需要校验车辆/牵引车、挂车必须选其一，VehicleNo(车辆) TrailerNo(挂车)

      if (this.detailOne.FK_Vehicle == "" && this.detailOne.FK_Trailer == "") {
        return errorMessage("车辆/牵引车、挂车必须选其一");
      }
      //当牵引车disableIsVehicle为true时校验挂车是否为空
      if (this.detailOne.FK_Vehicle) {
        // && this.detailOne.Dic_Contract_Type != 3
        if (this.disableIsVehicle) {
          if (!this.detailOne.FK_Trailer) {
            return errorMessage("挂车不能为空");
          }
        } else {
          this.detailOne.TrailerNo = ""; //清空显示值
          this.detailOne.FK_Trailer = ""; //清空value值
        }
      }
      if (this.detailErrorText) {
        return errorMessage("无法保存,车辆/牵引车、挂车不在同一车队!");
      }
      // 2.挂车的车队不同，则给出相应提示信息，不予保存；
      if (this.detailOne.FK_Vehicle != "" && this.detailOne.FK_Trailer != "") {
        if (this.detailOne.Partya === null) {
          errorMessage("选择的车辆/牵引车、挂车在不同车队!");
          this.detailErrorText = true;
          return;
        } else {
          this.detailErrorText = false;
        }
      }
      this.$refs.detailOne.validate(valid => {
        if (valid) {
          this.saveConfirm(); // 保存前  该车辆已有相同日期的合同存在，是否确认保存
        } else {
          return false;
        }
      });
    },
    //先选择统计月份，有效期起、止日期根据 车队自定义统计周期自动带出
    getStaEndCar: function() {
      this.dialogLoading = true;
      let date = formatDate(this.detailOne.Statistic_Month, "yyyy-MM");
      let param = {
        Statistic_Month: date, //统计月份
        teamId: this.detailOne.Partya //车队id
      };
      this.axios
        .post("/Contract/ExpendContract/InitDate", param)
        .then(res => {
          this.detailOne.Begin_Date = formatDate(
            res.data.data.Begin_Date,
            "yyyy-MM-dd"
          );
          this.detailOne.End_Date = formatDate(
            res.data.data.End_Date,
            "yyyy-MM-dd"
          );
          this.dialogLoading = false;
        })
        .catch(error => {
          this.dialogLoading = false;
        });
    },
    //保存前  该车辆已有相同日期的合同存在，是否确认保存
    saveConfirm: function() {
      let param = {
        keyid: this.detailOne.KeyId, //合同ID
        fk_vehicle: this.detailOne.FK_Vehicle, //牵引车/车辆 ID
        fk_trailer: this.detailOne.FK_Trailer, //挂车ID
        sDate: this.detailOne.Begin_Date, //开始时间
        eDate: this.detailOne.End_Date, //结束时间
        Statistic_Month: this.detailOne.Statistic_Month //统计月份
      };
      this.axios
        .post("/Contract/ExpendContract/IsRepeatDate", param)
        // .post("/Contract/IncomeContract/IsRepeatDate", param)
        .then(res => {
          if (!res.data.data) {
            this.openSave(); //提示 - 继续保存
          } else {
            this.saveLast(); //不提示 - 继续保存
          }
        })
        .catch(error => {});
    },
    //提示框
    openSave() {
      this.$confirm("该车辆已有相同日期的合同存在是否继续保存?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "error"
      })
        .then(() => {
          this.saveLast(); //继续保存
        })
        .catch(() => {
          return;
        });
    },
    saveLast: function() {
      if(Number(this.detailOne.Total_Expense)==0){
          return errorMessage("合同金额不能0");
        }
      this.dialogLoading = true;
      this.detailOne.Statistic_Month = formatDate(
        this.detailOne.Statistic_Month,
        "yyyy-MM"
      );
      this.axios
        .post("/Contract/ExpendContract/Save", Qs.stringify(this.detailOne))
        // .post("/Contract/IncomeContract/Save", Qs.stringify(this.detailOne))
        .then(res => {
          this.dialogLoading = false;
          res.data.success
            ? successMessage(res.data.message)
            : errorMessage(res.data.message);
          this.detailVisible = false;
          this.$emit("queryTableData");
        })
        .catch(error => {
          this.dialogLoading = false;
        });
    }
  }
};
</script>
<style>

</style>
<style scoped>
.footer-span {
  font-size: 12px;
  color: #000000;
}

.caozuo .el-button {
  padding-left: 0;
  padding-right: 0;
}
</style>
