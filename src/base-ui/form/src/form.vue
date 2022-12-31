<template>
  <div class="wa-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item of formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template v-if="item.type == 'input' || item.type == 'password'">
                <el-input
                  v-model="formData[`${item.field}`]"
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  :show-password="item.type == 'password'"
                  autocomplete="new-password"
                ></el-input>
              </template>
              <template v-else-if="item.type == 'select'">
                <el-select
                  v-model="formData[`${item.field}`]"
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                >
                  <template v-for="option of item.options" :key="option.value">
                    <el-option
                      :label="option.label"
                      :value="option.value"
                    ></el-option>
                  </template>
                </el-select>
              </template>
              <template v-else-if="(item.type = 'datepicker')">
                <el-date-picker
                  v-model="formData[`${item.field}`]"
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  clearable
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { PropType } from 'vue'
import type { IFormItem } from './type'
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {}
  },
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '5px 15px' })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})
const emits = defineEmits(['update:modelValue'])
const formData = ref({ ...props.modelValue })
watch(
  formData,
  newValue => {
    emits('update:modelValue', newValue)
  },
  { deep: true }
)
watch(
  () => props.modelValue,
  () => {
    formData.value = props.modelValue
  }
)
</script>

<style lang="scss">
.wa-form {
  .el-form {
    padding-top: 23px; //5+18
    .el-form-item {
      margin-bottom: 18px;
    }
  }
}
</style>
