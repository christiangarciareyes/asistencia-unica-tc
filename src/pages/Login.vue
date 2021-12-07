<template>
  <transition name="fade" mode="out-in">
    <div class="container-login100">
      <div class="super_container">
        <header class="header d-flex flex-row">
          <div class="header_content d-flex flex-row align-items-center">
            <div class="logo_container">
              <div class="logo">
                <img :src="image" alt="escudo" class="m-r-10">
                <span>Ventanilla Administrativa</span>
              </div>
            </div>
          </div>
          <div class="header_side d-flex flex-row justify-content-center align-items-center">
            <span>TRIBUNAL CONSTITUCIONAL</span>
          </div>
        </header>
      </div>
      <div class="hero_boxes">
        <div class="hero_boxes_inner">
          <div class="container" style="justify-content: center">
            <div class="row">
              <div class="col-lg-6 hero_box_col">
               <router-link to="/">
                <div class="hero_box d-flex flex-row align-items-center justify-content-start">
                  <i class="fa fa-reply-all fa-3x m-r-10" aria-hidden="true" style="color: #fff"></i>
                  <div class="hero_box_content">
                    <h2 class="hero_box_title">Página Principal</h2>
                    <a class="hero_box_link" style="color: #fff">Ir a la Portada</a>
                  </div>
                </div>
               </router-link>
              </div>
              <div class="col-lg-6 hero_box_col" v-if="!isLogedIn" v-on:click="login">
                <div class="hero_box d-flex flex-row align-items-center justify-content-start">
                  <i class="fa fa-cog fa-3x m-r-10" aria-hidden="true" style="color: #fff"></i>
                  <div class="hero_box_content">
                    <h2 class="hero_box_title">Acceder al Sistema</h2>
                    <a class="hero_box_link" style="color: #fff">Administra Aquí</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default{
  props: {
    image: {
      default: require('@/assets/img/logo.png')
    }
  },
  mounted: function () {
    if(localStorage.getItem('AccessToken') != null || localStorage.getItem('expires_at') != null || localStorage.getItem('profile') != null || localStorage.getItem('operaciones') != null || localStorage.getItem('nickname') != null){
      this.$router.push('/inicio');   
    }else{
      this.login();
    }
  },
  computed: {
    isLogedIn(){
      return this.$router.app.$auth.isAuthenticated();
    }
  },
  methods: {
    login() {
      this.$router.app.$auth.login();
    }
  }
}
</script>
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter,
  .fade-leave-to
  {
    opacity: 0
  }
</style>