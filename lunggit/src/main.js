Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import Main from './Main.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App,Main),
}).$mount('#app','#Main')

