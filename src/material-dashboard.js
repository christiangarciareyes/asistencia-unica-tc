import SideBar from './components/SidebarPlugin'
import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.min.css'
import './assets/scss/material-dashboard.scss'
import '../static/css/main.css'
import '../static/css/util.css'
import '../static/css/demo.css'

import '../static/fonts/font-awesome-4.7.0/css/font-awesome.min.css'

import '../static/styles/bootstrap4/bootstrap.min.css'

import '../static/styles/main_styles.css'
import '../static/styles/responsive.css'

import '../static/styles/contact_styles.css'
import '../static/styles/contact_responsive.css'

import '../static/styles/news_styles.css'
import '../static/styles/news_responsive.css'


import 'es6-promise/auto'

export default{
  install (Vue) {
    Vue.use(SideBar)
    Vue.use(VueMaterial)
  }
}
