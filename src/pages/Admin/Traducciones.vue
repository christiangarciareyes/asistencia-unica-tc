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
                    <a style="color: #AF52BF">Consultor de Traducciones</a>
                  </div>
                  <div class="news_post_meta">
                    <span class="news_post_author"><a style="color: #AF52BF">Consulta tus reclamos y solicitudes que te hayan enviado a traducir</a></span>
                  </div>
                </div>
              </div>
              <div class="news_post_text m-l-32">
                <p>En la siguiente ventana consultarás y podrás traducir los reclamos y solicitudes que se te hayan enviado por parte del encargado.</p>
              </div>
              <div class="news_post_title_container m-b-30" style="margin-right: 30px">
              <b-tabs class="m-t-40">
                <b-tab title="PENDIENTES" active>
                <div class="row m-t-30 fuente">
                  <div class="col-md-4">
                      <label class="labelInput">AÑO DE BÚSQUEDA</label>
                      <div class="input-group">
                        <datepicker placeholder="Selecciona el año" class="imp-fue" style="width: 100%; margin-top: 5px" :minimumView="'year'" :maximumView="'year'" :initialView="'year'" format="yyyy" v-model="periodopen"></datepicker>
                        <div class="input-group-prepend">
                          <button @click="consultar1(0)" type="button" class="btn-success-circle-m btn btn-xs"><i class="fa fa-search p-r-3"></i></button>
                        </div>
                      </div>
                  </div>
                  <div class="col-md-4">
                    <label class="labelInput">FILTRO RÁPIDO</label>
                      <b-form-input class="imp-fue" v-model="filter" style="border-radius: 0"/><br>
                  </div>
                  <div class="col-md-4">
                      <label class="labelInput">LISTAR REGISTROS</label>
                      <b-form-select style="border: 1px solid #D5D8DC; width: 100%; border-radius: 0" class="imp-fue" :options="pageOptions" v-model="perPage" />
                      <br><br>
                  </div>
                </div>
                <b-table bordered 
                         class="imp-fue m-t-10"
                         show-empty
                         stacked="lg"
                         :items="lista" 
                         :fields="fields"
                         :current-page="currentPage"
                         :per-page="perPage"
                         :filter="filter"
                         :sort-by.sync="sortBy"
                         :sort-desc.sync="sortDesc"
                         @filtered="onFiltered">
                    <template slot="item" slot-scope="row">
                     <p class="labelInput imp-fue">{{row.item.item}}</p>
                    </template>
                    <template slot="usuario" slot-scope="row">
                     <p class="labelInput imp-fue">{{row.item.cnom_usuariomodifica}}</p>
                    </template>
                    <template slot="numero" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.cnum_numperio}}</p>
                      <a v-if="row.item.vencido == '1'" style="color: red" class="labelInput imp-fue">VENCIDO</a>
                    </template>
                    <template slot="tipo" slot-scope="row">
                      <p v-if="row.item.nid_tipoasistencia == 1" class="labelInput imp-fue">LIBRO DE RECLAMACIONES</p>
                      <p v-if="row.item.nid_tipoasistencia == 2" class="labelInput imp-fue">SOLICITUD DE ACCESO A LA INFORMACIÓN</p> 
                      <p v-if="row.item.nid_tipoasistencia == 3" class="labelInput imp-fue">CANALES DE CONSULTA</p> 
                    </template>
                    <template slot="solicitante" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.ctxt_nombres}}</p>
                    </template>
                    <template slot="registro" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.dfec_registro}}</p>
                    </template>
                    <template slot="vencimiento" slot-scope="row">
                      <p style="color: red" class="labelInput imp-fue">{{row.item.dfec_vencimiento}}</p>
                    </template>
                    <template slot="registro2" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.dfec_derivacion}}</p>
                    </template>
                    <template slot="ver" slot-scope="row">
                      <button v-if="row.item.nid_tipoasistencia == 1" @click="verDoc(row.item)" type="button" class="btn-success-circle btn btn-xs" v-b-tooltip.hover title="Ver Reclamo" ><i class="fa fa-external-link p-r-3"></i></button>
                      <button v-if="row.item.nid_tipoasistencia == 2" @click="verDoc1(row.item)" type="button" class="btn-success-circle btn btn-xs" v-b-tooltip.hover title="Ver Solicitud" ><i class="fa fa-external-link p-r-3"></i></button>
                    </template>
                </b-table>
                <div class="row">
                  <div class="col-md-12 mb-3">
                    <br><br>
                      <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0 pull-right m-l-20"/>
                  </div>
                </div>
                </b-tab>
                <b-tab title="TRADUCIDOS">
                <div class="row m-t-30 fuente">
                  <div class="col-md-4">
                      <label class="labelInput">AÑO DE BÚSQUEDA</label>
                      <div class="input-group">
                        <datepicker placeholder="Selecciona el año" class="imp-fue" style="width: 100%; margin-top: 5px" :minimumView="'year'" :maximumView="'year'" :initialView="'year'" format="yyyy" v-model="periodoate"></datepicker>
                        <div class="input-group-prepend">
                          <button @click="consultar2(0)" type="button" class="btn-success-circle-m btn btn-xs"><i class="fa fa-search p-r-3"></i></button>
                        </div>
                      </div>
                  </div>
                  <div class="col-md-4">
                    <label class="labelInput">FILTRO RÁPIDO</label>
                      <b-form-input class="imp-fue" v-model="filter2" style="border-radius: 0"/><br>
                  </div>
                  <div class="col-md-4">
                      <label class="labelInput">LISTAR REGISTROS</label>
                      <b-form-select style="border: 1px solid #D5D8DC; width: 100%; border-radius: 0" class="imp-fue" :options="pageOptions2" v-model="perPage2" />
                      <br><br>
                  </div>
                </div>
                <b-table bordered 
                         class="imp-fue m-t-10"
                         show-empty
                         stacked="lg"
                         :items="lista2" 
                         :fields="fields2"
                         :current-page="currentPage2"
                         :per-page="perPage2"
                         :filter="filter2"
                         :sort-by.sync="sortBy2"
                         :sort-desc.sync="sortDesc2"
                         @filtered="onFiltered2">
                    <template slot="item" slot-scope="row">
                     <p class="labelInput imp-fue">{{row.item.item}}</p>
                    </template>
                    <template slot="usuario" slot-scope="row">
                     <p class="labelInput imp-fue">{{row.item.cnom_usuariomodifica}}</p>
                    </template>
                    <template slot="numero" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.cnum_numperio}}</p>
                    </template>
                    <template slot="tipo" slot-scope="row">
                      <p v-if="row.item.nid_tipoasistencia == 1" class="labelInput imp-fue">LIBRO DE RECLAMACIONES</p>
                      <p v-if="row.item.nid_tipoasistencia == 2" class="labelInput imp-fue">SOLICITUD DE ACCESO A LA INFORMACIÓN</p> 
                      <p v-if="row.item.nid_tipoasistencia == 3" class="labelInput imp-fue">CANALES DE CONSULTA</p> 
                    </template>
                    <template slot="solicitante" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.ctxt_nombres}}</p>
                    </template>
                    <template slot="registro" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.dfec_registro}}</p>
                    </template>
                    <template slot="registro2" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.dfec_derivacion}}</p>
                    </template>
                    <template slot="registro3" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.dfec_respuesta}}</p>
                    </template>
                    <template slot="ver" slot-scope="row">
                      <button v-if="row.item.nid_tipoasistencia == 1" @click="verDoc(row.item)" type="button" class="btn-success-circle btn btn-xs" v-b-tooltip.hover title="Ver Reclamo" ><i class="fa fa-external-link p-r-3"></i></button>
                      <button v-if="row.item.nid_tipoasistencia == 2" @click="verDoc1(row.item)" type="button" class="btn-success-circle btn btn-xs" v-b-tooltip.hover title="Ver Solicitud" ><i class="fa fa-external-link p-r-3"></i></button>
                      <button v-if="row.item.nid_tipoasistencia == 3" @click="verDoc2(row.item)" type="button" class="btn-success-circle btn btn-xs" v-b-tooltip.hover title="Ver Consulta" ><i class="fa fa-external-link p-r-3"></i></button>
                    </template>
                </b-table>
                <div class="row">
                  <div class="col-md-12 mb-3">
                    <br><br>
                      <b-pagination :total-rows="totalRows2" :per-page="perPage2" v-model="currentPage2" class="my-0 pull-right m-l-20"/>
                  </div>
                </div>
                </b-tab>
              </b-tabs>
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

import moment from 'moment';
import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";
import * as lang from "vuejs-datepicker/src/locale";

import {en, es} from 'vuejs-datepicker/dist/locale';

export default{
  data () {
    return {
     es: es,
     name: 'traducciones',
     authorization: this.$store.state.authorization,
     usuario: localStorage.getItem('nickname'),
     periodopen: null,
     periodopenque: null,
     periodoate: null,
     periodoateque: null,
     fields: [
        { key: 'item', label: 'ITEM'},
        { key: 'usuario', label: 'USUARIO'},
        { key: 'numero', label: 'N° DE ATENCIÓN'},
        { key: 'tipo', label: 'TIPO DE ATENCIÓN'},
        { key: 'solicitante', label: 'DATOS DE LA PERSONA'},
        { key: 'registro', label: 'FECHA DE REGISTRO'},
        { key: 'vencimiento', label: 'FECHA DE VENCIMIENTO'},
        { key: 'registro2', label: 'FECHA DE ENVÍO'},
        { key: 'ver', label: 'VER'}
      ],
      fields2: [
        { key: 'item', label: 'ITEM'},
        { key: 'usuario', label: 'USUARIO'},
        { key: 'numero', label: 'N° DE ATENCIÓN'},
        { key: 'tipo', label: 'TIPO DE ATENCIÓN'},
        { key: 'solicitante', label: 'DATOS DE LA PERSONA'},
        { key: 'registro', label: 'FECHA DE REGISTRO'},
        { key: 'registro2', label: 'FECHA DE ENVÍO'},
        { key: 'registro3', label: 'FECHA DE RESPUESTA'},
        { key: 'ver', label: 'VER'}
      ],
      lista: [],
      lista2: [],
      currentPage: 1,
      perPage: 10,
      totalRows: 1,
      pageOptions: [ 10, 20, 50 ],
      sortBy: null,
      sortDesc: false,
      filter: null,
      currentPage2: 1,
      perPage2: 10,
      totalRows2: 1,
      pageOptions2: [ 10, 20, 50 ],
      sortBy2: null,
      sortDesc2: false,
      filter2: null,
      isLoading: false,
      fullPage: true,
      aniobus: null,
      cargado: false
    }
  },
  created() {
    if(localStorage.getItem('AccessToken') != null || localStorage.getItem('expires_at') != null || localStorage.getItem('profile') != null || localStorage.getItem('operaciones') != null || localStorage.getItem('nickname') != null){
      this.cargaView();      
    }else{
      this.$router.app.$auth.logout();
      this.$router.push({name: 'Portada'});
    }
  },
  methods: {
    onFiltered (filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    onFiltered2 (filteredItems) {
      this.totalRows2 = filteredItems.length
      this.currentPage2 = 1
    },
    verDoc (item){
       this.$store.commit('consulReclamoQue', item);
       this.$router.push('/traducciones/traducirReclamo');
    },
    verDoc1 (item){
       this.$store.commit('consulSolicitudQue', item);
       this.$router.push('/traducciones/traducirSolicitud');
    },
    cargaView(){
      this.isLoading = true; 
      axios.get(this.$store.state.autenticacion + '/operaciones//app2/PAUC/'+ this.name + '/' + this.usuario, {
      crossdomain: true, 
      headers: {
        Authorization: this.authorization
      }
      }).then((response) => {
        this.auto = response.data;
        if(this.auto.codError == 1){
          this.consultar1(1);
        }else{ 
          this.isLoading = false;
          this.$router.go(-1);
        }
      });
    },
    consultar1(param){
      var anio = '';
      if(param == 1){
          anio = ''+new Date().getFullYear();
      }else{
          anio = moment(this.periodopen).format('YYYY');
      }
      this.isLoading = true;
      axios.get(this.$store.state.serverAsistenciaAdmin + '/listTraducidosPendientes?usuario=' + this.usuario + '&periodo=' + anio, {crossdomain: true,
      headers: {
        Authorization: this.authorization
      }
      }).then((response) => {
          this.lista = response.data;
          this.lista = this.lista.response;
          this.totalRows = this.lista.length
            if(this.lista == ''){
              this.notifyVue2();
            }
            if(param == 1){
               this.consultar2(1);
            }else{
               this.isLoading = false;
            }
          },(error) => {
            this.notifyVue();
          });  
    },
    consultar2(param){
      var anio = '';
      if(param == 1){
          anio = ''+new Date().getFullYear();
      }else{
          anio = moment(this.periodoateque).format('YYYY');
      }
      this.isLoading = true;
      axios.get(this.$store.state.serverAsistenciaAdmin + '/listTraducidosAtendidos?usuario=' + this.usuario + '&periodo=' + anio, {crossdomain: true,
      headers: {
        Authorization: this.authorization
      }
      }).then((response) => {
          this.lista2 = response.data;
          this.lista2 = this.lista2.response;
          this.totalRows2 = this.lista2.length
          if(this.lista5 == ''){
            this.notifyVue3();
          }
          this.isLoading = false;
      },(error) => {
          this.notifyVue();
      });
    },
    notifyVue() {
       this.$notify(
        {
          message: 'Error en la consulta de datos!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'danger'
        })
    },
    notifyVue2() {
       this.isLoading = false;
       this.$notify(
        {
          message: 'No tiene traducciones pendientes!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'success'
        })
    },
    notifyVue3() {
       this.isLoading = false;
       this.$notify(
        {
          message: 'No tiene traducciones atendidas!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'success'
        })
    }
  },
  components: {
    Loading,
    Datepicker
  }
}
</script>