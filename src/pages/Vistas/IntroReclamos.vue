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
										<a style="color: #AF52BF">Acerca del Libro de Reclamaciones</a>
									</div>
									<div class="news_post_meta">
										<span class="news_post_author"><a style="color: #AF52BF">Infórmate antes de registrar tu reclamo</a></span>
									</div>
								</div>
							</div>
							<div class="news_post_text">
								<p>El LIBRO DE RECLAMACIONES es un mecanismo de participación ciudadana, creado conforme al artículo 48 de la Ley Nº 27444, para expresar insatisfacción o disconformidad respecto de la atención brindada por la entidad pública en el ejercicio de su función administrativa.</p>
							</div>
					        <div class="news_post_top d-flex flex-column flex-sm-row">
					            <div class="news_post_date_container">
									<div class="news_post_date d-flex flex-column align-items-center justify-content-center m-r-20">
										<div>1</div>
									</div>
								</div>
								<div class="news_post_title_container3">
									<div class="news_post_title2">
										<a style="color: #AF52BF">¿Qué finalidad tiene este mecanismo de participación ciudadana?</a>
									</div>
								</div>
							</div>
							<div class="news_post_text">
								<p>Su finalidad es lograr la eficiencia del Estado y salvaguardar los derechos de los usuarios frente a la atención en los servicios que se les brinda. Es importante precisar que este mecanismo de participación busca expresar la insatisfacción por la <strong>atención brindada</strong> y no la <strong>disconformidad por la tramitación o resultado de algún procedimiento administrativo</strong> en el que es parte el administrado.</p>
							</div>
						    <div class="news_post_top d-flex flex-column flex-sm-row">
						        <div class="news_post_date_container">
									<div class="news_post_date d-flex flex-column align-items-center justify-content-center m-r-20">
										<div>2</div>
									</div>
								</div>
								<div class="news_post_title_container3">
									<div class="news_post_title2">
										<a style="color: #AF52BF">¿Qué tipo de servicios pueden ser materia de reclamo?</a>
									</div>
								</div>
							</div>
							<div class="news_post_text">
								<p>Los servicios de atención al ciudadano, orientación brindada, ya sea de manera presencial, por teléfono o por internet.</p>
							</div>
						    <div class="news_post_top d-flex flex-column flex-sm-row">
						        <div class="news_post_date_container">
									<div class="news_post_date d-flex flex-column align-items-center justify-content-center m-r-20">
										<div>3</div>
									</div>
								</div>
								<div class="news_post_title_container3">
									<div class="news_post_title2">
										<a style="color: #AF52BF">¿Quién puede presentar un reclamo en el libro de reclamaciones?</a>
									</div>
								</div>
							</div>
							<div class="news_post_text">
								<p>Cualquier persona natural o jurídica que acude a una entidad pública a ejercer alguno de los derechos establecidos en el artículo 55° de la Ley Nº 27444, lo que incluye solicitar información acerca de los trámites que se pueden realizar o los servicios que se brinden en la entidad pública.</p>
							</div>
						    <div class="news_post_top d-flex flex-column flex-sm-row">
						        <div class="news_post_date_container">
								 <div class="news_post_date d-flex flex-column align-items-center justify-content-center m-r-20">
									<div>4</div>
								 </div>
								</div>
								<div class="news_post_title_container3">
									<div class="news_post_title2">
										<a style="color: #AF52BF">¿Se puede presentar un reclamo por algún procedimiento que tenga el administrado en trámite ante la entidad pública?</a>
									</div>
								</div>
							</div>
							<div class="news_post_text">
								<p>No, el RECLAMO es por la insatisfacción o disconformidad del usuario respecto de un servicio de atención brindado por la entidad pública. Si el administrado no está conforme con el procedimiento administrativo en el que es parte, deberá presentar una QUEJA por defecto de tramitación, contemplada en la Ley Nº 27444.</p>
							</div>
						    <div class="news_post_top d-flex flex-column flex-sm-row">
						        <div class="news_post_date_container">
								  <div class="news_post_date d-flex flex-column align-items-center justify-content-center m-r-20">
									  <div>5</div>
								  </div>
								</div>
								<div class="news_post_title_container3">
									<div class="news_post_title2">
										<a style="color: #AF52BF">¿Que es una Queja por defecto de tramitación?</a>
									</div>
								</div>
							</div>
							<div class="news_post_text">
								<p>De conformidad a lo establecido en el articulo 158º de la Ley Nº 27444, Ley del Procedimiento Administrativo General, es aquella demora, paralización o incumplimiento de los plazos establecidos legalmente para un procedimiento, incumplimiento de los deberes funcionales u omisiones de trámites. En tal sentido, tiene como propósito advertir de la conducta del funcionario a efectos que se enmiende su proceder y no se afecte el debido proceso administrativo.</p>
							</div>
							<div class="news_post_text">
								<p>El usuario debe señalar de forma clara y precisa el motivo de su queja, indicando el número de trámite administrativo, y acompañar los documentos que sustenten su queja, de estimarlo necesario.</p>
							</div>
							<div class="news_post_text">
								<p>Asimismo, la queja por defectos de tramitación puede ser presentada por los usuarios a través de una solicitud simple dirigida al superior jerárquico de la autoridad que tramita el procedimiento, citándose el deber infringido y la norma que lo exige, así como los requisitos exigidos en el Artículo 113° de la Ley N° 27444.</p>
							</div>
							<div class="news_post_text">
								<p>Puedes presentar tu reclamo por medio de nuestro <strong>formulario que podrá descargarlo en los siguientes enlaces </strong><i v-on:click="pdf" class="fa fa-file-pdf-o fa-2x iconPDF"></i>, <i v-on:click="word" class="fa fa-file-word-o fa-2x iconWord"></i> y presentarlo de manera presencial en nuestra Oficina de Trámite Documentario en Jr. Azangaro 112 – en el horario de 8:00 am – 16:45 pm, o en su defecto mediante el llenado del formulario virtual implementado para esta finalidad.</p>
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
      window.open('https://ventanillaadministrativa.sedetc.gob.pe/recursos/formatos/Formato_Libro_de_Reclamaciones.pdf')
    },
    word(){
      window.open('https://ventanillaadministrativa.sedetc.gob.pe/recursos/formatos/Formato_Libro_de_Reclamaciones.docx')
    }
  }
}
</script>