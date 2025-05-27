<template>
  <div class="flex-style-column app-wrapper">
    <el-card>
      <div class="flex-style-base">
        <img src="../../src/assets/logo.png" style="width: 24px;height: 24px;" />
        <p style="margin-left: 12px;flex-grow: 1;font-size: 20px;">卒中后认知障碍风险评估系统</p>
        <p>user1</p>
      </div>
    </el-card>
    <div style="width: 16px;height: 16px;"></div>
    <div class="flex-style-base" style="width: 100%;align-items: flex-start;height: 0;flex-grow: 1;">
      <navbar />
      <div style="width: 16px;height: 10px;"></div>
      <div style="width: 0;flex-grow: 1;height: 100%;">
        <app-main />
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import {
  AppMain,
  Navbar,
  Footer
} from './components'
import ResizeMixin from './mixin/ResizeHandler'
export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Footer
  },
  mixins: [ResizeMixin],
  data() {
    return {
      show: true
    }
  },
  watch: {
    $route: {
      handler(n, o) {
        if (n.name == 'chronic-disease') {
          this.show = false
        } else {
          this.show = true
        }
      },
      immediate: true
    }
  },
  computed: {
    showSettings: function () {
      return this.$store.state.settings.showSettings
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0 10%;
  background-color: #F6F7F8;
}
</style>
