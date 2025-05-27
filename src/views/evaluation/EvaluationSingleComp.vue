<template>
  <div class="flex-style-base container">
    <div v-if="pos > -1" class="exit-layout" @click="backRoll()">
      <span style="color:white;padding-left:10px;font-weight:bold;">{{ lang[currentLang].back }}</span>
    </div>
    <!-- RICA脑卒中风险评估，评测未来3、6、12个月风险概率。 -->
    <p v-if="pos == -1" class="text-content" style="margin: 0 1.5625rem;margin-top: 5rem;">风险概率模型（PROMISE模型）</p>
    <div class="start-text" v-if="pos == -1" @click="pos++">开始</div>
    <div v-if="pos == 0" class="tips">
      <span>现在您需要连续回答11个问题，时间大概在1-2分钟，请点击下一步正式进入评估。</span>
    </div>

    <div v-if="pos == 12" class="tips">
      <span>综合以上数据，风险概率是:{{ P }}</span>
    </div>

    <div v-if="pos === 1" class="item-question">
      <div class="title">1.低密度脂蛋白胆固醇</div>
      <div class="flex-style-base" style="justify-content: center;">
        <el-input v-model="dmdzdbdgc" class="input-style" clearable onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
          @blur="numberChange('dmdzdbdgc')">
        </el-input>
        <span></span>
      </div>
    </div>

    <div v-if="pos === 2" class="item-question">
      <div class="title">2.甘油三酯</div>
      <div class="flex-style-base" style="justify-content: center;">
        <el-input v-model="gysz" class="input-style" clearable onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
          @blur="numberChange('gysz')">
        </el-input>
        <span></span>
      </div>
    </div>

    <div v-if="pos === 3" class="item-question">
      <div class="title">3.高密度脂蛋白胆固醇</div>
      <div class="flex-style-base" style="justify-content: center;">
        <el-input v-model="gmdzdbdgc" class="input-style" clearable onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
          @blur="numberChange('gmdzdbdgc')">
        </el-input>
        <span></span>
      </div>
    </div>

    <div v-if="pos === 4" class="item-question">
      <div class="title">4.肌酐</div>
      <div class="flex-style-base" style="justify-content: center;">
        <el-input v-model="jg" class="input-style" clearable onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
          @blur="numberChange('jg')">
        </el-input>
        <span></span>
      </div>
    </div>

    <div v-if="pos === 5" class="item-question">
      <div class="title">5.尿酸</div>
      <div class="flex-style-base" style="justify-content: center;">
        <el-input v-model="ns" class="input-style" clearable onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
          @blur="numberChange('ns')">
        </el-input>
        <span></span>
      </div>
    </div>

    <div v-if="pos === 6" class="item-question">
      <div class="title">6.总胆固醇</div>
      <div class="flex-style-base" style="justify-content: center;">
        <el-input v-model="zdgc" class="input-style" clearable onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
          @blur="numberChange('zdgc')">
        </el-input>
        <span></span>
      </div>
    </div>

    <div v-if="pos === 7" class="item-question">
      <div class="title">7.血小板计数</div>
      <div class="flex-style-base" style="justify-content: center;">
        <el-input v-model="xxbjs" class="input-style" clearable onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
          @blur="numberChange('xxbjs')">
        </el-input>
        <span></span>
      </div>
    </div>

    <div v-if="pos === 8" class="item-question">
      <div class="title">8.性别</div>
      <el-radio-group v-model="xb" class="flex-style-base el-radio-group">
        <el-radio :label="0" class="content">男性</el-radio>
        <el-radio :label="1" class="content">女性</el-radio>
      </el-radio-group>
    </div>

    <div v-if="pos === 9" class="item-question">
      <div class="title">9.冠心病</div>
      <el-radio-group v-model="gxb" class="flex-style-base el-radio-group">
        <el-radio :label="0" class="content">没有</el-radio>
        <el-radio :label="1" class="content">有</el-radio>
      </el-radio-group>
    </div>

    <div v-if="pos === 10" class="item-question">
      <div class="title">10.吸烟</div>
      <el-radio-group v-model="xy" class="flex-style-base el-radio-group">
        <el-radio :label="0" class="content">没有</el-radio>
        <el-radio :label="1" class="content">有</el-radio>
      </el-radio-group>
    </div>

    <div v-if="pos === 11" class="item-question">
      <div class="title">11.海拔</div>
      <el-radio-group v-model="hb" class="flex-style-base el-radio-group">
        <el-radio :label="0" class="content">小于4500米</el-radio>
        <el-radio :label="1" class="content">大于等于4500米</el-radio>
      </el-radio-group>
    </div>
    <el-button-group class="btn-group">
      <el-button v-if="pos == 0" type="primary" @click="pos++">{{ lang[currentLang].next }}</el-button>
      <el-button v-if="pos == 1" type="primary" @click="pos--">{{ lang[currentLang].previous }}</el-button>
      <el-button v-if="pos > 1 && pos < 12" type="primary" icon="el-icon-arrow-left" @click="pos--">{{
        lang[currentLang].previousQuestion }}
      </el-button>
      <el-button v-if="pos > 0 && pos < 11" type="primary" @click="next">{{ lang[currentLang].nextQuestion }}<i
          class="el-icon-arrow-right el-icon--right"></i></el-button>
      <el-button v-if="pos == 11" type="primary" @click="startEvaluation">{{ lang[currentLang].start }}
      </el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  watch: {
  },
  computed: {
  },
  data() {
    return {
      pos: -1,
      dmdzdbdgc: null,
      gysz: null,
      gmdzdbdgc: null,
      jg: null,
      ns: null,
      zdgc: null,
      xxbjs: null,
      xb: null,
      gxb: null,
      xy: null,
      hb: null,
      P: '',
      isEvaluation: false,
      currentLang: 'cn',
      lang: {
        cn: {
          lang: 'EN',
          title: '症状性颅内动脉狭窄风险评估（PROMISE模型）',
          tips: '现在您需要连续回答9个问题，时间大概在1-2分钟，请点击下一步正式进入评估。',
          age: '年龄',
          y: '岁',
          height: '身高',
          cm: 'cm',
          weight: '体重',
          kg: 'Kg',
          lowDenty: '低密度脂蛋白',
          mmol: 'mmol/L',
          hypertension: '高血压',
          diabetesMellitus: '糖尿病',
          currentSmoking: '现在吸烟',
          symptomatiLocation: '症状性狭窄部位',
          anteriorCirculation: '前循环',
          posteriorCirculation: '后循环',
          stenosisOfTheQualifying: '责任血管狭窄程度',
          xiaoyu70: '狭窄程度小于70%',
          dayu70: '狭窄程度大于等于70%',
          yes: '是',
          no: '否',
          start: '开始',
          next: '下一步',
          previous: '上一步',
          nextQuestion: '下一题',
          previousQuestion: '上一题',
          back: '回退',
          probabilities3: '3个月缺血性卒中复发风险',
          probabilities6: '6个月缺血性卒中复发风险',
          probabilities12: '12个月缺血性卒中复发风险',
          hint1: '请输入年龄',
          hint2: '请输入身高',
          hint3: '请输入体重',
          hint4: '请输入低密度脂蛋白',
          hint5: '请选择是否有高血压',
          hint6: '请选择是否有糖尿病',
          hint7: '请选择现在吸烟',
          hint8: '请选择症状性责任血管',
          hint9: '请选择责任血管狭窄程度',
          resultText1: '综合以上数据，三个月的风险为',
          resultText2: '%，六个月的风险为',
          resultText3: '%，十二个月的风险为'
        },
        en: {
          lang: 'CN',
          title: 'Symptomatic Intracranial Atherosclerotic Stenosis Risk Assessment (PROMISE model)',
          tips: 'Now you need to answer 9 questions in a row, which will take about 1-2 minutes. Please click Next to officially enter the assessment.',
          age: 'Age',
          y: 'y',
          height: 'Height',
          cm: 'cm',
          weight: 'Weight',
          kg: 'Kg',
          lowDenty: 'Low-density lipoprotein cholesterol (LDL-C)',
          mmol: 'mmol/L',
          hypertension: 'Hypertension',
          diabetesMellitus: 'Diabetes mellitus',
          currentSmoking: 'Current smoking',
          symptomatiLocation: 'Location of symptomatic stenosis',
          anteriorCirculation: 'Anterior circulation',
          posteriorCirculation: 'Posterior circulation',
          stenosisOfTheQualifying: 'Degree of stenosis of the qualifying artery',
          xiaoyu70: '<70%',
          dayu70: '≥70%',
          yes: 'Yes',
          no: 'No',
          start: 'Start',
          next: 'Next',
          previous: 'Previous',
          nextQuestion: 'Next Question',
          previousQuestion: 'Previous Question',
          back: 'Back',
          probabilities3: '3-month ischaemic stroke recurrence probabilities',
          probabilities6: '6-month ischaemic stroke recurrence probabilities',
          probabilities12: '12-month ischaemic stroke recurrence probabilities',
          hint1: 'Please enter your age',
          hint2: 'Please enter your height',
          hint3: 'Please enter your weight',
          hint4: 'Please enter your low-density lipoprotein',
          hint5: 'Please select whether you have Hypertension',
          hint6: 'Please select whether you have diabetes',
          hint7: 'Please select current smoking',
          hint8: 'Please select the location of symptomatic stenosis',
          hint9: 'Please select the degree of stenosis of the qualifying artery',
          resultText1: 'Based on the above data, the risk for three months is ',
          resultText2: '%,The six-month risk is ',
          resultText3: '%,The twelve-month risk is '
        }
      }

    }
  },
  mounted() {
    let evaluationObj = { isEvaluation: false };
    this.isEvaluation = evaluationObj.isEvaluation || false;
    this.dmdzdbdgc = evaluationObj.dmdzdbdgc || null;
    this.gysz = evaluationObj.gysz || null;
    this.gmdzdbdgc = evaluationObj.gmdzdbdgc || null;
    this.jg = evaluationObj.jg || null;
    this.ns = evaluationObj.ns || null;
    this.zdgc = evaluationObj.zdgc || null;
    this.xxbjs = evaluationObj.xxbjs || null;
    this.xb = evaluationObj.xb !== undefined ? evaluationObj.xb : null;
    this.gxb = evaluationObj.gxb !== undefined ? evaluationObj.gxb : null;
    this.xy = evaluationObj.xy !== undefined ? evaluationObj.xy : null;
    this.hb = evaluationObj.hb !== undefined ? evaluationObj.hb : null;
    this.P = evaluationObj.P || '';
  },
  methods: {
    numberChange(name) {
      // if (name === 'age') {
      //   if (!this.age) {
      //     this.age = null
      //     return
      //   }
      //   const tempAge = this.age.toString().replace(/^(0+)|[^\d]+/g, '')
      //   if (!!tempAge) {
      //     const age = parseInt(tempAge)
      //     if (age > 90) {
      //       this.age = 90
      //     } else if (age < 35) {
      //       this.age = 35
      //     } else {
      //       this.age = age
      //     }
      //   }
      // } else if (name === 'height') {
      //   if (!this.height) {
      //     this.height = null
      //     return
      //   }
      //   const tempHeight = this.height.toString().replace(/^(0+)|[^\d]+/g, '')
      //   if (!!tempHeight) {
      //     const height = parseInt(tempHeight)
      //     if (height > 210) {
      //       this.height = 210
      //     } else if (height < 100) {
      //       this.height = 100
      //     } else {
      //       this.height = height
      //     }
      //   }
      // } else if (name === 'weight') {
      //   if (!this.weight) {
      //     this.weight = null
      //     return
      //   }
      //   const tempWeight = this.weight.toString().replace(/^(0+)|[^\d.]+/g, '')
      //   if (!!tempWeight) {
      //     const weight = parseFloat(tempWeight).toFixed(1)
      //     if (weight > 150) {
      //       this.weight = 150
      //     } else if (weight < 30) {
      //       this.weight = 30
      //     } else {
      //       this.weight = weight
      //     }
      //   }
      // } else if (name === 'dmdzdb') {
      //   if (!this.dmdzdb) {
      //     this.dmdzdb = null
      //     return
      //   }
      //   const tempDmdzdb = this.dmdzdb.toString().replace(/^(0+)|[^\d]+/g, '')
      //   if (!!tempDmdzdb) {
      //     const dmdzdb = parseFloat(tempDmdzdb).toFixed(2)
      //     if (dmdzdb > 300) {
      //       this.dmdzdb = 300
      //     } else if (dmdzdb < 30) {
      //       this.dmdzdb = 30
      //     } else {
      //       this.dmdzdb = dmdzdb
      //     }
      //   }
      // }
    },
    backRoll() {
      this.pos = -1;
      this.dmdzdbdgc = null
      this.gysz = null
      this.gmdzdbdgc = null
      this.jg = null
      this.ns = null
      this.zdgc = null
      this.xxbjs = null
      this.xb = null
      this.gxb = null
      this.xy = 0
      this.hb = 0
    },
    next() {
      if (!this.dmdzdbdgc && this.pos === 1) {
        this.$message.warning('请输入低密度脂蛋白胆固醇');
        return
      }
      if (!this.gysz && this.pos === 2) {
        this.$message.warning('请输入甘油三酯');
        return
      }
      if (!this.gmdzdbdgc && this.pos === 3) {
        this.$message.warning('请输入高密度脂蛋白胆固醇');
        return
      }

      if (!this.jg && this.pos === 4) {
        this.$message.warning('请输入肌酐');
        return
      }
      if (!this.ns && this.pos === 5) {
        this.$message.warning('请输入尿酸');
        return
      }
      if (!this.zdgc && this.pos === 6) {
        this.$message.warning('请输入总胆固醇');
        return
      }
      if (!this.xxbjs && this.pos === 7) {
        this.$message.warning('请输入血小板计数');
        return
      }

      if (!this.xb && this.xb !== 0 && this.pos === 8) {
        this.$message.warning('请选择性别');
        return
      }

      if (!this.gxb && this.gxb !== 0 && this.pos === 9) {
        this.$message.warning('请选择是否有冠心病');
        return
      }

      if (!this.xy && this.xy !== 0 && this.pos === 10) {
        this.$message.warning('请选择是否吸烟');
        return
      }

      if (!this.hb && this.hb !== 0 && this.pos === 11) {
        this.$message.warning('请选择海拔');
        return
      }
      this.pos = this.pos + 1
    },
    dmdzdbInput(value) {
      // console.log(value, 'ws_log')
      // // 使用正则表达式匹配数字和两位小数
      // const regex = /^(\d+)?(\.\d{1,2})?$/;
      // // 如果输入值不符合规定的格式，则将inputValue重置为上一次的值
      // if (!regex.test(value)) {
      //   this.dmdzdb = this.dmdzdb.substring(0, value.length - 1);
      // }
    },
    startEvaluation() {
      const numerator = 1;
      const denominator = 1 + Math.exp(-(-1.2309820357780716 +
        0.21772534682758496 * this.dmdzdbdgc +
        0.23760962918195677 * this.gysz +
        0.24743569026902607 * this.gmdzdbdgc +
        (-0.0035979312835237856) * this.jg +
        0.002680462292138745 * this.ns +
        0.1534452039484011 * this.zdgc +
        (-0.008746875529063875) * this.xxbjs +
        (-0.27654875220079966) * this.xb +
        2.197140344508635 * this.gxb +
        0.7453897600501926 * this.hb +
        0.8033649703372542 * this.xy));

      this.P = (numerator / denominator).toFixed(4)


      const evaluationObj = {
        isEvaluation: true,
        dmdzdbdgc: this.dmdzdbdgc,
        gysz: this.gysz,
        gmdzdbdgc: this.gmdzdbdgc,
        jg: this.jg,
        ns: this.ns,
        zdgc: this.zdgc,
        xxbjs: this.xxbjs,
        xb: this.xb,
        gxb: this.gxb,
        xy: this.xy,
        hb: this.hb,
      };
      this.isEvaluation = true;
      this.pos = 12;
      localStorage.setItem('evaluationObj', JSON.stringify(evaluationObj))
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

.start-text:hover {
  opacity: 0.8;
}

.lang-layout {
  position: absolute;
  top: 0;
  right: 0;
  border-bottom-left-radius: 1rem;
  text-align: center;
  cursor: pointer;
  font-size: 1rem;
  color: black;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  font-weight: bold;
}

.lang-layout:hover {
  color: #2687D4;
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
  width: 12rem;
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
  font-weight: bold;
}

.content {
  // width: 5rem;
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

.item-question {
  // margin: 20px 0;
  // height: 300px;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;
  // display: flex;
}
</style>
