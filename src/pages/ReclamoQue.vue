<template>
<div class="myBody">
  <notifications></notifications>
  <ext-top-navbar-que></ext-top-navbar-que>
  <transition name="fade" mode="out-in">
   <intro-reclamos-que v-if="intro"></intro-reclamos-que>
  </transition>
  <div class="container-form-btn mb-3">
    <button v-if="intro" v-on:click="retornar" class="routing-form-btn m-r-10 m-l-10 mb-3 fuente"> KUTIYKUY</button>
    <button v-if="intro" v-on:click="formulario" class="routing2-form-btn m-r-10 m-l-10 mb-3 fuente"> GRABAQ RIY</button>
  </div>
  <transition name="fade" mode="out-in">
    <audio-reclamos-que v-if="formu"></audio-reclamos-que>
  </transition>
  <div class="container-form-btn">
    <button v-if="formu" v-on:click="volver" class="routing-form-btn m-r-10 m-l-10 mb-3 fuente"> KUTIYKUY</button>
  </div>
  <ext-content-footer></ext-content-footer>
</div>

</template>

<script>

import IntroReclamosQue from 'src/pages/Vistas/IntroReclamosQue'
import AudioReclamosQue from 'src/pages/Vistas/AudioReclamosQue'
import ExtTopNavbarQue from 'src/pages/Layout/ExtTopNavbarQue.vue'
import ExtContentFooter from 'src/pages/Layout/ExtContentFooter.vue'

export default {
    data () {
    return {
      intro: true,
      formu:  false
    }
  },
  components: {
  	IntroReclamosQue,
    AudioReclamosQue,
    ExtTopNavbarQue,
    ExtContentFooter
  },
  mounted(){
    if(localStorage.getItem('AccessToken') != null && localStorage.getItem('expires_at') != null && localStorage.getItem('profile') != null && localStorage.getItem('operaciones') != null && localStorage.getItem('nickname') != null){
      this.$router.push('/inicio');
    }
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
