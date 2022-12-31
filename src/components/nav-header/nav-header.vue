<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <component :is="menuIcon"></component>
    </el-icon>
    <div class="content">
      <wa-breadcrumb :breadcrumbs="breadcrumbs"></wa-breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts" setup>
import userInfo from './user-info.vue'
import WaBreadcrumb from '@/base-ui/breadcrumb'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumb } from '@/utils/map-menus'
import appStore from '@/stores'
const emit = defineEmits(['foldChange'])
const isFold = ref(false)
const menuIcon = ref('Expand')
const handleFoldClick = () => {
  isFold.value = !isFold.value
  isFold.value == true ? (menuIcon.value = 'Expand') : (menuIcon.value = 'Fold')
  emit('foldChange', isFold.value)
}
const route = useRoute()

const userMenus = appStore.useLoginStore.loginState.userMenus
const breadcrumbs = computed(() => {
  const currentPath = route.path
  return pathMapBreadcrumb(userMenus, currentPath)
})
</script>

<style lang="scss" scoped>
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
