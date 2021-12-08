<template>
	<div class="news2">
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
										<a style="color: #AF52BF">Registra en Nuestro Libro de Reclamos</a>
									</div>
									<div class="news_post_meta">
										<span class="news_post_author"><a style="color: #AF52BF">Completa correctamente tu registro</a></span>
									</div>
								</div>
							</div>
							<div class="news_post_text">
								<p>En el siguiente formulario registrará su reclamo de manera correcta el cual sera revisado por el personal encargado quien se encargará de derivar o dar respuesta a tu caso lo mas pronto posible.</p>
							</div>
							<div class="pbar_container m-t-20">
					          <label class="labelInput">TIPO DE DOCUMENTO</label>
					          <select style="border: 1px solid #D5D8DC" class="form-control imp-fue mb-3" v-model="documento" @change="onChange($event)">
								   <option value="DNI">DNI</option>
								   <option value="PASAPORTE">PASAPORTE</option>
								   <option value="CARNÉ DE EXTRANJERÍA">CARNÉ DE EXTRANJERÍA</option>
								   <option value="MENOR DE EDAD">MENOR DE EDAD</option>
					          </select>
					          <label class="labelInput">NÚMERO DE DOCUMENTO</label>
					          <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="numero"/>
					          <label class="labelInput">NOMBRES Y APELLIDOS / RAZÓN SOCIAL</label>
					          <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="nombres"/>
					          <label v-if="menor" class="labelInput">NOMBRE DEL APODERADO (En caso de ser menor de edad)</label>
					          <b-form-input v-if="menor" style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="apoderado"/>
					          <label class="labelInput">CORREO ELECTRÓNICO</label>
					          <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="email"/>
					          <label class="labelInput">TELÉFONO FIJO / CELULAR (Opcional)</label>
					          <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="number" v-model="celular"/>
					          <label class="labelInput">DOMICILIO (Opcional)</label>
					          <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="domicilio"/>
					          <label class="labelInput">NÚMERO DE TRÁMITE (Opcional en caso disponga)</label>
					          <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="tramite"/>
					          <label class="labelInput">TIPO DE RECLAMO</label>
					          <select style="border: 1px solid #D5D8DC" class="form-control imp-fue mb-3" v-model="reclamo" @change="onChange2($event)">
								   <option value="RECLAMO">RECLAMO</option>
								   <option value="QUEJA">QUEJA</option>
					          </select>
					          <label v-if="menor2" class="labelInput">NOMBRE DEL FUNCIONARIO</label>
					          <b-form-input v-if="menor2" style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="funcionario"/>
					          <label v-if="menor2" class="labelInput">CARGO DEL FUNCIONARIO</label>
					          <b-form-input v-if="menor2" style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="cargo"/>
					          <label class="labelInput">DETALLE DEL RECLAMO / QUEJA (Obligatorio)</label>
			                  <textarea id="text" class="form-control imp-fue mb-3"
					               style="border-radius: 0px; height:300px; max-height:300px; min-height:300px"
					               v-model="detalle"
					               no-resize
					               :rows="50"
					               :max-rows="100"
					               maxlength="1200"
					               v-on:keyup="cuenta">
					          </textarea>
					          <p v-bind:class="{'text-danger': error }" style="color: #2E86C1; font-size: 13px;" class="mb-3 fuente">Máximo {{recorreCount}} caracteres</p>
					          <label class="labelInput">PEDIDO (Obligatorio)</label>
					          <textarea id="text" class="form-control imp-fue mb-3"
					               style="border-radius: 0px; height:300px; max-height:300px; min-height:300px"
					               v-model="pedido"
					               no-resize
					               :rows="50"
					               :max-rows="100"
					               maxlength="1200"
					               v-on:keyup="cuenta2">
					          </textarea>
                              <p v-bind:class="{'text-danger': error2 }" style="color: #2E86C1; font-size: 13px;" class="mb-3 fuente">Máximo {{recorreCount2}} caracteres</p>
							</div>
						</div>
					  </transition>
					  <transition name="fade" mode="out-in">
						<div class="news_post p-b-10" v-if="micro">
							<div class="news_post_top d-flex flex-column flex-sm-row">
								<div class="news_post_title_container3">
									<div class="news_post_title">
										<a style="color: #AF52BF">Reclamo N° {{codigo}} Enviado Satisfactoriamente</a>
									</div>
									<div class="news_post_meta">
										<span class="news_post_author"><a style="color: #AF52BF">Gracias por completar el registro</a></span>
									</div>
								</div>
							</div>
							<div class="news_post_text">
								<p>Tu reclamo ha sido enviada correctamente. Guarda tu número de reclamo y revisa tu email electrónico para que verifiques y realices el seguimiento a tu respuesta. Tambien puedes usar la opción de <strong>IR A CONSULTAR</strong> para ver tu reclamo.</p>
							</div>
						</div>
					</transition>
					</div>
				</div>
			</div>
		</div>
	  <div class="container-form-btn m-t-40">
	    <button v-if="micro" v-on:click="nuevo" class="routing2-form-btn m-r-10 m-l-10 mb-3 fuente"> NUEVO RECLAMO</button>
	    <button v-if="macro" v-on:click="validar" class="routing2-form-btn m-r-10 m-l-10 mb-3 fuente"> ENVIAR RECLAMO</button>
	  </div>
	  <div>
		<b-modal :no-close-on-backdrop="false" :no-close-on-esc="false" id="modal-center" centered size="lg" ref="my-modal" hide-footer title="Libro de Reclamaciones">
			<div class="d-block text-center">
				<h3 style="margin-bottom: 30px; font-size: 25px">Bienvenido Ciudadano!</h3>
			</div>
				<ul>
					<li style="margin-bottom: 20px; color: #333; font-size: 20px">Se le comunica que para proceder con el registro de su reclamo virtual deberá contar conocimiento de las siguientes condiciones:</li>
					<li style="margin-bottom: 10px; color: #333"><i style="font-size: 10px; margin-right: 10px" class="fa fa-circle" aria-hidden="true"></i>Toda la información ingresada debe ser llenada en forma veráz y actualizada.</li>
					<li style="margin-bottom: 10px; color: #333"><i style="font-size: 10px; margin-right: 10px" class="fa fa-circle" aria-hidden="true"></i>Su DNI será verificado mediante un servicio web de la RENIEC para constatar su autenticidad.</li>
					<li style="margin-bottom: 10px; color: #333"><i style="font-size: 10px; margin-right: 10px" class="fa fa-circle" aria-hidden="true"></i>Debe ingresar su correo electrónico o un equivalente, que permitirá por medio de notificaciones,
					la comunicación constante con usted acerca del proceso de su reclamo.</li>
					<li style="margin-bottom: 30px; color: #333"><i style="font-size: 10px; margin-right: 10px" class="fa fa-circle" aria-hidden="true"></i>Los reclamos se atenderán los días Lunes a Viernes; en caso se registre el reclamo los días sabados, domingos o feriados
						serán atendidos en el siguiente día habil.</li>
				</ul>
			<b-button class="mt-3" variant="outline-primary" block @click="hideModal">HE LEÍDO LAS CONDICIONES</b-button>
		</b-modal>
	  </div>
	</div>

</template>

<script>


import axios from 'axios'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  data () {
    return {
      reclamo: 'RECLAMO',
      documento: 'DNI',
      numero: '',
      nombres: '',
      apoderado: '',
      email: '',
      celular: '',
      domicilio: '',
      tramite: '',
      funcionario: '',
      cargo: '',
      maxCount: 1200,
      recorreCount: 1200,
      maxCount2: 1200,
      recorreCount2: 1200,
      alert: true,
      detalle: '',
      pedido: '',
      error: '',
      error2: '',
      menor: false,
      menor2: false,
      macro: true,
      micro: false,
      isLoading: false,
      fullPage: true,
      visEmail: false
    }
  },
  mounted(){
      this.$refs['my-modal'].show()
  },
  methods:{
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        this.$refs['my-modal'].toggle('#toggle-btn')
      },
	  validEmail: function(email) {
	     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	     return re.test(email);
	  },
	  cuenta() {
	    this.recorreCount = this.maxCount - this.detalle.length;
	    this.error = this.recorreCount < 100;
	  },
	  cuenta2() {
	    this.recorreCount2 = this.maxCount2 - this.pedido.length;
	    this.error2 = this.recorreCount2 < 100;
	  },
	  onChange(event){
		if(event.target.value == 'MENOR DE EDAD'){
          this.menor = true;
		}else{
		  this.menor = false;
		}
	  },
	  onChange2(event){
		if(event.target.value == 'QUEJA'){
          this.menor2 = true;
		}else{
		  this.menor2 = false;
		}
	  },
	  validar(){
	    if(this.documento == 'MENOR DE EDAD'){
            if(this.reclamo == 'QUEJA'){
               if(this.numero != '' && this.nombres != '' && this.apoderado != '' && this.email != '' && this.funcionario != '' &&
               	  this.cargo != '' && this.detalle != '' && this.pedido != ''){
	              if (!this.validEmail(this.email)) {
	                  this.correofallido();
	              }else {
                      this.enviar();
	              }
               }else{
                  this.camposVacios();
               }
            }else{
               if(this.numero != '' && this.nombres != '' && this.apoderado != '' && this.email != '' && this.detalle != '' && this.pedido != ''){
	              if (!this.validEmail(this.email)) {
	                  this.correofallido();
	              }else {
                      this.enviar();
	              }
               }else{
                  this.camposVacios();
               }
            }
	    }else{
	    	if(this.reclamo == 'QUEJA'){
               if(this.numero != '' && this.nombres != '' && this.email != '' && this.funcionario != '' && this.cargo != '' && this.detalle != '' && this.pedido != ''){
	              if (!this.validEmail(this.email)) {
	                  this.correofallido();
	              }else {
                      this.enviar();
	              }
               }else{
                  this.camposVacios();
               }
            }else{
	           if(this.numero != '' && this.nombres != '' && this.email != '' && this.detalle != '' && this.pedido != ''){
	              if (!this.validEmail(this.email)) {
	                  this.correofallido();
	              }else {
                      this.enviar();
	              }
	           }else{
                  this.camposVacios();
	           }
            }
	  	}
	  },
	  enviar(){
		this.detalle = this.detalle.split("'").join(" ");
		this.pedido = this.pedido.split("'").join(" ");
		// this.detalle = this.detalle.replace(/'/i, " ");
		// this.pedido = this.pedido.replace(/'/i, " ");
	  	this.isLoading = true;
        let fromData = new FormData();
        fromData.append('documento', this.documento);
        fromData.append('numero', this.numero);
        fromData.append('nombres', this.nombres);
        fromData.append('apoderado', this.apoderado);
        fromData.append('correo', this.email);
        fromData.append('celular', this.celular);
        fromData.append('domicilio', this.domicilio);
        fromData.append('tramite', this.tramite);
        fromData.append('reclamo', this.reclamo);
        fromData.append('funcionario', this.funcionario);
        fromData.append('cargo', this.cargo);
        fromData.append('detalle', this.detalle);
        fromData.append('pedido', this.pedido);
        fromData.append('idtipoasistencia', 1);
        axios.post(this.$store.state.serverAsistenciaPublic + '/insertarReclamo', fromData, {crossDomain: true
        }).then((response) => {
	  		this.lista = response.data;
	  		if(this.lista.errorCode != 'SQL_SEL_001'){
	  			this.codigo = this.lista.response.codigo;
	  		    this.isLoading = false;
                this.macro = false;
                this.micro = true;
	  		}else{
	  			this.isLoading = false;
	  			this.notifyVue();
	  		}
	      },(error) => {
	        this.isLoading = false;
	  		this.notifyVue();
	      });
	  },
	  nuevo(){
	  	this.limpiar();
        this.micro = false;
        this.macro = true;
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
      camposVacios() {
       this.$notify(
        {
          message: 'Debe completar los campos solicitados!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'danger'
        })
      },
      correofallido() {
       this.$notify(
        {
          message: 'Debe completar el correo electrónico!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'danger'
        })
      },
      limpiar(){
	      this.reclamo = 'RECLAMO'
	      this.documento = 'DNI'
	      this.numero = ''
	      this.nombres = ''
	      this.apoderado = ''
	      this.email = ''
	      this.celular = ''
	      this.domicilio = ''
	      this.tramite = ''
	      this.funcionario = ''
	      this.cargo =''
	      this.detalle = ''
	      this.pedido = ''
      }
  },
  components: {
  	Loading
  }
}
</script>
