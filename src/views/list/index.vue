<template>
  <div class="flex-style-column" style="padding-bottom: 24px;height: 100%;background-color: white;padding:16px;">
    <div class="flex-style-column" style="height: 100%;">
      <div class="flex-style-base">
        <el-input style="width: 300px;" placeholder="请输入患者编号"></el-input>
        <el-button type="primary" class="my-primary-button">查询</el-button>
        <el-button type="primary" class="my-primary-button">新增</el-button>
      </div>
      <el-table ref="table" :data="tableData" border style="width: 100%;margin-top: 24px;" height="calc(100%)"
        element-loading-text="拼命加载中..." element-loading-spinner="el-icon-loading">
        <el-table-column label="序号" fixed type="index" align="center" width="50"></el-table-column>
        <el-table-column prop="operation" label="操作" align="center" width="140" fixed="right">
          <template slot-scope="scope">
            <div class="flex-style-base" style="justify-content: space-around">
              <div class="btn-text">
                重置密码
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column v-for="(column, index) in columns" :key="index" :prop="column.fieldCode"
          style="height: 500px !important;" :label="column.fieldName" align="center" :minWidth="column.minWidth">
          <template slot-scope="scope">
            <span>{{ scope.row[column.fieldCode] }}</span>
          </template>
        </el-table-column>
      </el-table>
      <div class="flex-style-base" style="justify-content: flex-end;margin-top: 12px;">
        <CommonPagination :total="page.totalCount" :pagesize="page.pageSize" :current="page.pageIndex"
          @onSizeChange="handlePageSizeChange" @onCurrentChange="handleCurrentPageChange">
        </CommonPagination>
      </div>
    </div>
  </div>
</template>

<script>
import CommonPagination from "_c/Common/CommonPagination";
export default {
  components: {
    CommonPagination,
  },
  data() {
    return {
      page: {
        pageIndex: 0,
        pageSize: 10,
        totalCount: 100
      },
      tableData: [{ fieldName: '你好呀', userCode: '234', fieldCode: '776' }, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      columns: [
        {
          fieldName: '账号',
          fieldCode: 'userCode',
          align: 'center',
          minWidth: 100,
          value: ''
        },
        {
          fieldName: '用户名',
          fieldCode: 'userName',
          align: 'center',
          minWidth: 100,
          value: ''
        },
        {
          fieldName: '角色名',
          fieldCode: 'usergroupName',
          align: 'center',
          minWidth: 100,
          value: ''
        },
        {
          fieldName: '中心',
          fieldCode: 'siteControl',
          align: 'center',
          minWidth: 100,
          value: ''
        },
        {
          fieldName: '手机号',
          fieldCode: 'phone',
          align: 'center',
          minWidth: 100,
          value: ''
        },
        {
          fieldName: '邮箱',
          fieldCode: 'email',
          align: 'center',
          minWidth: 100,
          value: ''
        },
        {
          fieldName: '短信提醒',
          fieldCode: 'isRemind',
          align: 'center',
          minWidth: 100,
          value: ''
        },
        {
          fieldName: '是否激活',
          fieldCode: 'enabled',
          align: 'center',
          minWidth: 100,
          value: ''
        },
        {
          fieldName: '更新人员',
          fieldCode: 'updateBy',
          align: 'center',
          minWidth: 100,
          value: ''
        },
        {
          fieldName: '更新时间',
          fieldCode: 'updateOn',
          align: 'center',
          minWidth: 100,
          value: ''
        }
      ]
    }
  },
  methods: {
    handlePageSizeChange() {

    },
    handleCurrentPageChange() {

    }
  }

}
</script>

<style>
/* 在全局CSS文件中 */
.my-primary-button {
  background-color: #5481B0 !important;
  border-color: #5481B0 !important;
  color: #fff !important;
  margin-left: 16px;
}

.my-primary-button:hover,
.my-primary-button:focus {
  background-color: #5481B0 !important;
  border-color: #5481B0 !important;
}

.my-primary-button:active {
  background-color: #5481B0 !important;
  border-color: #5481B0 !important;
}
</style>