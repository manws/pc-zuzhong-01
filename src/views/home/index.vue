<template>
  <div class="container" style="overflow: auto;">
    <div class="flex-style-column content-container layout">
      <div class="flex-style-base" style="margin-top: 3.75rem;width: 100%;">
        <img class="logo-img" src="../../assets/images/logo-white.png" />
        <div style="flex-grow: 1;"></div>
        <el-popover placement="bottom-end" trigger="hover" >
          <img slot="reference" class="header-icon" src="../../assets/images/ic-app.svg" />
          <div>
            <img style="width: 12.5rem;height: 12.5rem;" src="../../assets/images/qrcode-app.png" />
          </div>
        </el-popover>

        <el-popover placement="bottom-end" trigger="hover" >
          <img slot="reference" class="header-icon" src="../../assets/images/ic-wechat.svg" />
          <div>
            <img style="width: 12.5rem;height: 12.5rem;" src="../../assets/images/qrcode-wechat.png" />
          </div>
        </el-popover>

        <el-popover placement="bottom-end" trigger="hover" >
          <img slot="reference" class="header-icon" src="../../assets/images/ic-people.svg" />
          <div>
            <img style="width: 12.5rem;height: 12.5rem;" src="../../assets/images/qrcode-contact.png" />
          </div>
        </el-popover>

      </div>

      <div class="flex-style-column content-layout">

        <div class="title">中国脑卒中健康促进工程</div>
        <div class="flex-style-base icon-layout-container">
          <div class="flex-style-column icon-layout icon-layout-600" style="margin-left: 0;"
            @click="toRoute('health-service')">
            <img class="icon" src="../../assets/images/icon-heath-service.svg" />
            <div class="icon-title">健康服务</div>
          </div>

          <div class="flex-style-column icon-layout icon-layout-500 icon-layout-sec" @click="toRoute('evaluation')">
            <img class="icon" src="../../assets/images/icon-evaluation.svg" />
            <div class="icon-title">风险评测</div>
          </div>

          <div class="flex-style-column icon-layout icon-layout-400" @click="toRoute('prevention')">
            <img class="icon" src="../../assets/images/icon-zu-prevention.svg" />
            <div class="icon-title">卒中预防</div>
          </div>

          <div class="flex-style-column icon-layout icon-layout-300 icon-layout-sec"
            @click="toRoute('chronic-disease')">
            <img class="icon" src="../../assets/images/icon-mine-manage.svg" />
            <div class="icon-title">自我管理</div>
          </div>

          <div class="flex-style-column icon-layout icon-layout-200" @click="toRoute('popular-science')">
            <img class="icon" src="../../assets/images/icon-nation-rule.svg" />
            <div class="icon-title">国际规范</div>
          </div>

          <div class="flex-style-column icon-layout icon-layout-100 icon-layout-sec" @click="toRoute('aboutme')">
            <img class="icon" src="../../assets/images/icon-aboutme.svg" />
            <div class="icon-title">关于我们</div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      toRoute(name) {
        this.$router.push({
          name: name
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    overflow: hidden;
    height: 100vh;
    min-width: 75rem;
    min-height: 37.5rem;
    background-image: url('../../assets/images/home0722.jpg');
    background-size: cover;
    background-position: center;
  }

  .logo-img {
    width: 43.75rem;
    height: 6.625rem;
  }

  .layout {
    height: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .header-icon {
    width: 5rem;
    height: 5rem;
    margin-left: 2rem;
    cursor: pointer;
  }

  .content-layout {
    flex-grow: 1;
    height: 0;
    align-items: center;
    justify-content: center;
    margin-top: -5vh;
  }

  .title {
    font-size: 6.75rem;
    line-height: 8.75rem;
    font-weight: 900;
    color: white;
  }

  .icon-layout-600 {
    z-index: 600;
  }

  .icon-layout-500 {
    z-index: 500;
  }

  .icon-layout-400 {
    z-index: 400;
  }

  .icon-layout-300 {
    z-index: 300;
  }

  .icon-layout-200 {
    z-index: 200;
  }

  .icon-layout-100 {
    z-index: 100;
  }

  .icon-layout-container {
    margin-top: 5rem;
    width: 100%;
    justify-content: space-between;
  }

  .icon-layout {
    cursor: pointer;
    width: 11.25rem;
    height: 11.25rem;
    position: relative;
    align-items: center;
    margin-left: -1.75rem;
    /* 设置渐变 */
    background: linear-gradient(to right bottom,
        rgba(255, 255, 255, .6),
        rgba(255, 255, 255, .3),
        rgba(255, 255, 255, .2));
    /* 重点：使元素背景模糊化 */
    backdrop-filter: blur(20px);
    border-radius: 1.5rem;
    border: solid 1px white;
    box-shadow: 0 0.2rem 0.5rem rgba(0, 86, 180, 0.7);

    .icon-imagebg {
      width: 13.75rem;
      height: 13.75rem;
      position: absolute;
      z-index: 0;
      object-fit: contain;
    }

    .icon {
      width: 6rem;
      height: 6rem;
      margin-top: 1.25rem;
      position: relative;
    }

    .icon-title {
      font-size: 1.5rem;
      color: #FFFFFF;
      text-align: center;
      font-weight: 600;
      margin-top:0.75rem;
    }
  }

  .icon-layout:hover {
    z-index: 1000;

    .icon-title {
      color: #333333;
    }
  }

</style>
