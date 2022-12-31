<template>
  <div class="login-account">
    <el-form :model="account" label-width="70px" :rules="rules" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="account.password"
          type="password"
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import type { FormInstance } from 'element-plus'
import { ElForm } from 'element-plus'
import localCache from '@/utils/localCache'
import appStore from '@/stores'

const { useLoginStore } = appStore
const formRef = ref<FormInstance>()
const account = reactive({
  name: localCache.getCache('user')?.name ?? '',
  password: localCache.getCache('user')?.password ?? ''
})
const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate(isValid => {
    if (isValid) {
      if (isKeepPassword) {
        localCache.setCache('user', account)
        localCache.setCache('isKeepPassword', true)
      } else {
        localCache.deleteCache('name')
        localCache.deleteCache('password')
        localCache.deleteCache('isKeepPassword')
      }
      useLoginStore.accountLoginAction({ ...account })
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
