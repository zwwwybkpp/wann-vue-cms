<template>
  <div class="login-account">
    <el-form :model="account" label-width="70px" :rules="rules" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" aprop="password">
        <el-input v-model="account.password" type="password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import type { FormInstance } from 'element-plus'
import { ElForm } from 'element-plus'

const formRef = ref<FormInstance>()
const account = reactive({
  name: null,
  password: ''
})
const loginAction = () => {
  formRef.value?.validate(isValid => {
    if (isValid) {
      console.log('正在登录')
    } else {
      console.log('参数错误')
    }
  })
}
const clear = () => {
  formRef.value?.clearValidate()
}
defineExpose({ loginAction, clear })
</script>

<style scoped lang="scss">
.login-account {
  .el-form-item {
    .el-input {
      height: 35px;
    }
    &:last-child {
      margin-bottom: 5px;
    }
  }
}
</style>
