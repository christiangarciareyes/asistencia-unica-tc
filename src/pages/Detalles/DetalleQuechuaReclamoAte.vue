<template>
<div class="content">
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
                  <a style="color: #AF52BF">Visualiza el Detalle del Reclamo en Quechua</a>
                </div>
                <div class="news_post_meta">
                  <span class="news_post_author"><a style="color: #AF52BF">visualiza el reclamo ingresado</a></span>
                </div>
              </div>
            </div>
            </div>
            </div>
            <div class="news_post_text m-l-32 m-r-32">
              <p>En el siguiente formulario visualizarás el detalle del reclamo.</p>
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
                <label class="labelInput m-t-20">DETALLE DEL ENVÍO</label>
                <textarea id="text" class="form-control imp-fue mb-3"
                     style="border-radius: 0px; height:200px; max-height:200px; min-height:200px"
                     v-model="traduccion"
                     no-resize
                     :rows="50"
                     :max-rows="100"
                     maxlength="10000"
                     disabled>
                </textarea>
                <label class="labelInput">RESPUESTA DE LA TRADUCCIÓN</label>
                <textarea id="text" class="form-control imp-fue mb-3"
                     style="border-radius: 0px; height:200px; max-height:200px; min-height:200px"
                     v-model="respuestatrad"
                     no-resize
                     :rows="50"
                     :max-rows="100"
                     maxlength="10000"
                     disabled>
                </textarea>
                <label class="labelInput">FUNCIONARIO A QUÍEN SE DERIVÓ</label>
                <b-form-input style="border: 1px solid #D5D8DC; text-transform: uppercase" class="imp-fue mb-3" v-model="nomusuarioderivado" disabled/>
                <label class="labelInput">DETALLE DE LA DERIVACIÓN</label>
                <textarea id="text" class="form-control imp-fue mb-3"
                     style="border-radius: 0px; height:200px; max-height:200px; min-height:200px"
                     v-model="derivacion"
                     no-resize
                     :rows="50"
                     :max-rows="100"
                     maxlength="10000"
                     disabled>
                </textarea>
                <label class="labelInput">RESPUESTA DE LA DERIVACIÓN</label>
                <textarea id="text" class="form-control imp-fue mb-3"
                     style="border-radius: 0px; height:200px; max-height:200px; min-height:200px"
                     v-model="respuesta"
                     no-resize
                     :rows="50"
                     :max-rows="100"
                     maxlength="10000"
                     disabled>
                </textarea>
                <label class="labelInput">ATENCIÓN</label>
                <textarea id="text" class="form-control imp-fue"
                     style="border-radius: 0px; height:300px; max-height:300px; min-height:300px"
                     v-model="atencion"
                     no-resize
                     :rows="50"
                     :max-rows="100"
                     maxlength="10000"
                     disabled>
                </textarea>
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

export default{
  data () {
    return {
      atencion: '',
      nombres: '',
      correo: '',
      domicilio: '',
      audio: '',
      ruta: '',
      traduccion: '',
      respuestatrad: '',
      derivacion: '',
      respuesta: '',
      nomusuarioderivado: '',
    }
  },
  created() {
    if(localStorage.getItem('AccessToken') != null && localStorage.getItem('expires_at') != null && localStorage.getItem('profile') != null && localStorage.getItem('operaciones') != null && localStorage.getItem('nickname') != null){
      if(this.$store.state.reclamoQue == ''){
        this.$router.go(-1);
      }else{
        this.nombres = this.$store.state.reclamoQue.ctxt_nombres
        this.correo = this.$store.state.reclamoQue.ctxt_correo
        this.domicilio = this.$store.state.reclamoQue.ctxt_direccion
        this.audio = this.$store.state.reclamoQue.ctxt_audio
        this.ruta = this.$store.state.reclamoQue.ctxt_ruta
        this.traduccion = this.$store.state.reclamoQue.ctxt_detalleresponsable2
        this.respuestatrad = this.$store.state.reclamoQue.ctxt_detalletraductor
        this.nomusuarioderivado = this.$store.state.reclamoQue.ctxt_nomusuarioderivado
        this.derivacion = this.$store.state.reclamoQue.ctxt_detalleresponsable
        this.respuesta = this.$store.state.reclamoQue.ctxt_detallederivado
        this.atencion = this.$store.state.reclamoQue.ctxt_respuestaresponsable
      }
    }else{
      this.$router.app.$auth.logout();
      this.$router.push({name: 'Portada'});
    }
  },
  methods: {
     atras (){
        this.$router.push('/reclamaciones');
     }
  }
}
</script>
