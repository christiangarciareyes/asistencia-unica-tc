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
                  <a style="color: #AF52BF">Hoja de Seguimiento: {{this.codigo}}</a>
                </div>
                <div class="news_post_meta">
                  <span class="news_post_author"><a style="color: #AF52BF">Visualiza la hoja de seguimiento</a></span>
                </div>
              </div>
            </div>
            </div>
            <div v-if="estadox" class="col-md-1">
            <i v-b-tooltip.hover title="Nuevo Seguimiento" v-on:click="nuevo" style="color: #AF52BF; cursor: pointer; float: right; margin-top: 40px; margin-right: 30px" class="fa fa-plus-circle fa-3x p-r-20"></i>
            </div>
            </div>
            <div class="news_post_text m-l-32 m-r-32">
              <p>En el siguiente chat visualizarás la información de la hoja de seguimiento.</p>
            </div>
            <div v-if="conversa" class="pbar_container m-t-20 m-b-40 m-l-32 m-r-32">
                <div v-if="pendiente" class="row">
                    <div class="col-md-6">
                        <b-alert show variant="info">
                            <h4 class="alert-heading">PENDIENTE DE {{persona + " - " + dni + " / " + fecharegistro}}</h4>
                            <p style="color: #fff">{{reclamo}}</p>
                            <hr>
                            <p style="color: #fff" class="mb-0">{{correo + " - " + celular}}</p>
                        </b-alert>
                    </div>
                </div>
               <div v-if="pendiente" class="row">
                    <div class="col-md-6">
                        <b-alert show variant="info">
                            <h4 class="alert-heading">PENDIENTE DE {{persona + " - " + dni + " / " + fecharegistro}}</h4>
                            <p style="color: #fff">{{pedido}}</p>
                            <hr>
                            <p style="color: #fff" class="mb-0">{{correo + " - " + celular}}</p>
                        </b-alert>
                    </div>
                </div>
               <div v-if="derivado" class="row">
                   <div class="col-md-6"></div>
                    <div class="col-md-6">
                        <b-alert show variant="success">
                            <h4 class="alert-heading">DERIVADO EL {{fechaderivacion}}</h4>
                            <p style="color: #fff">{{detalleresponsable}}</p>
                        </b-alert>
                    </div>
                </div>
               <div v-if="respondido" class="row">
                    <div class="col-md-6">
                        <b-alert show variant="warning">
                            <h4 class="alert-heading">REPONDIDO POR {{personaderivada + " / " + fecharespuesta}}</h4>
                            <p style="color: #fff">{{detallederivado}}</p>
                            <hr>
                            <p style="color: #fff" class="mb-0">{{correoderivado}}</p>
                        </b-alert>
                    </div>
                </div>
               <div v-if="atendido" class="row">
                    <div class="col-md-6"></div>
                    <div class="col-md-6">
                        <b-alert show variant="success">
                            <h4 class="alert-heading">ATENDIDO EL {{fechaatencion}}</h4>
                            <p style="color: #fff">{{respuestaresponsable}}</p>
                        </b-alert>
                    </div>
                </div>
                <div v-if="nuevahoja" class="row m-t-20">
                    <div class="col-md-6">
                        <label class="labelInput">FECHA DEL CORREO</label>
                        <b-form-input v-model="fecha" id="date" type="date"></b-form-input>
                    </div>
                    <div class="col-md-6">
                        <label class="labelInput m-b-15">SELECCIONA TIPO DE MENSAJE</label><br>
                        <input type="radio" v-model="selected" value="3" style="margin-right: 10px">MENSAJE DEL TC <a style="margin-right: 20px"></a>
                        <input type="radio" v-model="selected" value="4" style="margin-right: 10px">MENSAJE DEL USUARIO
                    </div>
                    <div class="col-md-12 m-t-20">
                        <label class="labelInput">INGRESA EL CONTENIDO</label>
                        <textarea id="text" class="form-control imp-fue mb-3"
                                style="border-radius: 0px; height:200px; max-height:200px; min-height:200px"
                                v-model="contenido"
                                no-resize
                                :rows="30"
                                :max-rows="50"
                                maxlength="1000">
                        </textarea>
                        <div class="container-form-btn fonTap m-t-30">
                            <button v-on:click="cerrar" class="routing3-form-btn m-r-10 m-l-10 fuente"> CERRAR SEGUIMIENTO</button>
                            <button v-on:click="save" class="routing-form-btn m-r-10 m-l-10 fuente"> GUARDAR SEGUIMIENTO</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="conversa2" class="pbar_container m-t-20 m-b-40 m-l-32 m-r-32">
                <div v-if="pendiente" class="row">
                    <div class="col-md-6">
                        <b-alert show variant="info">
                            <h4 class="alert-heading">PENDIENTE DE {{persona + " - " + dni + " / " + fecharegistro}}</h4>
                            <p style="color: #fff">{{reclamo}}</p>
                            <hr>
                            <p style="color: #fff" class="mb-0">{{correo + " - " + celular}}</p>
                        </b-alert>
                    </div>
                </div>
               <div v-if="pendiente" class="row">
                    <div class="col-md-6">
                        <b-alert show variant="info">
                            <h4 class="alert-heading">PENDIENTE DE {{persona + " - " + dni + " / " + fecharegistro}}</h4>
                            <p style="color: #fff">{{pedido}}</p>
                            <hr>
                            <p style="color: #fff" class="mb-0">{{correo + " - " + celular}}</p>
                        </b-alert>
                    </div>
                </div>
                <div v-for="(item, index) in lista2">
                    <div v-if="item.ctxt_tipo == 1" class="row" >
                        <div class="col-md-6"></div>
                        <div class="col-md-6">
                            <b-alert show variant="success">
                                <h4 class="alert-heading">DERIVADO EL {{item.dfec_registro}}</h4>
                                <p style="color: #fff">{{item.ctxt_contenido}}</p>
                            </b-alert>
                        </div>
                    </div>
                    <div v-if="item.ctxt_tipo == 2" class="row">
                        <div class="col-md-6">
                            <b-alert show variant="warning">
                                <h4 class="alert-heading">RESPONDIDO POR {{item.ctxt_persona + " / " + item.dfec_registro}}</h4>
                                <p style="color: #fff">{{item.ctxt_contenido}}</p>
                                <hr>
                                <p style="color: #fff" class="mb-0">{{item.ctxt_correo}}</p>
                            </b-alert>
                        </div>
                    </div>
                    <div v-if="item.ctxt_tipo == 3" class="row">
                        <div class="col-md-6"></div>
                        <div class="col-md-6">
                            <b-alert show variant="success">
                                <h4 class="alert-heading">MENSAJE DEL {{item.dfec_registro}}</h4>
                                <p style="color: #fff">{{item.ctxt_contenido}}</p>
                            </b-alert>
                        </div>
                    </div>
                    <div v-if="item.ctxt_tipo == 4" class="row">
                        <div class="col-md-6">
                            <b-alert show variant="info">
                                <h4 class="alert-heading">MENSAJE DE {{persona + " - " + dni + " / " + item.dfec_registro}}</h4>
                                <p style="color: #fff">{{item.ctxt_contenido}}</p>
                                <hr>
                                <p style="color: #fff" class="mb-0">{{correo + " - " + celular}}</p>
                            </b-alert>
                        </div>
                    </div>
                </div>
                <div v-if="atendido" class="row">
                    <div class="col-md-6"></div>
                    <div class="col-md-6">
                        <b-alert show variant="success">
                            <h4 class="alert-heading">ATENDIDO EL {{fechaatencion}}</h4>
                            <p style="color: #fff">{{respuestaresponsable}}</p>
                        </b-alert>
                    </div>
                </div>
                <div v-if="nuevahoja" class="row m-t-20">
                    <div class="col-md-6">
                        <label class="labelInput">FECHA DEL CORREO</label>
                        <b-form-input v-model="fecha" id="date" type="date"></b-form-input>
                    </div>
                    <div class="col-md-6">
                        <label class="labelInput m-b-15">SELECCIONA TIPO DE MENSAJE</label><br>
                        <input type="radio" v-model="selected" value="3" style="margin-right: 10px">MENSAJE DEL TC <a style="margin-right: 20px"></a>
                        <input type="radio" v-model="selected" value="4" style="margin-right: 10px">MENSAJE DEL USUARIO
                    </div>
                    <div class="col-md-12 m-t-20">
                        <label class="labelInput">INGRESA EL CONTENIDO</label>
                        <textarea id="text" class="form-control imp-fue mb-3"
                                style="border-radius: 0px; height:200px; max-height:200px; min-height:200px"
                                v-model="contenido"
                                no-resize
                                :rows="30"
                                :max-rows="50"
                                maxlength="1000">
                        </textarea>
                        <div class="container-form-btn fonTap m-t-30">
                            <button v-on:click="cerrar" class="routing3-form-btn m-r-10 m-l-10 fuente"> CERRAR SEGUIMIENTO</button>
                            <button v-on:click="save" class="routing-form-btn m-r-10 m-l-10 fuente"> GUARDAR SEGUIMIENTO</button>
                        </div>
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

export default{
  data () {
    return {
      lista: [],
      lista2: [],
      lista3: [],
      name: 'hojadeseguimiento',
      authorization: this.$store.state.authorization,
      usuario: localStorage.getItem('nickname'),
      estadox: false,
      conversa: false,
      conversa2: false,
      isLoading: '',
      codigo: '',
      persona: '',
      dni: '',
      correo: '',
      celular: '',
      reclamo: '',
      pedido: '',
      fecharegistro: '',
      personaderivada: '',
      fechaderivacion: '',
      detalleresponsable: '',
      correoderivado: '',
      fecharespuesta: '',
      detallederivado: '',
      fechaatencion: '',
      respuestaresponsable: '',
      pendiente: false,
      derivado: false,
      respondido: false,
      atendido: false,
      nuevahoja: false,
      contenido: '',
      selected: '3',
      fecha: ''
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
  created() {
    window.addEventListener("scroll", this.onScroll)
    var fecha = new Date();
    var mes = fecha.getMonth()+1;
    var dia = fecha.getDate();
    var ano = fecha.getFullYear();
    if(dia<10)
        dia = '0' + dia;
    if(mes<10)
        mes = '0' + mes
    this.fecha = ano + "-" + mes + "-" + dia;
    if(localStorage.getItem('AccessToken') != null && localStorage.getItem('expires_at') != null && localStorage.getItem('profile') != null && localStorage.getItem('operaciones') != null && localStorage.getItem('nickname') != null){
      if(this.$route.params.id == ''){
        this.$router.go(-1);
      }else{
        this.obtener();
      }    
    }else{
      this.$router.app.$auth.logout();
      this.$router.push({name: 'Portada'});
    }
  },
  methods: {
     obtener(){
        let nidregistro = this.$route.params.id;
        this.isLoading = true; 
        axios.get(this.$store.state.serverAsistenciaAdmin + '/listDatosxregistro?nid=' + nidregistro,  {crossdomain: true,
        headers: {
            Authorization: this.authorization
        }
        }).then((response) => {
            this.lista = response.data;
            this.lista = this.lista.response;
            this.codigo = this.lista[0].cnum_numperio
            this.persona = this.lista[0].ctxt_nomape;
            this.dni = this.lista[0].cnum_doc;
            this.correo = this.lista[0].ctxt_correo;
            this.celular = this.lista[0].cnum_celular;
            this.fecharegistro = this.lista[0].dfec_registro;
            this.fechaatencion = this.lista[0].dfec_atencion;
            this.respuestaresponsable = this.lista[0].ctxt_respuestaresponsable;
            if(this.lista[0].nid_tipoasistencia == 1){
               this.reclamo = this.lista[0].ctxt_reclamo;
               this.pedido = this.lista[0].ctxt_pedido;
            }else{
               this.reclamo = this.lista[0].ctxt_solicitud;
               this.pedido = this.lista[0].ctxt_observaciones;
            }
            if(this.lista[0].nflg_estado == 0){
               this.pendiente = true;
            }else if(this.lista[0].nflg_estado == 1){
               this.pendiente = true;
               this.derivado = true;
            }else if(this.lista[0].nflg_estado == 2){
               this.pendiente = true;
               this.derivado = true;
               this.respondido = true;
            }else{
               this.pendiente = true;
               this.derivado = true;
               this.respondido = true;
               this.atendido = true;
            }
            if(nidregistro > 1069){
                axios.get(this.$store.state.serverAsistenciaAdmin + '/listHojadeseguimiento?nid=' + nidregistro,  {crossdomain: true,
                headers: {
                    Authorization: this.authorization
                }
                }).then((response) => {
                    this.lista2 = response.data;
                    this.lista2 = this.lista2.response;
                    this.conversa2 = true;
                    if(this.lista[0].nflg_estado < 4){
                       this.estadox = true; 
                    }else{
                       this.estadox = false; 
                    }
 
                    this.nuevahoja = false;
                    this.isLoading = false;
                    this.notifyVue();
                },(error) => {
                    this.isLoading = false; 
                    this.notifyError();
                }); 
            }else{
                if(this.lista[0].ctxt_nomusuarioderivado == null){this.personaderivada = "";}else{this.personaderivada = this.lista[0].ctxt_nomusuarioderivado;}
                if(this.lista[0].dfec_derivacion == null){this.fechaderivacion = "";}else{this.fechaderivacion = this.lista[0].dfec_derivacion;}
                if(this.lista[0].ctxt_detalleresponsable == null){this.detalleresponsable = "";}else{this.detalleresponsable = this.lista[0].ctxt_detalleresponsable;}
                if(this.lista[0].ctxt_correoderivado == null){this.correoderivado = "";}else{this.correoderivado = this.lista[0].ctxt_correoderivado;}
                if(this.lista[0].dfec_respuesta == null){this.fecharespuesta = "";}else{this.fecharespuesta = this.lista[0].dfec_respuesta;}
                if(this.lista[0].ctxt_detallederivado == null){this.detallederivado = "";}else{this.detallederivado = this.lista[0].ctxt_detallederivado;}
                this.conversa = true;
                this.estadox = false;
                this.nuevahoja = false;
                this.isLoading = false; 
                this.notifyVue();
            }
        },(error) => {
            this.isLoading = false; 
            this.notifyError();
        }); 
     },
     save(){
        if(this.fecha != null && this.fecha != "" && this.fecha.length == 10 && this.contenido != ""){
            if(this.selected == 3){
               var persona = this.usuario;
               var persona2 = this.persona;
               var correo = this.usuario + "@tc.gob.pe";
               var correo2 = this.correo;
               var posicion = "D";
            }else{
               var persona = this.persona;
               var persona2 = "--";
               var correo = this.correo;
               var correo2 = "--";
               var posicion = "I";
            }
            this.isLoading = true;
            let fromData = new FormData();
            fromData.append('contenido', this.contenido);
            fromData.append('persona', persona);
            fromData.append('persona2', persona2);
            fromData.append('correo', correo);
            fromData.append('correo2', correo2);
            fromData.append('tipo', this.selected);
            fromData.append('posicion', posicion);
            fromData.append('nid', this.$route.params.id);
            fromData.append('registro', this.fecha);
            fromData.append('usuario', this.usuario);
            axios.post(this.$store.state.serverAsistenciaAdmin + '/insertarHoja', fromData, {crossdomain: true,
            headers: {
                Authorization: this.authorization
            }
            }).then((response) => {
                this.lista3 = response.data;
                this.lista3 = this.lista3.response;
                if(this.lista3.estado == 1){
                    this.obtener();
                }else{
                    this.isLoading = false;
                    this.notifyError3();
                }
            },(error) => {
                this.isLoading = false;
                this.notifyError3();
            }); 
        }else{
           this.notifyError2();
        }
     },
     cerrar(){
        this.nuevahoja = false;
     },
     onScroll(e) {
        this.windowTop = window.top.scrollY
        // console.log(this.windowTop)
     },
     notifyVue() {
       this.$notify(
        {
          message: 'Hoja se seguimiento listado correctamente!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'success'
        })
     },
     notifyError() {
       this.$notify(
        {
          message: 'Error al listar la hoja de seguimiento!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'danger'
        })
     },  
     notifyError2() {
       this.$notify(
        {
          message: 'Debe completar los campos correctamente!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'danger'
        })
     },  
     notifyError3() {
       this.$notify(
        {
          message: 'Error al insertar el seguimiento!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'danger'
        })
     },    
     nuevo(){
        this.nuevahoja = true;
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
     },
     atras (){
        this.$router.go(-1);
     }
  },
  components: {
    Loading
  }
}
</script>