<template>
  <div class="flex-style-column container">

    <div class="flex-style-base" style="margin: 20px 0">
      <div class="title">1.年龄</div>
      <div class="flex-style-base" style="justify-content: center;">
        <el-input v-model="age" class="input-style" clearable onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')">
        </el-input>
        <span>岁</span>
      </div>
    </div>

    <div class="flex-style-base" style="margin: 20px 0">
      <div class="title">2.身高</div>
      <div class="flex-style-base" style="justify-content: center;">
        <el-input v-model="height" class="input-style" clearable onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')">
        </el-input>
        <span>cm</span>
      </div>
    </div>

    <div class="flex-style-base" style="margin: 20px 0">
      <div class="title">3.体重</div>
      <div class="flex-style-base" style="justify-content: center;">
        <el-input v-model="weight" class="input-style" clearable onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')">
        </el-input>
        <span>kg</span>
      </div>
    </div>

    <div class="flex-style-base" style="margin: 20px 0">
      <div class="title">4.低密度脂蛋白</div>
      <div class="flex-style-base" style="justify-content: center;">
        <el-input v-model="dmdzdb" class="input-style" clearable onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')">
        </el-input>
        <span>kg</span>
      </div>
    </div>

    <div class="flex-style-base" style="margin: 20px 0">
      <div class="title">5.高血压</div>
      <el-radio-group v-model="gxy" class="flex-style-base el-radio-group">
        <el-radio :label="0" class="content">否</el-radio>
        <el-radio :label="1" class="content">是</el-radio>
      </el-radio-group>
    </div>

    <div class="flex-style-base" style="margin: 20px 0">
      <div class="title">6.糖尿病</div>
      <el-radio-group v-model="tnb" class="flex-style-base">
        <el-radio :label="0" class="content">否</el-radio>
        <el-radio :label="1" class="content">是</el-radio>
      </el-radio-group>
    </div>

    <div class="flex-style-base" style="margin: 20px 0">
      <div class="title">7.现在吸烟</div>
      <el-radio-group v-model="xzxy" class="flex-style-base el-radio-group">
        <el-radio :label="0" class="content">否</el-radio>
        <el-radio :label="1" class="content">是</el-radio>
      </el-radio-group>
    </div>

    <div class="flex-style-base" style="margin: 20px 0">
      <div class="title">8.症状性责任血管</div>
      <el-radio-group v-model="zzxzrxg" class="flex-style-base el-radio-group">
        <el-radio :label="0" class="content">前循环</el-radio>
        <el-radio :label="1" class="content">后循环</el-radio>
      </el-radio-group>
    </div>

    <div class="flex-style-base" style="margin: 20px 0">
      <div class="title">9.责任血管狭窄程度</div>
      <el-radio-group v-model="zrxgzcd" class="flex-style-base el-radio-group">
        <el-radio :label="0" class="content">狭窄程度小于 70%</el-radio>
        <el-radio :label="1" class="content">狭窄程度大于等于 70%</el-radio>
      </el-radio-group>
    </div>

    <el-button style="width: 200px; margin-left: 32px;" @click="startEvaluation">开始评测</el-button>
    <di v-if="isEvaluation" style="margin: 32px 32px  0 32px;">
      <div class="title" style="margin-left: 0;">评测结果：</div>
      <div style="margin-left: 50px;margin-top:  24px;">3个月风险概率：{{ R3 }} %</div>
      <div style="margin-left: 50px;">6个月风险概率：{{ R6 }} %</div>
      <div style="margin-left: 50px;">12个月风险概率：{{ R12 }} % </div>
    </di>
    <div style="height: 100px;"></div>
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
      age: null,
      height: null,
      weight: null,
      dmdzdb: null,
      gxy: null,
      tnb: null,
      xzxy: null,
      zzxzrxg: null,
      zrxgzcd: null,
      R3: 0,
      R6: 0,
      R12: 0,
      isEvaluation: false,
    }
  },
  mounted() {

    let evaluationObj = { isEvaluation: false };
    try {
      if (!!localStorage.getItem('evaluationObj')) {
        evaluationObj = JSON.parse(localStorage.getItem('evaluationObj'))
      }
    } catch (e) {
      localStorage.removeItem('evaluationObj')
      evaluationObj = { isEvaluation: false };
    }

    this.isEvaluation = evaluationObj.isEvaluation || false;
    this.age = evaluationObj.age || null;
    this.height = evaluationObj.height || null;
    this.weight = evaluationObj.weight || null;
    this.dmdzdb = evaluationObj.dmdzdb || null;
    this.gxy = evaluationObj.gxy !== undefined ? evaluationObj.gxy : null;
    this.tnb = evaluationObj.tnb !== undefined ? evaluationObj.tnb : null;
    this.xzxy = evaluationObj.xzxy !== undefined ? evaluationObj.xzxy : null;
    this.zzxzrxg = evaluationObj.zzxzrxg !== undefined ? evaluationObj.zzxzrxg : null;
    this.zrxgzcd = evaluationObj.zrxgzcd !== undefined ? evaluationObj.zrxgzcd : null;
    this.R3 = evaluationObj.R3 || 0;
    this.R6 = evaluationObj.R6 || 0;
    this.R12 = evaluationObj.R12 || 0;

  },
  methods: {
    reset() {

    },
    startEvaluation() {
      if (!this.age) {
        this.$message.warning('请输入年龄');
        return
      }
      if (!this.height) {
        this.$message.warning('请输入身高');
        return
      }
      if (!this.weight) {
        this.$message.warning('请输入体重');
        return
      }

      if (!this.dmdzdb) {
        this.$message.warning('请输入低密度脂蛋白');
        return
      }
      if (!this.gxy && this.gxy !== 0) {
        this.$message.warning('请选择是否有高血压');
        return
      }
      if (!this.tnb && this.tnb !== 0) {
        this.$message.warning('请选择是否有糖尿病');
        return
      }

      if (!this.xzxy && this.xzxy !== 0) {
        this.$message.warning('请选择现在吸烟');
        return
      }
      if (!this.zzxzrxg && this.zzxzrxg !== 0) {
        this.$message.warning('请选择症状性责任血管');
        return
      }
      if (!this.zrxgzcd && this.zrxgzcd !== 0) {
        this.$message.warning('请选择责任血管狭窄程度');
        return
      }

      let bmi = this.height / Math.pow(this.weight, 2);
      let z = 0.068817 * this.age + 0.047801 * bmi + 0.443659 * this.gxy + 0.0182679 * this.dmdzdb + 0.672308 * this.tnb + 0.458164 * this.xzxy
        + 0.270660 * this.zzxzrxg + 0.851990 * this.zrxgzcd;


      const S3 = 0.9923679;
      const S6 = 0.9879869;
      const S12 = 0.9803963;

      this.R3 = 1 - Math.pow(S3, Math.exp(z));
      this.R6 = 1 - Math.pow(S6, Math.exp(z));
      this.R12 = 1 - Math.pow(S12, Math.exp(z));

      this.R3 = (this.R3 * 100).toFixed(2);
      this.R6 = (this.R6 * 100).toFixed(2);
      this.R12 = (this.R12 * 100).toFixed(2);
      const evaluationObj = {
        isEvaluation: true,
        age: this.age,
        height: this.height,
        weight: this.weight,
        dmdzdb: this.dmdzdb,
        gxy: this.gxy,
        tnb: this.tnb,
        xzxy: this.xzxy,
        zzxzrxg: this.zzxzrxg,
        zrxgzcd: this.zrxgzcd,
        R3: this.R3,
        R6: this.R6,
        R12: this.R12
      };
      this.isEvaluation = true;
      // localStorage.setItem('evaluationObj', JSON.stringify(evaluationObj))


    }
  }
}
</script>

<style lang="scss">
.container {
  // .el-button--large {
  //   font-size: 2rem;
  // }

  // .el-radio__inner {
  //   width: 2rem;
  //   height: 2rem;
  //   background-color: transparent;
  //   border-color: black;
  // }
}

.content {
  .el-radio__label {
    color: black;
  }
}

.input-style {
  input {
    border: none;
    border-bottom: solid 0.1rem #AFAFAF;
    border-radius: 0;
    color: black;
    text-align: center;
    background-color: transparent;
  }
}
</style>

<style scoped lang="scss">
.container {
  position: relative;
  width: 100%;
  justify-content: center;
  border: dashed rgba(44, 40, 40, 0.2) 1px;
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
  justify-content: center;
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
  width: 200px;
  margin-left: 2.5rem;
  color: black;
  font-weight: bold;
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
