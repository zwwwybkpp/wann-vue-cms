<template>
  <div class="nav-menu">
    <div class="logo" @click="toMain">
      <img
        :class="{ 'is-collapse': collapse }"
        src="https://v2.cn.vuejs.org/images/logo.svg"
        alt=""
      />
      <span v-show="!collapse" class="title">Vue3+Ts</span>
    </div>
    <div class="menu">
      <el-menu
        ref="menuRef"
        :default-active="$route.path"
        class="el-menu-vertical"
        :collapse="collapse"
        collapse-transition
        background-color="#001529"
        text-color="#d1d2d3"
        active-text-color="#2e86de"
        unique-opened
        router
        @open="handleOpen"
      >
        <template v-for="item in userMenus" :key="item.id">
          <template v-if="item.type === 1">
            <el-sub-menu :index="item.url">
              <template #title>
                <el-icon v-if="item.icon">
                  <component :is="getIconName(item.icon)"></component>
                </el-icon>
                <span>{{ item.name }}</span>
              </template>
              <template v-for="subItem in item.children" :key="subItem.id">
                <el-menu-item :index="subItem.url">
                  <template #title>
                    <el-icon v-if="subItem.icon">
                      <component :is="getIconName(subItem.icon)"></component>
                    </el-icon>
                    <span>{{ subItem.name }}</span>
                  </template>
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
          <template v-else-if="item.type === 2">
            <el-menu-item :index="item.url">
              <template #title>
                <el-icon v-if="item.icon">
                  <component :is="getIconName(item.icon)"></component>
                </el-icon>
                <span>{{ item.name }}</span>
              </template>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import appStore from '@/stores'
import { firstMenuPath } from '@/utils/map-menus'
import { ref } from 'vue'
defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})
const menuRef = ref()
const keyIndex = ref('')
const { useLoginStore } = appStore
const { userMenus } = useLoginStore.loginState
const getIconName = (iconName: string) => {
  return iconName.replace('el-icon-', '')
}
const toMain = () => {
  router.push(firstMenuPath)
  // menuRef.value.close(keyIndex.value)
}
const handleOpen = (index: any) => {
  keyIndex.value = index
}
// const handleMenuItemClick = (item: any) => {
//   router.push({
//     path: item.url ?? '/not-found'
//   })
// }
</script>

<style lang="scss" scoped>
.nav-menu {
  height: 100%;
  background-color: #092036;
  .el-menu {
    border-right: none;
    span {
      font-size: 14px;
    }
    //092036
    .el-sub-menu {
      .el-menu-item {
        background-color: #092036;
        &:hover {
          color: #fff;
          background-color: #1b9cfc;
          transition: 0.3s ease-in;
        }
      }
    }
  }
  .logo {
    background-color: #001529;
    display: flex;
    height: 48px;
    padding: 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
    img {
      height: 100%;
      margin: 0 10px;
      &.is-collapse {
        margin: 0 auto;
      }
    }
    .title {
      font-size: 16px;
      line-height: 32px;
      font-weight: 700;
      color: #fff;
    }
  }
}
</style>
