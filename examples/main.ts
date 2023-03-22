import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
// 开发
// 按需导入
// import { DsLoginForm } from '../packages/index'
import DaasUi from '../packages'
import '../lib/style.css'
// 生产包
// @ts-ignore
// import DaasUi from '../lib/daas-ui.mjs'
// import Student from '../lib/daas-ui.mjs'
// import type { Menu } from '../packages'
/*import router from '../lib/router/index'
console.log(15, router)*/

const app = createApp(App)

// console.log(14, DaasUi)

app.use(DaasUi.DaasUi)
app.use(DaasUi.ElementPlus)
app.use(router)
app.mount('#app')
