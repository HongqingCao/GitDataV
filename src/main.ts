/*
 * @Description: 
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2021-06-16 16:37:30
 * @LastEditors: codercao
 * @LastEditTime: 2021-06-19 17:46:30
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import '@/assets/scss/global.scss'


import {
  ElButton,
  ElIcon,
  ElDialog,
  ElMessageBox,
  ElSelect,
  ElScrollbar,
  ElRadio,
  ElSwitch,
  ElForm,
  ElFormItem,
  ElInput,
  ElInputNumber,
  locale,
  
} from 'element-plus'

const components = [
  ElButton,
  ElIcon,
  ElDialog,
  ElSelect,
  ElScrollbar,
  ElRadio,
  ElSwitch,
  ElForm,
  ElFormItem,
  ElInput,
  ElInputNumber,
]

const Vue = createApp(App)

components.forEach(component => {
  Vue.component(component.name, component)
})

Vue.use(ElMessageBox)


import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'

// 设置语言
locale.use(lang)


Vue.use(router)
Vue.mount('#app')