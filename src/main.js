import Vue from 'vue'
import router from './router';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ECharts from 'vue-echarts'

import './assets/css/chart.css' 

Vue.prototype.$axios = axios
Vue.use({ axios, VueAxios})
Vue.component('v-chart', ECharts)

Vue.use(ElementUI)



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
