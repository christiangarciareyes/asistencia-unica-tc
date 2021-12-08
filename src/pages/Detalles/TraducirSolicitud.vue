<template>
<div class="content">
  <div>
      <loading :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="true"></loading>
  </div>
  <div class="md-layout">
  <md-card style="margin-top: -40px">
  <div class="news3">
      <div class="row">
        <div class="col-lg-12">
          <div class="news_posts">
          <div class="news_post">
            <div class= "row">
            <div class="col-md-12">
            <div class="news_post_top d-flex flex-column flex-sm-row">
              <div class="news_post_title_container">
                <div class="news_post_title">
                  <i v-on:click="atras" style="color: #AF52BF; cursor: pointer" class="fa fa-reply fa-2x p-r-20"></i>
                  <a style="color: #AF52BF">Traduce la Solicitud en Quechua</a>
                </div>
                <div class="news_post_meta">
                  <span class="news_post_author"><a style="color: #AF52BF">Traduce el envío de la solicitud en quechua ingresada</a></span>
                </div>
              </div>
            </div>
            </div>
            </div>
            <div class="news_post_text m-l-32 m-r-32">
              <p>En el siguiente formulario podrás traducir la solicitud que te ha sido enviada por fines de atención.</p>
            </div>
            <div class="pbar_container m-t-20 m-b-40 m-l-32 m-r-32">
                <label class="labelInput">NOMBRES Y APELLIDOS / RAZÓN SOCIAL</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="nombres" disabled/>
                <label class="labelInput">CORREO ELECTRÓNICO</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="correo" disabled/>
                <label class="labelInput">DOMICILIO</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="domicilio" disabled/>
                <label class="labelInput">AUDIO EN QUECHUA</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="audio" disabled/>
                <div class="container-form-btn fonTap m-t-40">
                    <iframe title="iframe" style="height: 200px; width: 100%" class="embed-responsive-item" :src="ruta" allowfullscreen></iframe>
                </div>
                <label class="labelInput m-t-20">FUNCIONARIO A QUÍEN SE DERIVÓ</label>
                <b-form-input style="border: 1px solid #D5D8DC; text-transform: uppercase" v-model="nomusuariotraductor" class="imp-fue mb-3" disabled />
                <label class="labelInput">DETALLE DEL ENVÍO</label>
                <textarea id="text" class="form-control imp-fue mb-3"
                     style="border-radius: 0px; height:200px; max-height:200px; min-height:200px"
                     v-model="traduccion"
                     no-resize
                     :rows="50"
                     :max-rows="100"
                     maxlength="10000"
                     disabled>
                </textarea>
                <div v-if="variante" class="news_post_text">
                  <p>1. La siguiente respuesta sera enviada por correo electrónico a las personas encargadas de la gestión de solicitudes, por lo que este correo será dirigido a uno o mas personas del área correspondiente.</p>
                </div>
                <label class="labelInput">TRADUCCIÓN DE LA SOLICITUD</label>
                <textarea id="text" class="form-control imp-fue mb-3"
                     style="border-radius: 0px; height:200px; max-height:200px; min-height:200px"
                     v-model="respuesta"
                     no-resize
                     :rows="50"
                     :max-rows="100"
                     maxlength="10000"
                     :disabled="variante == false">
                </textarea>
                <div v-if="variante" class="container-form-btn fonTap m-t-40">
                  <button v-on:click="traduciendo" class="routing-form-btn m-r-10 m-l-10 fuente"> ENVIAR TRADUCCIÓN</button>
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
     </div>
   </md-card>
 </div>
</div>
</template>

<script>


import axios from 'axios'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default{
  data () {
    return {
      usuario: localStorage.getItem('nickname'),
      authorization: this.$store.state.authorization,
      variante: false,
      idregistro: '',
      codreclamo:'',
      fecreclamo: '',
      nombres: '',
      correo: '',
      domicilio: '',
      audio: '',
      ruta: '',
      traduccion: '',
      respuesta: '',
      usuariotraductor: '',
      nomusuariotraductor: '',
      correotraductor: '',
      estado: '',
      isLoading: false,
      fullPage: true,
      usuariomodifica: ''
    }
  },
  created() {
    if(localStorage.getItem('AccessToken') != null && localStorage.getItem('expires_at') != null && localStorage.getItem('profile') != null && localStorage.getItem('operaciones') != null && localStorage.getItem('nickname') != null){
      if(this.$store.state.solicitudQue == ''){
        this.$router.go(-1);
      }else{
        this.idregistro = this.$store.state.solicitudQue.nid_detalletipoasistencia
        this.codreclamo = this.$store.state.solicitudQue.cnum_numperio
        this.fecreclamo = this.$store.state.solicitudQue.dfec_registro
        this.nombres = this.$store.state.solicitudQue.ctxt_nombres
        this.correo = this.$store.state.solicitudQue.ctxt_correo
        this.domicilio = this.$store.state.solicitudQue.ctxt_direccion
        this.audio = this.$store.state.solicitudQue.ctxt_audio
        this.ruta = this.$store.state.solicitudQue.ctxt_ruta
        this.usuariotraductor = this.$store.state.solicitudQue.ctxt_usuariotraductor
        this.nomusuariotraductor = this.$store.state.solicitudQue.ctxt_nomusuariotraductor
        this.correotraductor = this.$store.state.solicitudQue.ctxt_correotraductor
        this.traduccion = this.$store.state.solicitudQue.ctxt_detalleresponsable2
        this.respuesta = this.$store.state.solicitudQue.ctxt_detalletraductor
        this.estado = this.$store.state.solicitudQue.nflg_estado
        this.usuariomodifica = this.$store.state.solicitudQue.cnom_usuariomodifica
        if(this.estado == 1){
          this.variante = true;
        }
      }
    }else{
      this.$router.app.$auth.logout();
      this.$router.push({name: 'Portada'});
    }
  },
  methods: {
     traduciendo (){
      this.isLoading = true;
      if(this.respuesta != ''){
        let fromData = new FormData();
        fromData.append('codreclamo', this.codreclamo);
        fromData.append('fecreclamo', this.fecreclamo);
        fromData.append('nombres', this.nombres);
        fromData.append('correo', this.correo);
        fromData.append('domicilio', this.domicilio);
        fromData.append('usuariotraductor', this.usuariotraductor);
        fromData.append('nomusuariotraductor', this.nomusuariotraductor);
        fromData.append('correotraductor', this.correoderivado);
        fromData.append('detalleresponsable2', this.traduccion);
        fromData.append('detalletraductor', this.respuesta);
        fromData.append('estado', 2);
        fromData.append('usuario', this.usuario);
        fromData.append('iddetalletipoasistencia', this.idregistro);
        fromData.append('idtipoasistencia', 2);
        axios.post(this.$store.state.serverAsistenciaAdmin + '/updateTraducidoQuechua', fromData, {crossDomain: true, headers: {"Authorization": this.authorization}
        }).then((response) => {
          this.isLoading = false;
          this.atras();
          this.notifyVue4();
         },(error) => {
            this.isLoading = false;
         });
      }else{
        this.isLoading = false;
        this.notifyVue();
      }
     },
     atras (){
        this.$router.push('/traducciones');
     },
     notifyVue() {
       this.$notify(
        {
          message: 'Debe completar los campos!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'danger'
        })
     },
     notifyVue4() {
       this.$notify(
        {
          message: 'Solicitud en Quechua traducida correctamente!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'success'
        })
     }
  },
  components: {
    Loading
  }
}
</script>
