<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <component :is="menuIcon"></component>
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits(['foldChange'])
const isFold = ref(false)
const menuIcon = ref('Expand')
const handleFoldClick = () => {
  isFold.value = !isFold.value
  isFold.value == true ? (menuIcon.value = 'Expand') : (menuIcon.value = 'Fold')
  emit('foldChange', isFold.value)
}
</script>

<style lang="scss" scoped>
.nav-header {
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
