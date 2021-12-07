<template>
<div class="myBody">
  <notifications></notifications>
  <ext-top-navbar></ext-top-navbar>
  <transition name="fade" mode="out-in">
   <intro-reclamos v-if="intro"></intro-reclamos>
  </transition>
  <div class="container-form-btn">
    <button v-if="intro" v-on:click="retornar" class="routing-form-btn m-r-10 m-l-10 mb-3 fuente"> VOLVER</button>
    <button v-if="intro" v-on:click="formulario" class="routing2-form-btn m-r-10 m-l-10 mb-3 fuente"> IR A FORMULARIO</button>
    <button v-if="intro" v-on:click="consultar" class="routing-form-btn m-r-10 m-l-10 mb-3 fuente"> IR A CONSULTAR</button>
  </div>
  <transition name="fade" mode="out-in">
    <formulario-reclamos v-if="formu"></formulario-reclamos>
  </transition>
  <div class="container-form-btn">
    <button v-if="formu" v-on:click="volver" class="routing-form-btn m-r-10 m-l-10 mb-3 fuente"> VOLVER</button>
  </div>
  <transition name="fade" mode="out-in">
     <consulta-reclamos v-if="consul"></consulta-reclamos>
  </transition>
  <div class="container-form-btn m-b-20">
    <button v-if="consul" v-on:click="volver" class="routing-form-btn m-r-10 m-l-10 mb-3 fuente"> VOLVER</button>
  </div>
  <ext-content-footer></ext-content-footer>
</div>

</template>

<script>

import IntroReclamos from 'src/pages/Vistas/IntroReclamos'	
import FormularioReclamos from 'src/pages/Vistas/FormularioReclamos'  
import ConsultaReclamos from 'src/pages/Vistas/ConsultaReclamos'  
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
  components: {
  	IntroReclamos,
    FormularioReclamos,
    ConsultaReclamos,
    ExtTopNavbar,
    ExtContentFooter
  },
  mounted(){
    if(localStorage.getItem('AccessToken') != null && localStorage.getItem('expires_at') != null && localStorage.getItem('profile') != null && localStorage.getItem('operaciones') != null && localStorage.getItem('nickname') != null){
      this.$router.push('/inicio');     
    }else{}
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
