<template>
  <div class="flex-style-column layout">
    <div class="content-container">
      <img class="big-banner" src="../../assets/images/zuzhongpingce.png" />
    </div>
    <div style="padding-top: 1.625rem;">
      <div class="layout-content content-container">
        <title-broadcast class="scroll-dom scroll-dom-0" :showBC="false" :showIcon="false" title="早期如何发现脑卒中">
        </title-broadcast>
        <img style="width: calc(100% - 3rem);margin: 1rem 1.5rem;" src="../../assets/images/vedio_big.png" />

        <title-broadcast class="scroll-dom scroll-dom-1" title="高原红细胞增多症评估" style="margin-top: 1.5rem;">
        </title-broadcast>
        <!-- <p class="text-content" style="margin: 0 1.5625rem;margin-top: 1rem;">改良的弗明汉卒中量表，是最早、应用最广泛的识别脑卒中发生、复发的工具，用于预测未来10年卒中发病风险。能够早期识别脑卒中高危人群，对及早预防具有重要意义。</p> -->

        <div class="flex-style-base scale-layout">
          <EvaluationSingleComp></EvaluationSingleComp>
          <!-- <div class="scale-item">
            <img style="width:34.545rem;height: 25.48rem;" src="../../assets/images/zuzhongman.png" />
            <div class="flex-style-base scale-item-layout">
              <div class="label">改良的弗明汉卒中量表(男性)</div>
              <div @click="enterEvaluation(true)" class="enter-layout">点击进入评估</div>
            </div>
          </div>
          <div class="scale-item">
            <img style="width:34.545rem;height: 25.48rem;" src="../../assets/images/zuzhongwoman.png" />
            <div class="flex-style-base scale-item-layout">
              <div class="label">改良的弗明汉卒中量表(女性)</div>
              <div @click="enterEvaluation(false)" class="enter-layout">点击进入评估</div>
            </div>
          </div> -->
        </div>

        <div class="references">参考文献</div>
        <div class="divider"></div>
        <p class="text-content" style="color: #666666;font-size: 1rem;margin-top: 0.5rem;">● 中国缺血性脑卒中风险评估量表使用专家共识</p>
        <div style="height: 3.125rem;"></div>
      </div>
    </div>
    <div style="height: 3.25rem;background-color: #F7FCFF;"></div>
    <EvaluationDialog ref="dialog"></EvaluationDialog>
  </div>
</template>

<script>
import TitleBroadcast from '../comp/TitleBroadcast.vue'
import EvaluationDialog from './EvaluationDialog.vue'
import EvaluationComp from './EvaluationComp'
import EvaluationSingleComp from './EvaluationSingleComp'
export default {
  components: {
    TitleBroadcast,
    EvaluationDialog,
    EvaluationComp,
    EvaluationSingleComp
  },
  data() {
    return {
      isSingle: false,
      active: 0,
      titleList: [{
        title: '1 如何早期发现脑卒'
      },
      {
        title: '2 我未来得脑卒中...'
      }
      ]
    }
  },
  methods: {
    enterEvaluation(isMan) {
      this.$refs.dialog.show(isMan)
    },
    startEvaluation() {
      var sumScore = 0
      Object.keys(this.dataObj).forEach(key => {
        sumScore += this.dataObj[key]
      })
      this.score = sumScore
      this.per = this.manRule[sumScore]
      console.log(sumScore)
      this.showResult = true
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

  .layout-content {
    background: #FFFFFF;
    box-shadow: 0 4px 12px 0 rgba(2, 80, 180, 0.16);
    border-radius: 2px;
    padding-top: 3rem;
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

  .pointer:hover {
    background-color: #F6F7F8;
    border-radius: 0.25rem;
  }

}

.scale-layout {
  margin-left: 1.5625rem;
  margin-right: 1.5625rem;
  margin-top: 1rem;
  justify-content: space-around;
  position: relative;

  .exchange-btn {
    position: absolute;
    right: 0;
    top: 0;
    padding: 6px 12px;
  }

  .exchange-btn:hover {
    cursor: pointer;
    color: #117BD0;
  }

  .scale-item {
    box-shadow: 0.125rem 0.125rem 0.1875rem #BEBEBE;
    position: relative;

    .scale-item-layout {
      height: 52px;
      justify-content: space-between;
      padding: 0 1rem;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: white;

      .label {
        font-size: 1.25rem;
        color: #333333;
        font-weight: 600;
        width: 0;
        flex-grow: 1;
      }

      .enter-layout {
        width: 8.75rem;
        height: 2.5rem;
        border-radius: 1.25rem;
        background-color: #117BD0;
        text-align: center;
        line-height: 2.5rem;
        color: white;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
}

.references {
  margin-top: 3.5rem;
  font-size: 1.75rem;
  color: #333333;
  font-weight: 600;
  margin-left: 1.5625rem;
  line-height: 2.5rem;
}

.divider {
  height: 0.0625rem;
  background-color: #BEBEBE;
  margin-top: 0.5rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.sticky-layout {
  width: 11rem;
  margin-top: 3rem;
  margin-left: 1.5rem;
  align-self: flex-start;
  margin-right: 1.5rem;

  .hollow-circle {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.25rem;
    border: solid 0.0625rem #BEBEBE;
  }

  .v-line {
    width: 0.5px;
    background-color: #BEBEBE;
    height: 0px;
    flex-grow: 1;
  }

  .point {
    width: 0.5rem;
    height: 0.5rem;
    background-color: #BEBEBE;
    border-radius: 0.25rem;
    border: solid 0.0625rem white;
  }
}
</style>
