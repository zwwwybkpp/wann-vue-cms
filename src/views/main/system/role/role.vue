<template>
  <div class="role">
    <page-search
      :search-form-config="searchFormConfig"
      @reset-click="handleResetClick"
      @search-click="handleSearchClick"
    >
    </page-search>
    <page-content
      page-name="role"
      :content-config="contentConfig"
      ref="pageContentRef"
    >
    </page-content>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import { searchFormConfig } from './search.config'
import { contentConfig } from './content.config'
import { usePageSearch } from '@/hooks/usePageSearch'
const { pageContentRef, handleResetClick, handleSearchClick } = usePageSearch()
</script>

<style scoped lang="scss"></style>
