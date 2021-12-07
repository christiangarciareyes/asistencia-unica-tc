<template>
<div class="myBody">
  <notifications></notifications>
  <ext-top-navbar-que></ext-top-navbar-que>
  <transition name="fade" mode="out-in">
    <intro-solicitudes-que v-if="intro"></intro-solicitudes-que>
  </transition>
  <div class="container-form-btn mb-3">
    <button v-if="intro" v-on:click="retornar" class="routing-form-btn m-r-10 m-l-10 mb-3 fuente"> KUTIYKUY</button>
    <button v-if="intro" v-on:click="formulario" class="routing2-form-btn m-r-10 m-l-10 mb-3 fuente"> GRABAQ RIY</button>
  </div>
  <transition name="fade" mode="out-in">
    <audio-solicitudes-que v-if="formu"></audio-solicitudes-que>
  </transition>
  <div class="container-form-btn">
    <button v-if="formu" v-on:click="volver" class="routing-form-btn m-r-10 m-l-10 mb-3 fuente"> KUTIYKUY</button>
  </div>
  <ext-content-footer></ext-content-footer>
</div>

</template>

<script>

import IntroSolicitudesQue from 'src/pages/Vistas/IntroSolicitudesQue'  
import AudioSolicitudesQue from 'src/pages/Vistas/AudioSolicitudesQue'  
import ExtTopNavbarQue from 'src/pages/Layout/ExtTopNavbarQue.vue'
import ExtContentFooter from 'src/pages/Layout/ExtContentFooter.vue'

export default {
  data () {
    return {
      intro: true,
      formu:  false
    }
  },
  mounted(){
    if(localStorage.getItem('AccessToken') != null && localStorage.getItem('expires_at') != null && localStorage.getItem('profile') != null && localStorage.getItem('operaciones') != null && localStorage.getItem('nickname') != null){
      this.$router.push('/inicio');     
    }else{}
  },
  components: {
    IntroSolicitudesQue,
    AudioSolicitudesQue,
    ExtTopNavbarQue,
    ExtContentFooter
  },
  methods: {
    formulario() {
      this.intro = false;
      this.formu = true;
    },
    volver(){
      this.formu = false;
      this.intro = true;
    },
    retornar(){
      this.$router.push('/quechua')
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