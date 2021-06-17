/*
 * @Description: 
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2021-06-16 16:55:51
 * @LastEditors: codercao
 * @LastEditTime: 2021-06-16 17:13:37
 */

import {
  RouteRecordRaw,
} from "vue-router"

const Home = () => import('@/views/home/index.vue')
const Edit = () => import('@/views/edit/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/edit',
    component: Edit
  },
]
export default routes