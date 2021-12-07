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
            <div class="news_post_top d-flex flex-column flex-sm-row">
                <div class="news_post_title_container">
                <div class="news_post_title">
                    <i v-on:click="atras" style="color: #AF52BF; cursor: pointer" class="fa fa-reply fa-2x p-r-20"></i>
                    <a style="color: #AF52BF">Registra una Nueva Consulta</a>
                </div>
                <div class="news_post_meta">
                    <span class="news_post_author"><a style="color: #AF52BF">Registra una nueva consulta que haya ingresado desde cualquier canal de información.</a></span>
                </div>
                </div>
            </div>
            <div class="news_post_text m-l-32 m-r-32">
              <p>En el siguiente formulario registrarás una nueva consulta para darle la gestión correspondiente.</p>
            </div>
            <div class="pbar_container m-t-20 m-b-40 m-l-32 m-r-32">
                <label class="labelInput">TIPO DE DOCUMENTO</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="tipodoc" disabled/>
                <label class="labelInput">NÚMERO DE DOCUMENTO</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="number" v-model="numdoc"/>
                <label class="labelInput">NOMBRES Y APELLIDOS</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="nombres"/>
							  <div class="row">
                  <div class="col-md-6">
                      <label class="labelInput">TIPO DE PERSONA</label>
                      <model-select :options="options2" v-model="item2" placeholder="Selecciona el tipo de persona" style="border: 1px solid #D5D8DC; border-radius: 0" class="form-control imp-fue mb-3"></model-select>
                  </div>
                  <div class="col-md-6">
                      <label class="labelInput">TIPO DE CANAL</label>
                      <model-select :options="options" v-model="item" placeholder="Selecciona el tipo de canal" style="border: 1px solid #D5D8DC; border-radius: 0" class="form-control imp-fue mb-3"></model-select>
                  </div>
							  </div>
							  <div class="row">
                  <div class="col-md-6">
                    <label class="labelInput">CORREO ELECTRÓNICO</label>
                    <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="correo"/>
                  </div>
                  <div class="col-md-6">
                    <label class="labelInput">CORREO ELECTRÓNICO 2 (Opcional)</label>
                    <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="correo2"/>
                  </div>
							  </div>
                <div class="row">
                  <div class="col-md-6">
                    <label class="labelInput">TELÉFONO FIJO / CELULAR</label>
                    <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="number" v-model="celular"/>
                  </div>
                  <div class="col-md-6">
                    <label class="labelInput">N° DE EXPEDIENTE (Opcional)</label>
                    <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="expediente"/>
                  </div>
							  </div>
                <label class="labelInput">SELECCIONE LA CONSULTA</label>
                <model-select :options="options3" v-model="changeEvent" placeholder="Selecciona la consulta ingresada" style="border: 1px solid #D5D8DC; border-radius: 0" class="form-control imp-fue mb-3"></model-select>
                <label v-if="menor" class="labelInput">DETALLE DE LA CONSULTA</label>
                <textarea v-if="menor" id="text" class="form-control imp-fue mb-3"
                     style="border-radius: 0px; height:200px; max-height:200px; min-height:200px"
                     v-model="detalle"
                     no-resize
                     :rows="30"
                     :max-rows="50"
                     maxlength="1000">
                </textarea>
                <div class="container-form-btn fonTap m-t-30">
                  <button v-on:click="guardar" class="routing-form-btn m-r-10 m-l-10 fuente"> REGISTRAR CONSULTA</button>
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
      authorization: this.$store.state.authorization,
      idregistro: '',
      codreclamo:'',
      fecreclamo: '',
      detalle: '',
      tipodoc: 'DNI',
      numdoc: '',
      nombres: '',
      canal: '',
      lista: '',
      correo: '',
      correo2: '',
      celular: '',
      detalle: '',
      expediente: '',
      canales: [],
      isLoading: false,
      fullPage: true,
      menor: false,
      options: [],
      options2: [{value: '1', text: 'PERSONA NATURAL'},
                 {value: '2', text: 'PERSONA FAMILIAR'},
                 {value: '3', text: 'PERSONA DEMANDANTE'},
                 {value: '4', text: 'PERSONA DEMANDADO'},
                 {value: '5', text: 'ABOGADO DEMANDANTE'},
                 {value: '6', text: 'ABOGADO DEMANDADO'},
                 {value: '7', text: 'ASISTENTE DE ABOGACIA'}
      ],
      options3: [],
      item3: '',
      changeEvent: this.item3,
      item2: {
          value: '',
          text: ''
      },
      item: {
          value: '',
          text: ''
      }
    }
  },
  created() {
    if(localStorage.getItem('AccessToken') != null && localStorage.getItem('expires_at') != null && localStorage.getItem('profile') != null && localStorage.getItem('operaciones') != null && localStorage.getItem('nickname') != null){
      this.isLoading = true; 
      this.cargaCanales();
    }else{
      this.$router.app.$auth.logout();
      this.$router.push({name: 'Portada'});
    }
  },
  watch: {
    changeEvent(val) {
      let opcion = "";
      this.options3.forEach(item => {
          if(item.value == val){
              opcion = item.text
          }
      });
      if(opcion == "Otros"){
        this.detalle = "";
        this.menor = true;
      }else{
        this.detalle = opcion;
        this.menor = false;
      }
    }
  },
  methods: {
     cargaCanales(){
        axios.get(this.$store.state.serverAsistenciaAdmin + '/listTipoCanal', {
        headers: {
          Authorization: this.authorization
        }
        }).then((response) => {
             this.canales = response.data.response
             this.canales.forEach(item => {
                this.options.push({ value: item.nid, text: item.ctxt_descripcion });
             });
             this.listarConsultas();
          },(error) => {

        });
     },
     listarConsultas(){
        axios.get(this.$store.state.serverAsistenciaAdmin + '/listaConsultas?tipo=3', {crossdomain: true,
        headers: {
          Authorization: this.authorization
        }
        }).then((response) => {
            this.lista = response.data;
            this.lista = this.lista.response;
            this.lista.forEach(item => {
                this.options3.push({ value: item.nid, text: item.ctxt_descripcion });
            });
            this.isLoading = false;
        },(error) => {}); 
     },
     validEmail: function(email) {
	      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	      return re.test(email);
	   },
     guardar(){
        if(this.tipodoc !== '' && this.numdoc !== '' && this.nombres !== '' && this.correo !== '' && this.celular !== '' && this.detalle !== '' && 
        this.item2.text !== '' && this.item.text !== ''){
          if(this.numdoc.length == 8){
            if(!this.validEmail(this.correo)){
              this.correofallido();
            }else{
              if(this.correo2 == ''){
                if(this.celular.length > 9){
                  this.celularfallido();
                }else{
                  this.correo2 = '--';
                  this.save();
                }
              }else{
                if(!this.validEmail(this.correo2)){
                    this.correofallido2();
                } else{
                  if(this.celular.length > 9){
                    this.celularfallido();
                  }else{
                    this.save();
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
     save(){
        if(this.expediente == ''){
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
        fromData.append('tipopersona', this.item2.text);
        fromData.append('tipocanal', this.item.text);
        fromData.append('usuario', this.usuario);
        fromData.append('idtipoasistencia', 3);
        axios.post(this.$store.state.serverAsistenciaAdmin + '/insertConsulta', fromData, {crossDomain: true, headers: {"Authorization": this.authorization}
        }).then((response) => {
            this.notifyVue2();
            this.$router.push('/consultas');
        },(error) => {
            this.isLoading = false;
        });
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
          message: 'Consulta registrada correctamente!',
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
     }
  },
  components: {
    Loading,
    ModelSelect
  }
}
</script>