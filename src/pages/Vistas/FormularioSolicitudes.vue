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
										<a style="color: #AF52BF">Registra tu Solicitud de Acceso a la Información</a>
									</div>
									<div class="news_post_meta">
										<span class="news_post_author"><a style="color: #AF52BF">Completa tu registro</a></span>
									</div>
								</div>
							</div>
							<div class="news_post_text">
								<p>En el siguiente formulario registrará su solicitud, la cual sera revisado por el personal encargado quien se encargará de derivar o dar respuesta a tu caso lo mas pronto posible.</p>
							</div>
							<div class="pbar_container m-t-20">
					          <label class="labelInput">TIPO DE DOCUMENTO (Selecciona el tipo de documento que corresponda)</label>
					          <select style="border: 1px solid #D5D8DC" class="form-control imp-fue mb-3" v-model="documento" @change="onChange($event)">
								   <option value="DNI">DNI</option>
								   <option value="DNI">RUC</option>
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
							  <div class="row">
								<div class="col-md-4">
								   <label class="labelInput">DEPARTAMENTO</label>
									<model-select
									    @input="handleOnInput"
										:options="departamentos"
										v-model="departamento"
										placeholder="Buscar departamento"
										style="border: 1px solid #D5D8DC; border-radius: 0"
										class="form-control imp-fue mb-3">
									</model-select>
								</div>
								<div class="col-md-4">
								    <label class="labelInput">PROVINCIA</label>
									<model-select
										@input="handleOnInput2"
										:options="provincias"
										v-model="provincia"
										placeholder="Buscar provincia"
										style="border: 1px solid #D5D8DC; border-radius: 0"
										class="form-control imp-fue mb-3">
									</model-select>
								</div>
							    <div class="col-md-4">
								    <label class="labelInput">DISTRITO</label>
									<model-select
										@input="handleOnInput3"
										:options="distritos"
										v-model="distrito"
										placeholder="Buscar distrito"
										style="border: 1px solid #D5D8DC; border-radius: 0"
										class="form-control imp-fue mb-3">
									</model-select>
								</div>
							  </div>
							  <div class="row">
								<div class="col-md-4">
								   <label class="labelInput">AV. / CALLE / JR. / PSJ.</label>
							      <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="avenida"/>
								</div>
								<div class="col-md-4">
								   <label class="labelInput">N° / DPTO ./ INT.</label>
							      <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="interior"/>
								</div>
							    <div class="col-md-4">
								   <label class="labelInput">URBANIZACIÓN</label>
							      <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="urbanizacion"/>
								</div>
							  </div>
					          <label class="labelInput">CORREO ELECTRÓNICO (Opcional)</label>
					          <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="email"/>
					          <label class="labelInput">TELÉFONO FIJO / CELULAR (Opcional)</label>
					          <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="number" v-model="celular"/>
					          <label class="labelInput">TEMA DE INFORMACIÓN (Opcional)</label><br>
					          <b-form-select style="border: 1px solid #D5D8DC; width: 100%; border-radius: 0px" class="imp-fue mb-3" :options="temas" v-model="tema" /><br>
					          <label class="labelInput">DEPENDENCIA DE LA INFORMACIÓN (Opcional)</label>
					          <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="dependencia"/>
					          <label class="labelInput">ESPECIFIQUE FORMA DE ENTREGA (Opcional)</label><br>
					          <b-form-select style="border: 1px solid #D5D8DC; width: 100%; border-radius: 0px" class="imp-fue mb-3" :options="entregas" v-model="entrega" /><br>
					          <label class="labelInput">INDIQUE LA INFORMACIÓN SOLICITADA</label>
			                  <textarea id="text" class="form-control imp-fue mb-3"
					               style="border-radius: 0px; height:300px; max-height:300px; min-height:300px"
					               v-model="pedido"
					               no-resize
					               :rows="50"
					               :max-rows="100"
					               maxlength="1200"
					               v-on:keyup="cuenta">
					          </textarea>
					          <p v-bind:class="{'text-danger': error }" style="color: #2E86C1; font-size: 13px;" class="mb-3 fuente">Máximo {{recorreCount}} caracteres</p>
					          <label class="labelInput">OBSERVACIONES</label>
					          <textarea id="text" class="form-control imp-fue mb-3"
					               style="border-radius: 0px; height:100px; max-height:100px; min-height:100px"
					               v-model="observaciones"
					               no-resize
					               :rows="50"
					               :max-rows="500"
					               maxlength="500"
					               v-on:keyup="cuenta2">
					          </textarea>
                              <p v-bind:class="{'text-danger': error2 }" style="color: #2E86C1; font-size: 13px;" class="mb-3 fuente">Máximo {{recorreCount2}} caracteres</p>
							  <label class="labelInput">AUTORIZACIÓN (Solo si se elige la entrega virtual de la información) </label><br>
							  <a><input type="checkbox" id="true" value="true" v-model="checkedNames">
							  <label for="true" class="mb-3 fuente" style="color: #2E86C1; font-size: 13px;">Se autoriza la entrega de la información mediante gestor de documentos, cuando la extensión de la información solicitada exceda
								  20 MB; en cuyo caso, recibiré los links de acceso directo a la información en mi dirección electrónica.</label></a><br>
							</div>

							<!-- <div class="news_post_text">
								<label style="font-size: 16px" class="labelInput">Articulo 10, Inciso (d) del DS 070-2013-PCM</label>
								<p>En caso de no consignar dirección de correo electrónico y/o teléfono de contacto, la respuesta estará disponible para ser recogida dentro del plazo de Ley (10 días útiles) en la Oficina de Trámite Documentario y Archivo en el horario regular de trabajo del Tribunal Constitucional.</p>
							</div> -->
						</div>
					 </transition>
					 <transition name="fade" mode="out-in">
						<div class="news_post p-b-10" v-if="micro">
							<div class="news_post_top d-flex flex-column flex-sm-row">
								<div class="news_post_title_container3">
									<div class="news_post_title">
										<a style="color: #AF52BF">Solicitud N° {{codigo}} Enviada Satisfactoriamente</a>
									</div>
									<div class="news_post_meta">
										<span class="news_post_author"><a style="color: #AF52BF">Gracias por completar el registro</a></span>
									</div>
								</div>
							</div>
							<div class="news_post_text">
								<p>Tu solicitud ha sido enviada correctamente. Revisa tu correo electrónico para que verifiques y realices el seguimiento a tu respuesta. Tambien puedes usar la opción de <strong>Ir a Consultar</strong> para ver tu solicitud.</p>
							</div>
						</div>
					</transition>
					</div>
				</div>
			</div>
		</div>
	  <div class="container-form-btn m-t-40">
	    <button v-if="micro" v-on:click="nuevo" class="routing2-form-btn m-r-10 m-l-10 mb-3 fuente"> NUEVA SOLICITUD</button>
	    <button v-if="macro" v-on:click="validar" class="routing2-form-btn m-r-10 m-l-10 mb-3 fuente"> ENVIAR SOLICITUD</button>
	  </div>
	  <div>
		<b-modal :no-close-on-backdrop="false" :no-close-on-esc="false" id="modal-center" centered size="lg" ref="my-modal" hide-footer title="Solicitudes de Acceso a la Información">
			<div class="d-block text-center">
				<h3 style="margin-bottom: 30px; font-size: 25px">Bienvenido Ciudadano!</h3>
			</div>
				<ul>
					<li style="margin-bottom: 20px; color: #333; font-size: 20px">Antes de registrar la solicitud de acceso a la información, sírvase leer tener en consideración
						lo siguiente:</li>
					<li style="margin-bottom: 10px; color: #333"><i style="font-size: 10px; margin-right: 10px" class="fa fa-circle" aria-hidden="true"></i>Las solicitudes se
					atenderán en un plazo máximo de 10 días hábiles, contados desde el día siguiente a la presentación. En caso registre la solicitud en día inhábil
					(sábado, domingo, feriados generales o día no laborable para el sector público) el plazo de atención se contará desde el día hábil siguiente.</li>
					<li style="margin-bottom: 10px; color: #333"><i style="font-size: 10px; margin-right: 10px" class="fa fa-circle" aria-hidden="true"></i>En un plazo máximo
					de dos (2) días hábiles de recibida la solicitud, por causa justificada y fundamentada, se puede comunicar que la información se entregará en un plazo
					mayor a 10 días hábiles, indicando la fecha de entrega.</li>
					<li style="margin-bottom: 10px; color: #333"><i style="font-size: 10px; margin-right: 10px" class="fa fa-circle" aria-hidden="true"></i>Puede elegir el
					medio de entrega de la información virtual o físico.</li>
					<li style="margin-bottom: 10px; color: #333"><i style="font-size: 10px; margin-right: 10px" class="fa fa-circle" aria-hidden="true"></i>La <a style="font-weight: bold">ENTREGA VIRTUAL</a> es
					<a style="font-weight: bold">GRATUITA</a>, y se realiza mediante correo electrónico. De ser su elección, deberá indicar obligatoriamente una dirección de correo electrónico. </li>
					<li style="margin-bottom: 10px; color: #333"><i style="font-size: 10px; margin-right: 10px" class="fa fa-circle" aria-hidden="true"></i>Si solicita la
					<a style="font-weight: bold">ENTREGA FÍSICA</a> deberá abonar los costos de reproducción que correspondan a la documentación solicitada, antes de que la entidad proceda a expedir las copias
					o grabar la información:</li>
					<div class="d-block text-center">
						<p style="color: blue">S/. 0.10 por folio sea copia simple o copia certificada</p>
						<p style="color: blue; margin-top: -20px">S/. 1.20 por CD o DVD</p>
					</div>
					<li style="margin-bottom: 10px; color: #333"><i style="font-size: 10px; margin-right: 10px" class="fa fa-circle" aria-hidden="true"></i>Cual fuere la
					elección del medio de entrega, se sugiere consignar una dirección de correo electrónico y/o número telefónico, para facilitar la comunicación, coordinación
					y entrega de la información solicitada.</li>
					<li style="margin-bottom: 10px; color: #333"><i style="font-size: 10px; margin-right: 10px" class="fa fa-circle" aria-hidden="true"></i>Si no es posible
					indicar una dirección de correo electrónico y/o teléfono de contacto, luego de dos (2) días hábiles de presentada la solicitud, puede comunicarse a la
					Dirección General de Administración, teléfono 4275814 anexo 511 - 510, durante el horario regular de labores, de 8 a 13 horas y de 14 a 16:45 horas, para
					conocer el costo de reproducción de la información, si existe prórroga en la fecha de entrega y/o coordinar la entrega.</li>
					<li style="margin-bottom: 10px; color: #333"><i style="font-size: 10px; margin-right: 10px" class="fa fa-circle" aria-hidden="true"></i>En caso no pueda
					acercarse o comunicarse con la entidad, se notificará el costo de reproducción y la forma de pago, a su domicilio real.</li>
				</ul>
			<b-button class="mt-3" variant="outline-primary" block @click="hideModal">HE LEÍDO LAS INDICACIONES</b-button>
		</b-modal>
	  </div>
	</div>

</template>

<script>


import axios from 'axios'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import { ModelSelect } from 'vue-search-select'

export default {
  data () {
    return {
	  checkedNames: "",
      temas: ['-- SELECCIONE --', 'JURISDICCIONAL', 'ADMINISTRATIVO', 'OTROS'],
      entregas: ['-- SELECCIONE --', 'COPIA SIMPLE FÍSICA', 'COPIA CERTIFICADA FÍSICA', 'CORREO ELECTRÓNICO', 'CD/DVD', 'OTROS'],
      entrega: '-- SELECCIONE --',
      tema: '-- SELECCIONE --',
      documento: 'DNI',
      numero: '',
      nombres: '',
      apoderado: '',
      pais: 'PERÚ',
      avenida: '',
      interior: '',
      urbanizacion: '',
      email: '',
      celular: '',
	  dependencia: '',
	  formaentrega: '--',
      maxCount: 1200,
      recorreCount: 1200,
      maxCount2: 500,
      recorreCount2: 500,
      alert: true,
      pedido: '',
      observaciones: '',
      error: '',
      error2: '',
      menor: false,
      macro: true,
      micro: false,
      isLoading: false,
      fullPage: true,
      visEmail: false,
	  departamentos: [],
      departamento: {
          value: '',
          text: ''
      },
	  provincias: [],
      provincia: {
          value: '',
          text: ''
      },
	  distritos: [],
      distrito: {
          value: '',
          text: ''
      },
	  ubigeos: []
    }
  },
  mounted(){
	  this.ubigeosx('00', '00', 0);
  },
  methods:{
	  handleOnInput ($event) {
		var item = $event
		if(item.value == undefined){
          item.value = this.departamentos[0].value
		}
		this.ubigeosx(item.value, '00', 1)
	  },
	  handleOnInput2 ($event) {
		var item = $event
	    if(item.value == undefined){
          item.value = this.provincias[0].value
		}
		this.ubigeosx(this.departamento.value, item.value, 1)
	  },
	  handleOnInput3 ($event) {
		var item = $event
	    if(item.value == undefined){
          this.distrito.value = this.distritos[0].value;
		  this.distrito.text = this.distritos[0].text;
		}
	  },
	  ubigeosx(param1, param2, param3){
		this.isLoading = true;
		this.ubigeos = [];
        axios.get(this.$store.state.serverAsistenciaPublic + '/listUbigeo?departamento=' + param1 + '&provincia=' + param2, {
        headers: {
          Authorization: this.authorization
        }
        }).then((response) => {
             this.ubigeos = response.data.response
             if(param1 == '00' && param2 == '00'){
				this.departamentos = [];
				this.ubigeos.forEach(item => {
					this.departamentos.push({ value: item.nid, text: item.nombre });
				});
				this.departamento.value = this.departamentos[0].value;
				this.departamento.text = this.departamentos[0].text;
				this.ubigeosx(this.departamento.value, '00', 1)
			 }else if(param1 != '00' && param2 == '00'){
				this.provincias = [];
				this.ubigeos.forEach(item => {
					this.provincias.push({ value: item.nid, text: item.nombre });
				});
				this.provincia.value = this.provincias[0].value;
				this.provincia.text = this.provincias[0].text;
				this.ubigeosx(this.departamento.value, this.provincia.value, 1)
			 }else{
				this.distritos = [];
				this.ubigeos.forEach(item => {
					this.distritos.push({ value: item.nid, text: item.nombre });
				});
				this.distrito.value = this.distritos[0].value;
				this.distrito.text = this.distritos[0].text;
			 }
             this.isLoading = false;
			 if(param3 == 0){
			   this.$refs['my-modal'].show();
			 }
          },(error) => {

        });
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
  	  validEmail: function(email) {
	     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	     return re.test(email);
	  },
	  cuenta() {
	    this.recorreCount = this.maxCount - this.pedido.length;
	    this.error = this.recorreCount < 100;
	  },
	  cuenta2() {
	    this.recorreCount2 = this.maxCount2 - this.observaciones.length;
	    this.error2 = this.recorreCount2 < 100;
	  },
	  onChange(event){
		if(event.target.value == 'MENOR DE EDAD'){
          this.menor = true;
		}else{
		  this.menor = false;
		}
	  },




	  validar(){
	    if(this.documento == 'MENOR DE EDAD'){
           if(this.numero != '' && this.nombres != '' && this.apoderado != '' && this.pais != '' && this.avenida != '' && this.interior != '' && this.urbanizacion != '' && this.pedido != '' && this.observaciones != ''){
			  if(this.email != ""){
				if (!this.validEmail(this.email)) {
					this.correofallido();
				}else {
					this.enviar();
				}
			  }else{
				this.email = 'asistenciaunica@tc.gob.pe';
                this.enviar();
			  }
           }else{
              this.camposVacios();
           }
	    }else{
           if(this.numero != '' && this.nombres != '' && this.pais != '' && this.avenida != '' && this.interior != '' && this.urbanizacion != '' && this.pedido != '' && this.observaciones != ''){
			  if(this.email != ""){
				if (!this.validEmail(this.email)) {
					this.correofallido();
				}else {
					this.enviar();
				}
			  }else{
				this.email = 'asistenciaunica@tc.gob.pe';
                this.enviar();
			  }
           }else{
              this.camposVacios();
           }
	  	}
	  },
	  enviar(){
		let checked = 0
		if(this.dependencia == ""){
          this.dependencia = "--";
		}
	    if(this.tema == "-- SELECCIONE --"){
          this.tema = "--";
		}
		if(this.entrega == "-- SELECCIONE --"){
          this.entrega = "--";
		}
		if(this.checkedNames == true){
			checked = 1;
		}
	    this.pedido = this.pedido.split("'").join(" ");
		this.observaciones = this.observaciones.split("'").join(" ");
	  	this.isLoading = true;
        let fromData = new FormData();
        fromData.append('documento', this.documento);
        fromData.append('numero', this.numero);
        fromData.append('nombres', this.nombres);
        fromData.append('apoderado', this.apoderado);
        fromData.append('pais', this.pais);
        fromData.append('departamento', this.departamento.text);
        fromData.append('distrito', this.distrito.text);
        fromData.append('avenida', this.avenida);
        fromData.append('interior', this.interior);
        fromData.append('urbanizacion', this.urbanizacion);
        fromData.append('correo', this.email);
        fromData.append('celular', this.celular);
        fromData.append('tema', this.tema);
        fromData.append('dependencia', this.dependencia);
        fromData.append('formaentrega', this.entrega);
        fromData.append('especificacion', this.formaentrega);
        fromData.append('solicitud', this.pedido);
        fromData.append('observaciones', this.observaciones);
	    fromData.append('permiso', checked);
        fromData.append('idtipoasistencia', 2);
        axios.post(this.$store.state.serverAsistenciaPublic + '/insertarSolicitud', fromData, {crossDomain: true
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
	      this.entrega = '-- SELECCIONE --'
	      this.tema = '-- SELECCIONE --'
	      this.documento = 'DNI'
	      this.numero = ''
	      this.nombres = ''
	      this.apoderado = ''
	      this.pais = 'PERÚ',
	      this.avenida = ''
	      this.interior = ''
	      this.urbanizacion = ''
	      this.email = ''
	      this.celular = ''
	      this.tema = ''
	      this.pedido = ''
	      this.observaciones = ''
	      this.dependencia = ''
	      this.formaentrega = '--'
      }
  },
  components: {
  	Loading,
	ModelSelect
  }
}
</script>
