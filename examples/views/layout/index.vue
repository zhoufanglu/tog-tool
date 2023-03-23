<template>
  <div class="ds-layout">
    <div class="p-side-bar">
      <!--      <ds-side-bar
        v-model:menus="menus"
        custom-class="example-side-bar"
        drawer-custom-class="example-drawer-bar"
        @handle-menu-click="handleMenuClick"
        @handle-collect="handleCollect"
      ></ds-side-bar>-->
    </div>
    <div class="ds-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  import routes from '../../router/routes'
  import { RouteRecordRaw } from 'vue-router'
  import { ref } from 'vue'
  import type { Menu } from '../../../packages/side-bar/types'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const handleMenuClick = (menu: any) => {
    router.push(menu.path)
  }
  const handleCollect = (index: number, childIndex: number, menu: any) => {
    console.log(18, index, childIndex, menu)
  }
  const initMenus = () => {
    let innerMenu: Menu[] = []
    routes[0].children?.forEach((route, index) => {
      innerMenu[index] = {
        name: route.name as string,
        path: `${route.path as string}`,
        children: []
      }
      route.children?.forEach((childRoute, childIndex) => {
        innerMenu[index].children!.push({
          name: childRoute.name as string,
          path: `${childRoute.path as string}`,
          icon: '&#xe682',
          isCollect: true,
          activeMenu: childRoute.name as string
        } as Menu)
      })
    })
    // console.log(51, innerMenu)
    return innerMenu
  }
  const menus = ref<Menu[]>(initMenus() as Menu[])

  // menus已与组件双向绑定
  /*const menus = ref([
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
  ])*/
</script>

<style scoped lang="scss">
  .ds-layout {
    box-sizing: border-box;
    width: 100vw !important;
    height: 100vh !important;
    @include vertical-center;
    justify-content: flex-start;
    .p-side-bar {
      z-index: 2034 !important;
      height: 100%;
      .example-side-bar {
        height: 100%;
      }
    }
    .ds-main {
      box-sizing: border-box;
      padding: 20px;
    }
  }
</style>
<style lang="scss">
  .ds-layout {
    .example-drawer-bar {
      //border: solid 1px red;
      //top: 48px;
      left: 66px;
    }
  }
</style>
