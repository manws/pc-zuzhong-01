<!-- 单色图标组件 -->
<template>
  <i :class="`iconfont icon-${icon}`" :style="styles"></i>
</template>

<script>
export default {
  name: 'IconFont',
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#5c6b77'
    },
    size: {
      type: Number,
      default: 16
    }
  },
  computed: {
    styles () {
      return {
        fontSize: `${this.size}px`,
        color: this.color
      }
    }
  }
}
</script>