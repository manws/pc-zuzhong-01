<template>
  <el-dialog title="title" :visible.sync="dialogVisible" :before-close="handleClose" center>
    <pdf ref="pdf" src="http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf"></pdf>
  </el-dialog>
</template>

<script>
  import pdf from 'vue-pdf'
  export default {
    components: {
      pdf
    },
    data() {
      return {
        dialogVisible: true
      }
    },
    methods: {
      show(url) {
        this.dialogVisible = true

      },
      handleClose() {
        this.dialogVisible = false
      }

    }
  }
</script>

<style scoped lang="scss">

</style>
