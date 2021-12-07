<template>
<div class="news_post">
	<div class="news_post_top d-flex flex-column flex-sm-row">
		<div class="news_post_title_container3">
			<div class="news_post_title">
				<a style="color: #AF52BF">Visualiza el Detalle de tu Reclamo</a>
			</div>
			<div class="news_post_meta">
				<span class="news_post_author"><a style="color: #AF52BF">Verifica si existe respuesta ante tu reclamo</a></span>
			</div>
		</div>
	</div>
	<div class="news_post_text">
		<p>En el siguiente formulario encontrarás los datos que enviaste en tu reclamo, como también la respuesta que se te haya brindado siempre y cuando tu reclamo haya sido atendido.</p>
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
      <label class="labelInput">CORREO ELECTRÓNICO</label>
      <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="correo" disabled/>
      <label class="labelInput">TELÉFONO FIJO / CELULAR (Opcional)</label>
      <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="celular" disabled/>
      <label class="labelInput">DOMICILIO (Opcional)</label>
      <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="domicilio" disabled/>
      <label class="labelInput">NÚMERO DE TRÁMITE (Opcional en caso disponga)</label>
      <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="tramite" disabled/>
      <label class="labelInput">TIPO DE RECLAMO</label>
      <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="tiporeclamo" disabled/>
      <label class="labelInput">NOMBRE DEL FUNCIONARIO</label>
      <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="funcionario" disabled/>
      <label class="labelInput">CARGO DEL FUNCIONARIO</label>
      <b-form-input style="border-radius: 0px" class="imp-fue mb-3" type="text" v-model="cargo" disabled/>
      <label class="labelInput">DETALLE DEL RECLAMO / QUEJA (Obligatorio)</label>
      <textarea id="text" class="form-control imp-fue mb-3"
           style="border-radius: 0px; height:300px; max-height:300px; min-height:300px"
           v-model="detalle"
           no-resize
           :rows="50"
           :max-rows="100"
           maxlength="10000"
           disabled>
      </textarea>
      <label class="labelInput">PEDIDO (Obligatorio)</label>
      <textarea id="text" class="form-control imp-fue mb-3"
           style="border-radius: 0px; height:300px; max-height:300px; min-height:300px"
           v-model="pedido"
           no-resize
           :rows="50"
           :max-rows="100"
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
      detalle: '',
      pedido: '',
      respuesta: '',
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
      codreclamo: ''
    }
  },
  mounted(){
    this.codreclamo = this.$store.state.reclamo.cnum_numperio
    this.detalle = this.$store.state.reclamo.ctxt_reclamo
    this.pedido = this.$store.state.reclamo.ctxt_pedido
    this.respuesta = this.$store.state.reclamo.ctxt_respuestaresponsable
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
                        'Nombre del Apoderado (En caso de ser menor de edad): ' + this.apoderado + '\n',
                        'Correo Electrónico: ' + this.correo + '\n',
                        'Teléfono Fijo / Celular(Opcional): ' + this.celular + '\n',
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
                        'N° de Trámite (Opcional en caso disponga): ' + this.tramite + '\n',
                        'Tipo de Reclamo: ' + this.tiporeclamo + '\n',
                        'Nombre del Funcionario: ' + this.funcionario + '\n',
                        'Cargo del Funcionario: ' + this.cargo + '\n',
                        'Detalle del Reclamo / Queja (Obligatorio): ' + this.detalle + '\n',
                        'Pedido (Obligatorio): ' + this.pedido
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