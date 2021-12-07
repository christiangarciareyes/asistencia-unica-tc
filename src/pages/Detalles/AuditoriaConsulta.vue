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
            <div class="col-md-11">
            <div class="news_post_top d-flex flex-column flex-sm-row">
              <div class="news_post_title_container">
                <div class="news_post_title">
                  <i v-on:click="atras" style="color: #AF52BF; cursor: pointer" class="fa fa-reply fa-2x p-r-20"></i>
                  <a style="color: #AF52BF">Realiza Auditoría a la Consulta</a>
                </div>
                <div class="news_post_meta">
                  <span class="news_post_author"><a style="color: #AF52BF">Verifica los datos y atención de la consulta</a></span>
                </div>
              </div>
            </div>
            </div>
              <div class="col-md-1">
                <i v-b-tooltip.hover title="Ver Documento" v-on:click="verPdf" style="color: #AF52BF; cursor: pointer; float: right; margin-top: 40px; margin-right: 30px" class="fa fa-file-pdf-o fa-3x p-r-20"></i>
              </div>
            </div>
            <div class="news_post_text m-l-32 m-r-32">
              <p>En el siguiente formulario verificarás el detalle de la consulta, como tambien podrás auditarlo.</p>
            </div>
            <div class="pbar_container m-t-20 m-b-40 m-l-32 m-r-32">
                <label class="labelInput">TIPO DE DOCUMENTO</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="tipodoc" disabled/>
                <label class="labelInput">NÚMERO DE DOCUMENTO</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="numdoc" disabled/>
                <label class="labelInput">NOMBRES Y APELLIDOS</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="nombres" disabled/>
                <div class="row">
                  <div class="col-md-6">
                    <label class="labelInput">TIPO DE PERSONA</label>
                    <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="persona" disabled/>   
                  </div>
                  <div class="col-md-6">
                    <label class="labelInput">TIPO DE CANAL</label>
                    <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="canal" disabled/>
                  </div>
							  </div>
                <div class="row">
                  <div class="col-md-6">
                    <label class="labelInput">CORREO ELECTRÓNICO</label>
                    <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="correo" disabled/> 
                  </div>
                  <div class="col-md-6">
                    <label class="labelInput">CORREO ELECTRÓNICO 2</label>
                    <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="correo2" disabled/>
                  </div>
							  </div>
                <div class="row">
                  <div class="col-md-6">
                    <label class="labelInput">TELÉFONO FIJO / CELULAR</label>
                    <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="celular" disabled/>
                  </div>
                  <div class="col-md-6">
                    <label class="labelInput">N° DE EXPEDIENTE</label>
                    <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="expediente" disabled/>
                  </div>
							  </div>
                <label class="labelInput">DETALLE DE LA CONSULTA</label>
                <textarea id="text" class="form-control imp-fue mb-3"
                     style="border-radius: 0px; height:200px; max-height:200px; min-height:200px"
                     v-model="detalle"
                     no-resize
                     :rows="30"
                     :max-rows="50"
                     maxlength="1000"
                     disabled>
                </textarea>
                <label class="labelInput">FUNCIONARIO A QUÍEN SE DERIVÓ</label>
                <b-form-input style="border: 1px solid #D5D8DC; text-transform: uppercase" v-model="nomusuarioderivado" class="imp-fue mb-3" disabled/>
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
                <textarea id="text" class="form-control imp-fue mb-3"
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
      persona: '',
      detalle: '',
      atencion: '',
      tipodoc: '',
      numdoc: '',
      nombres: '',
      canal: '',
      correo: '',
      correo2: '',
      celular: '',
      expediente: '',
      derivacion: '',
      respuesta: '',
      nomusuarioderivado: ''
    }
  },
  created() {
    if(localStorage.getItem('AccessToken') != null && localStorage.getItem('expires_at') != null && localStorage.getItem('profile') != null && localStorage.getItem('operaciones') != null && localStorage.getItem('nickname') != null){
      if(this.$store.state.consulta == ''){
        this.$router.go(-1);
      }else{
        this.tipodoc = this.$store.state.consulta.ctxt_tipodoc
        this.numdoc = this.$store.state.consulta.cnum_doc
        this.nombres = this.$store.state.consulta.ctxt_nomape
        this.persona = this.$store.state.consulta.ctxt_tipopersona
        this.canal = this.$store.state.consulta.ctxt_tiporeclamo
        this.correo = this.$store.state.consulta.ctxt_correo
        this.correo2 = this.$store.state.consulta.ctxt_correo2
        this.celular = this.$store.state.consulta.cnum_celular
        this.expediente = this.$store.state.consulta.cnum_expediente
        this.detalle = this.$store.state.consulta.ctxt_reclamo
        this.nomusuarioderivado = this.$store.state.consulta.ctxt_nomusuarioderivado
        this.atencion = this.$store.state.consulta.ctxt_respuestaresponsable
        this.derivacion = this.$store.state.consulta.ctxt_detalleresponsable
        this.respuesta = this.$store.state.consulta.ctxt_detallederivado
      }  
    }else{
      this.$router.app.$auth.logout();
      this.$router.push({name: 'Portada'});
    }
  },
  methods: {
     verPdf(){
        this.$router.push('/detalleConsulta/visorConsulta');
     },
  	 atras (){
        this.$router.push('/auditoria');
     }
  }
}
</script>