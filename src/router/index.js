import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/app'
import data from '@/pages/data'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/data',
      name: 'data/',
      component: index
    },
    {
      path: '/data/:user',
      name: 'data',
      component: data
    }
  ]
})
