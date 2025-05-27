<template>
  <el-dialog :title="title" :visible.sync="dialogVisible" width="75%" :before-close="handleClose" center>
    <div class="flex-style-base combo-info">
      <img src="../../assets/images/taocan.svg" style="height: 100%;background-color: #117BD0;" />
      <span class="combo-total">价格：￥{{total}}</span>
      <span class="combo-title">原价：<del>￥{{realprice}}</del></span>
      <div style="flex-grow: 1;"></div>
      <!-- <div style="height: 2.5rem;padding: 0 1rem;font-size: 1rem;font-weight: bold;line-height: 2.5rem;color: #117BD0;cursor: pointer;">去支付</div> -->
    </div>
    <el-table :data="tableData" stripe class="table">
      <el-table-column prop="lm" label="服务类目" align="center" width="120">
      </el-table-column>
      <el-table-column prop="ry" label="服务人员" align="center" :show-summary="false" width="120">
      </el-table-column>
      <el-table-column prop="mx" label="服务明细" align="center">
      </el-table-column>
      </el-table-column>
      <el-table-column prop="pc" label="服务频次" width="180" align="center">
      </el-table-column>
    </el-table>
    <div class="flex-style-base" style="justify-content: center;margin-top: 1.5rem;">
      <div class="pay-text">去支付</div>
    </div>
  </el-dialog>
</template>

<script>
  import data from './data.js'
  export default {
    data() {
      return {
        dialogVisible: false,
        total: 0,
        tableData: {},
        title: '',
        realprice: ''
      }
    },
    methods: {
      show(index, item) {
        this.dialogVisible = true
        this.tableData = item.content
        this.title = item.title
        this.total = item.price
        this.realprice = item.realprice
      },
      handleClose() {
        this.dialogVisible = false
      }

    }
  }
</script>

<style lang="scss">
  .table {
    .cell {
      font-size: 1.125rem;
    }
  }

</style>

<style scoped lang="scss">
  .combo-info {
    height: 2.5rem;
    background-color: rgba(17, 123, 208, 0.18);
    margin: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .combo-title {
    font-size: 1.25rem;
    color: #333333;
    width: 150px;
  }

  .combo-total {
    font-size: 1.25rem;
    color: #333333;
    font-weight: 600;
    width: 150px;
    margin-left: 1rem;
  }

  .table {
    width: calc(100% - 3rem);
    margin: 0 1.5rem;
  }

  .pay-text {
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 2.5rem;
    background-color: #117BD0;
    cursor: pointer;
    color: white;
    border-radius: 1.24rem;
    width: 9.5rem;
    text-align: center;
  }

  .pay-text:hover {
    opacity: 0.8;
  }
</style>
