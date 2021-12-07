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
            <div class="col-md-12">
            <div class="news_post_top d-flex flex-column flex-sm-row">
              <div class="news_post_title_container">
                <div class="news_post_title">
                  <i v-on:click="atras" style="color: #AF52BF; cursor: pointer" class="fa fa-reply fa-2x p-r-20"></i>
                  <a style="color: #AF52BF">Visualiza el Detalle de la Solicitud</a>
                </div>
                <div class="news_post_meta">
                  <span class="news_post_author"><a style="color: #AF52BF">Deriva y/o atiende la solicitud ingresada</a></span>
                </div>
              </div>
            </div>
            </div>
            </div>
            <div class="news_post_text m-l-32 m-r-32">
              <p>En el siguiente formulario verificarás el detalle de la solicitud, como tambien podrás derivarlo y/o atenderlo.</p>
            </div>
            <div class="pbar_container m-t-20 m-b-40 m-l-32 m-r-32">
                <label class="labelInput">NOMBRES Y APELLIDOS / RAZÓN SOCIAL</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="nombres" disabled/>
                <label class="labelInput">CORREO ELECTRÓNICO</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="correo" disabled/>
                <label class="labelInput">DOMICILIO</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="domicilio" disabled/>
                <label class="labelInput">AUDIO EN QUECHUA</label>
                <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="audio" disabled/>
                <div class="container-form-btn fonTap m-t-40">
                    <iframe style="height: 200px; width: 100%" class="embed-responsive-item" :src="ruta" allowfullscreen></iframe>
                </div>
                <div class="container-form-btn fonTap m-t-40">
                  <button v-if="traducirx" v-on:click="traducir" class="routing2-form-btn m-r-10 m-l-10 mb-3 fuente"> GESTIONAR TRADUCCIÓN</button>
                  <button v-if="derivarx" v-on:click="derivar" class="routing-form-btn m-r-10 m-l-10 mb-3 fuente"> GESTIONAR DERIVACIÓN</button>
                  <button v-if="atenderx" v-on:click="atender" class="routing2-form-btn m-r-10 m-l-10 mb-3 fuente"> GESTIONAR ATENCIÓN</button>
                </div>
                <div class="m-t-20" v-if="traducido">
                  <div class="news_post_text">
                    <p>1. Para cualquier información, la traducción esta encargada por parte de nuestro personal: <a style="text-decoration: none; color: red">IRIS SINDY CÁRDENAS CARRASCO</a>, cuyo correo es: <a :href="'mailto:yrisindy@gmail.com'" target="_blank" style="text-decoration: none; color: red">yrisindy@gmail.com</a>.</p>
                  </div>
                  <div v-if="portraducir">
                    <label class="labelInput">DETALLE DEL ENVÍO</label>
                    <textarea id="text" class="form-control imp-fue mb-3"
                        style="border-radius: 0px; height:200px; max-height:200px; min-height:200px"
                        v-model="traduccion2"
                        no-resize
                        :rows="50"
                        :max-rows="100"
                        maxlength="10000">
                    </textarea>
                    <div class="container-form-btn fonTap m-t-40">
                      <button v-on:click="traduciendo" class="routing2-form-btn m-r-10 m-l-10 fuente"> ENVIAR A TRADUCIR</button>
                    </div>
                  </div>
                  <div v-if="yatraducido">
                    <label class="labelInput">DETALLE DEL ENVÍO</label>
                    <textarea id="text" class="form-control imp-fue mb-3"
                        style="border-radius: 0px; height:200px; max-height:200px; min-height:200px"
                        v-model="traduccion"
                        no-resize
                        :rows="50"
                        :max-rows="100"
                        maxlength="10000"
                        disabled>
                    </textarea>
                    <label class="labelInput">RESPUESTA DEL TRADUCTOR</label>
                    <textarea id="text" class="form-control imp-fue mb-3"
                        style="border-radius: 0px; height:200px; max-height:200px; min-height:200px"
                        v-model="respuestatrad"
                        no-resize
                        :rows="50"
                        :max-rows="100"
                        maxlength="10000"
                        disabled>
                    </textarea>
                    <div class="container-form-btn fonTap m-t-40">
                      <button v-if="corrijo2" v-on:click="corregir2" class="routing3-form-btn m-r-10 m-l-10 mb-3 fuente"> ELIMINAR TRADUCCIÓN</button>
                      <button v-if="envio2" v-on:click="traduciendo" class="routing-form-btn m-r-10 m-l-10 mb-3 fuente"> ENVIAR A TRADUCIR</button>
                    </div>
                  </div>
                </div>
                <div class="m-t-20" v-if="derivado">
                  <div v-if="porderivar">
                    <label class="labelInput">FUNCIONARIO A DERIVAR</label>
                    <model-select :options="options" v-model="item" placeholder="Buscar correo" style="border: 1px solid #D5D8DC; border-radius: 0" class="form-control imp-fue mb-3"></model-select>
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
                    <p>1. El boton <a style="text-decoration: none; color: red">Enviar Atención</a> se usa para dar una respuesta final sobre la solicitud registrada. Se enviará un correo electrónico al destinatario con el contenido que complete abajo.</p>
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
      traducirx: false,
      derivarx: false,
      atenderx: false,
      portraducir: false,
      porderivar: false,
      yatraducido: false,
      yaderivado: false,
      traducido: false,
      derivado: false,
      atendido: false,
      corrijo: true,
      envio: false,
      corrijo2: true,
      envio2: false,
      idregistro: '',
      codreclamo:'',
      fecreclamo: '',
      nombres: '',
      correo: '',
      domicilio: '',
      audio: '',
      ruta: '',
      traduccion: '',
      traduccion2: '',
      derivacion: '',
      derivacion2: '',
      respuestatrad: '',
      respuesta: '',
      nomusuarioderivado: '',
      atencion: '',
      estado: '',
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
      if(this.$store.state.solicitudQue == ''){
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
     enviarArchivo(){
        window.open("https://sharing.oodrive.com/auth/ws/tcperu/?service=share","_blank") 
     },
     verPdf(){
        this.$router.push('/detalleSolicitud/visorSolicitud');
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
          this.traducirx = true;
          this.portraducir = true;
        }else if(this.estado == 1){
          this.traducirx = true;
          this.yatraducido = true;
        }else if(this.estado == 2){
          this.traducirx = true;
          this.yatraducido = true;
          this.derivarx = true;
          this.porderivar = true;
          this.atenderx = true;
        }else if(this.estado == 3){
          this.traducirx = true;
          this.yatraducido = true;
          this.derivarx = true;
          this.yaderivado = true;
          this.atenderx = true;
        }else if(this.estado == 4 || this.estado == 5){
          this.traducirx = true;
          this.yatraducido = true;
          this.derivarx = true;
          this.yaderivado = true;
          this.atenderx = true;
        }else{}
     },
     derivar (){
       this.traducido = false;
       this.atendido = false;
       this.derivado = true;
     },
     atender (){
       this.traducido = false;
       this.derivado = false;
       this.atendido = true;
     },
     traducir (){
       this.derivado = false;
       this.atendido = false;
       this.traducido = true;
     },
     enviar (){
        this.isLoading = true; 
        if(this.atencion != ''){
          let fromData = new FormData();
          fromData.append('codreclamo', this.codreclamo);
          fromData.append('fecreclamo', this.fecreclamo);
          fromData.append('nombres', this.nombres);
          fromData.append('correo', this.correo);
          fromData.append('domicilio', this.domicilio);
          fromData.append('atencion', this.atencion);
          fromData.append('estado', 5);
          fromData.append('usuario', this.usuario);
          fromData.append('iddetalletipoasistencia', this.idregistro);
          axios.post(this.$store.state.serverAsistenciaAdmin + '/updateSolicitudQue2', fromData, {crossDomain: true, headers: {"Authorization": this.authorization}
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
     derivando (){
        if(this.item.value != '' != '' && this.derivacion2 != ''){
          this.isLoading = true; 
          let fromData = new FormData();
          fromData.append('codreclamo', this.codreclamo);
          fromData.append('fecreclamo', this.fecreclamo);
          fromData.append('nombres', this.nombres);
          fromData.append('correo', this.correo);
          fromData.append('domicilio', this.domicilio);
          fromData.append('audio', this.audio);
          fromData.append('ruta', this.ruta);
          fromData.append('usuarioderivado', this.usuarios[this.item.value - 1].usuario);
          fromData.append('nomusuarioderivado', this.usuarios[this.item.value - 1].nombre);
          fromData.append('correoderivado', this.usuarios[this.item.value - 1].correo);
          fromData.append('detalleresponsable', this.derivacion2);
          fromData.append('detallederivado', '');
          fromData.append('estado', 3);
          fromData.append('usuario', this.usuario);
          fromData.append('persona', this.usuario.toUpperCase());
          fromData.append('cuenta', this.cuenta);
          fromData.append('iddetalletipoasistencia', this.idregistro);
          axios.post(this.$store.state.serverAsistenciaAdmin + '/updateSolicitudQue', fromData, {crossDomain: true, headers: {"Authorization": this.authorization}
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
     traduciendo(){
        if(this.traduccion2 != ''){
          this.isLoading = true; 
          let fromData = new FormData();
          fromData.append('codreclamo', this.codreclamo);
          fromData.append('fecreclamo', this.fecreclamo);
          fromData.append('nombres', this.nombres);
          fromData.append('correo', this.correo);
          fromData.append('domicilio', this.domicilio);
          fromData.append('audio', this.audio);
          fromData.append('ruta', this.ruta);
          fromData.append('usuariotraductor', 'icardenas');
          fromData.append('nomusuariotraductor', 'IRIS SINDY CÁRDENAS CARRASCO');
          fromData.append('correotraductor', 'yrisindy@gmail.com');
          // fromData.append('correotraductor', 'cgarcia@tc.gob.pe');
          fromData.append('detalleresponsable2', this.traduccion2);
          fromData.append('detalletraductor', '');
          fromData.append('estado', 1);
          fromData.append('usuario', this.usuario);
          fromData.append('persona', this.usuario.toUpperCase());
          fromData.append('cuenta', this.cuenta);
          fromData.append('iddetalletipoasistencia', this.idregistro);
          axios.post(this.$store.state.serverAsistenciaAdmin + '/traducirSolicitudQue', fromData, {crossDomain: true, headers: {"Authorization": this.authorization}
          }).then((response) => {
            this.isLoading = false; 
            this.atras();
            this.notifyVue5();          
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
        fromData.append('nombres', this.nombres);
        fromData.append('correo', this.correo);
        fromData.append('domicilio', this.domicilio);
        fromData.append('audio', this.audio);
        fromData.append('ruta', this.ruta);
        fromData.append('usuarioderivado', '');
        fromData.append('nomusuarioderivado', '');
        fromData.append('correoderivado', '');
        fromData.append('detalleresponsable', '');
        fromData.append('detallederivado', '');
        fromData.append('estado', 2);
        fromData.append('usuario', this.usuario);
        fromData.append('persona', this.usuario.toUpperCase());
        fromData.append('cuenta', this.cuenta);
        fromData.append('iddetalletipoasistencia', this.idregistro);
        axios.post(this.$store.state.serverAsistenciaAdmin + '/updateSolicitudQue', fromData, {crossDomain: true, headers: {"Authorization": this.authorization}
        }).then((response) => {
          this.estado = 2;
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
     corregir2(){
      if(this.estado == 0 || this.estado == 1 || this.estado == 2){
        this.isLoading = true; 
        let fromData = new FormData();
        fromData.append('codreclamo', this.codreclamo);
        fromData.append('fecreclamo', this.fecreclamo);
        fromData.append('nombres', this.nombres);
        fromData.append('correo', this.correo);
        fromData.append('domicilio', this.domicilio);
        fromData.append('audio', this.audio);
        fromData.append('ruta', this.ruta);
        fromData.append('usuariotraductor', '');
        fromData.append('nomusuariotraductor', '');
        fromData.append('correotraductor', '');
        fromData.append('detalleresponsable2', '');
        fromData.append('detalletraductor', '');
        fromData.append('estado', 0);
        fromData.append('usuario', this.usuario);
        fromData.append('persona', this.usuario.toUpperCase());
        fromData.append('cuenta', this.cuenta);
        fromData.append('iddetalletipoasistencia', this.idregistro);
        axios.post(this.$store.state.serverAsistenciaAdmin + '/traducirSolicitudQue', fromData, {crossDomain: true, headers: {"Authorization": this.authorization}
        }).then((response) => {
          this.estado = 0;
          this.yatraducido = false;
          this.corrijo = false;
          this.portraducir = true;
          this.envio = true;
          this.isLoading = false;
          this.notifyVue3();          
         },(error) => {
            this.isLoading = false;
        });
      }else{
          this.notifyVue6();   
      }
     },
     atras (){
        this.$router.push('/solicitudes');
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
          message: 'Solicitud derivada correctamente!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'success'
        })
     },
     notifyVue3() {
       this.$notify(
        {
          message: 'Solicitud actualizada correctamente!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'success'
        })
     },
     notifyVue4() {
       this.$notify(
        {
          message: 'Solicitud atendida correctamente!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'success'
        })
     },
     notifyVue5() {
       this.$notify(
        {
          message: 'Solicitud enviada a traducir correctamente!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'success'
        })
     },
     notifyVue6() {
       this.$notify(
        {
          message: 'No se puede eliminar la traducción de la solicitud!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'warning'
        })
     },
     llenado(){
      this.idregistro = this.$store.state.solicitudQue.nid_detalletipoasistencia
      this.codreclamo = this.$store.state.solicitudQue.cnum_numperio
      this.fecreclamo = this.$store.state.solicitudQue.dfec_registro
      this.nombres = this.$store.state.solicitudQue.ctxt_nombres
      this.correo = this.$store.state.solicitudQue.ctxt_correo
      this.domicilio = this.$store.state.solicitudQue.ctxt_direccion
      this.audio = this.$store.state.solicitudQue.ctxt_audio
      this.ruta = this.$store.state.solicitudQue.ctxt_ruta
      this.traduccion = this.$store.state.solicitudQue.ctxt_detalleresponsable2
      this.respuestatrad = this.$store.state.solicitudQue.ctxt_detalletraductor
      this.nomusuarioderivado = this.$store.state.solicitudQue.ctxt_nomusuarioderivado
      this.derivacion = this.$store.state.solicitudQue.ctxt_detalleresponsable
      this.respuesta = this.$store.state.solicitudQue.ctxt_detallederivado
      this.estado = this.$store.state.solicitudQue.nflg_estado
      console.log(this.ruta)
     }
  },
  components: {
    Loading,
    ModelSelect
  }
}
</script>
