<template>
  <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/inicio">
        <md-icon>dashboard</md-icon>
        <p style="font-weight: 400; letter-spacing: 1px" class="menuItem">INICIO</p>
      </sidebar-link>
      <sidebar-link v-for="item in operaciones" :to='item.enlaceWeb'>
        <md-icon>{{ item. adIcono}}</md-icon>
        <p style="font-weight: 400; letter-spacing: 1px" class="menuItem">{{item.descripcion}}</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content>
      </dashboard-content>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>



<script>
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import MobileMenu from '@/pages/Layout/MobileMenu.vue'

export default {
  data () {
    return {
      operaciones: JSON.parse(localStorage.getItem('operaciones'))
    }
  },
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
}
</script>
<style type="text/css">
  .menuItem{
    color:#fff;
  }
</style>
