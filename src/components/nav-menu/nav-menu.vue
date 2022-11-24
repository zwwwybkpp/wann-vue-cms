<template>
  <div class="nav-menu">
    <div class="logo">
      <img
        :class="{ 'is-collapse': collapse }"
        src="https://v2.cn.vuejs.org/images/logo.svg"
        alt=""
      />
      <span v-show="!collapse" class="title">Vue3+Ts</span>
    </div>
    <div class="menu">
      <el-menu
        class="el-menu-vertical"
        default-active="1-0"
        :collapse="collapse"
        background-color="#001529"
        text-color="#d1d2d3"
        active-text-color="#2e86de"
      >
        <template v-for="(item, index) in userMenus" :key="item.id">
          <template v-if="item.type === 1">
            <el-sub-menu :index="index + ''">
              <template #title>
                <el-icon v-if="item.icon">
                  <component :is="getIconName(item.icon)"></component>
                </el-icon>
                <span>{{ item.name }}</span>
              </template>
              <template
                v-for="(subItem, subIndex) in item.children"
                :key="subItem.id"
              >
                <el-menu-item :index="index + '-' + subIndex">
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
            <el-menu-item :index="index">
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
import appStore from '@/stores'

defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})
const { useLoginStore } = appStore
const { userMenus } = useLoginStore.loginStore

const getIconName = (icon: string) => {
  return icon.replace('el-icon-', '')
}
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
