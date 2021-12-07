<template>
<div class="content">
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
                  <a style="color: #AF52BF">Visualiza el Documento del Reclamo</a>
                </div>
                <div class="news_post_meta">
                  <span class="news_post_author"><a style="color: #AF52BF">Descarga e imprime el reclamo ingresado</a></span>
                </div>
              </div>
            </div>
            <div class="news_post_text m-l-32 m-r-32">
              <p>En el siguiente visor visualizarás el documento del reclamo, como tambien podrás descargarlo e imprimirlo.</p>
            </div>
            <div class="pbar_container m-t-20 m-b-40 m-l-32 m-r-32">
            <div class="content">
               <template>
                  <div class="row p-b-20">
                  <div class="col-md-5 col-md-3">
                   <span class="news_post_author"><a style="color: #AF52BF">Páginas</a></span>
                    <div class="input-group m-t-5">
                      <input class="form-control" :max="numPages" min="1" v-model.number="page" type="text" style="height:35px">
                      <input class="form-control" v-model="numPages" type="text" style="height:35px; background-color:#EAEDED" disabled>
                      <button v-b-tooltip.hover title="Anterior" style="margin-left:10px; margin-right:8px;" @click="anterior" type="button" class="opciones-form-btn fuente margin"><i class="fa fa-chevron-left"></i></button>
                      <button  v-b-tooltip.hover title="Siguiente" @click="siguiente" type="button" class="opciones-form-btn fuente margin"><i class="fa fa-chevron-right m-l-5"></i></button> 
                    </div>
                  </div>
                  <div class="col-md-2"></div>
                  <div class="col-md-5">
                      <span class="news_post_author"><a style="color: #AF52BF">Herramientas</a></span><br>
                      <div class="m-t-5">
                        <button v-b-tooltip.hover title="Derecha" @click="rotate += 90" type="button" class="opciones-form-btn m-r-8 fuente"><i class="fa fa-repeat"></i></button>
                        <button v-b-tooltip.hover title="Izquierda" @click="rotate -= 90" type="button" class="opciones-form-btn m-r-8 fuente"><i class="fa fa-undo"></i></button>
                        <button v-b-tooltip.hover title="Abrir" @click="abrirPdf()" type="button" class="opciones-form-btn m-r-8 fuente"><i class="fa fa-external-link"></i></button>
                        <button v-b-tooltip.hover title="Descargar" @click="descargarPdf()" type="button" class="opciones-form-btn m-r-8 fuente"><i class="fa fa-download m-l-1"></i></button>
                        <button v-b-tooltip.hover title="Imprimir" @click="imprimirPdf()" type="button" class="opciones-form-btn m-r-8 fuente"><i class="fa fa-print m-l-2"></i></button>
                      </div>
                  </div>
                 </div>
                  <div v-if="loadedRatio > 0 && loadedRatio < 1" style="background-color: green; color: white; text-align: center" :style="{ width: loadedRatio * 100 + '%' }">{{ Math.floor(loadedRatio * 100) }}%
                  </div>
                  <pdf v-if="show" ref="pdf" style="border: 2px solid black" :src="pdfSrc" :page="page" :rotate="rotate"  @progress="loadedRatio = $event" @error="error" @num-pages="numPages = $event" @link-clicked="page = $event" loaded>
                  </pdf>
            </template> 
        </div>
        <div class="footer m-b-10" v-if="show">
          <hr>
          <div class="row">
          <div class="col-md-10">
          <div class="stats">
            <span class="news_post_author"><i class="fa fa-key m-r-5"></i><a style="color: #AF52BF">Usted esta visualizando este documento bajo los estándares de seguridad establecidos.</a></span><br><br>
          </div>
          </div>
          <div class="col-md-2">
          <button v-b-tooltip.hover title="Anterior" style="margin-left:10px; margin-right:8px" @click="siguiente" type="button" class="opciones-form-btn fuente margin pull-right"><i class="fa fa-chevron-right m-l-5"></i></button> 
          <button v-b-tooltip.hover title="Siguiente" @click="anterior" type="button" class="opciones-form-btn fuente margin pull-right"><i class="fa fa-chevron-left"></i></button>
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

import { ModelSelect } from 'vue-search-select'

import pdf from 'vue-pdf'
import { Base64 } from 'js-base64'

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

var base64ToString = process.env.VUE_ENV === 'server' ? function(base64) { return Buffer.from(base64, 'base64').toString() } : window.atob;

export default{
  data () {
    return {
      usuario: localStorage.getItem('nickname'),
      loadedRatio: 0,
      error: '',
      page: 0,
      pages: 1,
      numPages: '',
      rotate: 0,
      show: false,
      pdfSrc: '',
      idregistro: '',
      codreclamo:'',
      fecreclamo: '',
      detalle: '',
      pedido: '',
      tipodoc: '',
      numdoc: '',
      nombres: '',
      apoderado: '',
      correo: '',
      celular: '',
      domicilio: '',
      tramite: '',
      tiporeclamo: '',
      funcionario: '',
      cargo: '',
      derivacion: '',
      derivacion2: '',
      respuesta: '',
      nomusuarioderivado: '',
      atencion: '',
    }
  },
  created() {
    if(localStorage.getItem('AccessToken') != null && localStorage.getItem('expires_at') != null && localStorage.getItem('profile') != null && localStorage.getItem('operaciones') != null && localStorage.getItem('nickname') != null){
      if(this.$store.state.reclamo == ''){
        this.$router.go(-1);
      }else{
        this.llenado();
      }   
    }else{
      this.$router.app.$auth.logout();
      this.$router.push({name: 'Portada'});
    }
  },
  methods: {
     siguiente(){
          if(this.page < this.numPages){
          this.page = this.page + this.pages;
          } else {
          this.page= numPages;
          }
     },
     anterior(){
          if(this.page > 1){
          this.page = this.page - this.pages;
          } else {
          this.page= 1;
          }
     },
     atras (){
        this.$router.go(-1);
     },
     abrirPdf(){
        pdfMake.createPdf(this.documento).open();
     },
     descargarPdf(){
        var fileName = this.codreclamo;
        pdfMake.createPdf(this.documento).download(fileName);
     },
     imprimirPdf(){
        pdfMake.createPdf(this.documento).print();
     },
     notifyVue() {
       this.$notify(
        {
          message: 'Reclamo descargado correctamente!',
          icon: 'add_alert',
          horizontalAlign: 'left',
          verticalAlign: 'top',
          type: 'success'
        })
     },
     llenado(){
        this.idregistro = this.$store.state.reclamo.nid_detalletipoasistencia
        this.codreclamo = this.$store.state.reclamo.cnum_numperio
        this.fecreclamo = this.$store.state.reclamo.dfec_registro
        this.tipodoc = this.$store.state.reclamo.ctxt_tipodoc
        this.numdoc = this.$store.state.reclamo.cnum_doc
        this.nombres = this.$store.state.reclamo.ctxt_nomape
        this.apoderado = this.$store.state.reclamo.ctxt_datospadre
        this.correo = this.$store.state.reclamo.ctxt_correo
        this.celular = this.$store.state.reclamo.cnum_celular
        this.domicilio = this.$store.state.reclamo.ctxt_domicilio
        this.tramite = this.$store.state.reclamo.cnum_tramite
        this.tiporeclamo = this.$store.state.reclamo.ctxt_tiporeclamo
        this.funcionario = this.$store.state.reclamo.ctxt_nomfuncionario
        this.cargo = this.$store.state.reclamo.ctxt_cargofuncionario
        this.detalle = this.$store.state.reclamo.ctxt_reclamo
        this.pedido = this.$store.state.reclamo.ctxt_pedido
        this.nomusuarioderivado = this.$store.state.reclamo.ctxt_nomusuarioderivado
        this.derivacion = this.$store.state.reclamo.ctxt_detalleresponsable
        this.respuesta = this.$store.state.reclamo.ctxt_detallederivado
        this.atencion = this.$store.state.reclamo.ctxt_respuestaresponsable
        this.estado = this.$store.state.reclamo.nflg_estado
        this.createPdf()
     },
     verifyPdf(){
        if(this.pdfSrc.data == ''){
          this.page= '';
          this.show= false;   
        }else{
          this.page= 1;
          this.show= true; 
          this.notifyVue()
        }
     },
     createPdf(){
        if(this.nomusuarioderivado == null){
         this.nomusuarioderivado = ''
        }
        if(this.derivacion == null){
         this.derivacion = ''
        }
        if(this.respuesta == null){
         this.respuesta = ''
        }
        if(this.atencion == null){
         this.atencion = ''
        }
        var userWater = this.numdoc;
        var entidad = 'TRIBUNAL CONSTITUCIONAL DEL PERÚ';
        var usuario = this.numdoc;
        var reclamo = this.codreclamo;
        var greeting = entidad + '\n' + usuario + '\n' + 'RECLAMO N° ' + reclamo;
        var docDefinition = {
        watermark: {text: userWater, color: 'blue', opacity: 0.3, bold: true, italics: true },
            footer: function(currentPage, pageCount) {
                return {
                text: currentPage.toString() + ' de ' + pageCount,
                alignment: 'center',
                fontSize: 8,
                margin: [250, 20]
                }
            },
            header: {
                columns: [
                {
                    width: 1200,
                    height: 50,
                    fontSize: 8,
                    margin: [500, 10],
                    text: [
                    "Fecha  : " + " " + this.fecreclamo
                    // "Hora    : " + " " + "this.hora"
                ]
                },
                ]
            },
            content: [
                {
                    columns: [
                    {   
                    width: 200,
                    stack: [
                    {
                        text: 'TRIBUNAL CONSTITUCIONAL DEL PERÚ', style: 'subheader'
                    },
                    {
                        text: 'VENTANILLA ADMINISTRATIVA', style: 'subheader', color: 'gray' 
                    },
                    ]
                    },
                    {
                    width: 270,
                    text: ''
                    },
                    {
                    width: 50,
                    qr: greeting, fit: 60, alignment: 'right'
                    },
                    ]
                },
                {
                    stack: [
                    'DOCUMENTO DEL RECLAMO ' + this.codreclamo,
                ],
                    style: 'header'
                },
                {
                    columns: [
                    {
                    width: 500,
                    margin: [0, 10],
                    text: [
                    {
                        text: [
                        'DATOS DEL RECLAMANTE\n\n'
                        ],
                    },
                        'Tipo de Documento: ' + this.tipodoc + '\n',
                        'N° de Documento: ' + this.numdoc + '\n',
                        'Nombres y Apellidos / Razón Social: ' + this.nombres + '\n',
                        'Nombre del Apoderado: ' + this.apoderado + '\n',
                        'Correo Electrónico: ' + this.correo + '\n',
                        'Teléfono Fijo / Celular: ' + this.celular + '\n',
                        'Domicilio: ' + this.domicilio 
                        ]
                    },
                    ]
                },
                {
                    columns: [
                    {   
                        width: 500,
                        margin: [0, 10],
                        text: [
                    {
                        text: [
                        'DATOS DEL RECLAMO\n\n'
                        ],
                    },
                        'N° de Trámite: ' + this.tramite + '\n',
                        'Tipo de Reclamo: ' + this.tiporeclamo + '\n',
                        'Nombre del Funcionario: ' + this.funcionario + '\n',
                        'Cargo del Funcionario: ' + this.cargo + '\n',
                        'Detalle del Reclamo / Queja: ' + this.detalle + '\n',
                        'Pedido: ' + this.pedido
                        ]
                    },
                    ]
                },
                {
                    columns: [
                    {   
                        width: 500,
                        margin: [0, 10],
                        text: [
                    {
                        text: [
                        'DATOS DE LA RESPUESTA\n\n'
                        ],
                    },
                        'Funcionario a quíen se derivó: ' + this.nomusuarioderivado + '\n',
                        'Detalle de la Derivación: ' + this.derivacion + '\n',
                        'Respuesta de la Derivación: ' + this.respuesta + '\n',
                        'Atención: ' + this.atencion
                        ]
                    },
                    ]
                },                    
            ],
            styles: {
                header: {
                fontSize: 15,
                bold: true,
                alignment: 'center',
                margin: [0, 20, 0, 30]
                },
                linea: {
                fontSize: 18,
                bold: true,
                alignment: 'left',
                margin: [0, 0, 0, 5]
                },
                subheader: {
                fontSize: 10,
                bold: true
                },
                superMargin: {
                margin: [20, 0, 40, 0],
                fontSize: 15
                }
            }
            }
            this.documento = docDefinition;
            const pdfDocGenerator = pdfMake.createPdf(docDefinition);
            pdfDocGenerator.getBase64((bytes) => {
                var binaryVersionOfThePdf = base64ToString(bytes);
                this.pdfSrc = {data: binaryVersionOfThePdf}; 
                this.verifyPdf();
            });
     }
  },
  components: {
    Loading,
    ModelSelect,
    pdfMake,
    pdf
  }
}
</script>
