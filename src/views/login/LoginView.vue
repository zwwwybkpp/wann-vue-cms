<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './cpns/LoginPanel.vue'
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
  background-image: url('/background.svg');
}
</style>
