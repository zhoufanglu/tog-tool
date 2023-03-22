import type { Component } from 'vue'
// 组件
const mapping = (ms: any) => {
  const components: { [key: string]: Component } = {}
  Object.keys(ms).forEach(async (key) => {
    const com: Component = (ms[key] as any).default
    components[com.name as string] = com
  })
  return components
}
// 路由
const mappingRoute = (ms: any) => {
  const components: { [key: string]: Component } = {}
  Object.keys(ms).forEach(async (key) => {
    const formatKey = key.split('/')[2]
    const com: Component = (ms[key] as any).default
    components[formatKey as string] = com
  })
  return components
}

export { mapping, mappingRoute }
