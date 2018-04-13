
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    meta: {
      // keepAlive: true,
      title: 'vue-test'
    },
    component: resolve => require(['views/test/pages/index'], resolve)
  },
  {
    path: '/detail',
    name: 'detail',
    meta: {
      // keepAlive: true,
      title: 'detail'
    },
    component: resolve => require(['views/test/pages/detail'], resolve)
  },
  // 错误页面
  {
    name: 'error',
    path: '/error',
    meta: {
      title: 'vue-test'
    },
    component: resolve => require(['views/test/error'], resolve)
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default new VueRouter({
  routes
})
