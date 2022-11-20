<template>
  <div class="loginPanel">
    <h1>后台管理系统</h1>
    <el-tabs v-model="activeName" type="border-card" class="tabs" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><UserFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <LoginAccount ref="accountRef"></LoginAccount>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone ref="phoneRef"></LoginPhone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox label="记住密码" v-model="isKeepPassword"></el-checkbox>
      <el-link :underline="false" type="primary">忘记密码?</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import LoginAccount from './LoginAccount.vue'
import LoginPhone from './LoginPhone.vue'

const activeName = ref('account')
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()
const isKeepPassword = ref(true)
watch(activeName, value => {
  if (value != 'account') {
    accountRef.value.clear()
  } else {
    phoneRef.value.clear()
  }
})
const handleLoginClick = () => {
  if (activeName.value == 'account') {
    accountRef.value?.loginAction()
  } else {
    phoneRef.value?.loginAction()
  }
}
</script>

<style lang="scss">
.loginPanel {
  text-align: center;
  margin-bottom: 10%;
  width: 320px;
  .tabs {
    .el-icon {
      vertical-align: middle;
    }
    .el-tabs__header span {
      font-weight: 600;
      font-size: 15px;
      vertical-align: middle;
      margin-left: 4px;
    }
  }
  .account-control {
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    height: 40px;
    font-size: 16px;
    width: 100%;
    margin-top: 10px;
  }
}
.el-tabs--border-card > .el-tabs__content {
  padding-bottom: 5px;
}
</style>
