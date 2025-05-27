<template>
  <div class="content-container">
    <div class="card-layout">
      <img class="big-banner" src="../../assets/images/aboutme.jpg" />
      <TitleBroadcast title="关于我们" style="margin-top: 0.5rem;"></TitleBroadcast>
      <p class="content-text">
        随着国家人口老龄化的趋势加快，脑卒中已成为我国第一位死亡原因，也是中国成年人残疾的首要原因。脑卒中具有发病率高、死亡率高和致残率高的特点，而我国慢病管理的达标率低，自我管理能力弱，尤其是近年来空巢老人的卒中问题愈发严重。为了响应《“健康中国2030”规划纲要》，全面推进健康中国建设，提高人民健康水平。在国家的“百万减残”工程的支持下加强老年健康工作，我们建立了国家脑卒中健康促进平台，以公益服务为主，以“产-学-研”相结合的产业化模式，切实解决老年健康问题，促进老年健康领域产业技术创新可持续发展。
      </p>
    </div>
    <div style="height: 2.8125rem;"></div>
  </div>
</template>

<script>
  import TitleBroadcast from '../comp/TitleBroadcast.vue'
  export default {
    components: {
      TitleBroadcast
    }
  }
</script>

<style lang="scss" scoped>
  .big-banner {
    width: 72rem;
    height: 23.75rem;
    margin: 1.5rem;
  }

  .card-layout {
    background-color: white;
    padding-bottom: 2.5rem;
    background: #FFFFFF;
    box-shadow: 0 0.25rem 0.75rem 0 rgba(2, 80, 180, 0.16);
    border-radius: 0.125rem;
  }

  .layout-content {
    background: #FFFFFF;
    box-shadow: 0 4px 12px 0 rgba(2, 80, 180, 0.16);
    border-radius: 2px;
    padding-top: 3rem;
  }

  .content-text {
    margin: 0 1.5rem;
    margin-top: 1rem;
    font-size: 1.25rem;
    color: #333333;
    text-align: justify;
    line-height: 2.25rem;
  }
</style>
