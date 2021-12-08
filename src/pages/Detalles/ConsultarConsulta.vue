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
            <div class="col-md-11">
            <div class="news_post_top d-flex flex-column flex-sm-row">
              <div class="news_post_title_container">
                <div class="news_post_title">
                  <i v-on:click="atras" style="color: #AF52BF; cursor: pointer" class="fa fa-reply fa-2x p-r-20"></i>
                  <a style="color: #AF52BF">Consulta el Detalle de la Consulta</a>
                </div>
                <div class="news_post_meta">
                  <span class="news_post_author"><a style="color: #AF52BF">Responde la derivación de la consulta ingresada</a></span>
                </div>
              </div>
            </div>
            </div>
              <div class="col-md-1">
                <i v-b-tooltip.hover title="Ver Documento" v-on:click="verPdf" style="color: #AF52BF; cursor: pointer; float: right; margin-top: 40px; margin-right: 30px" class="fa fa-file-pdf-o fa-3x p-r-20"></i>
              </div>
            </div>
            <div class="news_post_text m-l-32 m-r-32">
              <p>En el siguiente formulario podrás responder la consulta que te ha sido derivado por fines de atención.</p>
            </div>
            <div class="pbar_container m-t-20 m-b-40 m-l-32 m-r-32">
                <label class="labelInput">TIPO DE DOCUMENTO</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="tipodoc" disabled/>
                <label class="labelInput">NÚMERO DE DOCUMENTO</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="numdoc" disabled/>
                <label class="labelInput">NOMBRES Y APELLIDOS / RAZÓN SOCIAL</label>
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
                <b-form-input style="border: 1px solid #D5D8DC; text-transform: uppercase" v-model="nomusuarioderivado" class="imp-fue mb-3" disabled />
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
                <div v-if="variante" class="news_post_text">
                  <p>1. La siguiente respuesta sera enviada por correo electrónico a las personas encargadas de la gestión de Consultas, por lo que este correo será dirigido a uno a mas personas del área correspondiente.</p>
                  <p style="margin-top: -15px">2. Si la respuesta contiene un archivo deberá enviarlo al correo electrónico del usuario <a :href="'mailto:' + usuariomodifica + '@tc.gob.pe'" target="_blank" style="text-decoration: none; text-transform: lowercase; color: red">{{usuariomodifica + '@tc.gob.pe'}}</a>, quien se encargo de realizar la derivación de esta consulta a su persona.</p>
                </div>
                <label class="labelInput">RESPUESTA DE LA DERIVACIÓN</label>
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
                  <button v-on:click="derivando" class="routing-form-btn m-r-10 m-l-10 fuente"> ENVIAR RESPUESTA</button>
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
      persona: '',
      detalle: '',
      pedido: '',
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
      usuarioderivado: '',
      nomusuarioderivado: '',
      correoderivado: '',
      estado: '',
      isLoading: false,
      fullPage: true,
      usuariomodifica: ''
    }
  },
  created() {
    if(localStorage.getItem('AccessToken') != null && localStorage.getItem('expires_at') != null && localStorage.getItem('profile') != null && localStorage.getItem('operaciones') != null && localStorage.getItem('nickname') != null){
      if(this.$store.state.consulta == ''){
        this.$router.go(-1);
      }else{
        this.idregistro = this.$store.state.consulta.nid_detalletipoasistencia
        this.codreclamo = this.$store.state.consulta.cnum_numperio
        this.fecreclamo = this.$store.state.consulta.dfec_registro
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
        this.usuarioderivado = this.$store.state.consulta.ctxt_usuarioderivado
        this.nomusuarioderivado = this.$store.state.consulta.ctxt_nomusuarioderivado
        this.correoderivado = this.$store.state.consulta.ctxt_correoderivado
        this.derivacion = this.$store.state.consulta.ctxt_detalleresponsable
        this.respuesta = this.$store.state.consulta.ctxt_detallederivado
        this.estado = this.$store.state.consulta.nflg_estado
        this.usuariomodifica = this.$store.state.consulta.cnom_usuariomodifica
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
     verPdf(){
        this.$router.push('/detalleConsulta/visorConsulta');
     },
     derivando (){
      if(this.correo2 == '' || this.correo2 == null || this.correo2 == 'null' || this.correo2 == undefined){
          this.correo2 = '--'
      }
      if(this.persona == '' || this.persona == null || this.persona == 'null' || this.persona == undefined){
          this.persona = '--'
      }
      if(this.expediente == '' || this.expediente == null || this.expediente == 'null' || this.expediente == undefined){
          this.expediente = '--'
      }
      this.isLoading = true;
      if(this.respuesta != ''){
        let fromData = new FormData();
        fromData.append('codreclamo', this.codreclamo);
        fromData.append('fecreclamo', this.fecreclamo);
        fromData.append('documento', this.tipodoc);
        fromData.append('numero', this.numdoc);
        fromData.append('nombres', this.nombres);
        fromData.append('apoderado', '');
        fromData.append('pais', '');
        fromData.append('departamento', '');
        fromData.append('distrito', '');
        fromData.append('avenida', '');
        fromData.append('interior', '');
        fromData.append('urbanizacion', '');
        fromData.append('correo', this.correo);
        fromData.append('correo2', this.correo2);
        fromData.append('celular', this.celular);
        fromData.append('expediente', this.expediente);
        fromData.append('tema', '');
        fromData.append('dependencia', '');
        fromData.append('formaentrega', '');
        fromData.append('especificacion', '');
        fromData.append('domicilio', '');
        fromData.append('tramite', '');
        fromData.append('persona', this.persona);
        fromData.append('reclamo', this.canal);
        fromData.append('funcionario', '');
        fromData.append('cargo', '');
        fromData.append('detalle', this.detalle);
        fromData.append('pedido', '');
        fromData.append('solicitud', '');
        fromData.append('observaciones', '');
        fromData.append('usuarioderivado', this.usuarioderivado);
        fromData.append('nomusuarioderivado', this.nomusuarioderivado);
        fromData.append('correoderivado', this.correoderivado);
        fromData.append('detalleresponsable', this.derivacion);
        fromData.append('detallederivado', this.respuesta);
        fromData.append('estado', 2);
        fromData.append('usuario', this.usuario);
        fromData.append('iddetalletipoasistencia', this.idregistro);
        fromData.append('idtipoasistencia', 3);
        axios.post(this.$store.state.serverAsistenciaAdmin + '/updateDerivado', fromData, {crossDomain: true, headers: {"Authorization": this.authorization}
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
        this.$router.push('/derivaciones');
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
          message: 'Consulta respondida correctamente!',
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
