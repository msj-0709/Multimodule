import Vue from 'vue'
import axios from "axios";
import App from './App.vue' //app.vue import
import router from './router'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

Vue.prototype.$http = axios
Vue.use(Vuetify);
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

//app.vue 파일을 import 해온 뒤, 렌더링 시키고
//파일 내의 id가 'app'인 eleme
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')