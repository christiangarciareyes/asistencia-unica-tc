<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start margiNav">
        <h3 style="color: #333; font-weight: 400; letter-spacing: 1px" class="md-title">{{$route.name}}</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button class="md-just-icon md-simple md-toolbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>
        <div class="md-collapse">
          <md-list>
            <md-list-item>
              <i style="margin-top: -15px" class="material-icons">person</i>
              <p style="color: #333; font-weight: 400; letter-spacing: 1px; text-transform: uppercase" class="m-l-10 m-t-5">{{usuario}}</p>
            </md-list-item>
            <md-list-item @click="logout">
              <i style="margin-top: -5px" class="material-icons">power_settings_new</i>
              <p style="color: #333; margin-bottom: 5px; font-weight: 400; letter-spacing: 1px" class="m-l-10 m-t-5">SALIR</p>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>



export default{
  data () {
    return {
      usuario: localStorage.getItem('nickname')
    }
  },
  methods: {
    toggleSidebar () {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    },
    logout() {
      this.$router.app.$auth.logout();
      this.$router.push({name: 'Portada'});
    }
  }
}
</script>

<style lang="css">
.margiNav{
  margin-top: -15px;
}
@media only screen and (max-width: 991px)
{
  .margiNav{
    margin-top: 0px;
  }
}
</style>
