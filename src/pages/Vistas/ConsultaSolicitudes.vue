<template>
	<div class="news2 m-b-30">
	    <div>
	        <loading :active.sync="isLoading"
            :can-cancel="false"
	        :is-full-page="true"></loading>
	    </div>
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="news_posts">
                        <transition name="fade" mode="out-in">
						<div class="news_post" v-if="macro">
							<div class="news_post_top d-flex flex-column flex-sm-row">
								<div class="news_post_title_container3">
									<div class="news_post_title">
										<a style="color: #AF52BF">Consulta el Estado de tu Solicitud</a>
									</div>
									<div class="news_post_meta">
										<span class="news_post_author"><a style="color: #AF52BF">Completa correctamente tu registro</a></span>
									</div>
								</div>
							</div>
							<div class="news_post_text">
								<p>En el siguiente formulario registrará su número de documento y/o su número de solicitud para buscar y verificar el estado de su solicitud que ingresó anteriormente.</p>
							</div>
							<div class="pbar_container m-t-20">
							  <div class="row">
								<div class="col-md-6">
								   <label class="labelInput">NÚMERO DE DOCUMENTO</label>
							      <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="dni"/>
								</div>
								<div class="col-md-6">
								   <label class="labelInput">NÚMERO DE SOLICITUD</label>
							      <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="numero"/>
								</div>

							  </div>
							  <div class="container-form-btn fonTap m-t-20">
							    <button v-on:click="buscar" class="routing2-form-btn m-r-10 m-l-10 fuente"> BUSCAR SOLICITUD</button>
							  </div>
							  <transition name="fade" mode="out-in">
							  <b-table bordered
							           class="imp-fue m-t-30"
							           show-empty
						               stacked="lg"
						               :items="lista"
						               :fields="fields"
						               :current-page="currentPage"
						               :per-page="perPage"
						               :filter="filter"
						               :sort-by.sync="sortBy"
						               :sort-desc.sync="sortDesc"
						               @filtered="onFiltered"
						               v-if="tabla">
							      <template slot="dni" slot-scope="row">
							       <p class="labelInput imp-fue">{{row.item.cnum_doc}}</p>
							      </template>
							      <template slot="numero" slot-scope="row">
							        <p class="labelInput imp-fue">{{row.item.cnum_numperio}}</p>
							      </template>
							      <template slot="estado" slot-scope="row">
							        <p v-if="row.item.nflg_estado == 0 || row.item.nflg_estado == 1 || row.item.nflg_estado == 2" class="labelInput imp-fue">PENDIENTE</p>
							        <p v-if="row.item.nflg_estado == 3" class="labelInput imp-fue">ATENDIDO</p>
							     </template>
							      <template slot="ver" slot-scope="row">
							        <button @click="verDoc(row.item)" type="button" class="btn-success-circle btn btn-xs" v-b-tooltip.hover title="Ver Reclamo" ><i class="fa fa-external-link p-r-3"></i></button>
							      </template>
							 </b-table>
							 </transition>
							</div>
						</div>
                        </transition>
						<transition name="fade" mode="out-in">
                         <detalle-solicitud v-if="micro"></detalle-solicitud>
                        </transition>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>


import axios from 'axios'

import DetalleSolicitud from 'src/pages/Vistas/DetalleSolicitud'


import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  data () {
    return {
     fields: [
        { key: 'dni', label: 'N° DE DOCUMENTO', sortable: true },
        { key: 'numero', label: 'N° DE RECLAMO', sortable: true },
        { key: 'estado', label: 'ESTADO', sortable: true },
        { key: 'ver', label: 'VER', sortable: true }
      ],
      lista: [],
      tabla: false,
      currentPage: 1,
      perPage: 10,
      totalRows: length,
      pageOptions: [ 10, 20, 50 ],
      sortBy: null,
      sortDesc: false,
      filter: null,
      macro: true,
      micro: false,
      isLoading: false,
      fullPage: true,
      dni: '',
      numero: ''
    }
  },
  methods:{
	  onFiltered (filteredItems) {
          this.totalRows = filteredItems.length
          this.currentPage = 1
	   },
	  cuenta() {
	    this.recorreCount = this.maxCount - this.pedido.length;
	    this.error = this.recorreCount < 100;
	  },
	  cuenta2() {
	    this.recorreCount2 = this.maxCount2 - this.observaciones.length;
	    this.error2 = this.recorreCount2 < 100;
	  },
	  buscar(){
	  this.isLoading = true;
      if(this.dni != '' && this.numero != ''){
	      axios.get(this.$store.state.serverAsistenciaPublic + '/listSolicitudesPublic?cnum_doc=' +  this.dni + '&cnum_numperio=' + this.numero, {crossdomain: true
	      }).then((response) => {
	      		this.lista = response.data;
	      		this.lista = this.lista.response;
	      		if(this.lista != ''){
		            this.tabla = true;
		            this.isLoading = false;
	      		}else{
	      			this.isLoading = false;
	      			this.notifyVue2();
	      		}
	          },(error) => {
	            this.isLoading = false;
	      		this.notifyVue();
	          });
      }else if (this.dni != '' && this.numero == ''){
	      axios.get(this.$store.state.serverAsistenciaPublic + '/listSolicitudesPublic?cnum_doc=' +  this.dni + '&cnum_numperio=' + this.numero, {crossdomain: true
	      }).then((response) => {
	      		this.lista = response.data;
	      		this.lista = this.lista.response;
	      		if(this.lista != ''){
		            this.tabla = true;
		            this.isLoading = false;
	      		}else{
	      			this.isLoading = false;
	      			this.notifyVue2();
	      		}
	          },(error) => {
	            this.isLoading = false;
	      	    this.notifyVue();
	          });
      }else if (this.dni == '' && this.numero != ''){
	      axios.get(this.$store.state.serverAsistenciaPublic + '/listSolicitudesPublic?cnum_numperio=' + this.numero, {crossdomain: true
	      }).then((response) => {
	      		this.lista = response.data;
	      		this.lista = this.lista.response;
	      		if(this.lista != ''){
		            this.tabla = true;
		            this.isLoading = false;
	      		}else{
	      			this.isLoading = false;
	      			this.notifyVue2();
	      		}
	          },(error) => {
	            this.isLoading = false;
	      		this.notifyVue();
	          });
      }else{
      	this.isLoading = false;
      }
	  },
	  verDoc (item) {
        this.$store.commit('consulSolicitud', item);
        this.macro = false;
        this.micro = true;
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
       this.$notify(
        {
          message: 'No existen registro a mostrar!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'success'
        })
      }
  },
   components: {
  	DetalleSolicitud,
  	Loading
  }
}
</script>
