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
                  <a style="color: #AF52BF">Consulta el Detalle de la Solicitud</a>
                </div>
                <div class="news_post_meta">
                  <span class="news_post_author"><a style="color: #AF52BF">Responde la derivación de la solicitud ingresada</a></span>
                </div>
              </div>
            </div>
            </div>
              <div class="col-md-1">
                <i v-b-tooltip.hover title="Ver Documento" v-on:click="verPdf" style="color: #AF52BF; cursor: pointer; float: right; margin-top: 40px; margin-right: 30px" class="fa fa-file-pdf-o fa-3x p-r-20"></i>
              </div>
            </div>
            <div class="news_post_text m-l-32 m-r-32">
              <p>En el siguiente formulario podrás responder la solicitud que te ha sido derivado por fines de atención.</p>
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
              <b-form-input style="border: 1px solid #D5D8DC" class="imp-fue mb-3" v-model="entrega" disabled/>
              <label class="labelInput">ESPECIFIQUE FORMA DE ENTREGA</label>
              <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" disabled/>
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
                <div v-if="variante" class="news_post_text">
                  <p>1. La siguiente respuesta sera enviada por correo electrónico a las personas encargadas de la gestión de solicitudes, por lo que este correo será dirigido a uno a mas personas del área correspondiente.</p>
                  <p style="margin-top: -15px">2. Si la respuesta contiene un archivo deberá enviarlo al correo electrónico del usuario <a :href="'mailto:' + usuariomodifica + '@tc.gob.pe'" target="_blank" style="text-decoration: none; text-transform: lowercase; color: red">{{usuariomodifica + '@tc.gob.pe'}}</a>, quien se encargo de realizar la derivación de esta solicitud a su persona.</p>
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
      usuarioderivado: '',
      nomusuarioderivado: '',
      correoderivado: '',
      derivacion: '',
      estado: '',
      isLoading: false,
      fullPage: true,
      usuariomodifica: ''
    }
  },
  created() {
    if(localStorage.getItem('AccessToken') != null && localStorage.getItem('expires_at') != null && localStorage.getItem('profile') != null && localStorage.getItem('operaciones') != null && localStorage.getItem('nickname') != null){
      if(this.$store.state.solicitud == ''){
        this.$router.go(-1);
      }else{
        this.idregistro = this.$store.state.solicitud.nid_detalletipoasistencia
        this.codreclamo = this.$store.state.solicitud.cnum_numperio
        this.fecreclamo = this.$store.state.solicitud.dfec_registro
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
        this.usuarioderivado = this.$store.state.solicitud.ctxt_usuarioderivado
        this.nomusuarioderivado = this.$store.state.solicitud.ctxt_nomusuarioderivado
        this.correoderivado = this.$store.state.solicitud.ctxt_correoderivado
        this.derivacion = this.$store.state.solicitud.ctxt_detalleresponsable
        this.respuesta = this.$store.state.solicitud.ctxt_detallederivado
        this.estado = this.$store.state.solicitud.nflg_estado
        this.usuariomodifica = this.$store.state.solicitud.cnom_usuariomodifica
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
        this.$router.push('/detalleSolicitud/visorSolicitud');
     },
     derivando (){
      this.isLoading = true;
      if(this.respuesta != ''){
        let fromData = new FormData();
        fromData.append('codreclamo', this.codreclamo);
        fromData.append('fecreclamo', this.fecreclamo);
        fromData.append('documento', this.tipodoc);
        fromData.append('numero', this.numdoc);
        fromData.append('nombres', this.nombres);
        fromData.append('apoderado', this.apoderado);
        fromData.append('pais', this.pais);
        fromData.append('departamento', this.departamento);
        fromData.append('distrito', this.distrito);
        fromData.append('avenida', this.avenida);
        fromData.append('interior', this.interior);
        fromData.append('urbanizacion', this.urbanizacion);
        fromData.append('correo', this.correo);
        //fromData.append('correo2', '--'); Agregado en el backend
        fromData.append('celular', this.celular);
        fromData.append('tema', this.tema);
        fromData.append('dependencia', this.dependencia);
        fromData.append('formaentrega', this.forma);
        fromData.append('especificacion', this.entrega);
        fromData.append('domicilio', '');
        fromData.append('tramite', '');
        //fromData.append('persona', '--'); Agregado en el backend
        fromData.append('reclamo', '');
        fromData.append('funcionario', '');
        fromData.append('cargo', '');
        fromData.append('detalle', '');
        fromData.append('pedido', '');
        fromData.append('solicitud', this.pedido);
        fromData.append('observaciones', this.observaciones);
        fromData.append('usuarioderivado', this.usuarioderivado);
        fromData.append('nomusuarioderivado', this.nomusuarioderivado);
        fromData.append('correoderivado', this.correoderivado);
        fromData.append('detalleresponsable', this.derivacion);
        fromData.append('detallederivado', this.respuesta);
        fromData.append('estado', 2);
        fromData.append('usuario', this.usuario);
        fromData.append('iddetalletipoasistencia', this.idregistro);
        fromData.append('idtipoasistencia', 2);
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
          message: 'Solicitud respondida correctamente!',
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
