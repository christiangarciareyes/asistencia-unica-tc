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
                      <a style="color: #AF52BF">Administrador de Consultas</a>
                    </div>
                    <div class="news_post_meta">
                      <span class="news_post_author"><a style="color: #AF52BF">Gestiona tus Canales de Consulta</a></span>
                    </div>
                  </div>
                </div>
                <div class="news_post_text m-l-32">
                  <p>En la siguiente ventana gestionarás todos las consultas que hayan ingresado por los canales de la institución.</p>
                </div>
              </div>
              <div class="col-md-1">
                <i v-b-tooltip.hover title="Registrar Consulta" v-on:click="nuevo" style="color: #AF52BF; cursor: pointer; float: right; margin-top: 40px; margin-right: 30px" class="fa fa-plus-circle fa-3x p-r-20"></i>
              </div>
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
                      <label class="labelInput">LISTAR REGISTROS</label><br>
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
                     <p class="labelInput imp-fue">{{row.item.cnom_usuariocreacion}}</p>
                    </template>
                    <template slot="dni" slot-scope="row">
                     <p class="labelInput imp-fue">{{row.item.cnum_doc}}</p>
                    </template>
                    <template slot="numero" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.cnum_numperio}}</p>
                      <a v-if="row.item.vencido == '1'" style="color: red" class="labelInput imp-fue">VENCIDO</a>
                    </template>
                    <template slot="canal" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.ctxt_tiporeclamo}}</p>
                    </template>
                    <template slot="reclamante" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.ctxt_nomape}}</p>
                    </template>
                    <template slot="derivado" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.ctxt_nomusuarioderivado}}</p>
                    </template>
                    <template slot="registro" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.dfec_registro}}</p>
                    </template>
                    <template slot="vencimiento" slot-scope="row">
                      <p style="color: red" class="labelInput imp-fue">{{row.item.dfec_vencimiento}}</p>
                    </template>
                    <template slot="derivado" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.ctxt_nomusuarioderivado}}</p>
                    </template>
                    <template slot="registro2" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.dfec_derivacion}}</p>
                    </template>
                    <template slot="registro3" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.dfec_respuesta}}</p>
                    </template>
                    <template slot="estado" slot-scope="row">
                      <p v-if="row.item.nflg_estado == 0" class="labelInput imp-fue">PENDIENTE</p>
                      <p v-if="row.item.nflg_estado == 1" class="labelInput imp-fue">DERIVADO</p> 
                      <p v-if="row.item.nflg_estado == 2" class="labelInput imp-fue">RESPONDIDO</p> 
                    </template>
                    <template slot="ver" slot-scope="row">
                      <button @click="verDoc(row.item)" type="button" class="btn-success-circle btn btn-xs" v-b-tooltip.hover title="Ver Consulta" ><i class="fa fa-external-link p-r-3"></i></button>
                    </template>
                    <template slot="alertar" slot-scope="row">
                      <button v-if="row.item.nflg_estado == 1" @click="alertar(row.item)" type="button" class="btn-danger-circle btn btn-xs" v-b-tooltip.hover title="Reenviar Correo" ><i class="fa fa-commenting p-r-3"></i></button>
                    </template>
                </b-table>
                <div class="row">
                  <div class="col-md-12 mb-3">
                    <br><br>
                      <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0 pull-right m-l-20"/>
                  </div>
                </div>
                </b-tab>
                <b-tab title="ATENDIDOS">
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
                     <p class="labelInput imp-fue">{{row.item.cnom_usuariocreacion}}</p>
                    </template>
                    <template slot="dni" slot-scope="row">
                     <p class="labelInput imp-fue">{{row.item.cnum_doc}}</p>
                    </template>
                    <template slot="numero" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.cnum_numperio}}</p>
                    </template>
                    <template slot="canal" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.ctxt_tiporeclamo}}</p>
                    </template>
                    <template slot="reclamante" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.ctxt_nomape}}</p>
                    </template>
                    <template slot="registro" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.dfec_registro}}</p>
                    </template>
                    <template slot="derivado" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.ctxt_nomusuarioderivado}}</p>
                    </template>
                    <template slot="registro2" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.dfec_derivacion}}</p>
                    </template>
                    <template slot="registro4" slot-scope="row">
                      <p class="labelInput imp-fue">{{row.item.dfec_atencion}}</p>
                    </template>
                    <template slot="ver" slot-scope="row">
                      <button @click="verDoc1(row.item)" type="button" class="btn-success-circle btn btn-xs" v-b-tooltip.hover title="Ver Consulta" ><i class="fa fa-external-link p-r-3"></i></button>
                    </template>
                </b-table>
                <div class="row">
                  <div class="col-md-12 mb-3">
                    <br><br>
                      <b-pagination :total-rows="totalRows2" :per-page="perPage2" v-model="currentPage2" class="my-0 pull-right m-l-20"/>
                  </div>
                </div>
                </b-tab>
                <b-tab title="REPORTE">
                <div class="row m-t-30 fuente">
                  <div class="col-md-3 m-b-20">
                      <label class="labelInput">FECHA DE REGISTRO</label>
                      <datepicker :language="es" placeholder="Selecciona la fecha" class="imp-fue" style="width: 100%; margin-top: 5px" :minimumView="'month'" :maximumView="'year'" :initialView="'year'" format="yyyy-MM" v-model="aniobus"></datepicker>
                  </div>
                  <div class="col-md-3 m-b-20">
                      <label class="labelInput">TIPO DE ESTADO</label>
                      <b-form-select style="border: 1px solid #D5D8DC; width: 100%; border-radius: 0" class="imp-fue" :options="pageOptions3" v-model="perPage3" />
                  </div>
                  <div class="col-md-6">
                      <div class="container-form-btn m-t-10">
                        <button v-on:click="limpiar" class="routing3-form-btn m-r-10 m-l-10 m-b-10 fuente"> LIMPIAR</button>
                        <button v-if="cargado == false" v-on:click="generar" class="routing-form-btn m-r-10 m-l-10 m-b-10 fuente"> GENERAR</button>
                        <button v-if="cargado == true" class="routing2-form-btn m-r-10 m-l-10 fuente">
                          <download-excel
                            :data="json_data"
                            :fields="json_fields"
                            worksheet="Consultas"
                            :name="nameExcel">
                            DESCARGAR
                          </download-excel>
                        </button>
                      </div>
                      <br><br>
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
     name: 'consultas',
     authorization: this.$store.state.authorization,
     usuario: localStorage.getItem('nickname'),
     periodopen: null,
     periodoate: null,
     fields: [
        { key: 'item', label: 'ITEM'},
        { key: 'usuario', label: 'USUARIO'},
        { key: 'dni', label: 'N° DE DOCUMENTO'},
        { key: 'numero', label: 'N° DE CONSULTA'},
        { key: 'canal', label: 'TIPO DE CONSULTA'},
        { key: 'reclamante', label: 'CONSULTANTE'},
        { key: 'registro', label: 'FECHA DE REGISTRO'},
        { key: 'vencimiento', label: 'FECHA DE VENCIMIENTO'},
        { key: 'derivado', label: 'DERIVADO A'},
        { key: 'registro2', label: 'FECHA DE DERIVACIÓN'},
        { key: 'registro3', label: 'FECHA DE RESPUESTA'},
        { key: 'estado', label: 'ESTADO'},
        { key: 'ver', label: 'VER'},
        { key: 'alertar', label: 'ALERTAR'}
      ],
      fields2: [
        { key: 'item', label: 'ITEM'},
        { key: 'usuario', label: 'USUARIO'},
        { key: 'dni', label: 'N° DE DOCUMENTO'},
        { key: 'numero', label: 'N° DE CONSULTA'},
        { key: 'canal', label: 'TIPO DE CONSULTA'},
        { key: 'reclamante', label: 'CONSULTANTE'},
        { key: 'registro', label: 'FECHA DE REGISTRO'},
        { key: 'derivado', label: 'DERIVADO A'},
        { key: 'registro2', label: 'FECHA DE DERIVACIÓN'},
        { key: 'registro4', label: 'FECHA DE ATENCIÓN'},
        { key: 'ver', label: 'VER'}
      ],
      lista: [],
      lista2: [],
      lista3: [],
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
      perPage3: 'PENDIENTE',
      pageOptions3: [ 'PENDIENTE', 'ATENDIDO' ],
      cargado: false,
      json_fields: {
        "N° DE CONSULTA": "cnum_numperio",
        "USUARIO": "cnom_usuariocreacion",
        "TIPO DE DOCUMENTO": "ctxt_tipodoc",
        "N° DE DOCUMENTO": "cnum_doc",
        "NOMBRES Y APELLIDOS": "ctxt_nomape",
        "CORREO ELECTRÓNICO": "ctxt_correo",
        "CORREO ELECTRÓNICO 2": "ctxt_correo2",
        "N° DE CELULAR": "cnum_celular",
        "N° DE EXPEDIENTE": "cnum_expediente",
        "TIPO DE PERSONA": "ctxt_tipopersona",
        "TIPO DE CANAL": "ctxt_tiporeclamo",
        "FECHA DE REGISTRO": "dfec_registro",
        "FECHA DE VENCIMIENTO": "dfec_vencimiento",
        "ESTADO": "nflg_estado",
        "DETALLE DE LA CONSULTA": "ctxt_reclamo",
        "PERSONA DERIVADA": "ctxt_nomusuarioderivado",
        "DETALLE DE LA DERIVACIÓN": "ctxt_detalleresponsable",
        "FECHA DE DERIVACIÓN": "dfec_derivacion",
        "RESPUESTA DEL DERIVADO": "ctxt_detallederivado",
        "FECHA DE RESPUESTA": "dfec_respuesta",
        "ATENCIÓN": "ctxt_respuestaresponsable",
        "FECHA DE ATENCIÓN": "dfec_atencion",
        "ESTADO ACTUAL": "vencido"
      },
      json_data: [],
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8",
          },
        ],
      ],
      nameExcel: ""
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
    nuevo(){
      this.$router.push('/consultas/registrar');
    },
    onFiltered (filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    onFiltered2 (filteredItems) {
      this.totalRows2 = filteredItems.length
      this.currentPage2 = 1
    },
    verDoc (item){
       this.$store.commit('consulConsulta', item);
       this.$router.push('/consultas/detalleConsultaPen');
    },
    verDoc1 (item){
       this.$store.commit('consulConsulta', item);
       this.$router.push('/consultas/detalleConsultaAte');
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
    alertar(datos){
        this.isLoading = true; 
        let fromData = new FormData();
        fromData.append('codreclamo', datos.cnum_numperio);
        fromData.append('fecreclamo', datos.dfec_registro);
        fromData.append('documento', datos.ctxt_tipodoc);
        fromData.append('numero', datos.cnum_doc);
        fromData.append('nombres', datos.ctxt_nomape);
        fromData.append('correo', datos.ctxt_correo);
        fromData.append('correo2', datos.ctxt_correo2);
        fromData.append('celular', datos.cnum_celular);
        fromData.append('expediente', datos.cnum_expediente);
        fromData.append('detalle', datos.ctxt_reclamo);
        fromData.append('tipopersona', datos.ctxt_tipopersona);
        fromData.append('tipocanal', datos.ctxt_tiporeclamo);
        fromData.append('usuarioderivado', datos.ctxt_usuarioderivado);
        fromData.append('nomusuarioderivado', datos.ctxt_nomusuarioderivado);
        fromData.append('correoderivado', datos.ctxt_correoderivado);
        fromData.append('detalleresponsable', datos.ctxt_detalleresponsable);
        fromData.append('detallederivado', datos.ctxt_detallederivado);
        fromData.append('estado', 1);
        fromData.append('usuario', this.usuario);
        fromData.append('iddetalletipoasistencia', datos.nid_detalletipoasistencia);
        fromData.append('idtipoasistencia', 3);
        axios.post(this.$store.state.serverAsistenciaAdmin + '/derivarConsulta', fromData, {crossDomain: true, headers: {"Authorization": this.authorization}
        }).then((response) => {
          this.isLoading = false; 
          this.notifyVue4(); 
          this.consultar1(1);      
        },(error) => {
          this.isLoading = false;
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
      axios.get(this.$store.state.serverAsistenciaAdmin + '/listConsultasPendientes?periodo=' + anio,  {crossdomain: true,
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
          anio = moment(this.periodoate).format('YYYY');
      }
      this.isLoading = true; 
      axios.get(this.$store.state.serverAsistenciaAdmin + '/listConsultasAtendidas?periodo=' + anio,  {crossdomain: true,
      headers: {
        Authorization: this.authorization
      }
      }).then((response) => {
          this.lista2 = response.data;
          this.lista2 = this.lista2.response;
          this.totalRows2 = this.lista2.length
            if(this.lista2 == ''){
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
    limpiar(){
      this.aniobus = null;
      this.mesbus = null;
      this.json_data = [];
      this.perPage3 = 'PENDIENTE';
      this.cargado = false;
    },
    generar(){
      if(this.aniobus !== "" && this.aniobus !== null){
        let tipo = '';
        let anio = moment(this.aniobus).format('YYYY');
        let mes = moment(this.aniobus).format('M');
        if(this.perPage3 == 'PENDIENTE'){
          tipo = '0';
        }else{
          tipo = '1';
        }
        this.isLoading = true; 
        axios.get(this.$store.state.serverAsistenciaAdmin + '/listReporteConsultas?anio=' + anio + '&mes=' + mes + '&tipo=' + tipo + '&usuario=' + this.usuario,  {crossdomain: true,
        headers: {
          Authorization: this.authorization
        }
        }).then((response) => {
            this.lista3 = response.data;
            this.lista3 = this.lista3.response;
              if(this.lista3.length !== 0){
                this.traspaso();
                this.notifyVue5();
              }else{
                this.notifyVue6();
              }
            },(error) => {
              this.notifyVue();
        }); 
      }else{
        this.$notify(
          {
            message: 'Debe ingresar una fecha de búsqueda!',
            icon: 'add_alert',
            horizontalAlign: 'left',
            verticalAlign: 'top',
            type: 'danger'
          })
      }
    },
    traspaso(){
      this.nameExcel = "Consultas" + moment(this.aniobus).format('YYYY') + "-" + moment(this.aniobus).format('MM') + ".xls"
      this.lista3.forEach( item =>{
        var estado = "";
        var vencimiento = "";
        if(item.nflg_estado == 0){
            estado = "PENDIENTE";
        }else if(item.nflg_estado == 1){
            estado = "DERIVADO";
        }else if(item.nflg_estado == 2){
            estado = "RESPONDIDO";
        }else{
            estado = "ATENDIDO";
        }
        if(item.vencido == "0"){
            vencimiento = "ACTIVO";
        }else{
            vencimiento = "VENCIDO";
        }
        this.json_data.push({
          "cnum_numperio": item.cnum_numperio,
          "cnom_usuariocreacion": item.cnom_usuariocreacion,
          "ctxt_tipodoc": item.ctxt_tipodoc,
          "cnum_doc": item.cnum_doc,
          "ctxt_nomape": item.ctxt_nomape,
          "ctxt_correo": item.ctxt_correo,
          "ctxt_correo2": item.ctxt_correo2,
          "cnum_celular": item.cnum_celular,
          "cnum_expediente": item.cnum_expediente,
          "ctxt_tipopersona": item.ctxt_tipopersona,
          "ctxt_tiporeclamo": item.ctxt_tiporeclamo,
          "dfec_registro": item.dfec_registro,
          "dfec_vencimiento": item.dfec_vencimiento,
          "nflg_estado": estado,
          "ctxt_reclamo": item.ctxt_reclamo,
          "ctxt_nomusuarioderivado": item.ctxt_nomusuarioderivado,
          "ctxt_detalleresponsable": item.ctxt_detalleresponsable,
          "dfec_derivacion": item.dfec_derivacion,
          "ctxt_detallederivado": item.ctxt_detallederivado,
          "dfec_respuesta": item.dfec_respuesta,
          "ctxt_respuestaresponsable": item.ctxt_respuestaresponsable,
          "dfec_atencion": item.dfec_atencion,
          "vencido": vencimiento
        })
      })
    },
    notifyVue5() {
       this.isLoading = false;
       this.$notify(
        {
          message: 'El documento Excel esta listo para descargar!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'success'
        })
       this.cargado = true;
    },
    notifyVue6() {
       this.isLoading = false;
       this.$notify(
        {
          message: 'No existen registros para descargar!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'danger'
        })
       this.limpiar();
    },
    notifyVue2() {
       this.isLoading = false;
       this.$notify(
        {
          message: 'No tienes consultas pendientes!',
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
          message: 'No tienes consultas atendidas!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'success'
        })
    },
    notifyVue4() {
       this.isLoading = false;
       this.$notify(
        {
          message: 'Se reenvió el correo electrónico de la derivación!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'success'
        })
    },
  },
  components: {
    Loading,
    Datepicker
  }
}
</script>
