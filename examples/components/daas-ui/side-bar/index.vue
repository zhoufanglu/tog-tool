<template>
  <ds-side-bar
    v-model:menus="menus"
    custom-class="example-side-bar"
    drawer-custom-class="example-drawer-bar"
    @handle-menu-click="handleMenuClick"
    @handle-collect="handleCollect"
  ></ds-side-bar>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  // console.log(16, DsLoginForm)

  const handleMenuClick = (menu: any) => {
    console.log(menu)
  }
  const handleCollect = (index: number, childIndex: number, menu: any) => {
    console.log(18, index, childIndex, menu)
  }

  // menus已与组件双向绑定
  const menus = ref([
    {
      name: '流程门户',
      path: '/',
      icon: '',
      children: [
        {
          name: '流程库',
          path: '/progress-lib',
          icon: '&#xe682;',
          isCollect: true,
          activeMenu: 'progress-lib'
        },
        {
          name: '我的任务',
          path: '/my-task',
          icon: '&#xe682;',
          isCollect: true,
          activeMenu: 'my-task'
        }
      ]
    },
    {
      name: '流程中心',
      path: '/',
      icon: '',
      children: [
        {
          name: '类型管理',
          path: '/type-manage',
          icon: '&#xe682;',
          isCollect: true,
          activeMenu: 'type-manage'
        },
        {
          name: '模型管理',
          path: '/model-manage',
          icon: '&#xe682;',
          isCollect: true,
          activeMenu: 'model-manage'
        },
        {
          name: '表单管理',
          path: '/form-manage',
          icon: '&#xe682;',
          isCollect: false,
          activeMenu: 'form-manage'
        }
      ]
    }
  ])
</script>

<style scoped lang="scss">
  .side-bar {
  }
</style>
