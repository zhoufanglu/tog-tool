import type { Component } from 'vue'
import { mapping } from '../utils'
// @ts-ignore
const ms = import.meta.glob('../packages/*/*.vue', { eager: true })
// import type { Menu } from './side-bar/types'
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // el-icon

/**********************按需导入***********************/
const components = mapping(ms)
// TODO: 有空研究下按需导入怎么自动化。。
export const { DsLoginForm, DsSideBar } = components

/**********************批量导入***********************/
const componentList: Component[] = Object.values(components)
const DaasUi = (App: any) => {
  // 组件
  componentList.forEach((item: any) => {
    App.component(item.name, item)
  })
  // element-icon
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    App.component(key, component)
  }
}
// console.log(18, componentList)

/**********************element-plus***********************/
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../scss/element-plus-init.scss'
export default {
  DaasUi,
  ElementPlus
}

/**********************导出类型***********************/
// export type { Menu } from './side-bar/types'
// import { Student } from './test'
