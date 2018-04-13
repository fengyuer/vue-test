// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from 'views/test/App'
import router from 'routes'

// 加载样式文件
import 'assets/styles/baseFy.scss'
import 'views/test/assets/css/test.scss'
// 移动端自适应
import 'assets/js/rem.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
