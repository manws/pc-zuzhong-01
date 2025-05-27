<template>
  <div v-if="field.isShow || show === true">
    <el-input-number v-if="fieldTypeId === 1" v-model="field.value" :disabled="isDisabled"></el-input-number>

    <el-input v-else-if="fieldTypeId === 2" v-model="field.value" placeholder="请输入内容" style="width: 250px;" :disabled="isDisabled">
      <el-button slot="append" v-if="field.tail">{{ field.tail }}</el-button>
    </el-input>

    <el-input v-else-if="fieldTypeId === 3" type="textarea" maxlength="200" v-model="field.value" :rows="3" placeholder="限制200字" :disabled="isDisabled"></el-input>

    <el-date-picker
      style="width: 250px;"
      v-else-if="fieldTypeId == 4"
      v-model="field.value"
      type="date"
      placeholder="选择日期"
      :format="field.format"
      :value-format="field.format"
      :disabled="isDisabled"
    ></el-date-picker>

    <el-time-picker
      style="width: 250px;"
      v-else-if="fieldTypeId == 5"
      v-model="field.value"
      :format="field.format"
      :value-format="field.format"
      :disabled="isDisabled"
    ></el-time-picker>

    <el-radio-group v-else-if="fieldTypeId === 6" v-model="field.value" :disabled="isDisabled">
      <el-radio
        v-for="(item, index) in codegroup"
        :key="index"
        :label="item.codeId"
        style="margin-top: 6px;"
        :style="{ display: codegroup.length > 2 ? 'block' : '' }"
        @click.native.prevent="onClickRadio(item.codeId)"
      >
        {{ item.codeValue1 }} {{ item.codeValue2 }} {{ item.remark }}
      </el-radio>
    </el-radio-group>

    <el-select v-else-if="fieldTypeId == 7" style="width: 250px;" v-model="field.value" placeholder="请选择" @change="onSelectChange" :disabled="isDisabled">
      <el-option v-for="item in codegroup" :key="item.codeId" :label="item.codeValue1" :value="item.codeId">{{ item.codeValue1 }} {{ item.codeValue2 }} {{ item.remark }}</el-option>
    </el-select>

    <div v-else-if="fieldTypeId === 8" >
    <el-checkbox v-if="isMerge" :indeterminate="isIndeterminate" v-model="checkBoxAll" @change="handleCheckAllChange">{{mergeLabel}}</el-checkbox>
    <div v-if="isMerge" style="border-bottom: solid 1px #666666;"></div>
    <el-checkbox-group v-model="checkboxValue" @change="onCheckboxChange" :disabled="isDisabled">
      <el-checkbox v-for="(item, index) in codegroup" :key="index" :label="item.codeId" style="margin-top: 6px;" :style="{ display: codegroup.length > 2 ? 'block' : '' }">
        {{ item.codeValue1 }} {{ item.codeValue2 }} {{ item.remark }}
      </el-checkbox>
    </el-checkbox-group>
    </div>
    <div v-else-if="fieldTypeId == 9" :disabled="isDisabled">{{ field.value }}{{ field.tail }}</div>

    <div v-else-if="fieldTypeId == 11" :disabled="isDisabled">{{ field.value }}</div>
  </div>
</template>

<script>
export default {
	name: 'FieldContent',
  data() {
    return {
      checkboxValue: [],
      isIndeterminate: false,
      checkBoxAll: false
    };
  },
  computed: {
    fieldTypeId: function() {
      if(this.typeId === -1) {
        return this.field.fieldTypeId
      }
      return this.typeId
    },
    boxAll: function() {
      if(this.isMerge && this.checkboxValue && this.codegroup && this.checkboxValue.length === this.codegroup.length) {
       return true
      }
      return false
    }
  },
  watch:{
    boxAll(v,o) {
      this.checkBoxAll = v
    }
  },
  props: {
    typeId: {
      type: Number,
      default: -1
    },
    show: {
      type: Boolean,
      default: false
    },
    codegroup: [Array, Object],
    field: [Object],
    isDisabled: {
      type: Boolean,
      default: true
    },
    isMerge:{
      type: Boolean,
      default: false
    },
    mergeLabel: {
      type: String,
      default: '全选'
    }
  },
  mounted() {
    if (this.fieldTypeId === 8 && this.field.value !== null && this.field.value !== '') {
        if (this.isMerge && (this.field.value === 0 || this.field.value === '0')) {
          this.checkboxValue = this.codegroup.map(item => {
            return item.codeId
          })
        } else {
          this.checkboxValue = this.field.value.split(',').map(item => Number(item));
        }
    }
  },
  methods: {
    onClickRadio(e) {
      if (this.isDisabled) return
      console.log(e);
      e === this.field.value ? (this.field.value = null) : (this.field.value = e), this.$set(this.field, 'value', this.field.value);
      this.$emit('change')
    },
    onCheckboxChange(checked) {
      console.log(checked)
      console.log(this.checkboxValue)
      if(this.isMerge) {
        if (this.codegroup.length === checked.length) {
          this.checkBoxAll = true
          this.isIndeterminate = false
          this.$set(this.field, 'value', '0');
        } else if (checked.length > 0) {
          this.checkBoxAll = false
          this.isIndeterminate = true
          this.$set(this.field, 'value', checked.join(','));
        } else {
          this.checkBoxAll = false
          this.isIndeterminate = false
          this.$set(this.field, 'value', '');
        }
      } else {
        this.$set(this.field, 'value', checked.join(','));

      }
      this.$emit('change')

      // if(this.isMerge && this.codegroup.length === checked.length) {
      //   this.checkBoxAll = true
      //   this.$set(this.field, 'value', '0');
      //   this.$emit('change')
      // } else {
      //   if (this.isMerge && checked.length > 0) {
      //     this.isIndeterminate = true
      //     this.checkBoxAll = false
      //   } else if (this.isMerge) {
      //     this.checkBoxAll = false
      //   }
      //   this.$set(this.field, 'value', checked.join(','));
      //   this.$emit('change')
      // }
    },
    onSelectChange(value) {
      this.$emit('change')
    },
    handleCheckAllChange(val) {
      this.isIndeterminate = false;
      if (val) {
        this.checkboxValue = this.codegroup.map(item => { return item.codeId })
        this.$set(this.field, 'value', '0');
      } else {
        this.checkboxValue = []
        this.$set(this.field, 'value', '');
      }
    }
  }
};
</script>

<style scoped></style>
