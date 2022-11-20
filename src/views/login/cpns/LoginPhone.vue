<template>
  <div class="login-phone">
    <el-form :model="phone" label-width="70px" :rules="rules" ref="formRef">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code"></el-input>
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { rules } from '../config/phone-config'
import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()
const phone = reactive({
  num: null,
  code: ''
})
const loginAction = () => {
  console.log('正在用手机号登录')
}
const clear = () => {
  formRef.value?.clearValidate()
}
defineExpose({ loginAction, clear })
</script>
<style scoped lang="scss">
.login-phone {
  .el-form-item {
    .el-input {
      height: 35px;
    }
    &:last-child {
      margin-bottom: 5px;
    }
  }
  .get-code {
    display: flex;
    justify-content: space-between;
    .el-button {
      height: 35px;
      margin-left: 10px;
    }
  }
}
</style>
