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
                      <a style="color: #AF52BF">Visualiza el Detalle de la Consulta</a>
                    </div>
                    <div class="news_post_meta">
                      <span class="news_post_author"><a style="color: #AF52BF">Deriva y/o atiende la consulta ingresada</a></span>
                    </div>
                  </div>
                </div>
            </div>
              <div class="col-md-1">
                <i v-b-tooltip.hover title="Ver Documento" v-on:click="verPdf" style="color: #AF52BF; cursor: pointer; float: right; margin-top: 40px; margin-right: 30px" class="fa fa-file-pdf-o fa-3x p-r-20"></i>
              </div>
            </div>
            <div class="news_post_text m-l-32 m-r-32">
              <p>En el siguiente formulario verificarás el detalle de la consulta, como tambien podrás derivarlo y/o atenderlo.</p>
            </div>
            <div class="pbar_container m-t-20 m-b-40 m-l-32 m-r-32">
                <label class="labelInput">TIPO DE DOCUMENTO</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="tipodoc" :disabled="editable"/>
                <label class="labelInput">NÚMERO DE DOCUMENTO</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="numdoc" :disabled="editable"/>
                <label class="labelInput">NOMBRES Y APELLIDOS</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="nombres" :disabled="editable"/>
                <div class="row">
                  <div class="col-md-6">
                    <label class="labelInput">TIPO DE PERSONA</label>
                    <b-form-input v-if="editable" style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="persona" disabled/>
                    <model-select v-if="!editable" :options="options3" v-model="item3" placeholder="Selecciona el tipo de persona" style="border: 1px solid #D5D8DC; border-radius: 0" class="form-control imp-fue mb-3"></model-select>
                  </div>
                  <div class="col-md-6">
                    <label class="labelInput">TIPO DE CANAL</label>
                    <b-form-input v-if="editable" style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="canal" disabled/>
                    <model-select v-if="!editable" :options="options2" v-model="item2" placeholder="Selecciona el tipo de canal" style="border: 1px solid #D5D8DC; border-radius: 0" class="form-control imp-fue mb-3"></model-select>
                  </div>
							  </div>
                <div class="row">
                  <div class="col-md-6">
                    <label class="labelInput">CORREO ELECTRÓNICO</label>
                    <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="correo" :disabled="editable"/>
                  </div>
                  <div class="col-md-6">
                    <label class="labelInput">CORREO ELECTRÓNICO 2</label>
                    <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="correo2" :disabled="editable"/>
                  </div>
							  </div>
                <div class="row">
                  <div class="col-md-6">
                    <label class="labelInput">TELÉFONO FIJO / CELULAR</label>
                    <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="celular" :disabled="editable"/>
                  </div>
                  <div class="col-md-6">
                    <label class="labelInput">N° DE EXPEDIENTE</label>
                    <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="expediente" :disabled="editable"/>
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
                     :disabled="editable">
                </textarea>
                <div class="container-form-btn fonTap m-t-40">
                  <button v-if="editable" v-on:click="editar" class="routing3-form-btn m-r-10 m-l-10 mb-3 fuente"> EDITAR CONSULTA</button>
                  <button v-if="!editable" v-on:click="quitar" class="routing-form-btn m-r-10 m-l-10 mb-3 fuente"> QUITAR EDICIÓN</button>
                  <button v-if="!editable" v-on:click="actualizar" class="routing3-form-btn m-r-10 m-l-10 mb-3 fuente"> ACTUALIZAR CONSULTA</button>
                  <button v-on:click="derivar" class="routing-form-btn m-r-10 m-l-10 mb-3 fuente"> GESTIONAR DERIVACIÓN</button>
                  <button v-on:click="atender" class="routing2-form-btn m-r-10 m-l-10 mb-3 fuente"> GESTIONAR ATENCIÓN</button>
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
                  <p>1. El boton <a style="text-decoration: none; color: red">Enviar Atención</a> se usa para dar una respuesta final sobre la consulta registrada. Se enviará un correo electrónico al destinatario con el contenido que complete abajo.</p>
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
      editable: true,
      idregistro: '',
      codreclamo:'',
      fecreclamo: '',
      detalle: '',
      tipodoc: '',
      numdoc: '',
      nombres: '',
      canal: '',
      correo: '',
      correo2: '',
      persona: '',
      celular: '',
      expediente: '',
      derivacion: '',
      derivacion2: '',
      respuesta: '',
      nomusuarioderivado: '',
      atencion: '',
      usuarios: [],
      canales: [],
      isLoading: false,
      fullPage: true,
      options: [],
      options2: [],
      options3: [{value: '1', text: 'PERSONA NATURAL'},
                 {value: '2', text: 'PERSONA FAMILIAR'},
                 {value: '3', text: 'PERSONA DEMANDANTE'},
                 {value: '4', text: 'PERSONA DEMANDADO'},
                 {value: '5', text: 'ABOGADO DEMANDANTE'},
                 {value: '6', text: 'ABOGADO DEMANDADO'},
                 {value: '7', text: 'ASISTENTE DE ABOGACIA'}
      ],
      item: {
          value: '',
          text: ''
      },
      item2: {
          value: '',
          text: ''
      },
      item3: {
          value: '',
          text: ''
      },
    }
  },
  created() {
    if(localStorage.getItem('AccessToken') != null && localStorage.getItem('expires_at') != null && localStorage.getItem('profile') != null && localStorage.getItem('operaciones') != null && localStorage.getItem('nickname') != null){
      if(this.$store.state.consulta == ''){
        this.$router.go(-1);
      }else{
        this.isLoading = true;
        this.cargaCanales();
      }
    }else{
      this.$router.app.$auth.logout();
      this.$router.push({name: 'Portada'});
    }
  },
  methods: {
     enviarArchivo(){
        window.open("https://sharing.oodrive.com/auth/ws/tcperu/?service=share","_blank")
     },
     verPdf(){
        this.$router.push('/detalleConsulta/visorConsulta');
     },
     cargaCanales(){
        axios.get(this.$store.state.serverAsistenciaAdmin + '/listTipoCanal', {
        headers: {
          Authorization: this.authorization
        }
        }).then((response) => {
             this.canales = response.data.response
             this.canales.forEach(item => {
                this.options2.push({ value: item.nid, text: item.ctxt_descripcion });
             });
             this.cargaUsuarios();
          },(error) => {

        });
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
        }
     },
     derivar(){
       this.atendido = false;
       this.derivado = true;
     },
     atender(){
       this.derivado = false;
       this.atendido = true;
     },
     enviar(){
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
        if(this.atencion != ''){
          let fromData = new FormData();
          fromData.append('codreclamo', this.codreclamo);
          fromData.append('fecreclamo', this.fecreclamo);
          fromData.append('documento', this.tipodoc);
          fromData.append('numero', this.numdoc);
          fromData.append('nombres', this.nombres);
          fromData.append('correo', this.correo);
          fromData.append('correo2', this.correo2);
          fromData.append('celular', this.celular);
          fromData.append('expediente', this.expediente);
          fromData.append('detalle', this.detalle);
          fromData.append('tipopersona', this.persona);
          fromData.append('tipocanal', this.canal);
          fromData.append('atencion', this.atencion);
          fromData.append('estado', 3);
          fromData.append('usuario', this.usuario);
          fromData.append('iddetalletipoasistencia', this.idregistro);
          fromData.append('idtipoasistencia', 3);
          axios.post(this.$store.state.serverAsistenciaAdmin + '/atenderConsulta', fromData, {crossDomain: true, headers: {"Authorization": this.authorization}
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
     editar(){
        this.editable = false;
     },
     quitar(){
        this.editable = true;
     },
     validEmail: function(email) {
	      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	      return re.test(email);
	   },
     actualizar(){
        if(this.tipodoc !== '' && this.numdoc !== '' && this.nombres !== '' && this.correo !== '' && this.celular !== '' && this.detalle !== '' &&
        this.item2.text !== '' && this.item3.text !== ''){
          if(this.numdoc.length == 8){
            if(!this.validEmail(this.correo)){
              this.correofallido();
            }else{
              if(this.correo2 == ''){
                if(this.celular.length > 9){
                  this.celularfallido();
                }else{
                  this.correo2 = '--';
                  this.edit();
                }
              }else{
                if(!this.validEmail(this.correo2)){
                    this.correofallido2();
                } else{
                  if(this.celular.length > 9){
                    this.celularfallido();
                  }else{
                    this.edit();
                  }
                }
              }
            }
          }else{
            this.dnifallido();
          }
        }else{
          this.isLoading = false;
          this.notifyVue();
        }
     },
     edit(){
        if(this.correo2 == '' || this.correo2 == null || this.correo2 == 'null' || this.correo2 == undefined){
           this.correo2 = '--'
        }
        if(this.expediente == '' || this.expediente == null || this.expediente == 'null' || this.expediente == undefined){
           this.expediente = '--'
        }
        this.isLoading = true;
        let fromData = new FormData();
        fromData.append('documento', this.tipodoc);
        fromData.append('numero', this.numdoc);
        fromData.append('nombres', this.nombres);
        fromData.append('correo', this.correo);
        fromData.append('correo2', this.correo2);
        fromData.append('celular', this.celular);
        fromData.append('expediente', this.expediente);
        fromData.append('detalle', this.detalle);
        fromData.append('tipopersona', this.item3.text);
        fromData.append('tipocanal', this.item2.text);
        fromData.append('usuario', this.usuario);
        fromData.append('iddetalletipoasistencia', this.idregistro);
        axios.post(this.$store.state.serverAsistenciaAdmin + '/editarConsulta', fromData, {crossDomain: true, headers: {"Authorization": this.authorization}
        }).then((response) => {
            this.notifyVue3();
            this.$router.push('/consultas');
        },(error) => {
            this.isLoading = false;
        });
     },
     corregir(){
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
        let fromData = new FormData();
        fromData.append('codreclamo', this.codreclamo);
        fromData.append('fecreclamo', this.fecreclamo);
        fromData.append('documento', this.tipodoc);
        fromData.append('numero', this.numdoc);
        fromData.append('nombres', this.nombres);
        fromData.append('correo', this.correo);
        fromData.append('correo2', this.correo2);
        fromData.append('celular', this.celular);
        fromData.append('expediente', this.expediente);
        fromData.append('detalle', this.detalle);
        fromData.append('tipopersona', this.persona);
        fromData.append('tipocanal', this.canal);
        fromData.append('usuarioderivado', '');
        fromData.append('nomusuarioderivado', '');
        fromData.append('correoderivado', '');
        fromData.append('detalleresponsable', '');
        fromData.append('detallederivado', '');
        fromData.append('estado', 0);
        fromData.append('usuario', this.usuario);
        fromData.append('iddetalletipoasistencia', this.idregistro);
        fromData.append('idtipoasistencia', 3);
        axios.post(this.$store.state.serverAsistenciaAdmin + '/derivarConsulta', fromData, {crossDomain: true, headers: {"Authorization": this.authorization}
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
     derivando(){
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
        if(this.item.value != '' && this.derivacion2 != ''){
          let fromData = new FormData();
          fromData.append('codreclamo', this.codreclamo);
          fromData.append('fecreclamo', this.fecreclamo);
          fromData.append('documento', this.tipodoc);
          fromData.append('numero', this.numdoc);
          fromData.append('nombres', this.nombres);
          fromData.append('correo', this.correo);
          fromData.append('correo2', this.correo2);
          fromData.append('celular', this.celular);
          fromData.append('expediente', this.expediente);
          fromData.append('detalle', this.detalle);
          fromData.append('tipopersona', this.persona);
          fromData.append('tipocanal', this.canal);
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
          fromData.append('idtipoasistencia', 3);
          axios.post(this.$store.state.serverAsistenciaAdmin + '/derivarConsulta', fromData, {crossDomain: true, headers: {"Authorization": this.authorization}
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
     atras(){
        this.$router.push('/consultas');
     },
     notifyVue() {
       this.$notify(
        {
          message: 'Debe completar todos los campos!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'danger'
        })
     },
     notifyVue2() {
       this.$notify(
        {
          message: 'Consulta derivada correctamente!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'success'
        })
     },
     notifyVue3() {
       this.$notify(
        {
          message: 'Consulta actualizada correctamente!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'success'
        })
     },
     notifyVue4() {
       this.$notify(
        {
          message: 'Consulta atendida correctamente!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'success'
        })
     },
     correofallido() {
       this.$notify(
        {
          message: 'El correo electrónico es incorrecto!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'danger'
        })
     },
     correofallido2() {
       this.$notify(
        {
          message: 'El segundo correo electrónico es incorrecto!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'danger'
        })
     },
     dnifallido() {
       this.$notify(
        {
          message: 'El número de DNI es incorrecto!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'danger'
        })
     },
     celularfallido() {
       this.$notify(
        {
          message: 'El teléfono o celular es incorrecto!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'danger'
        })
     },
     llenado(){
      this.idregistro = this.$store.state.consulta.nid_detalletipoasistencia
      this.codreclamo = this.$store.state.consulta.cnum_numperio
      this.fecreclamo = this.$store.state.consulta.dfec_registro
      this.tipodoc = this.$store.state.consulta.ctxt_tipodoc
      this.numdoc = this.$store.state.consulta.cnum_doc
      this.nombres = this.$store.state.consulta.ctxt_nomape
      this.persona = this.$store.state.consulta.ctxt_tipopersona
      this.canal = this.$store.state.consulta.ctxt_tiporeclamo
      this.correo = this.$store.state.consulta.ctxt_correo
      if(this.correo2 == "" || this.correo2 == "--"){
        this.correo2 = ""
      }else{
        this.correo2 = this.$store.state.consulta.ctxt_correo2
      }
      this.celular = this.$store.state.consulta.cnum_celular
      this.expediente = this.$store.state.consulta.cnum_expediente
      this.detalle = this.$store.state.consulta.ctxt_reclamo
      this.nomusuarioderivado = this.$store.state.consulta.ctxt_nomusuarioderivado
      this.derivacion = this.$store.state.consulta.ctxt_detalleresponsable
      this.respuesta = this.$store.state.consulta.ctxt_detallederivado
      this.estado = this.$store.state.consulta.nflg_estado
     }
  },
  components: {
    Loading,
    ModelSelect
  }
}
</script>
