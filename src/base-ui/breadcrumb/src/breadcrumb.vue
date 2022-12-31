<template>
  <div class="wa-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item of breadcrumbs" :key="item.name">
        <el-breadcrumb-item class="test" :to="{ path: item.path }">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { IBreadcrumb } from './type'
defineProps({
  breadcrumbs: {
    type: Array as PropType<IBreadcrumb[]>
  }
})
</script>

<style lang="scss">
.wa-breadcrumb {
  .el-breadcrumb__inner a:hover,
  .el-breadcrumb__inner.is-link:hover {
    color: #303133;
  }
  .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    color: #606266;
    cursor: pointer;
  }
}
</style>
