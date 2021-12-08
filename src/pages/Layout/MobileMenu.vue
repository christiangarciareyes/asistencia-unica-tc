<template>
  <ul class="nav nav-mobile-menu">
    <li class="m-t-20"><a data-toggle="dropdown" style="width: 230px">
      <i class="material-icons">person</i>
      <p style="text-transform: uppercase; font-weight: 400; letter-spacing: 1px" class="menuItem">{{usuario}}</p></a>
    </li>
    <li @click="logout">
      <a data-toggle="dropdown"  style="width: 230px"><i class="material-icons">power_settings_new</i>
      <p style="font-weight: 400; letter-spacing: 1px" class="menuItem">SALIR</p></a>
    </li>
  </ul>
</template>
<script>



export default {
  data () {
    return {
      usuario: localStorage.getItem('nickname')
    }
  },
  methods: {
    logout() {
      this.$router.app.$auth.logout();
      this.$router.push({name: 'Portada'});
    }
  }
}
</script>
