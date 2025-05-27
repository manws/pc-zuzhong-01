<template>
  <div class="flex-style-column navbar" style="overflow: visible;">
    <div style="background-color: white;">
      <div class="flex-style-column" style="width: 300px">
        <div class="flex-style-base tab pointer" v-for="(tab, index) in tabs" :key="index"
          :class="{ 'tab-active-style': active == index }"
          :style="{ 'border-bottom': index < tabs.length - 1 ? 'solid 1px #F6F7F8' : '' }"
          @click="handleClick(tab, index)">
          <span style="font-size: 1.2rem;width: 0;flex: 1;padding-left: 54px;"
            :class="{ 'tab-active-text': active == index }">{{
              tab.label }}</span>
          <div style="width: 2px;height: 100%;" :class="{ 'tab-active-line': active == index }">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from '@/views/service.js'
export default {
  watch: {
    $route: {
      handler(n, o) {
        let isRootRoute = false
        this.tabs.forEach((tab, index) => {
          if (tab.route == n.name) {
            this.active = index
            isRootRoute = true
          }
        })
        // 如果不是根路由，那就根据menuId判断
        if (!isRootRoute) {
          let menuId = this.$route.query.a
          this.active = menuId - 1
        }
      },
      immediate: true
    }
  },
  data() {
    return {
      tabs: service.navData,
      active: 0,
      searchContent: '',
      activeName: '',
      logoNews: require('@/assets/images/logo.png'),
      isLogin: false
    }
  },
  methods: {
    handleClick(tab, index) {
      if (!tab.menus) {
        this.active = index
        this.$router.replace({
          name: tab.route
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  position: relative;
  justify-content: center;
  z-index: 99;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  border-radius: 4px;
}

.tab {
  height: 4.375rem;
  align-items: center;
  justify-content: center;
  position: relative;
}

.tab:hover {
  background-color: #F6F7FB;

  .sub-menu-layout {
    display: block;
  }
}

.tab-active-style {
  background-color: #F6F7FB;
}

.tab-active-text {
  color: #5481B0;
}

.tab-active-line {
  background-color: #5481B0;
}
</style>
