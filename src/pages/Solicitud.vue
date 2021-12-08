<template>
<div class="myBody">
  <notifications></notifications>
  <ext-top-navbar></ext-top-navbar>
  <transition name="fade" mode="out-in">
    <intro-solicitudes v-if="intro"></intro-solicitudes>
  </transition>
  <div class="container-form-btn">
    <button v-if="intro" v-on:click="retornar" class="routing-form-btn m-r-10 m-l-10 mb-3 fuente"> VOLVER</button>
    <button v-if="intro" v-on:click="formulario" class="routing2-form-btn m-r-10 m-l-10 mb-3 fuente"> IR A FORMULARIO</button>
    <button v-if="intro" v-on:click="consultar" class="routing-form-btn m-r-10 m-l-10 mb-3 fuente"> IR A CONSULTAR</button>
  </div>
  <transition name="fade" mode="out-in">
    <formulario-solicitudes v-if="formu"></formulario-solicitudes>
  </transition>
  <div class="container-form-btn">
    <button v-if="formu" v-on:click="volver" class="routing-form-btn m-r-10 m-l-10 mb-3 fuente"> VOLVER</button>
  </div>
  <transition name="fade" mode="out-in">
    <consulta-solicitudes v-if="consul"></consulta-solicitudes>
  </transition>
  <div class="container-form-btn m-b-20">
    <button v-if="consul" v-on:click="volver" class="routing-form-btn m-r-10 m-l-10 mb-3 fuente"> VOLVER</button>
  </div>
  <ext-content-footer></ext-content-footer>
</div>

</template>

<script>

import IntroSolicitudes from 'src/pages/Vistas/IntroSolicitudes'
import FormularioSolicitudes from 'src/pages/Vistas/FormularioSolicitudes'
import ConsultaSolicitudes from 'src/pages/Vistas/ConsultaSolicitudes'
import ExtTopNavbar from 'src/pages/Layout/ExtTopNavbar.vue'
import ExtContentFooter from 'src/pages/Layout/ExtContentFooter.vue'

export default {
  data () {
    return {
      intro: true,
      formu:  false,
      consul: false
    }
  },
  mounted(){
    if(localStorage.getItem('AccessToken') != null && localStorage.getItem('expires_at') != null && localStorage.getItem('profile') != null && localStorage.getItem('operaciones') != null && localStorage.getItem('nickname') != null){
      this.$router.push('/inicio');
    }
  },
  components: {
    IntroSolicitudes,
    FormularioSolicitudes,
    ConsultaSolicitudes,
    ExtTopNavbar,
    ExtContentFooter
  },
  methods: {
    formulario() {
      this.intro = false;
      this.formu = true;
    },
    consultar() {
      this.intro = false;
      this.consul = true;
    },
    volver(){
      this.formu = false;
      this.consul = false;
      this.intro = true;
    },
    retornar(){
      this.$router.push('/')
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
