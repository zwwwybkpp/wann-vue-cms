<template>
  <div class="userInfo">
    <el-dropdown>
      <div class="dropdown-link">
        <el-avatar :size="30" src="">
          <span>{{ name?.charAt(0) }}</span>
        </el-avatar>
        <span>{{ name }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import appStore from '@/stores'
const { useLoginStore } = appStore
const { name } = useLoginStore.loginState.userInfo
</script>
<style scoped lang="scss">
.userInfo {
  // cursor: pointer;
  .dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;
    .el-avatar {
      margin-right: 5px;
    }
  }
}
</style>
