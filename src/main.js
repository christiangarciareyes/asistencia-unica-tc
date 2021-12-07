import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import routes from './routes/routes'

import auth from './autenticacion/Auth0Lock'

import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import Notifications from './components/NotificationPlugin'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import axios from 'axios'
Vue.use(axios)

import JsonExcel from "vue-json-excel";
Vue.component("downloadExcel", JsonExcel);
/*
import AudioVisual from 'vue-audio-visual'
Vue.use(AudioVisual)
*/
axios.interceptors.response.use(
  function (response){
    return response;
},function (error){
  if(new Date().getTime() > localStorage.getItem('expires_at')){
    localStorage.clear();
    sessionStorage.clear();
    location.reload(true);
    return error;
  }
});

import MaterialDashboard from './material-dashboard'

import Chartist from 'chartist'

Vue.use(auth)
Vue.use(VueRouter)
Vue.use(MaterialDashboard)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(Notifications)

import store from './store'

const router = new VueRouter({
  mode: 'history',
  routes,
  linkExactActiveClass: 'nav-item active'
})

Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  data: {
    Chartist: Chartist
  }
})
