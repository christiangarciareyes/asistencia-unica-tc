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
                  <a style="color: #AF52BF">Realiza Auditoría a la Solicitud</a>
                </div>
                <div class="news_post_meta">
                 <span class="news_post_author"><a style="color: #AF52BF">Verifica los datos y atención de la solicitud</a></span>
                </div>
              </div>
            </div>
            </div>
              <div class="col-md-1">
                <i v-b-tooltip.hover title="Ver Documento" v-on:click="verPdf" style="color: #AF52BF; cursor: pointer; float: right; margin-top: 40px; margin-right: 30px" class="fa fa-file-pdf-o fa-3x p-r-20"></i>
              </div>
            </div>
            <div class="news_post_text m-l-32 m-r-32">
              <p>En el siguiente formulario verificarás el detalle de la solicitud, como tambien podrás auditarlo.</p>
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
              <div class="row">
              <div class="col-md-4">
                 <label class="labelInput">PAÍS</label>
                  <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="pais" disabled/>
              </div>
              <div class="col-md-4">
                 <label class="labelInput">DEPARTAMENTO</label>
                  <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="departamento" disabled/>
              </div>
                <div class="col-md-4">
                 <label class="labelInput">DISTRITO</label>
                  <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="distrito" disabled/>
              </div>
              </div>
              <div class="row">
              <div class="col-md-4">
                 <label class="labelInput">AV. / CALLE / JR. / PSJ.</label>
                  <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="avenida" disabled/>
              </div>
              <div class="col-md-4">
                 <label class="labelInput">N° / DPTO ./ INT.</label>
                  <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="interior" disabled/>
              </div>
                <div class="col-md-4">
                 <label class="labelInput">URBANIZACIÓN</label>
                  <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="urbanizacion" disabled/>
              </div>
              </div>
              <label class="labelInput">CORREO ELECTRÓNICO</label>
              <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="correo" disabled/>
              <label class="labelInput">TELÉFONO FIJO / CELULAR</label>
              <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="celular" disabled/>
              <label class="labelInput">TEMA DE INFORMACIÓN</label>
              <b-form-input style="border: 1px solid #D5D8DC" class="imp-fue mb-3" v-model="tema" disabled/>
              <label class="labelInput">DEPENDENCIA DE LA INFORMACIÓN</label>
              <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="dependencia" disabled/>
              <label class="labelInput">FORMA DE ENTREGA</label>
              <b-form-input style="border: 1px solid #D5D8DC" class="imp-fue mb-3" v-model="forma" disabled/>
              <label class="labelInput">ESPECIFIQUE FORMA DE ENTREGA</label>
              <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="entrega" disabled/>
              <label class="labelInput">EXPRESIÓN CONCRETA Y PRECISA DEL PEDIDO</label>
              <textarea id="text" class="form-control imp-fue mb-3"
                   style="border-radius: 0px; height:300px; max-height:300px; min-height:300px"
                   v-model="pedido"
                   no-resize
                   :rows="50"
                   :max-rows="100"
                   maxlength="10000"
                   disabled>
              </textarea>
              <label class="labelInput">OBSERVACIONES</label>
              <textarea id="text" class="form-control imp-fue mb-3"
                   style="border-radius: 0px; height:200px; max-height:200px; min-height:200px"
                   v-model="observaciones"
                   no-resize
                   :rows="50"
                   :max-rows="500"
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
      observaciones: '',
      pedido: '',
      respuesta: '',
      tipodoc: '',
      numdoc: '',
      nombres: '',
      apoderado: '',
      pais: '',
      departamento: '',
      distrito: '',
      avenida: '',
      interior: '',
      urbanizacion: '',
      correo: '',
      celular: '',
      tema: '',
      dependencia: '',
      forma: '',
      entrega: '',
      nomusuarioderivado: '',
      atencion: '',
      derivacion: ''
    }
  },
  created() {
    if(localStorage.getItem('AccessToken') != null && localStorage.getItem('expires_at') != null && localStorage.getItem('profile') != null && localStorage.getItem('operaciones') != null && localStorage.getItem('nickname') != null){
     if(this.$store.state.solicitud == ''){
        this.$router.go(-1);
      }else{
        this.tipodoc = this.$store.state.solicitud.ctxt_tipodoc
        this.numdoc = this.$store.state.solicitud.cnum_doc
        this.nombres = this.$store.state.solicitud.ctxt_nomape
        this.apoderado = this.$store.state.solicitud.ctxt_datospadre
        this.pais = this.$store.state.solicitud.ctxt_pais
        this.departamento = this.$store.state.solicitud.ctxt_departamento
        this.distrito = this.$store.state.solicitud.ctxt_distrito
        this.avenida = this.$store.state.solicitud.ctxt_avenida
        this.interior = this.$store.state.solicitud.ctxt_interior
        this.urbanizacion = this.$store.state.solicitud.ctxt_urbanizacion
        if(this.$store.state.solicitud.ctxt_correo == 'asistenciaunica@tc.gob.pe'){
          this.correo = '--'
        }else{
          this.correo = this.$store.state.solicitud.ctxt_correo
        }
        this.celular = this.$store.state.solicitud.cnum_celular
        this.tema = this.$store.state.solicitud.ctxt_tema
        this.dependencia = this.$store.state.solicitud.ctxt_dependencia
        this.forma = this.$store.state.solicitud.ctxt_formaentrega
        this.entrega = this.$store.state.solicitud.ctxt_especificacion
        this.pedido = this.$store.state.solicitud.ctxt_solicitud
        this.observaciones = this.$store.state.solicitud.ctxt_observaciones
        this.nomusuarioderivado = this.$store.state.solicitud.ctxt_nomusuarioderivado
        this.derivacion = this.$store.state.solicitud.ctxt_detalleresponsable
        this.respuesta = this.$store.state.solicitud.ctxt_detallederivado
        this.atencion = this.$store.state.solicitud.ctxt_respuestaresponsable
      }   
    }else{
      this.$router.app.$auth.logout();
      this.$router.push({name: 'Portada'});
    }
  },
  methods: {
     verPdf(){
        this.$router.push('/detalleSolicitud/visorSolicitud');
     },
     atras (){
        this.$router.push('/auditoria');
     }
  }
}
</script>