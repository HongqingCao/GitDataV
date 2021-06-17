/*
 * @Description: 
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2021-06-16 16:37:30
 * @LastEditors: codercao
 * @LastEditTime: 2021-06-17 13:48:43
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import '@/assets/scss/global.scss'


import {
  ElButton,
  locale,
} from 'element-plus'

const Vue = createApp(App)
Vue.use(ElButton)

import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'

// 设置语言
locale.use(lang)


Vue.use(router)
Vue.mount('#app')