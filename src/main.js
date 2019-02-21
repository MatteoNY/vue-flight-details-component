import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'

import VueRx from 'vue-rx'

Vue.use(VueRx)

Vue.config.errorHandler = function (err, vm, info) {
   console.error ('Vue config errorHandler:', err, info)
  }
Vue.config.warnHandler = function (msg, vm, info) { 
  console.error ('Vue config warnHandler:', msg, info)
}

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
