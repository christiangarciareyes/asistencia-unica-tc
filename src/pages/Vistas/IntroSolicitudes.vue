<template>
	<div class="news" style="margin-bottom: -50px">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="news_posts">
						<div class="news_post">
							<div class="news_post_top d-flex flex-column flex-sm-row">
								<div class="news_post_title_container3">
									<div class="news_post_title">
										<a style="color: #AF52BF">Acerca de la Solicitud de Acceso a la Información</a>
									</div>
									<div class="news_post_meta">
										<span class="news_post_author"><a style="color: #AF52BF">Infórmate antes de solicitar acceso a nuestra información</a></span>
									</div>
								</div>
							</div>
							<div class="news_post_text">
								<p>Conforme a lo establecido en el "Texto Único Ordenado de la Ley 27806, Ley de Transparencia y Acceso a la Información Pública"  aprobado por el Decreto Supremo N° 021-2019-JUS, que tiene por finalidad "promover la transparencia de los actos del Estado y regular el derecho fundamental del acceso a la información consagrado en el numeral 5 del artículo 2 de la Constitución Política del Perú". En virtud a ello, el Tribunal Constitucional pone a disposición del público el Portal Estándar de Transparencia, en donde podrá encontrar información relevante de la institución.</p>
							</div>
							<div class="news_post_text">
								<p>El ciudadano puede presentar su solicitud de información por medio de nuestro <strong>formulario que podrá ser descargado en los siguientes enlaces </strong><i v-on:click="pdf" class="fa fa-file-pdf-o fa-2x iconPDF"></i>, <i v-on:click="word" class="fa fa-file-word-o fa-2x iconWord"></i> y presentarlo de manera presencial ante la Oficina de Trámite Documentario y Archivo, sito Jr. Azangaro 112 Cercado de Lima, en el horario de 08:00 a 16:45 hrs; o en su defecto mediante el llenado del formulario virtual implementado para esta finalidad.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>

export default{
  methods: {
    pdf() {
      window.open('https://ventanillaadministrativa.sedetc.gob.pe/recursos/formatos/Formato_Acceso_Informacion_Publica.pdf')
    },
    word(){
      window.open('https://ventanillaadministrativa.sedetc.gob.pe/recursos/formatos/Formato_Acceso_Informacion_Publica.docx')
    }
  }
}
</script>