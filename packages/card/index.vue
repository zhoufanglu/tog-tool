<template>
  <div class="ds-card" :class="customClass">
    <div class="head"> {{ cardInfo.title }} </div>
    <div class="content"> {{ cardInfo.content }} </div>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'DsCard'
  }
</script>
<script setup lang="ts">
  import type { CardType } from './types'
  // props
  import { PropType } from 'vue'
  const props = defineProps({
    customClass: {
      type: String as PropType<string>,
      default: () => null
    }
  })
  const cardInfo: CardType = {
    title: '我是标题',
    content: '我是内容'
  }
</script>

<style scoped lang="scss">
  .ds-card {
    font-size: 16px;
    padding: 0 24px 16px 24px;
    border: solid 1px #ebeef5;
    .head {
      height: 44px;
      line-height: 44px;
      border-bottom: solid 1px #ebeef5;
    }
    .content {
      padding-top: 20px;
      //padding: 20px 24px;
    }
  }
</style>
