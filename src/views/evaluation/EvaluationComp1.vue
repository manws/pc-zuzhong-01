<template>
  <div class="flex-style-base container">
    <div v-if="pos > -3" class="exit-layout" @click="pos = -3">
      <span style="color:white;padding-left:10px;font-weight:bold;">回退</span>
      <!-- <img src="../../assets/images/back-white.svg" /> -->
      <!-- <img class="exit-hover" src="../../assets/images/back-white.svg" /> -->
    </div>
    <p v-if="pos == -3" class="text-content" style="margin: 0 1.5625rem;margin-top: 1rem;">
      改良的弗明汉卒中量表，是最早、应用最广泛的识别脑卒中发生、复发的工具，用于预测未来10年卒中发病风险。能够早期识别脑卒中高危人群，对及早预防具有重要意义。</p>
    <div class="start-text" v-if="pos == -3" @click="pos++">开始评测</div>
    <div v-if="pos == -2" class="tips">
      <span>现在您需要连续回答8个问题，时间大概在1-2分钟，请点击下一步正式进入评估。</span>
    </div>

    <div v-if="pos == 100" class="tips">
      <span>综合以上数据，您目前的总分为{{ score }}分，10年卒中发生风险为{{ per }}%。目前处于{{ riskText }}风险。详情请结合临床，如需风险指导请咨询健康管理师。</span>
    </div>

    <div v-if="pos == -1">
      <div class="title">请问您的性别是？</div>
      <el-radio-group v-model="sexValue" class="flex-style-base el-radio-group">
        <el-radio :label="1" class="content">男</el-radio>
        <el-radio :label="2" class="content">女</el-radio>
      </el-radio-group>
    </div>

    <div v-if="index == pos" v-for="(item, index) in fieldList">
      <div class="title">{{ item.title }}</div>
      <el-radio-group v-model="dataObj[item.flag]" class="flex-style-base el-radio-group">
        <div v-if="pos == 0" class="flex-style-base" style="justify-content: center;">
          <el-input v-model="age" class="input-style" clearable onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
            @change="ageChange">
          </el-input>
          <span>岁</span>
        </div>

        <div v-else-if="pos == 1" class="flex-style-base" style="justify-content: center;">
          <el-input v-model="wzlssy" class="input-style" clearable onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
            @change="wzlssyChange">
          </el-input>
        </div>

        <div v-else-if="pos == 2" class="flex-style-base" style="justify-content: center;">
          <el-input v-model="zlhssy" class="input-style" clearable onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
            @change="zlhssyChange">
          </el-input>
        </div>

        <el-radio v-else v-for="(field, i) in item.codegroup" :label="field.score" class="content">{{ field.content }}
        </el-radio>
      </el-radio-group>
    </div>

    <el-button-group class="btn-group">
      <el-button v-if="pos == -2 || pos == -1" type="primary" @click="pos++">下一步</el-button>
      <el-button v-if="pos > -1 && pos < fieldList.length" type="primary" icon="el-icon-arrow-left" @click="pos--">上一题
      </el-button>
      <el-button v-if="pos > -1 && pos < fieldList.length - 1" type="primary" @click="pos++">下一题<i
          class="el-icon-arrow-right el-icon--right"></i></el-button>
      <el-button v-if="pos == fieldList.length - 1" type="primary" :disabled="!btnEnabled" @click="startEvaluation">开始评测
      </el-button>
    </el-button-group>

  </div>
</template>

<script>
export default {
  watch: {
    pos(v, o) {
      if (v == -3) {
        this.sexValue = 1
        this.reset()
      }
    },
    sexValue(v, o) {
      this.isMan = v == 1
    },
    isMan(v, o) {
      this.reset()
    },
    dataObj: {
      handler(v, o) {
        this.showResult = false
      },
      deep: true
    }
  },
  computed: {
    title: function () {
      if (!this.isMan) {
        return '弗明汉卒中量表(女性)'
      }
      return '弗明汉卒中量表(男性)'
    },
    fieldList: function () {
      if (this.isMan) {
        return this.manFiledList
      }
      return this.womanFiledList
    },
    btnEnabled: function () {
      var isEnabled = true
      if (this.dataObj)
        Object.keys(this.dataObj).forEach(key => {
          if (!this.dataObj[key] && this.dataObj[key] != 0) {
            isEnabled = false
          }
        })
      return isEnabled
    },
    riskText: function () {
      if (this.score < 30) {
        return '轻度'
      } else if (this.score < 50) {
        return '中度'
      } else {
        return '高度'
      }
    }
  },
  data() {
    return {
      sexValue: 1,
      age: null,
      wzlssy: null,
      zlhssy: null,
      pos: -3,
      isMan: true,
      dataObj: {
        age: null,
        wzlssy: null,
        zlhssy: null,
        tnb: null,
        xy: null,
        xxgjb: null,
        xfxc: null,
        zxsfh: null
      },
      score: 0,
      per: 0,
      showResult: false,
      manRule: {
        1: 3,
        2: 3,
        3: 4,
        4: 4,
        5: 5,
        6: 5,
        7: 6,
        8: 7,
        9: 8,
        10: 10,
        11: 11,
        12: 13,
        13: 15,
        14: 17,
        15: 20,
        16: 22,
        17: 26,
        18: 29,
        19: 33,
        20: 37,
        21: 42,
        22: 47,
        23: 52,
        24: 57,
        25: 63,
        26: 68,
        27: 74,
        28: 79,
        29: 84,
        30: 88
      },
      womanRule: {
        0: 0,
        1: 1,
        2: 1,
        3: 2,
        4: 2,
        5: 2,
        6: 3,
        7: 4,
        8: 4,
        9: 5,
        10: 6,
        11: 8,
        12: 9,
        13: 11,
        14: 13,
        15: 16,
        16: 19,
        17: 23,
        18: 27,
        19: 32,
        20: 37,
        21: 43,
        22: 50,
        23: 57,
        24: 64,
        25: 71,
        26: 78,
        27: 84
      },
      manFiledList: [{
        title: '1. 您的年龄(岁)？',
        flag: 'age',
        codegroup: [{
          content: '57以下',
          score: 0
        }, {
          content: '57-59',
          score: 1
        }, {
          content: '60-62',
          score: 2
        }, {
          content: '63-65',
          score: 3
        }, {
          content: '66-68',
          score: 4
        }, {
          content: '69-72',
          score: 5
        }, {
          content: '73-75',
          score: 6
        }, {
          content: '76-78',
          score: 7
        }, {
          content: '79-81',
          score: 8
        }, {
          content: '82-84',
          score: 9
        }, {
          content: '84以上',
          score: 10
        }]
      }, {
        title: '2. 您未治疗收缩压(mmHg)？',
        flag: 'wzlssy',
        codegroup: [{
          content: '106以下',
          score: 0
        }, {
          content: '106-115',
          score: 1
        }, {
          content: '116-125',
          score: 2
        }, {
          content: '126-135',
          score: 3
        }, {
          content: '136-145',
          score: 4
        }, {
          content: '146-155',
          score: 5
        }, {
          content: '156-165',
          score: 6
        }, {
          content: '166-175',
          score: 7
        }, {
          content: '176-185',
          score: 8
        }, {
          content: '186-195',
          score: 9
        }, {
          content: '195以上',
          score: 10
        }]
      }, {
        title: '3. 您治疗后收缩压(mmHg)？',
        flag: 'zlhssy',
        codegroup: [{
          content: '106以下',
          score: 0
        }, {
          content: '106-112',
          score: 1
        }, {
          content: '113-117',
          score: 2
        }, {
          content: '118-123',
          score: 3
        }, {
          content: '124-129',
          score: 4
        }, {
          content: '130-135',
          score: 5
        }, {
          content: '136-142',
          score: 6
        }, {
          content: '143-150',
          score: 7
        }, {
          content: '151-161',
          score: 8
        }, {
          content: '162-176',
          score: 9
        }, {
          content: '176以上',
          score: 10
        }]
      }, {
        title: '4. 您是否有糖尿病？',
        flag: 'tnb',
        codegroup: [{
          content: '是',
          score: 2
        }, {
          content: '否',
          score: 0
        }]
      }, {
        title: '5. 您是否吸烟？',
        flag: 'xy',
        codegroup: [{
          content: '是',
          score: 3
        }, {
          content: '否',
          score: 0
        }]
      }, {
        title: '6. 您是否有心血管疾病？（心血管疾病包括心肌梗死、心绞痛、冠状动脉功能不全、间歇性跛行、充血性心力衰竭等）',
        flag: 'xxgjb',
        codegroup: [{
          content: '是',
          score: 4
        }, {
          content: '否',
          score: 0
        }]
      }, {
        title: '7. 您是否心房纤颤？',
        flag: 'xfxc',
        codegroup: [{
          content: '是',
          score: 4
        }, {
          content: '否',
          score: 0
        }]
      }, {
        title: '8. 您是否左心室肥厚？（左心室肥厚指心电图诊断的心室肥厚）',
        flag: 'zxsfh',
        codegroup: [{
          content: '是',
          score: 5
        }, {
          content: '否',
          score: 0
        }]
      }],
      womanFiledList: [{
        title: '1. 您的年龄(岁)？',
        flag: 'age',
        codegroup: [{
          content: '57以下',
          score: 0
        }, {
          content: '57-59',
          score: 1
        }, {
          content: '60-62',
          score: 2
        }, {
          content: '63-64',
          score: 3
        }, {
          content: '65-67',
          score: 4
        }, {
          content: '68-70',
          score: 5
        }, {
          content: '71-73',
          score: 6
        }, {
          content: '74-76',
          score: 7
        }, {
          content: '77-78',
          score: 8
        }, {
          content: '79-81',
          score: 9
        }, {
          content: '81以上',
          score: 10
        }]
      }, {
        title: '2. 您未治疗收缩压(mmHg)？',
        flag: 'wzlssy',
        codegroup: [{
          content: '95以下',
          score: 0
        }, {
          content: '95-106',
          score: 1
        }, {
          content: '107-118',
          score: 2
        }, {
          content: '119-130',
          score: 3
        }, {
          content: '131-143',
          score: 4
        }, {
          content: '144-155',
          score: 5
        }, {
          content: '156-167',
          score: 6
        }, {
          content: '168-180',
          score: 7
        }, {
          content: '181-192',
          score: 8
        }, {
          content: '193-204',
          score: 9
        }, {
          content: '204以上',
          score: 10
        }]
      }, {
        title: '3. 您治疗后收缩压(mmHg)？',
        flag: 'zlhssy',
        codegroup: [{
          content: '95以下',
          score: 0
        }, {
          content: '95-106',
          score: 1
        }, {
          content: '107-113',
          score: 2
        }, {
          content: '114-119',
          score: 3
        }, {
          content: '120-125',
          score: 4
        }, {
          content: '126-131',
          score: 5
        }, {
          content: '132-139',
          score: 6
        }, {
          content: '140-148',
          score: 7
        }, {
          content: '149-160',
          score: 8
        }, {
          content: '161-204',
          score: 9
        }, {
          content: '204以上',
          score: 10
        }]
      }, {
        title: '4. 您是否有糖尿病？',
        flag: 'tnb',
        codegroup: [{
          content: '是',
          score: 3
        }, {
          content: '否',
          score: 0
        }]
      }, {
        title: '5. 您是否吸烟？',
        flag: 'xy',
        codegroup: [{
          content: '是',
          score: 3
        }, {
          content: '否',
          score: 0
        }]
      }, {
        title: '6. 您是否有心血管疾病？（心血管疾病包括心肌梗死、心绞痛、冠状动脉功能不全、间歇性跛行、充血性心力衰竭等）',
        flag: 'xxgjb',
        codegroup: [{
          content: '是',
          score: 2
        }, {
          content: '否',
          score: 0
        }]
      }, {
        title: '7. 您是否心房纤颤？',
        flag: 'xfxc',
        codegroup: [{
          content: '是',
          score: 6
        }, {
          content: '否',
          score: 0
        }]
      }, {
        title: '8. 您是否左心室肥厚？（左心室肥厚指心电图诊断的心室肥厚）',
        flag: 'zxsfh',
        codegroup: [{
          content: '是',
          score: 4
        }, {
          content: '否',
          score: 0
        }]
      }]
    }
  },
  methods: {
    reset() {
      this.age = null
      this.wzlssy = null
      this.zlhssy = null
      this.score = 0
      this.per = 0
      this.dataObj = {
        age: null,
        wzlssy: null,
        zlhssy: null,
        tnb: null,
        xy: null,
        xxgjb: null,
        xfxc: null,
        zxsfh: null
      }
    },
    ageChange(e) {
      if (e == 0 || e == '' || e == undefined || e == null || e < 57) {
        this.dataObj.age = 0
        return
      }
      let cur = parseInt(e)
      if (this.isMan && cur > 84) {
        this.dataObj.age = 10
      } else if (!this.isMan && cur > 81) {
        this.dataObj.age = 10
      } else {
        this.fieldList[0].codegroup.forEach(item => {
          let content = item.content
          let arr = content.split('-')
          if (cur >= arr[0] && cur <= arr[1]) {
            this.dataObj.age = item.score
            console.log(arr)
          }
        })
      }
    },
    wzlssyChange(e) {
      if (e == 0 || e == '' || e == undefined || e == null || (this.isMan && e < 106) || (!this.isMan && e < 95)) {
        this.dataObj.wzlssy = 0
        return
      }
      let cur = parseInt(e)
      if (this.isMan && cur > 195) {
        this.dataObj.wzlssy = 10
      } else if (!this.isMan && cur > 204) {
        this.dataObj.wzlssy = 10
      } else {
        this.fieldList[1].codegroup.forEach(item => {
          let content = item.content
          let arr = content.split('-')
          if (cur >= arr[0] && cur <= arr[1]) {
            this.dataObj.wzlssy = item.score
            console.log(arr)
          }
        })
      }
    },
    zlhssyChange(e) {
      if (e == 0 || e == '' || e == undefined || e == null || (this.isMan && e < 106) || (!this.isMan && e < 95)) {
        this.dataObj.zlhssy = 0
        return
      }
      let cur = parseInt(e)
      if (this.isMan && cur > 176) {
        this.dataObj.zlhssy = 10
      } else if (!this.isMan && cur > 204) {
        this.dataObj.zlhssy = 10
      } else {
        this.fieldList[2].codegroup.forEach(item => {
          let content = item.content
          let arr = content.split('-')
          if (cur >= arr[0] && cur <= arr[1]) {
            this.dataObj.zlhssy = item.score
            console.log(arr)
            console.log(item)
          }
        })
      }
    },
    startEvaluation() {
      console.log(this.dataObj)
      var sumScore = 0
      Object.keys(this.dataObj).forEach(key => {
        sumScore += this.dataObj[key]
      })
      this.score = sumScore
      if (this.isMan) {
        this.per = sumScore < 30 ? this.manRule[sumScore] : 88
      } else {
        this.per = sumScore < 27 ? this.womanRule[sumScore] : 84
      }
      if (!this.per) {
        this.per = 0
      }
      this.pos = 100

    }
  }
}
</script>

<style lang="scss">
.container {
  .el-button--large {
    font-size: 2rem;
  }

  .el-radio__inner {
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    border-color: black;
  }
}

.content {
  .el-radio__label {
    font-size: 2rem;
    color: black;
  }
}

.input-style {
  input {
    border: none;
    border-bottom: solid 0.1rem #AFAFAF;
    border-radius: 0;
    font-size: 2rem;
    color: black;
    text-align: center;
    background-color: transparent;
  }
}
</style>

<style scoped lang="scss">
.container {
  border: solid 0.0625rem #DEDEDE;
  box-shadow: 0rem 0rem 0.1875rem #BEBEBE;
  position: relative;
  height: 25rem;
  width: 100%;
  justify-content: center;
  background-color: rgba(88, 88, 255, 0.1);
}

.start-text {
  bottom: 10%;
  position: absolute;
  font-size: 2.5rem;
  line-height: 6rem;
  width: 24rem;
  border: solid 0.25rem #DEDEDE;
  text-align: center;
  cursor: pointer;
  border-radius: 3rem;
  background-color: #2687D4;
  color: white;
  font-weight: bold;
}

.exit-layout {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 4rem;
  height: 4rem;
  border-top-left-radius: 4rem;
  background-color: rgba(38, 135, 212, 0.7);
  text-align: center;
  line-height: 4rem;
  cursor: pointer;
  font-size: 1.25rem;
  color: black;

  img {
    width: 2rem;
    height: 2rem;
  }

  .exit-normal {
    display: inline-block;
  }

  .exit-hover {
    display: none;
  }
}

.exit-layout:hover {
  background-color: rgba(38, 135, 212, 1);

  .exit-normal {
    display: none;
  }

  .exit-hover {
    display: inline-block;
  }
}

.tips {
  margin-top: 1rem;
  font-size: 2.5rem;
  color: black;
  letter-spacing: 0;
  line-height: 4.5rem;
  text-indent: 4.5rem;
  padding: 0 2rem;
  padding-bottom: 5rem;
}

.next-btn {
  bottom: 10%;
  position: absolute;
}

.text-content {
  margin-top: 1rem;
  font-size: 2.5rem;
  color: black;
  letter-spacing: 0;
  line-height: 4.5rem;
  text-indent: 4.5rem;
  align-self: flex-start;

  p {
    line-height: 4.5rem;
  }
}

.start-text:hover {
  opacity: 0.8;
}

.btn-group {
  bottom: 10%;
  position: absolute;
}

.el-radio-group {
  width: 100%;
  margin-top: 0.5rem;
  padding-bottom: 5rem;
  justify-content: center;
  text-align: center;
}

.input-style {
  width: 8rem;
  border: none;
}

.divider {
  margin-left: 1.5rem;
  height: 0.0625rem;
  background-color: #E2E2E2;
  margin-top: 0.5rem;
}

.title {
  margin-left: 2.5rem;
  font-size: 2rem;
  color: black;
  line-height: 3.5rem;
  margin-top: 2.5rem;
  font-weight: bold;
}

.content {
  width: 5rem;
  line-height: 2.5rem;
  margin-top: 2.5rem;
}

.btn {
  margin-left: 1.5rem;
  margin-top: 1.875rem;
  display: block;
  align-self: flex-end;
  right: 0;
}

.result-text {
  margin-left: 1.5rem;
  font-size: 1.25rem;
  color: black;
  line-height: 1.625rem;
  margin-top: 1.5rem;
  font-weight: 600;
}

.result-content {
  margin-left: 1.5rem;
  border: solid 1px #BEBEBE;
  padding: 1rem;
  height: 10rem;
  border-radius: 0.25rem;
  margin-top: 1rem;
  font-weight: normal;
  font-size: 1rem;
}
</style>
