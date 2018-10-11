<template>
    <!-- 弹框 2 -->
    <el-dialog v-sky-loading="dialogLoading" title="合同调差" size="large" :visible.sync="dialogTableVisible" :close-on-click-modal="false" v-sky-drag>
      <hr class="dialog-hr">
      <div class="formDiv" style="min-height:200px;">
        <el-form :model="detailTwo" :rules="rulesTwo" ref="detailTwo" label-width="140px" class="dialogScrollTop" :inline="false">
          <!-- <el-row>
            <el-col :span="7" >
              <el-form-item label="对应合同编号：">
                <el-select  :disabled="true" v-model="GetContractByLike" style="width:100%" filterable remote placeholder="请输入内容" :remote-method="querySearchAsync_ftcht" @change="handleSelect">
                  <el-option v-for="item in restaurants_ftcht" :key="item.label" :label="item.value" :value="item.label">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="17">
            </el-col>
          </el-row> -->
          <el-row>
            <el-col :span="6">
              <el-form-item label="合同类型:">
                <span class="footer-span" v-text="detailTwo.Contract_TypeName"></span>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="对应合同编号:">
                <span class="footer-span" v-text="detailTwo.Contract_Code"></span>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="合同系统报审序号：">
                <span class="footer-span" v-text="detailTwo.Reference_Code"></span>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="车辆(牵引车):">
                <span class="footer-span" v-text="detailTwo.VehicleNo"></span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="挂车：">
                <span class="footer-span" v-text="detailTwo.TrailerNo"></span>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="车队：">
                <span class="footer-span" v-text="detailTwo.VehicleTeamName"></span>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="有效期起：">
                <span class="footer-span" v-text="detailTwo.Begin_Date"></span>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="有效期止：">
                <span class="footer-span" v-text="detailTwo.End_Date"></span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="统计月份：">
                <el-date-picker 
                         :clearable="false" 
                         v-model="detailTwo.Statistic_Month" 
                         style="width:100%" type="month" 
                         :editable="false" 
                         placeholder="请选择"
                         :picker-options="pickerOptions"
                         >
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="合同金额(元):">
                <el-input :maxlength="24" v-model="detailTwo.Total_Expense"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="差异金额(元):">
                <span class="footer-span" v-text="detailTwo.Change_Expense"></span>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="合同总金额(元):">
                <span class="footer-span" v-text="detailTwo.Total_Expense"></span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="结算方:">
                <span class="footer-span" v-text="detailTwo.SettlementName"></span>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="税率:">
                <span class="footer-span" v-text="detailTwo.Dic_Tax_Rate"></span>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="合同状态:">
                <span class="footer-span" v-text="detailTwo.StatusName"></span>
              </el-form-item>
            </el-col>
            <el-col :span="6">
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="合同标的概要:">
                <span class="footer-span" v-text="detailTwo.Description"></span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="备注:">
                <span class="footer-span" v-text="detailTwo.Remark"></span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="附件上传:">
                <!-- <span class="footer-span" v-text="detailTwo.value1"></span> -->
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="创建人:">
                <span class="footer-span" v-text="detailTwo.CreateName"></span>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="创建时间:">
                <span class="footer-span" v-text="detailTwo.CreateTime"></span>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="修改人:">
                <span class="footer-span" v-text="detailTwo.ModifyName"></span>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="修改时间:">
                <span class="footer-span" v-text="detailTwo.ModifyTime"></span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div style="text-align:right;">
                <el-button type="primary" @click="SaveImproveContract(detailTwo)" >保存</el-button>
                <el-button type="primary" @click="dialogTableVisible = false">取消 </el-button>
              </div>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
</template>
<script>
import Qs from 'qs';
import { formatDate } from '@/util/date.js';
import { successMessage, warningMessage, errorMessage } from '@/util/message.js';
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
        let temp = `${new Date().getFullYear()}-${new Date().getMonth()+1}-1`
          return  time.getTime() < new Date(temp).getTime();
        }
      },
      rulesTwo: {
        Old_Contract_Code: [{ required: true, message: '必须是选择的有效' }],//有效期起
      },
      dialogLoading: false,//弹框加载动画
      pageSize: this.$store.getters.getPage,//改变时将选中的条数赋值
      dialogTableVisible: false,//弹框2 - 隐藏
      restaurants_ftcht: [],//非调差合同
      GetContractByLike: null,//非调差合同
      // 弹框2
      detailTwo: {
        Begin_Date: null,//有效期起
        Change_Expense: null,//差异金额
        Contract_Code: null,//合同编号
        Contract_Date: null,//
        Contract_Status: null,//合同状态
        Contract_TypeName: null,//
        CreateTime: null,//创建时间
        CreateUser: null,//创建人
        CreateName: null,//创建人
        Description: null,//合同标的概要
        Dic_Contract_Type: null,//合同类型
        Dic_Tax_Rate: null,//税率
        End_Date: null,//有效期止
        FK_Trailer: '',//挂车
        FK_Unit: null,//
        FK_Vehicle: '',//车辆/牵引车
        VehicleNo: null,//车辆/牵引车
        IsLinkTransOrder: true,//车辆 - 车队是否可编辑
        Old_Contract_KeyId: null,// detailTwo.Old_Contract_KeyId
        Is_Delete: null,//
        KeyId: null,//
        ModifyTime: null,//修改时间
        ModifyUser: null,//修改人
        ModifyName: null,//修改人
        Old_Contract_Code: null,//
        Partya: null,//车队
        Partyb: null,//
        Reference_Code: null,//合同系统报审序号
        Remark: null,//备注
        SettlementName: null,// 结算方
        Statistic_Month: null,//统计月份
        StatusName: null,//
        Total_Expense: null,//合同总金额
        TrailerNo: null,//
        UnitName: null,//
        VehicleTeamName: null,//
      },
    }
  },
  created: function() {
    this.getDefaultDataQuery_ftcht();//非调差合同 - 默认请求
  },
  methods: {
    // 弹框2 - 非调差合同 - 默认请求
    getDefaultDataQuery_ftcht: function() {
      this.axios.post("/Contract/ExpendContract/GetContractByLike", { LikeParam: "" }).then((res) => {
        this.restaurants_ftcht = res.data.data;
      })
    },
    //非调差合同 - 模糊输入查询 -1
    querySearchAsync_ftcht: function(queryString, cb) {
      this.axios.post("/Contract/ExpendContract/GetContractByLike", { LikeParam: queryString }).then((res) => {
        this.restaurants_ftcht = res.data.data;
      })
    },
    handleSelect: function(item) {
      if (item !== ''&&item!==null) {
        this.dialogLoading = true;
        this.axios.post("/Contract/ExpendContract/Detail", { keyid: item }).then((res) => {
          this.dialogLoading = false;
          this.detailTwo = res.data.data;
          this.detailTwo.Begin_Date = formatDate(this.detailTwo.Begin_Date, 'yyyy-MM-dd');//有效期起
          this.detailTwo.Contract_Date = formatDate(this.detailTwo.Contract_Date, 'yyyy-MM-dd');//
          this.detailTwo.CreateTime = formatDate(this.detailTwo.CreateTime, 'yyyy-MM-dd');//创建时间
          this.detailTwo.End_Date = formatDate(this.detailTwo.End_Date, 'yyyy-MM-dd');//有效期止
          this.detailTwo.ModifyTime = formatDate(this.detailTwo.ModifyTime, 'yyyy-MM-dd');//统计月份
          this.detailTwo.Contract_Status += "";//
          this.detailTwo.Old_Contract_Code = item.value;//选择的value
        })
      }
    },
    //显示 - 弹框2
    contractAdjustment: function(keyid) {
      // 初始化
      this.GetContractByLike = keyid;
      this.axios.get('/Contract/ExpendContract/Detail?keyid='+keyid).then((res)=>{
        this.dialogTableVisible = true;
        this.detailTwo=res.data.data;
        this.detailTwo.Old_Contract_Code=res.data.data.KeyId;//保存需要
        this.detailTwo.Begin_Date = formatDate(this.detailTwo.Begin_Date, 'yyyy-MM-dd');//有效期起
        this.detailTwo.Contract_Date = formatDate(this.detailTwo.Contract_Date, 'yyyy-MM-dd');//
        this.detailTwo.CreateTime = formatDate(this.detailTwo.CreateTime, 'yyyy-MM-dd');//创建时间
        this.detailTwo.End_Date = formatDate(this.detailTwo.End_Date, 'yyyy-MM-dd');//有效期止
        this.detailTwo.ModifyTime = formatDate(this.detailTwo.ModifyTime, 'yyyy-MM-dd');//统计月份
      })
    },
    //弹框2 - 保存
    SaveImproveContract: function(obj) {
      this.dialogTableVisible = true;
      obj.Statistic_Month = formatDate(obj.Statistic_Month, "yyyy-MM");
      obj.Old_Contract_KeyId=this.GetContractByLike;
      this.axios.post("/Contract/ExpendContract/SaveImproveContract", Qs.stringify(obj))
        .then((res) => {
          this.dialogLoading = false;
          res.data.success ? successMessage(res.data.message) : errorMessage(res.data.message);
          this.dialogTableVisible = false;
           this.$emit('queryTableData');
        }).catch((error) => {
          this.dialogLoading = false;
        });
    },
  }
}
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
