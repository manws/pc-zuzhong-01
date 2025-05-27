<template>
  <div class="flex-style-column  layout">
    <div>
      <div class="layout-content content-container">
        <div class="flex-style-base zuzhong-container">
          <div class="china-layout">
            <div class="zuzhong-enter">
              <a href="http://39.97.242.35:18081/cvst/china_zuzhong.pdf" target="_blank">点击查看</a>
            </div>
          </div>

          <div class="nation-layout">
            <div class="zuzhong-enter" @click="showPdfDialog">
              <a href="http://39.97.242.35:18081/cvst/nation_zuzhong.pdf" target="_blank">点击查看</a>
            </div>
          </div>
        </div>


        <title-broadcast class="scroll-dom scroll-dom-0" title="脑卒中现状"></title-broadcast>
        <div class="flex-style-base" style="align-items: flex-start;margin-left: 1.5625rem;">
          <p class="text-content" style="margin-right: 1.5rem;">
            脑卒中是世界各国的主要致死和致残性疾病，我国成人终身卒中患病风险高达39.3%，患病率和复发率居世界首位。更为严峻的是，脑卒中发生后，70%以上的患者会出现终身残疾。
          </p>
          <img style="width: 17.1875rem;height: 9.6875rem;margin-top: 1rem;margin-right: 1.5rem;"
            src="../../assets/images/vedio_small.png" />
        </div>

        <title-broadcast class="scroll-dom scroll-dom-1" title="什么是脑卒中" style="margin-top: 2.5rem;">
        </title-broadcast>
        <div class="flex-style-base" style="align-items: flex-start;margin-left: 1.5625rem;">
          <div class="text-content" style="margin-right: 1.5rem;">
            <p>脑卒中，别名：“脑中风”、“脑血管意外”。包括出血性脑卒中和缺血性脑卒中两大类。</p>
            <p style="font-weight: bold;margin-top: 1rem;">1、高血压脑出血</p>
            <p style="margin-top: 0.5rem;">
              常常是因为脑血管突然破裂，血液直接进入大脑组织，造成患者偏瘫、失语、严重者甚至昏迷等一系列临床表现。脑出血发生后30天内的死亡率高达35-52%。复发后的死亡率超过50%。1年后仅有约20%的脑出血患者恢复良好，基本恢复正常的工作和生活。
            </p>

            <p style="font-weight: bold;margin-top: 1rem;">2、脑梗死</p>
            <p style="margin-top: 0.5rem;">
              俗称“脑血栓”，占所有脑卒中的80%。脑组织需要脑血管来提供血液，如同秧苗需要沟渠灌溉一样。然而，在某些情况下（例如：房颤导致血栓脱落，血栓随血液流动堵塞小血管），当脑血管被堵塞时，就会导致脑组织相应部位的缺血、缺氧、坏死，致使患者出现肢体瘫痪、言语障碍等一系列神经功能症状，称之为脑梗死。
            </p>
          </div>

          <div>
            <img style="width: 17.1875rem;height: 9.0625rem;" src="../../assets/images/naochuxue.png" />
            <p class="photo-text">高血压脑出血</p>
            <img style="width: 17.1875rem;height: 9.0625rem;margin-top: 1rem;margin-right: 1.5rem;"
              src="../../assets/images/naogengsi.png" />
            <p class="photo-text">脑梗死</p>
          </div>
        </div>

        <p class="text-content" style="margin-top: 0.5rem;margin-left: 1.5625rem;margin-right: 1.5rem;">
          首次脑梗死发生后，约20%的患者在30天内死亡。约30%的患者预后较差，包括抑郁、无法正常行走和社会功能障碍等，长期依赖他人照顾，对患者和家庭有严重影响。约50%的轻型脑卒中患者恢复较好，但仍有较高的向严重卒中转化风险和复发风险。
        </p>

        <title-broadcast class="scroll-dom scroll-dom-2" title="脑卒中有哪些表现" style="margin-top: 2.5rem;">
        </title-broadcast>
        <div style="align-items: flex-start;margin-left: 1.5625rem;margin-right: 1.5rem;">
          <p class="text-content">大脑是人体的司令部，不同部位的脑组织执行不同的功能。不同部位的脑组织有对应的脑血管供血。所以不同部位和范围的血管堵塞会产生不同的表现和症状。</p>
          <p class="text-content" style="margin-top: 0;">脑卒中最常见的表现有：突发的言语不清、肢体无力、肢体麻木、视物不清、口眼歪斜等……</p>
          <p class="text-content" style="margin-top: 0;">
            如果支配言语脑组织的血管堵塞，就会导致言语不清或不能言语。支配运动区脑组织的血管堵塞，就会导致肢体瘫痪。支配感觉脑组织的血管堵塞，就会导致肢体麻木或感觉异常。支配视觉脑组织的血管堵塞，就会导致视物不清……
          </p>
        </div>

        <title-broadcast class="scroll-dom scroll-dom-3" title="为什么会得脑卒中" style="margin-top: 2.5rem;">
        </title-broadcast>
        <div class="flex-style-base" style="align-items: flex-start;margin-left: 1.5625rem;">
          <div class="text-content" style="margin-right: 1.5rem;">
            <p>曾有一项研究显示，来自全世界32个国家的学者，共同努力了8年，对几万人的数据进行了详细的随访和研究，发现了10项导致脑卒中的高危因素，并且确定这10项高危因素可以解释90%以上的脑卒中。</p>
            <p>
              也就是说，如果您做到了以下10点内容，就可以预防90%以上的脑卒中发生的可能性。即：控制血压、血糖在理想水平、戒烟、每周规律进行体育锻炼、健康饮食、积极乐观的心态、避免肥胖、拒绝过度饮酒、心功能指标及血脂正常。
            </p>
          </div>
          <img style="width: 17.1875rem;height: 9.6875rem;margin-right: 1.5rem;"
            src="../../assets/images/vedio_big.png" />
        </div>

        <div class="refence-text">参考文献</div>
        <div class="divider"></div>
        <p class="text-content" style="color: #666666;font-size: 1rem;">● N Engl J Med 2018;379:2429-37.</p>
        <p class="text-content refence-text-content">● 中国急性缺血性脑卒中诊治指南2018</p>
        <p class="text-content refence-text-content">● N Engl J Med 2018;379:2429-37.</p>
        <p class="text-content refence-text-content">● 中国脑卒中防治报告2021</p>
        <p class="text-content refence-text-content">● 贾建平.《神经病学》第8版. 北京，人民卫生出版社, 2018.</p>
        <p class="text-content refence-text-content">● Lancet. 2016 Aug 20;388(10046):761-75
        </p>
        <div style="height: 3.125rem;"></div>
      </div>
    </div>
    <div style="height: 3.25rem;background-color: #F7FCFF;"></div>
  </div>
</template>

<script>
  import TitleBroadcast from '../comp/TitleBroadcast.vue'
  export default {
    components: {
      TitleBroadcast
    },
    data() {
      return {
        active: 0,
        titleList: [{
            title: '1 脑卒中现状'
          },
          {
            title: '2 什么是脑卒中'
          },
          {
            title: '3 脑卒中有哪些表现'
          },
          {
            title: '4 为什么会得脑卒中'
          }
        ]
      }
    },
    methods: {
      showPdfDialog() {
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layout {

    .big-banner {
      width: 100%;
      height: 24.375rem;
    }

    .zuzhong-container {
      padding: 1.5rem 1.5rem 2.5rem 1.5rem;
      justify-content: space-between;

      .china-layout {
        position: relative;
        width: 35.25rem;
        height: 19.875rem;
        background-image: url(../../assets/images/china-zuzhong.png);
        background-repeat: no-repeat;
      }

      .nation-layout {
        position: relative;
        width: 35.25rem;
        height: 19.875rem;
        background-image: url(../../assets/images/nation-zuhong.png);
        background-repeat: no-repeat;
      }

      .zuzhong-enter {
        width: 14.875rem;
        height: 4.375rem;
        line-height: 4.375rem;
        font-size: 2.5rem;
        color: #006ABF;
        font-weight: 600;
        background-color: white;
        box-shadow: 0 0.125rem 0.75rem 0.0625rem rgba(0, 76, 150, 0.60);
        border-radius: 2.1875rem;
        margin-top: 12.9375rem;
        margin-left: 2.3125rem;
        text-align: center;
      }

    }

    .layout-content {
      background: #FFFFFF;
      box-shadow: 0 4px 12px 0 rgba(2, 80, 180, 0.16);
      border-radius: 2px;
    }

    .text-content {
      margin-top: 1rem;
      font-size: 1.25rem;
      color: #333333;
      letter-spacing: 0;
      line-height: 2.25rem;
      text-indent: 2.5rem;

      p {
        line-height: 2.25rem;
      }
    }

    .refence-text-content {
      color: #666666;
      font-size: 1rem;
      margin-top: 0;
    }

    .pointer:hover {
      background-color: #F6F7F8;
      border-radius: 0.25rem;
    }

  }

  .divider {
    height: 0.0625rem;
    background-color: #BEBEBE;
    margin-top: 0.5rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  .refence-text {
    margin-top: 3.5rem;
    font-size: 1.75rem;
    color: #333333;
    font-weight: bold;
    margin-left: 1.5625rem;
  }

  .photo-text {
    font-size: 1rem;
    color: #333333;
    height: 1.875rem;
    width: 17.1875rem;
    border: solid 0.0625rem #E8E8E8;
    line-height: 1.875rem;
    padding-left: 0.5rem;
    border-top: none;
  }
</style>
