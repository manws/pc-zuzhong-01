<template>
  <el-dialog :visible.sync="dialogVisible" :before-close="handleClose" center>
    <div v-for="i in 50">这里将会显示pdf的内容</div>
    <!-- <pdf ref="pdf" :src="src"></pdf> -->
    <!-- http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf -->
  </el-dialog>
</template>

<script>
  // import pdf from 'vue-pdf'
  export default {
    components: {
      // pdf
    },
    data() {
      return {
        dialogVisible: false,
        // src: '../../assets/pdf1.pdf',
        src: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf'
      }
    },
    created() {
      // this.src = pdf.createLoadingTask(this.src);
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
