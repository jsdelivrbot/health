<template>
  <div v-sky-loading="loading" class="body Contract-ExpendContract" v-bind:style="{  height: $store.getters.getHeight + 'px' }">
    <!-- 查询 -->
    <div class="top">
      <el-form class="demo-fuleForm" :model="queryParameter" :rules="rulesQuery" ref="queryParameter" label-width="80px">
        <div style="width:1160px">
          <el-row :gutter="30">
            <el-col :span="24" :xs="24">
              <el-form-item label="所属单位:" prop="orgList">
                  <multi-organization-selector width='' class="full-width" v-model="queryParameter.orgList"/>
              </el-form-item>
            </el-col>
            <el-col :span="6" :xs="6">
              <el-form-item label="车辆出租方:">
                <el-select v-model="queryParameterShow.SettleID" style="width:100%" clearable filterable remote placeholder="请输入" :remote-method="querySearchAsync_jsfQuery" @change="handleSelectQueryJie" class="">
                  <el-option v-for="item in restaurants_jsf" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6" :xs="6">
              <el-form-item label="合同编号:" label-width="115px">
                <el-input placeholder="请输入" :maxlength="17" v-model="queryParameter.Contract_Code"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" :xs="6">
              <el-form-item label="车辆(牵引车)编号:" label-width="115px">
                <el-input placeholder="请输入" :maxlength="17" v-model="queryParameter.VehicleNo"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" :xs="6">
              <el-form-item label="挂车编号:">
                <el-input placeholder="请输入" :maxlength="17" v-model="queryParameter.TrailerNo"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" :xs="6">
              <!-- <el-form-item label="合同状态:">
                <el-select style="width:100%" v-model="queryParameter.status" clearable placeholder="请选择">
                  <el-option label="合同生效" value="10"></el-option>
                  <el-option label="合同作废" value="20"></el-option>
                  <el-option label="合同完成" value="30"></el-option>
                </el-select>
              </el-form-item> -->
            </el-col>
            <el-col :span="6" :xs="6">
              <el-form-item label="合同开始日期≥:" label-width="115px">
                  <el-form-item>
                    <el-date-picker :clearable="true" v-model="queryParameter.BeginDate" style="width:100%" type="date" :editable="false" placeholder="请选择">
                    </el-date-picker>
                  </el-form-item>
              </el-form-item>
            </el-col>
            <el-col :span="6" :xs="6">
              <el-form-item label="合同结束日期≤:" label-width="115px">
                  <el-form-item>
                    <el-date-picker :clearable="true" v-model="queryParameter.EndDate" style="width:100%" type="date" :editable="false" placeholder="请选择">
                    </el-date-picker>
                  </el-form-item>
              </el-form-item>
            </el-col>
            <el-col :span="6" :xs="6">
              <el-form-item label="合同标的概要:" label-width="105px">
                <el-input placeholder="请输入" :maxlength="17" v-model="queryParameter.Description"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
               <el-form-item label="统计月:">
                <el-date-picker
                  v-model="queryParameter.Static_Month"
                  type="month"
                  placeholder="请选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :span="6" :xs="6">
              <el-form-item label="审核日期起:" label-width="115px">
                <el-form-item>
                  <el-date-picker :clearable="true" v-model="queryParameter.Contract_DateS" style="width:100%" type="date" :editable="false" placeholder="请选择">
                  </el-date-picker>
                </el-form-item>
              </el-form-item>
            </el-col>
            <el-col :span="6" :xs="6">
              <el-form-item label="审核日期起止:" label-width="115px">
                <el-form-item>
                  <el-date-picker :clearable="true" v-model="queryParameter.Contract_DateE" style="width:100%" type="date" :editable="false" placeholder="请选择">
                  </el-date-picker>
                </el-form-item>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="用途分类：">
                <el-select v-model="queryParameter.UseKind " style="width:100%;" clearable multiple class="showCol">
                  <el-option v-for="item in UseKindOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6" :xs="6">
              <el-form-item label="是否作废:">
              <!-- <el-checkbox v-model="queryParameter.IsDelete"></el-checkbox> -->
              <el-checkbox-group v-model="checkList" @change="invalidEvent" :min="1">
                    <el-checkbox label="是"></el-checkbox>
                    <el-checkbox label="否"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col>
            
          </el-row>
        </div>
        
        <el-row>
          <el-col :span="6" :xs="6">
                <el-form-item label="是否审核:">
                <!-- <el-checkbox v-model="queryParameter.IsComplete"></el-checkbox> -->
                  <el-checkbox-group v-model="checkList1" @change="invalidEvent1" :min="1">
                    <el-checkbox label="是"></el-checkbox>
                    <el-checkbox label="否"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
            </el-col>
          <el-col :span="18" :xs="18">
            <div class="float-right" style="margin-bottom: 14px;">
              <el-button type="primary" @click="testQueryTableData(queryParameter)" v-if="accessCodes.indexOf('Query')!==-1" >查询</el-button>
              <el-button type="primary" @click="testQueryTableDataVerify" v-if="accessCodes.indexOf('Confirm')!==-1" >审核</el-button>
              <el-button type="primary" @click="addDetailOne()" v-if="accessCodes.indexOf('Add')!==-1">新增</el-button>
              <el-button type="primary" @click=Import v-if="accessCodes.indexOf('Import')!==-1" >导入</el-button>
              <el-button type="primary" @click="Export" v-if="accessCodes.indexOf('Export')!==-1">导出</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!-- 表格 -->
    <div class="table">
      <el-table :data="resTableData.data" :height="$store.getters.getHeight-95-95-90" border stripe style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="30" header-align="center" align="center"></el-table-column>
        <el-table-column prop="Contract_Code" label="合同编号" width="150px" header-align="center" align="center">
          <template scope="scope">
            <!-- <el-button @click="bjClick(scope.row.KeyId)" type="text" size="small">{{scope.row.Contract_Code}}</el-button> -->
            <span @click="bjClick(scope.row.KeyId)" class="detail_trigger">{{scope.row.Contract_Code}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作"  header-align="center" align="center" width="80">
          <template scope="scope">
            <div class="caozuo">
              <el-button :disabled="!scope.row.IsDifferAdjust" @click="contractAdjustment(scope.row.KeyId)" type="text" size="small">调差</el-button>
              <el-button :disabled="scope.row.StatusName==='合同生效'?false:true" @click="deleteContract(scope.row.KeyId)" type="text" size="small">作废</el-button>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="Contract_TypeName" width="100" label="合同类型" header-align="center" align="center">
        </el-table-column>
        <el-table-column prop="UnitName" label="所属单位" header-align="center" align="center">
        </el-table-column>
        <el-table-column prop="SettlementName" label="车辆出租方" header-align="center" align="center">
        </el-table-column>
        <el-table-column prop="Statistic_Month" width="60" label="统计月份" header-align="center" align="center">
        </el-table-column>
        <el-table-column prop="Begin_Date" width="90" label="合同开始日期" header-align="center" align="center">
        </el-table-column>
        <el-table-column prop="End_Date" width="90" label="合同结束日期" header-align="center" align="center">
        </el-table-column>
        <el-table-column prop="VehicleNo" width="100" label="车辆/牵引车" header-align="center" align="center">
        </el-table-column>
        <el-table-column prop="TrailerNo" width="100" label="挂车" header-align="center" align="center">
        </el-table-column>
         <el-table-column prop="Old_Contract_Code" width="90" label="是否调差合同" header-align="center" align="center">
          <template scope="scope">
            <span>{{scope.row.Old_Contract_Code?"是":"否"}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="Total_Expense" width="100" label="合同总金额(元)" header-align="center" align="center">
        </el-table-column>
        <el-table-column prop="StatusName" width="80" label="合同状态" header-align="center" align="center">
          <template scope="scope">
            <span v-show="scope.row.StatusName==='合同作废'?true:false" v-text="scope.row.StatusName" style="color:red"></span>
            <span v-show="scope.row.StatusName==='审核完毕'?true:false" v-text="scope.row.StatusName" style="color:green"></span>
            <span v-show="scope.row.StatusName==='合同生效'?true:false" v-text="scope.row.StatusName"></span>
          </template>
        </el-table-column>
        
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="block pageAbsolute" align="" v-if="resTableData.total > 0">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="queryParameter.page" :page-sizes="this.$store.getters.getPageSizes" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="resTableData.total">
      </el-pagination>
    </div>
    <!-- 弹框 - 1 -->
    <dialog-one @queryTableData="queryTableDataDialog()" ref="dialogOne"></dialog-one>
    <!-- 弹框 - 2 -->
    <dialog-two ref="dialogTwo" @queryTableData="queryTableDataDialog()"></dialog-two>
    <!-- 导入 -->
     <el-dialog v-sky-drag title="批量导入合同" size="large" :close-on-click-modal="false" :visible.sync="Import_show" v-sky-loading="Exprot_loading">
        <hr class="dialog-hr">
        <el-row>
            <el-col style="margin:10px 10px 0px 10px">
                <label>批量导入功能介绍:</label>
                <label>通过批量导入功能可以实现支出合同的批量新增，每次最多允许导入1000条支出合同数据。</label>
            </el-col>
        </el-row>
        <el-row>
            <el-col style="margin:10px 10px 0px 10px">
                <label>批量导入模板下载:</label>
                <label>[
                    <a id="go" href="Contract/ExpendContract/LoadFile">下载导入模板</a>
                    ]下载【支出合同】的导入模板。可以批量新增支出合同信息。</label>
            </el-col>
        </el-row>
        <div class="excel_exceptions" v-if="exceptions">
            <b>错误面板</b>
            <div class="exception">
                <div style="color:red">{{exceptions}}</div>
            </div>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-upload action="/Contract/ExpendContract/Import" :on-success="completeImport" :show-file-list="false" :before-upload="beginImport"
                :on-error="errorImport" :auto-upload="true">
                <el-button type="primary">批量导入</el-button>
            </el-upload>
        </div>
    </el-dialog>
  </div>
</template>
<script>
import Qs from 'qs';
import dialogOne from './dialogOne.vue'
import dialogTwo from './dialogTwo.vue'
import { formatDate } from '@/util/date.js';
import {Expense } from '@/reg/commonReg.js';
import { successMessage, warningMessage, errorMessage } from '@/util/message.js';
export default {
  components: {dialogOne,dialogTwo},
  data() {
    return {
      exceptions:'',
      Exprot_loading:false,
      Import_show:false,
      checkList:["否"],//作废
      checkList1:["是","否"],//审核
      loading: false,//页面加载动画
      accessCodes: [],//
      restaurants_jsf: [],//结算方
      resTableData: [],//表格数据
      pageSize: this.$store.getters.getPage,//改变时将选中的条数赋值
      multipleSelection:[],//选择的数据项
      UseKindOptions:[],//车辆用途数据
      rulesQuery: {
        orgList:[{ required: true, message: '所属单位不能为空' }],
        ExpenseS: [{ required: true, validator: Expense }],//合同金额（元）
        ExpenseE: [{ required: true, validator: Expense }],//合同金额（元）
      },
      queryParameterShow: {
        SettleID: "",//展示 - query - 结算方
      },
      queryParameter: {//查询参数
        Static_Month:null,//统计月
        orgList: [this.$user().OrgId],//单位
        SettleID: null,//结算方
        Contract_Code: null,//合同编号
        VehicleNo: null,//车辆/牵引车编号
        TrailerNo: null,//挂车编号
        ExpenseS: null,//合同金额（起）
        ExpenseE: null,//合同金额（止）
        // status: null,//合同状态
        IsDelete:false,//是否作废
        IsComplete:'',//是否审核
        BeginDate: '',//合同日期（起）
        EndDate: '',//合同日期（止）
        Contract_DateS:null,//审核日期
        Contract_DateE:null,
        Description:null,//合同标的概要
        UseKind:[],//车辆用途
        _dc: null,
        page: 1,//当前页码
        dir: "ASC",//
        start: 0,//每页显示条数第一条
        limit: this.$store.getters.getPage//每页显示条数最后一条
      },
    }

  },
  created: function() {
    this.getAccessCodes();//入口程序
    this.getUseKind("/Contract/ExpendContract/GetUseKind?LikeParam");// 用途分类
  },
  methods: {
    //查询用途分类数据源
		getUseKind:function(url){
			if(url!=null && url.trim() !== ""){
				this.axios.get(url)
					.then((res) => {
						this.UseKindOptions = res.data.data;
					})
			}
		},
    //是否作废
    invalidEvent(){
      if(this.checkList.indexOf('是')>-1 && this.checkList.length==1){
        this.queryParameter.IsDelete=true
      }
      if(this.checkList.indexOf('否')>-1 && this.checkList.length==1){
        this.queryParameter.IsDelete=false
      }
      if(this.checkList.length==2){
        this.queryParameter.IsDelete=''
      }
    },
     //是否审核
    invalidEvent1(){
      if(this.checkList1.indexOf('是')>-1 && this.checkList1.length==1){
        this.queryParameter.IsComplete=true
      }
      if(this.checkList1.indexOf('否')>-1 && this.checkList1.length==1){
        this.queryParameter.IsComplete=false
      }
      if(this.checkList1.length==2){
        this.queryParameter.IsComplete=''
      }
    },
    deleteContract(keyid){
       this.$confirm('是否作废作废该合同?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.zfClick(keyid);
      }).catch(() => {
        return
      })
    },
    //结算方 - 首页 - 模糊输入查询
    querySearchAsync_jsfQuery: function(queryString, cb) {
      this.axios.post("/Contract/ExpendContract/GetVendorTransByLike", { LikeParam: queryString }).then((res) => {
        this.restaurants_jsf = res.data.data;
      })
    },
    // 查询 - 结算方 - 选择
    handleSelectQueryJie: function(item) {
      this.queryParameter.SettleID = item;
    },
    //查询
    testQueryTableData: function(queryParameter) {
      this.$refs.queryParameter.validate((valid) => {
        if (valid) {
          this.queryTableData(queryParameter);
        } else {
          return false;
        }
      })
    },
    //新增
    addDetailOne: function() {
      this.$nextTick(() => {
        this.$refs.dialogOne.addDetailOne();
      })
    },
    //调差合同
    contractAdjustment: function(keyid) {
      this.$nextTick(() => {
        this.$refs.dialogTwo.contractAdjustment(keyid);
      })
    },
    //编辑
    bjClick:function(KeyId){
       this.$nextTick(() => {
        this.$refs.dialogOne.bjClick(KeyId);
      })
    },
    //审核
    testQueryTableDataVerify: function() {
      // 1.用户没有选择数据
      if (!this.multipleSelection.length) return warningMessage("审核的内容不能为空");
      let arrsKeyId=[];//arrsKeyId的数组
      for(let i=0;i<this.multipleSelection.length;i++){
        arrsKeyId.push(this.multipleSelection[i].KeyId)
      }
      this.open(arrsKeyId);//
    },
     //提示框
    open: function(arrsKeyId) {
        this.$confirm('请确认批量审核！', '提示', {
            confirmButtonText: '确定',
            cancelButtonClass:'el-button--primary',
            type: 'warning'
        }).then(() => {
            this.$nextTick(() => {
               this.qrClick(arrsKeyId);//arrsKeyId的数组
            });
        }).catch(() => {
            return
        })
    },
    // 入口 - 获取权限
    getAccessCodes: function() {
      this.axios.get("/Contract/ExpendContract/AccessCodes")
        .then((res) => {
          this.accessCodes = res.data.data ? res.data.data : [];//获取查询权限
          this.Dic_Tax_Rate();//税率
          this.getDefaultDataQuery();//结算方
        }).catch((error) => {
          this.loading = false;
        })
    },
    // 税率 - 请求
    Dic_Tax_Rate: function() {
      this.axios.get("/Contract/ExpendContract/GetTaxRate?_dc=" + new Date().getTime())
        .then((res) => {
          this.Dic_Tax_RateData = res.data.data;
        })
    },
    // 查询 - 结算方 - 默认请求
    getDefaultDataQuery: function() {
      this.axios.post('/Contract/ExpendContract/GetVendorTransByLike', { LikeParam: "" }).then((res) => {
        this.restaurants_jsf = res.data.data;
      })
    },
    // 查询表格数据 - 方法
    queryTableData: function(queryParameter) {
      //点击查询按钮时，重写设置页码为第一页
      queryParameter.page = 1;
      this.LoadTableData(queryParameter);
    },
     // 查询表格数据 - 方法
    queryTableDataDialog: function() {
      //点击查询按钮时，重写设置页码为第一页
      this.queryParameter.page = 1;
      let queryParameter=this.queryParameter;
      this.LoadTableData(queryParameter);
    },
    // 查询表格数据 - 请求
    LoadTableData: function(queryParameter) {
      queryParameter._dc = new Date().getTime();
      queryParameter.BeginDate = formatDate(queryParameter.BeginDate,"yyyy-MM-dd")
      queryParameter.EndDate = formatDate(queryParameter.EndDate,"yyyy-MM-dd")
      queryParameter.Static_Month = formatDate(queryParameter.Static_Month,"yyyy-MM")
      this.loading = true;
      this.axios.post("/Contract/ExpendContract/Query", queryParameter)
        .then((res) => {
          this.loading = false;
          this.resTableData = res.data;
          this.resTableData.data.map(item=>{
            item.Begin_Date = formatDate(item.Begin_Date,"yyyy-MM-dd")
            item.End_Date = formatDate(item.End_Date,"yyyy-MM-dd")
          })
        }).catch((error) => {
          this.loading = false;
        })
    },
    // 分页 - 1
    handleSizeChange: function(val) {//参数val默认传递当前每页显示条数
      this.pageSize = val;//改变时将选中的条数赋值
      //start limit每页显示条数开始与结束共计条数
      this.queryParameter.start = (this.queryParameter.page - 1) * val + 1;
      this.queryParameter.limit = this.queryParameter.page * val;
      this.queryTableData(this.queryParameter);//带入参数执行一次请求
    },
    // 分页 - 参数val默认传递当前选中页码
    handleCurrentChange: function(val) {
      this.loading = true;
      this.queryParameter.page = val;
      this.LoadTableData(this.queryParameter);
    },
    //作废
    zfClick: function(KeyId) {
      this.loading = true;
      this.axios.post("/Contract/ExpendContract/Delete", { keyId: KeyId })
        .then((res) => {
          this.loading = false;
          res.data.success ? successMessage(res.data.message) : errorMessage(res.data.message);
          this.queryTableData(this.queryParameter);
        }).catch((error) => {
          this.loading = false;
        });
    },
    //确认
    qrClick: function(KeyId) {
      this.loading = true;
      this.axios.post("/Contract/ExpendContract/Confirm", { keyId: KeyId })
        .then((res) => {
          this.loading = false;
          res.data.success ? successMessage(res.data.message) : errorMessage(res.data.message);
          this.queryTableData(this.queryParameter);
        }).catch((error) => {
          this.loading = false;
        });
    },
    //生成运单
    scydClick:function (KeyId) {
        alert('生成运单');
    },
    handleSelectionChange: function(val) {
      this.multipleSelection = val;
    },
    //导入
    Import(){
      this.Import_show = true;
      this.exceptions = ''
    },
    completeImport(result){
      if (result.success) {
          successMessage('导入成功.');
          this.Import_show = false;
      } else {
          successMessage('导入失败.');
      }
      this.Exprot_loading = false;
    },
    beginImport: function () {
        this.Exprot_loading = true;
    },
    errorImport: function (response) {
        this.exceptions=JSON.parse(response.message.substr(4)).message
        this.Exprot_loading = false;
        // try {
        //     if (response.status == 500)
        //         errorMessage('服务器错误，' + JSON.parse(response.message.substr(4)).message);
        //     else if (response.status != 401)
        //         errorMessage('服务器发生错误' + response.status);
        //     else
        //         errorMessage('与服务器连接失败.');
        // } catch (e) {
        //     errorMessage('服务器错误，当前服务器文档格式不正确或大小超出限制！');
        // } finally {
        //     this.Exprot_loading = false;
        // }
    },
     //导出
    Export(){
      // let ts = this;
      this.queryParameter.BeginDate = formatDate(this.queryParameter.BeginDate,"yyyy-MM-dd")
      this.queryParameter.EndDate = formatDate(this.queryParameter.EndDate,"yyyy-MM-dd")
      this.queryParameter.Static_Month = formatDate(this.queryParameter.Static_Month,"yyyy-MM")
      this.queryParameter.Contract_DateE = formatDate(this.queryParameter.Contract_DateE,"yyyy-MM-dd")
      this.queryParameter.Contract_DateS = formatDate(this.queryParameter.Contract_DateS,"yyyy-MM-dd")
      let data=Object.assign({},this.queryParameter);
      delete data._dc;
      delete data.page;
      delete data.dir;
      delete data._dstartc;
      delete data.limit;
      delete data.start;
      // this.loading = true;
      window.open(`/Contract/ExpendContract/Export?${Qs.stringify(data)}`,'_self')
      // $.fileDownload('/Contract/ExpendContract/Export', 
      //   {
      //       httpMethod: 'POST',
      //       data: data,
      //       successCallback() { 
      //         ts.loading= false; 
      //       },
      //       failCallback() {
      //         ts.loading= false;
      //       }
      //   });
    }
  }
}
</script>

<style>
.excel_exceptions {
        margin: 4px 0px;
        background-color: #feeeee;
        border: 1px solid #ddd;
        padding: 3px;
    }

.excel_exceptions .exception {
    padding-left: 24px;
}

.excel_exceptions .exception div {
    display: inline-block;
    margin: 4px 0px;
    padding: 4px 0px;
    border-bottom: 1px dotted #ccc;
}
.Contract-ExpendContract .el-radio__label {
  display: none;
}

.Contract-ExpendContract .dialog-hr {
  top: 0px;
}

.Contract-ExpendContract .el-dialog__body {
  padding: 0 20px 10px;
}

.Contract-ExpendContract .el-form-item__label {
  padding-left: 5px;
}

.Contract-ExpendContract .el-table__body-wrapper {
  overflow-x: hidden;
}

.Contract-ExpendContract .el-col-11 {
  padding-left: 0!important;
  padding-right: 0!important;
}

.Contract-ExpendContract .el-col-2 {
  text-align: center;
}
.Contract-ExpendContract .el-dialog {
    width: 1200px;
}
.Contract-ExpendContract .VehicleExternal .showCol {
    height: 30px;
  }
.Contract-ExpendContract .showCol .el-input .el-input__inner {
    height: 25px !important;
  }
.Contract-ExpendContract .showCol .el-select__tags {
    height: 30px !important;
    white-space: nowrap;
    overflow: hidden;
  } 
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
