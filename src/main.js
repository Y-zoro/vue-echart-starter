import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import '@/assets/styles/index.scss'
import svgicon from 'vue-svgicon'
import '@/assets/icons/components/index'
import VEcharts from 'vue-echarts'
import BaiduMap from 'vue-baidu-map'
// 按需引入element-ui
import { Button, Select, Option, Input } from 'element-ui'
Vue.use(Button).use(Select).use(Option).use(Input)

Vue.config.productionTip = false
Vue.component('v-chart', VEcharts)
// vue-svgicon 配置
Vue.use(svgicon, {
  tagName: 'icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

// 全局引入
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'GWxmGwhp1lki1n5wDWgnQ6VHT65N0uyB'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
