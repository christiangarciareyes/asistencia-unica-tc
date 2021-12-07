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
                  <a style="color: #AF52BF">Visualiza el Detalle del Reclamo</a>
                </div>
                <div class="news_post_meta">
                  <span class="news_post_author"><a style="color: #AF52BF">Visualiza el reclamo ingresado</a></span>
                </div>
              </div>
            </div>
            </div>
              <div class="col-md-1">
                <i v-b-tooltip.hover title="Ver Documento" v-on:click="verPdf" style="color: #AF52BF; cursor: pointer; float: right; margin-top: 40px; margin-right: 30px" class="fa fa-file-pdf-o fa-3x p-r-20"></i>
              </div>
            </div>
            <div class="news_post_text m-l-32 m-r-32">
              <p>En el siguiente formulario visualizarás el detalle del reclamo.</p>
            </div>
            <div class="pbar_container m-t-20 m-b-40 m-l-32 m-r-32">
                <label class="labelInput">TIPO DE DOCUMENTO</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="tipodoc" disabled/>
                <label class="labelInput">NÚMERO DE DOCUMENTO</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="numdoc" disabled/>
                <label class="labelInput">NOMBRES Y APELLIDOS / RAZÓN SOCIAL</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="nombres" disabled/>
                <label class="labelInput">NOMBRE DEL APODERADO</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="apoderado" disabled/>
                <label class="labelInput">CORREO ELECTRÓNICO</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="correo" disabled/>
                <label class="labelInput">TELÉFONO FIJO / CELULAR</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="celular" disabled/>
                <label class="labelInput">DOMICILIO</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="domicilio" disabled/>
                <label class="labelInput">NÚMERO DE TRÁMITE</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="tramite" disabled/>
                <label class="labelInput">TIPO DE RECLAMO</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="tiporeclamo" disabled/>
                <label class="labelInput">NOMBRE DEL FUNCIONARIO</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="funcionario" disabled/>
                <label class="labelInput">CARGO DEL FUNCIONARIO</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="cargo" disabled/>
                <label class="labelInput">DETALLE DEL RECLAMO / QUEJA</label>
                <textarea id="text" class="form-control imp-fue mb-3"
                     style="border-radius: 0px; height:300px; max-height:300px; min-height:300px"
                     v-model="detalle"
                     no-resize
                     :rows="50"
                     :max-rows="100"
                     maxlength="10000"
                     disabled>
                </textarea>
                <label class="labelInput">PEDIDO</label>
                <textarea id="text" class="form-control imp-fue mb-3"
                     style="border-radius: 0px; height:300px; max-height:300px; min-height:300px"
                     v-model="pedido"
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
      detalle: '',
      pedido: '',
      atencion: '',
      tipodoc: '',
      numdoc: '',
      nombres: '',
      apoderado: '',
      correo: '',
      celular: '',
      domicilio: '',
      tramite: '',
      tiporeclamo: '',
      funcionario: '',
      cargo: '',
      derivacion: '',
      respuesta: '',
      nomusuarioderivado: '',
    }
  },
  created() {
    if(localStorage.getItem('AccessToken') != null && localStorage.getItem('expires_at') != null && localStorage.getItem('profile') != null && localStorage.getItem('operaciones') != null && localStorage.getItem('nickname') != null){
      if(this.$store.state.reclamo == ''){
        this.$router.go(-1);
      }else{
        this.detalle = this.$store.state.reclamo.ctxt_reclamo
        this.pedido = this.$store.state.reclamo.ctxt_pedido
        this.atencion = this.$store.state.reclamo.ctxt_respuestaresponsable
        this.tipodoc = this.$store.state.reclamo.ctxt_tipodoc
        this.numdoc = this.$store.state.reclamo.cnum_doc
        this.nombres = this.$store.state.reclamo.ctxt_nomape
        this.apoderado = this.$store.state.reclamo.ctxt_datospadre
        this.correo = this.$store.state.reclamo.ctxt_correo
        this.celular = this.$store.state.reclamo.cnum_celular
        this.domicilio = this.$store.state.reclamo.ctxt_domicilio
        this.tramite = this.$store.state.reclamo.cnum_tramite
        this.tiporeclamo = this.$store.state.reclamo.ctxt_tiporeclamo
        this.funcionario = this.$store.state.reclamo.ctxt_nomfuncionario
        this.cargo = this.$store.state.reclamo.ctxt_cargofuncionario
        this.derivacion = this.$store.state.reclamo.ctxt_detalleresponsable
        this.respuesta = this.$store.state.reclamo.ctxt_detallederivado
        this.nomusuarioderivado = this.$store.state.reclamo.ctxt_nomusuarioderivado
      }    
    }else{
      this.$router.app.$auth.logout();
      this.$router.push({name: 'Portada'});
    }
  },
  methods: {
     verPdf(){
        this.$router.push('/detalleReclamo/visorReclamo');
     },
     atras (){
        this.$router.push('/reclamaciones');
     }
  }
}
</script>