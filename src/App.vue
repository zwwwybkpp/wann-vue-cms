<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { ElConfigProvider } from 'element-plus'
</script>
<template>
  <el-config-provider :locale="zhCn">
    <div class="app">
      <RouterView />
    </div>
  </el-config-provider>
</template>

<style scoped lang="scss">
.app {
  height: 100%;
}
</style>
