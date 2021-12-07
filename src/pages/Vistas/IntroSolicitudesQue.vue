<template>
	<div class="news" style="margin-bottom: -50px">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="news_posts"></div>
						<div class="news_post">
							<div class="news_post_top d-flex flex-column flex-sm-row">
								<div class="news_post_title_container3">
									<div class="news_post_title">
										<a style="color: #AF52BF">Willakuykuna chaskinamanta</a>
									</div>
									<div class="news_post_meta">
										<span class="news_post_author"><a style="color: #AF52BF">Manaraq mañakuchkaspa allintaraq riqsipay</a></span>
									</div>
								</div>
								<button v-if="moneySendS01" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyS01(2)">
									<span class="fa fa-stop fa-1x"></span>
								</button>
								<button v-if="!moneySendS01" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyS01(1)">
									<span class="fa fa-play fa-1x"></span>
								</button>
								<button v-if="moneySendS01" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyS01(3)">
									<span class="fa fa-pause fa-1x"></span>
								</button>
							</div>
							<div class="news_post_text">
								<p>"Texto Único Ordenado de la Ley 27806, Ley de Transparencia y Acceso a la Información Pública" nisqam paqariramun 021-2019-JUS yupaychasqa Decreto Supremo kamachiywan, chaypim ñawinchakuchkan Estado wasikunapi llamkaykunamanta, Willakuykuna qunamanta, Perú suyupa Constitución Política kamachisqanmanhina 2 artículo nisqapa 2 kaq yupayninpi. Chay kamachiy kasqanmanhnam Tribunal Constitucional llaqtaman quchkan Portal Estándar de Transparencia nisqata, chaynintakama llaqtayuqkuna willakuykunata aypanankupaq.</p>
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
  data () {
    return {
	  moneySendS01: false,
	  audioS01: new Audio('https://ventanillaadministrativa.sedetc.gob.pe/TRADUCCIONES/audioS01.mp4')
    }
  },
  methods: {  
	sendMoneyS01(param){
		if(param == 1){
			this.audioS01.play();
			this.moneySendS01 = true;
		}else if(param == 2){
			this.audioS01.pause();
			this.audioS01.currentTime = 0;
			this.moneySendS01 = false;
		}else{
			this.audioS01.pause();
			this.moneySendS01 = false;
		}
	}
  }
}
</script>