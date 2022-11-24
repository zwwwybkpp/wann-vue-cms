<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @foldChange="handleFoldChange" />
        </el-header>
        <el-main class="page-content"> </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavMenu from '@/components/nav-menu/nav-menu.vue'
import NavHeader from '@/components/nav-header/nav-header.vue'
import { ref } from 'vue'

const isCollapse = ref(false)
const handleFoldChange = (isFold: boolean) => {
  isCollapse.value = isFold
}
</script>
<style lang="scss" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .main-content,
  .page {
    height: 100%;
  }
  .page-content {
    height: calc(100% - 48px);
  }
  .el-header {
    display: flex;
    height: 50px;
    padding: 0 10px;
    text-align: center;
    align-items: center;
  }

  .el-footer {
    color: #333;
  }
  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    user-select: none;
    background-color: #001529;
    cursor: pointer;
    transition: 0.3s linear;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .el-main {
    color: #333;
    text-align: center;
    background-color: #f0f2f5;
  }
}
</style>
