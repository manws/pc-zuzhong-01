<template>
  <el-pagination
    :current-page="current"
    :page-sizes="[10, 15, 20, 30, 50, 100, 150, 200, 300, 400, 500]"
    :page-size="pagesize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    style="padding: 0px 20px;margin-top: 5px;"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script>
export default {
  name: 'CommonPagination',
  props: {
    current: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    },
    pagesize: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('onSizeChange', val)
    },
    handleCurrentChange(val) {
      this.$emit('onCurrentChange', val)
    }
  }
}
</script>
