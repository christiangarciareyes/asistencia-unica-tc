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
										<a style="color: #AF52BF">Reclamo maytupi qillqaykatamuy</a>
									</div>
									<div class="news_post_meta">
										<span class="news_post_author"><a style="color: #AF52BF">Sutiykikunata churapaykuy</a></span>
									</div>
								</div>
								<button v-if="moneySendR08" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR08(2)">
									<span class="fa fa-stop fa-1x"></span>
								</button>
								<button v-if="!moneySendR08" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR08(1)">
									<span class="fa fa-play fa-1x"></span>
								</button>
								<button v-if="moneySendR08" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR08(3)">
									<span class="fa fa-pause fa-1x"></span>
								</button>
							</div>
							<div class="news_post_text">
								<p>Kaypim rimayniykita allinta grabaykunayki, chaytam Tribunal Constitucional wasipi llamkapakuqkuna uyariykunqaku hinaspa utqayllaman kutichimusunki. Kay grabacionpim sutiykita, correo electrónico nisqata, celularpa yupayninta, maypi tiyasqaykita hinallataq ima mañakusqaykitapas churaykunayki.</p>
							</div>
							<div class="pbar_container m-t-20">
					          <label class="labelInput">SUBIR AUDIO EN QUECHUA DE SU RECLAMO (Solo Formato MP3 o MP4 Audio y Máximo 20 MB)</label>
							  <input class="btn btn-success mb-3" style="width: 100%; cursor: pointer" type="file" id="file" ref="file" v-on:change="handleFileUpload()"/><br>
	                          <button v-if="quitado" v-on:click="quitar" class="routing3-form-btn mb-3 fuente"> QUITAR AUDIO</button>
                              <label class="labelInput">NOMBRES Y APELLIDOS (Opcional)</label>
					          <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="nombres"/>
                              <label class="labelInput">DIRECCIÓN (Opcional)</label>
					          <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="direccion"/>
                              <label class="labelInput">CORREO ELECTRÓNICO (Opcional)</label>
					          <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="correo"/>
							</div>
						</div>
					  </transition>
					  <transition name="fade" mode="out-in">
						<div class="news_post p-b-10" v-if="micro">
							<div class="news_post_top d-flex flex-column flex-sm-row">
								<div class="news_post_title_container3">
									<div class="news_post_title">
										<a style="color: #AF52BF">Reclamo Y° {{codigo}} Allin Apachisqa</a>
									</div>
									<div class="news_post_meta">
										<span class="news_post_author"><a style="color: #AF52BF">Añaychaykuyki qillqaykusqaykimanta</a></span>
									</div>
								</div>
							</div>
							<div class="news_post_text">
								<p>Reclamo churasqaykim allin apachisqa karun. Reclamo mañakusqaykipa yupayninta waqaychaykuy hinaspa correo electrónico nisqata qawaykuy kutichimususqaykikunata qatipaykunaykipaq.</p>
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
		<b-modal id="modal-center" centered size="lg" ref="my-modal" hide-footer title="Kutipakunapaq Maytu">
			<div class="d-block text-center">
				<h3 style="margin-bottom: 30px; font-size: 25px">Llaqtayuq yaykuykakamuy!</h3>
			</div>
				<ul>
					<li style="margin-bottom: 20px; color: #333; font-size: 20px">Kayta yachaykuy: internetninta reclamo churanapaqmi kaykunata arí ninayki:</li>
					<li style="margin-bottom: 10px; color: #333"><i style="font-size: 10px; margin-right: 10px" class="fa fa-circle" aria-hidden="true"></i>Churasqayki willakuynikunam chiqaqlla kanan.</li>
					<li style="margin-bottom: 10px; color: #333"><i style="font-size: 10px; margin-right: 10px" class="fa fa-circle" aria-hidden="true"></i>Churasqayki DNI qatipasqa kanqa Reniec wasipa yanapakuyninwan chiqaqlla kasqanta qawanapaq.</li>
					<li style="margin-bottom: 10px; color: #333"><i style="font-size: 10px; margin-right: 10px" class="fa fa-circle" aria-hidden="true"></i>Kutichimunapaq correo electrónico nisqata qillqanayki (Buzón nisqa ama huntapasqachu kanan, huk wasikunamantapas correo nisqakunata chaskiyta atinan, huk mañakuykunapas).</li>
					<li style="margin-bottom: 30px; color: #333"><i style="font-size: 10px; margin-right: 10px" class="fa fa-circle" aria-hidden="true"></i>Reclamo nisqakunatam chaskiyku killachawmanta chaskachaw punchawkama; kuychichaw, intichaw utaq huk samana punchawpi raclamota churaruptikiqa, llamkana punchawpim kutichimusqaykiku.</li>
				</ul>
			<b-button v-if="moneySendR07" @click="sendMoneyR07(2)" class="mt-3" variant="outline-success" block>DETENER AUDIO</b-button>
			<b-button v-if="!moneySendR07" @click="sendMoneyR07(1)" class="mt-3" variant="outline-success" block>ESCUCHAR AUDIO</b-button>
			<b-button v-if="moneySendR07" @click="sendMoneyR07(3)" class="mt-3" variant="outline-success" block>PAUSAR AUDIO</b-button>
			<b-button class="mt-3" variant="outline-primary" block @click="hideModal">MAÑAKUYKUNATAM ARÍ NINI</b-button>
		</b-modal>
	  </div>
	</div>

</template>

<script>

import FileUpload from 'vue-upload-component'


import axios from 'axios'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  data () {
    return {
      files: '',
      audio: '',
      nombres: '',
      direccion: '',
      correo: '',
      alert: true,
      macro: true,
      micro: false,
      isLoading: false,
	  fullPage: true,
	  quitado: false,
	  moneySendR07: false,
	  audioR07: new Audio('https://ventanillaadministrativa.sedetc.gob.pe/TRADUCCIONES/audioR07.mp4'),
	  moneySendR08: false,
	  audioR08: new Audio('https://ventanillaadministrativa.sedetc.gob.pe/TRADUCCIONES/audioR08.mp4')
    }
  },
  mounted(){
      this.$refs['my-modal'].show()
  },
  methods:{
	  sendMoneyR07(param){
		if(param == 1){
			this.audioR07.play();
			this.moneySendR07 = true;
		}else if(param == 2){
			this.audioR07.pause();
			this.audioR07.currentTime = 0;
			this.moneySendR07 = false;
		}else{
			this.audioR07.pause();
			this.moneySendR07 = false;
		}
	  },
	  sendMoneyR08(param){
		if(param == 1){
			this.audioR08.play();
			this.moneySendR08 = true;
		}else if(param == 2){
			this.audioR08.pause();
			this.audioR08.currentTime = 0;
			this.moneySendR08 = false;
		}else{
			this.audioR08.pause();
			this.moneySendR08 = false;
		}
	  },
	  handleFileUpload(){
		this.files = this.$refs.file.files[0];
		let name = this.files.name;
		let size = this.files.size;
		let type = this.files.type;
		if(size <= 20485760){
			if(type == 'audio/mpeg' || type == 'video/mp4'){
				this.audio = name;
				this.quitado = true;
			}else{
				this.quitar();
				this.alertaArchivo('El archivo no cumple con el formato establecido.');
			}
		}else{
			this.quitar();
			this.alertaArchivo('El archivo excede el tamaño permitido.');
		}
	  },
	  inputFilter(newFile, oldFile, prevent) {
		if (newFile && !oldFile) {
			if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
			return prevent()
			}
			if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
			return prevent()
			}
		}
      },
      playSound (sound) {
        if(sound) {
            var audio = new Audio(sound);
            audio.play();
        }
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        this.$refs['my-modal'].toggle('#toggle-btn')
      },
	  validar(){
	    if(this.audio == ''){
            this.camposVacios();
	  	}else{
            this.enviar();
        }
	  },
	  enviar(){
        if(this.nombres == ''){this.nombres = '--'}
        if(this.direccion == ''){this.direccion = '--'}
        if(this.correo == ''){this.correo = '--'}
	  	this.isLoading = true;
        let fromData = new FormData();
        fromData.append('file', this.files);
        fromData.append('audio', this.audio);
        fromData.append('nombres', this.nombres);
        fromData.append('direccion', this.direccion);
        fromData.append('correo', this.correo);
        fromData.append('idtipoasistencia', 1);
        axios.post(this.$store.state.serverAsistenciaPublic + '/insertarQuechuaReclamo', fromData, {crossDomain: true
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
          message: 'Debe adjuntar el audio del reclamo!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'danger'
        })
	  },
	  alertaArchivo(param) {
       this.$notify(
        {
          message: param,
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'danger'
        })
	  },
	  quitar(){
		  this.files = '';
          const input = this.$refs.file;
          input.type = 'text';
		  input.type = 'file';
		  this.quitado = false;
	  },
      limpiar(){
          this.audio = '';
          this.nombres = '';
          this.direccion = '';
		  this.correo = '';
		  this.quitado = false;
      }
  },
  components: {
    FileUpload,
  	Loading
  }
}
</script>
