<template>
  <el-dialog :title="title" :visible.sync="dialogVisible" width="75%" :before-close="handleClose" center>
    <div v-for="(item, index) in fieldList">
      <div v-if="index != 0" class="divider"></div>
      <div class="title">{{ item.title }}</div>
      <el-radio-group v-model="dataObj[item.flag]" class="flex-style-base"
        style="margin-left: 3.375rem;margin-top: 0.5rem;">
        <el-radio v-for="(field, i) in item.codegroup" :label="field.score" class="content">{{ field.content
          }}</el-radio>
      </el-radio-group>
    </div>

    <div class="flex-style-column">
      <el-button type="primary" class="btn" :disabled="!btnEnabled" @click="startEvaluation">点击预测</el-button>
    </div>
    <span v-if="showResult && btnEnabled" class="result-text">评测结果</span>
    <div v-if="showResult && btnEnabled" class="result-content">
      <span>您的总评分值为：{{ score }}分，对应的10年卒中发病风险为：{{ per }}%。</span>
    </div>

  </el-dialog>
</template>

<script>
export default {
  watch: {
    isMan(v, o) {
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
    }
  },
  data() {
    return {
      dialogVisible: false,
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
    show(isMan) {
      this.isMan = isMan
      this.dialogVisible = true
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
      this.showResult = false
    },
    handleClose() {
      this.dialogVisible = false
    },
    startEvaluation() {
      var sumScore = 0
      Object.keys(this.dataObj).forEach(key => {
        sumScore += this.dataObj[key]
      })
      this.score = sumScore
      if (this.isMan) {
        this.per = sumScore < 30 ? this.manRule[sumScore] : 88
      } else {
        this.per = sumScore < 27 ? this.manRule[sumScore] : 84
      }
      this.showResult = true

    }
  }
}
</script>

<style lang="scss">
.content {
  .el-radio__label {
    font-size: 1rem;
  }
}
</style>

<style scoped lang="scss">
.divider {
  margin-left: 1.5rem;
  height: 0.0625rem;
  background-color: #E2E2E2;
  margin-top: 0.5rem;
}

.title {
  margin-left: 1.5rem;
  font-size: 1.125rem;
  color: #333333;
  line-height: 2.5rem;
  margin-top: 1.5rem;
}

.content {
  width: 5rem;
  line-height: 2rem;
  margin-top: 0.5rem;
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
  color: #333333;
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
