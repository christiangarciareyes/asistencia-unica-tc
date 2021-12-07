<template>
<div class="news_post">
	<div class="news_post_top d-flex flex-column flex-sm-row">
		<div class="news_post_title_container3">
			<div class="news_post_title">
				<a style="color: #AF52BF">Visualiza el Detalle de tu Solicitud</a>
			</div>
			<div class="news_post_meta">
				<span class="news_post_author"><a style="color: #AF52BF">Verifica si existe respuesta ante tu solicitud</a></span>
			</div>
		</div>
	</div>
	<div class="news_post_text">
		<p>En el siguiente formulario encontrarás los datos que enviaste en tu solicitud, como también la respuesta que se te haya brindado siempre y cuando tu solicitud haya sido atendida.</p>
	</div>
	<div class="pbar_container m-t-20">
	  <label class="labelInput">TIPO DE DOCUMENTO</label>
	  <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="tipodoc" disabled/>
	  <label class="labelInput">NÚMERO DE DOCUMENTO</label>
	  <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="numdoc" disabled/>
	  <label class="labelInput">NOMBRES Y APELLIDOS / RAZÓN SOCIAL</label>
	  <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="nombres" disabled/>
	  <label class="labelInput">NOMBRE DEL APODERADO (En caso de ser menor de edad)</label>
	  <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="apoderado" disabled/>
	  <div class="row">
		<div class="col-md-4">
		   <label class="labelInput">PAÍS</label>
	      <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="pais" disabled/>
		</div>
		<div class="col-md-4">
		   <label class="labelInput">DEPARTAMENTO</label>
	      <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="departamento" disabled/>
		</div>
	    <div class="col-md-4">
		   <label class="labelInput">DISTRITO</label>
	      <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="distrito" disabled/>
		</div>
	  </div>
	  <div class="row">
		<div class="col-md-4">
		   <label class="labelInput">AV. / CALLE / JR. / PSJ.</label>
	      <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="avenida" disabled/>
		</div>
		<div class="col-md-4">
		   <label class="labelInput">N° / DPTO ./ INT.</label>
	      <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="interior" disabled/>
		</div>
	    <div class="col-md-4">
		   <label class="labelInput">URBANIZACIÓN</label>
	      <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="urbanizacion" disabled/>
		</div>
	  </div>
	  <label class="labelInput">CORREO ELECTRÓNICO</label>
	  <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="correo" disabled/>
	  <label class="labelInput">TELÉFONO FIJO / CELULAR (Opcional)</label>
	  <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="celular" disabled/>
	  <label class="labelInput">TEMA DE INFORMACIÓN</label>
	  <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="tema" disabled/>
	  <label class="labelInput">DEPENDENCIA DE LA INFORMACIÓN</label>
	  <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="dependencia" disabled/>
	  <label class="labelInput">FORMA DE ENTREGA</label>
	  <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="forma" disabled/>
	  <label class="labelInput">ESPECIFIQUE FORMA DE ENTREGA</label>
	  <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="entrega" disabled/>
	  <label class="labelInput">EXPRESIÓN CONCRETA Y PRECISA DEL PEDIDO</label>
	  <textarea id="text" class="form-control imp-fue mb-3"
	       style="border-radius: 0px; height:300px; max-height:300px; min-height:300px"
	       v-model="pedido"
	       no-resize
	       :rows="50"
	       :max-rows="100"
	       maxlength="10000"
	       disabled>
	  </textarea>
	  <label class="labelInput">OBSERVACIONES</label>
	  <textarea id="text" class="form-control imp-fue mb-3"
	       style="border-radius: 0px; height:100px; max-height:100px; min-height:100px"
	       v-model="observaciones"
	       no-resize
	       :rows="50"
	       :max-rows="500"
	       maxlength="10000"
	       disabled>
	  </textarea>
	  <label class="labelInput">RESPUESTA</label>
	  <textarea id="text" class="form-control imp-fue mb-3"
	       style="border-radius: 0px; height:300px; max-height:300px; min-height:300px"
	       v-model="respuesta"
	       no-resize
	       :rows="50"
	       :max-rows="100"
	       maxlength="10000"
	       disabled>
	  </textarea>
	   <div class="container-form-btn m-t-30" style="background: #F8F4F4; margin-bottom: -10px">
          <button v-on:click="imprimir" class="routing2-form-btn fuente"> IMPRIMIR</button>
        </div>
	</div>
</div>
</template>

<script>

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
  
export default {
  data () {
    return {
      observaciones: '',
      pedido: '',
      respuesta: '',
      tipodoc: '',
      numdoc: '',
      nombres: '',
      apoderado: '',
      pais: '',
      departamento: '',
      distrito: '',
      avenida: '',
      interior: '',
      urbanizacion: '',
      correo: '',
      celular: '',
      tema: '',
      dependencia: '',
      forma: '',
	  entrega: '',
	  codreclamo: ''
    }
  },
  mounted(){
	this.codreclamo = this.$store.state.solicitud.cnum_numperio
    this.observaciones = this.$store.state.solicitud.ctxt_observaciones
    this.pedido = this.$store.state.solicitud.ctxt_solicitud
    this.respuesta = this.$store.state.solicitud.ctxt_respuestaresponsable
    this.tipodoc = this.$store.state.solicitud.ctxt_tipodoc
    this.numdoc = this.$store.state.solicitud.cnum_doc
    this.nombres = this.$store.state.solicitud.ctxt_nomape
    this.apoderado = this.$store.state.solicitud.ctxt_datospadre
    this.pais = this.$store.state.solicitud.ctxt_pais
    this.departamento = this.$store.state.solicitud.ctxt_departamento
    this.distrito = this.$store.state.solicitud.ctxt_distrito
    this.avenida = this.$store.state.solicitud.ctxt_avenida
    this.interior = this.$store.state.solicitud.ctxt_interior
    this.urbanizacion = this.$store.state.solicitud.ctxt_urbanizacion
    if(this.$store.state.solicitud.ctxt_correo == 'asistenciaunica@tc.gob.pe'){
        this.correo = '--'
    }else{
        this.correo = this.$store.state.solicitud.ctxt_correo
    }
    this.celular = this.$store.state.solicitud.cnum_celular
    this.tema = this.$store.state.solicitud.ctxt_tema
    this.dependencia = this.$store.state.solicitud.ctxt_dependencia
    this.forma = this.$store.state.solicitud.ctxt_formaentrega
    this.entrega = this.$store.state.solicitud.ctxt_especificacion
  },
  methods:{
	  imprimir(){
	    if(this.respuesta == null){
         this.respuesta = ''
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
                    'DOCUMENTO DE LA SOLICITUD ' + this.codreclamo,
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
                        'DATOS DEL SOLICITANTE\n\n'
                        ],
                    },
                        'Tipo de Documento: ' + this.tipodoc + '\n',
                        'N° de Documento: ' + this.numdoc + '\n',
                        'Nombres y Apellidos / Razón Social: ' + this.nombres + '\n',
                        'Nombre del Apoderado (En caso de ser menor de edad): ' + this.apoderado + '\n',
                        'Correo Electrónico: ' + this.correo + '\n',
                        'Teléfono Fijo / Celular(Opcional): ' + this.celular
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
                        'DIRECCIÓN DEL SOLICITANTE\n\n'
                        ],
                    },
                        'País: ' + this.pais + '\n',
                        'Departamento: ' + this.departamento + '\n',
                        'Distrito: ' + this.distrito + '\n',
                        'Av / Calle / Jr. / Psj. : ' + this.avenida + '\n',
                        'N° / Dpto. / Int. : ' + this.interior + '\n',
                        'Urbanización: ' + this.urbanizacion
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
                        'DATOS DE LA SOLICITUD\n\n'
                        ],
                    },
                        'Tema de Información: ' + this.tema + '\n',
                        'Dependencia de la Información: ' + this.dependencia + '\n',
                        'Forma de Entrega: ' + this.forma + '\n',
                        'Especifique Forma de Entrega: ' + this.entrega + '\n',
                        'Expresión Concreta y Precisa del Pedido: ' + this.pedido + '\n',
                        'Observaciones: ' + this.observaciones
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
                        'Atención: ' + this.respuesta
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
            pdfMake.createPdf(this.documento).print();
	  }
  }
}
</script>