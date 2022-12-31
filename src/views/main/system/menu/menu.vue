<template>
  <div class="menu">
    <page-content
      :content-config="contentConfig"
      page-name="menu"
    ></page-content>
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content/page-content.vue'
import { contentConfig } from './content.config'
</script>

<style scoped></style>
