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
                      <a style="color: #AF52BF">Visualiza el Detalle del Reclamo</a>
                    </div>
                    <div class="news_post_meta">
                      <span class="news_post_author"><a style="color: #AF52BF">Deriva y/o atiende el reclamo ingresado</a></span>
                    </div>
                  </div>
                </div>
            </div>
              <div class="col-md-1">
                <i v-b-tooltip.hover title="Ver Documento" v-on:click="verPdf" style="color: #AF52BF; cursor: pointer; float: right; margin-top: 40px; margin-right: 30px" class="fa fa-file-pdf-o fa-3x p-r-20"></i>
              </div>
            </div>
            <div class="news_post_text m-l-32 m-r-32">
              <p>En el siguiente formulario verificarás el detalle del reclamo, como tambien podrás derivarlo y/o atenderlo.</p>
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
                <div class="container-form-btn fonTap m-t-40">
                  <button v-on:click="derivar" class="routing-form-btn m-r-10 m-l-10 mb-3 fuente"> GESTIONAR DERIVACIÓN</button>
                  <button v-on:click="atender" class="routing2-form-btn m-r-10 m-l-10 mb-3 fuente"> GESTIONAR ATENCIÓN</button>
                  <button v-on:click="seguir" class="routing-form-btn m-r-10 m-l-10 mb-3 fuente"> HOJA DE SEGUIMIENTO</button>
                </div>
                <div class="m-t-20" v-if="derivado">
                <div v-if="porderivar">
                <label class="labelInput">FUNCIONARIO A DERIVAR</label>
                <model-select :options="options" v-model="item" placeholder="Buscar persona" style="border: 1px solid #D5D8DC; border-radius: 0" class="form-control imp-fue mb-3"></model-select>
                <label class="labelInput">DETALLE DE LA DERIVACIÓN</label>
                <textarea id="text" class="form-control imp-fue mb-3"
                     style="border-radius: 0px; height:200px; max-height:200px; min-height:200px"
                     v-model="derivacion2"
                     no-resize
                     :rows="50"
                     :max-rows="100"
                     maxlength="10000">
                </textarea>
                <div class="container-form-btn fonTap m-t-40">
                  <button v-on:click="derivando" class="routing2-form-btn m-r-10 m-l-10 fuente"> ENVIAR DERIVACIÓN</button>
                </div>
                </div>
                <div v-if="yaderivado">
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
                <div class="container-form-btn fonTap m-t-40">
                  <button v-if="corrijo" v-on:click="corregir" class="routing3-form-btn m-r-10 m-l-10 mb-3 fuente"> ELIMINAR DERIVACIÓN</button>
                  <button v-if="envio" v-on:click="derivando" class="routing-form-btn m-r-10 m-l-10 mb-3 fuente"> ENVIAR DERIVACIÓN</button>
                </div>
                </div>
                </div>
                <div class="m-t-20" v-if="atendido">
                <div class="news_post_text">
                  <p>1. El boton <a style="text-decoration: none; color: red">Enviar Atención</a> se usa para dar una respuesta final sobre el reclamo registrado. Se enviará un correo electrónico al destinatario con el contenido que complete abajo.</p>
                  <p style="margin-top: -15px">2. El boton <a style="text-decoration: none; color: red">Enviar Archivo</a> se usará si la respuesta debe contener un archivo que puede ser un documento, imagen o video. Al darle clic, el sistema lo llevará 
                    a un apartado en donde deberá subir el archivo y enviar un correo al destinatario final.</p>
                  <p style="margin-top: -15px">3. Recordar que el archivo una vez enviado solo estará disponible para su descarga hasta 6 días despues de haber enviado y que solo podrá ser descargado máximo 3 veces.</p>
                </div>
                <label class="labelInput">ATENCIÓN</label>
                <textarea id="text" class="form-control imp-fue mb-3"
                     style="border-radius: 0px; height:300px; max-height:300px; min-height:300px"
                     v-model="atencion"
                     no-resize
                     :rows="50"
                     :max-rows="100"
                     maxlength="10000">
                </textarea>
                <div class="container-form-btn fonTap m-t-30">
                  <button v-on:click="enviar" class="routing-form-btn m-r-10 m-l-10 fuente"> ENVIAR ATENCIÓN</button>
                  <button v-on:click="enviarArchivo" class="routing2-form-btn m-r-10 m-l-10 mb-3 fuente"> ENVIAR ARCHIVO</button>
                </div>
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

import datasource from 'vue-resource'
import axios from 'axios'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import { ModelSelect } from 'vue-search-select'

export default{
  data () {
    return {
      usuario: localStorage.getItem('nickname'),
      cuenta: localStorage.getItem('name'),
      authorization: this.$store.state.authorization,
      porderivar: false,
      yaderivado: false,
      derivado: false,
      atendido: false,
      corrijo: true,
      envio: false,
      idregistro: '',
      codreclamo:'',
      fecreclamo: '',
      detalle: '',
      pedido: '',
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
      derivacion2: '',
      respuesta: '',
      nomusuarioderivado: '',
      atencion: '',
      usuarios: [],
      isLoading: false,
      fullPage: true,
      options: [],
      item: {
          value: '',
          text: ''
      },
    }
  },
  created() {
    if(localStorage.getItem('AccessToken') != null && localStorage.getItem('expires_at') != null && localStorage.getItem('profile') != null && localStorage.getItem('operaciones') != null && localStorage.getItem('nickname') != null){
      if(this.$store.state.reclamo == ''){
        this.$router.go(-1);
      }else{
        this.isLoading = true; 
        this.cargaUsuarios();
      }   
    }else{
      this.$router.app.$auth.logout();
      this.$router.push({name: 'Portada'});
    }
  },
  methods: {
     seguir(){
        this.$router.push({
          name: "HOJA DE SEGUIMIENTO",
          params:{
            id: this.idregistro,
          }
        });
     },
     enviarArchivo(){
        window.open("https://sharing.oodrive.com/auth/ws/tcperu/?service=share","_blank") 
     },
     verPdf(){
        this.$router.push('/detalleReclamo/visorReclamo');
     },
     cargaUsuarios(){
        axios.get(this.$store.state.autenticacion + '/persona/personaxusuario', {
        headers: {
          Authorization: this.authorization
        }
        }).then((response) => {
             this.usuarios = response.data
             var contador = 0
             this.usuarios.forEach(item => {
                contador = contador + 1
                this.options.push({ value: ''+contador, text: item.nombre });
             });
             this.llenado();
             this.validacion();
             this.isLoading = false; 
          },(error) => {

        });
     },
     validacion(){
        if(this.estado == 0){
          this.porderivar = true;
        }else if(this.estado == 1 || this.estado == 2){
          this.yaderivado = true;
        }else{}
     },
     derivar (){
       this.atendido = false;
       this.derivado = true;
     },
     atender (){
       this.derivado = false;
       this.atendido = true;
     },
     enviar (){
        this.isLoading = true; 
        if(this.atencion != ''){
          let fromData = new FormData();
          fromData.append('codreclamo', this.codreclamo);
          fromData.append('fecreclamo', this.fecreclamo);
          fromData.append('documento', this.tipodoc);
          fromData.append('numero', this.numdoc);
          fromData.append('nombres', this.nombres);
          fromData.append('apoderado', this.apoderado);
          fromData.append('correo', this.correo);
          fromData.append('celular', this.celular);
          fromData.append('domicilio', this.domicilio);
          fromData.append('tramite', this.tramite);
          fromData.append('reclamo', this.tiporeclamo);
          fromData.append('funcionario', this.funcionario);
          fromData.append('cargo', this.cargo);
          fromData.append('detalle', this.detalle);
          fromData.append('pedido', this.pedido);
          fromData.append('atencion', this.atencion);
          fromData.append('estado', 3);
          fromData.append('usuario', this.usuario);
          fromData.append('iddetalletipoasistencia', this.idregistro);
          fromData.append('idtipoasistencia', 1);
          axios.post(this.$store.state.serverAsistenciaAdmin + '/updateReclamo2', fromData, {crossDomain: true, headers: {"Authorization": this.authorization}
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
     corregir (){
        this.isLoading = true; 
        let fromData = new FormData();
        fromData.append('codreclamo', this.codreclamo);
        fromData.append('fecreclamo', this.fecreclamo);
        fromData.append('documento', this.tipodoc);
        fromData.append('numero', this.numdoc);
        fromData.append('nombres', this.nombres);
        fromData.append('apoderado', this.apoderado);
        fromData.append('correo', this.correo);
        fromData.append('celular', this.celular);
        fromData.append('domicilio', this.domicilio);
        fromData.append('tramite', this.tramite);
        fromData.append('reclamo', this.tiporeclamo);
        fromData.append('funcionario', this.funcionario);
        fromData.append('cargo', this.cargo);
        fromData.append('detalle', this.detalle);
        fromData.append('pedido', this.pedido);
        fromData.append('usuarioderivado', '');
        fromData.append('nomusuarioderivado', '');
        fromData.append('correoderivado', '');
        fromData.append('detalleresponsable', '');
        fromData.append('detallederivado', '');
        fromData.append('estado', 0);
        fromData.append('usuario', this.usuario);
        fromData.append('persona', this.usuario.toUpperCase());
        fromData.append('cuenta', this.cuenta);
        fromData.append('iddetalletipoasistencia', this.idregistro);
        fromData.append('idtipoasistencia', 1);
        axios.post(this.$store.state.serverAsistenciaAdmin + '/updateReclamo', fromData, {crossDomain: true, headers: {"Authorization": this.authorization}
        }).then((response) => {
          this.yaderivado = false;
          this.corrijo = false;
          this.porderivar = true;
          this.envio = true;
          this.isLoading = false;
          this.notifyVue3();          
         },(error) => {
            this.isLoading = false;
         });
     },
     derivando (){
        this.isLoading = true; 
        if(this.item.value != '' && this.derivacion2 != ''){
          let fromData = new FormData();
          fromData.append('codreclamo', this.codreclamo);
          fromData.append('fecreclamo', this.fecreclamo);
          fromData.append('documento', this.tipodoc);
          fromData.append('numero', this.numdoc);
          fromData.append('nombres', this.nombres);
          fromData.append('apoderado', this.apoderado);
          fromData.append('correo', this.correo);
          fromData.append('celular', this.celular);
          fromData.append('domicilio', this.domicilio);
          fromData.append('tramite', this.tramite);
          fromData.append('reclamo', this.tiporeclamo);
          fromData.append('funcionario', this.funcionario);
          fromData.append('cargo', this.cargo);
          fromData.append('detalle', this.detalle);
          fromData.append('pedido', this.pedido);
          fromData.append('usuarioderivado', this.usuarios[this.item.value - 1].usuario);
          fromData.append('nomusuarioderivado', this.usuarios[this.item.value - 1].nombre);
          fromData.append('correoderivado', this.usuarios[this.item.value - 1].correo);
          fromData.append('detalleresponsable', this.derivacion2);
          fromData.append('detallederivado', '');
          fromData.append('estado', 1);
          fromData.append('usuario', this.usuario);
          fromData.append('persona', this.usuario.toUpperCase());
          fromData.append('cuenta', this.cuenta);
          fromData.append('iddetalletipoasistencia', this.idregistro);
          fromData.append('idtipoasistencia', 1);
          axios.post(this.$store.state.serverAsistenciaAdmin + '/updateReclamo', fromData, {crossDomain: true, headers: {"Authorization": this.authorization}
          }).then((response) => {
            this.isLoading = false; 
            this.atras();
            this.notifyVue2();          
           },(error) => {
              this.isLoading = false;
           });
        }else{
          this.isLoading = false; 
          this.notifyVue();
        }
     },
     atras (){
        this.$router.push('/reclamaciones');
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
     notifyVue2() {
       this.$notify(
        {
          message: 'Reclamo derivado correctamente!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'success'
        })
     },
     notifyVue3() {
       this.$notify(
        {
          message: 'Reclamo actualizado correctamente!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'success'
        })
     },
     notifyVue4() {
       this.$notify(
        {
          message: 'Reclamo atendido correctamente!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'success'
        })
     },
     llenado(){
      this.idregistro = this.$store.state.reclamo.nid_detalletipoasistencia
      this.codreclamo = this.$store.state.reclamo.cnum_numperio
      this.fecreclamo = this.$store.state.reclamo.dfec_registro
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
      this.detalle = this.$store.state.reclamo.ctxt_reclamo
      this.pedido = this.$store.state.reclamo.ctxt_pedido
      this.nomusuarioderivado = this.$store.state.reclamo.ctxt_nomusuarioderivado
      this.derivacion = this.$store.state.reclamo.ctxt_detalleresponsable
      this.respuesta = this.$store.state.reclamo.ctxt_detallederivado
      this.estado = this.$store.state.reclamo.nflg_estado
     }
  },
  components: {
    Loading,
    ModelSelect
  }
}
</script>

