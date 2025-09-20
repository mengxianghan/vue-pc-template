<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { ref } from 'vue'
import { getVariable } from '@/utils'

const themeConfig = ref({
  token: {
    colorPrimary: getVariable('--color-primary'),
    borderRadius: 4,
  },
})
</script>

<template>
  <a-config-provider
    :locale="zhCN"
    :theme="themeConfig"
  >
    <router-view />
  </a-config-provider>
</template>

<style lang="scss">
@use '@/styles/index.scss';
</style>
