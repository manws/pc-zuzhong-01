<template>
  <div class="components-container flex-style-column" :style="{ height: bodyHeight }">
    <slot style="height: calc(100%);"></slot>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	name: 'ComponentsContainer',
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tagsView: state => state.settings.tagsView
    }),
    bodyHeight: function() {
      // 处理固定Tabview的情况
      if(this.isScroll) {
        return this.tagsView ? 'calc(100vh - 90px)' : 'calc(100vh - 50px)';
      }
      return 'inherit'
    }
  },
  props: {
    isScroll: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
.components-container {
  position: relative;
  margin: 0;
  padding: 0;
}
</style>
