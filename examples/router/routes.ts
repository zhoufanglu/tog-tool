import type { RouteRecordRaw } from 'vue-router'

const layout = () => import('../views/layout/index.vue')
//? 路由中英文枚举
const routeNameEnum: any = {
  card: '卡片'
}
// @ts-ignore
const ms = import.meta.glob('../components/**/*.vue', { eager: true })
const childList: RouteRecordRaw[] = []
for (const [key, value] of Object.entries(ms)) {
  const fatherKey = key.split('/')[2]
  const childKey = key.split('/')[3]
  if (childKey !== 'index.vue') {
    childList.push({
      name: routeNameEnum[childKey] || childKey,
      component: (value as any).default,
      path: `/${childKey}`,
      fatherKey: fatherKey
    } as RouteRecordRaw)
  }
}
// 由于只有两个， 父级先写死。。
const routeList: RouteRecordRaw[] = [
  {
    name: 'element-plus',
    component: () => import('../components/element-plus/index.vue'),
    path: '/element-plus',
    children: []
  },
  {
    name: 'daas-ui',
    component: () => import('../components/daas-ui/index.vue'),
    path: '/daas-ui',
    children: []
  }
]
// 给子元素赋值
const elList = childList.filter(
  (child: any) => child!.fatherKey === 'element-plus'
)
const daasList = childList.filter(
  (child: any) => child!.fatherKey === 'daas-ui'
)
routeList.forEach((route: any) => {
  route!.children = route.name === 'element-plus' ? elList : daasList
})
/**
 * 基础路由
 */
const basePage: RouteRecordRaw[] = [
  {
    path: '/',
    component: layout,
    children: routeList
  }
]
const routes = [...basePage]

export default routes
