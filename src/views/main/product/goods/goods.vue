<template>
  <div class="goods">
    <page-content page-name="goods" :content-config="contentConfig">
      <template #imgUrl="{ row }">
        <el-image
          style="width: 70px; height: 70px"
          :src="row.imgUrl"
          :preview-src-list="[row.imgUrl]"
          fit="cover"
        ></el-image>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content/page-content.vue'
import { contentConfig } from './content.config'
</script>

<style scoped lang="scss"></style>
