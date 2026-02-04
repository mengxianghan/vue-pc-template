<script setup lang="ts">
import type { ThemeConfig } from 'antdv-next'
import zhCN from 'antdv-next/locale/zh_CN'
import { ref } from 'vue'
import { getPropertyValue } from '@/utils'

const themeConfig = ref<ThemeConfig>({
  token: {
    colorPrimary: getPropertyValue('--color-primary'),
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
