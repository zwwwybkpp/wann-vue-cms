<template>
  <div class="page-search">
    <wa-form class="wa-form" v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <div class="search-btns">
          <el-button @click="resetClick">
            <el-icon size="14"><Refresh /></el-icon>
            <span>重置</span>
          </el-button>
          <el-button type="primary" @click="searchClick">
            <el-icon size="14"><Search /></el-icon>
            <span>搜索</span>
          </el-button>
        </div>
      </template>
    </wa-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WaForm from '@/base-ui/form'
const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})
const emits = defineEmits(['resetClick', 'searchClick'])
// eslint-disable-next-line vue/no-setup-props-destructure
const { formItems } = props.searchFormConfig
const formOrginData: any = {}
formItems.forEach((item: any) => {
  formOrginData[item.field] = ''
})
const formData = ref({ ...formOrginData })
const resetClick = () => {
  formData.value = { ...formOrginData }
  emits('resetClick')
}
const searchClick = () => {
  emits('searchClick', formData.value)
}
</script>

<style scoped lang="scss">
.page-search {
  .wa-form {
    h2 {
      margin: 0;
      padding-top: 23px;
    }
    .search-btns {
      text-align: right;
      padding: 0 40px 23px 0;
    }
  }
}
</style>
