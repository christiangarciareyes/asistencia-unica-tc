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
										<a style="color: #AF52BF">Kutipakunapaq maytumanta</a>
									</div>
									<div class="news_post_meta">
										<span class="news_post_author"><a style="color: #AF52BF">Willapakuytaraq chaskiy manaraq kutipakuchkaspa</a></span>
									</div>
								</div>
								<button v-if="moneySendR01" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR01(2)">
									<span class="fa fa-stop fa-1x"></span>
								</button>
								<button v-if="!moneySendR01" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR01(1)">
									<span class="fa fa-play fa-1x"></span>
								</button>
								<button v-if="moneySendR01" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR01(3)">
									<span class="fa fa-pause fa-1x"></span>
								</button>
							</div>
							<div class="news_post_text">
								<p>KUTIPAKUNAPAQ MAYTU, kaypim usuchisqa llaqtayuqkuna qillqatamunku, 27444 yupaychasqa Ley kamachisqanmanhina 48 artículo nisqapi, estadopa wasinpi yanapakuy mañaqkuna mana allin yanapasqa kaptinkum llakikuyninta utaq piñakuynintapas qillqatamunkuman.</p>
							</div>
					        <div class="news_post_top d-flex flex-column flex-sm-row">
					            <div class="news_post_date_container">
									<div class="news_post_date d-flex flex-column align-items-center justify-content-center m-r-20">
										<div>1</div>
									</div>
								</div>
								<div class="news_post_title_container3">
									<div class="news_post_title2">
										<a style="color: #AF52BF">¿Imapaqtaq kayta  llaqtayuqkuna ruwanku?</a>
									</div>
								</div>
								<button v-if="moneySendR02" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR02(2)">
									<span class="fa fa-stop fa-1x"></span>
								</button>
								<button v-if="!moneySendR02" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR02(1)">
									<span class="fa fa-play fa-1x"></span>
								</button>
								<button v-if="moneySendR02" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR02(3)">
									<span class="fa fa-pause fa-1x"></span>
								</button>
							</div>
							<div class="news_post_text">
								<p>Kaywanmi estadopa allin llamkayninta llaqtayuqkuna qatipaysinku hinaspapas yanapakuy mañaqkunapa derechonta amachaysinku. Qillqasqankupim churanku administrativo ruwaykunapi ichapas ukaq estadopa llamkapakuqnin usurachiptin, piñakuyninta utaq llakikuynintapas qillqatamunku.</p>
							</div>
						    <div class="news_post_top d-flex flex-column flex-sm-row">
						        <div class="news_post_date_container">
									<div class="news_post_date d-flex flex-column align-items-center justify-content-center m-r-20">
										<div>2</div>
									</div>
								</div>
								<div class="news_post_title_container3">
									<div class="news_post_title2">
										<a style="color: #AF52BF">¿Imayna yanapakuykunamantataq kutipakuwaq?</a>
									</div>
								</div>
								<button v-if="moneySendR03" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR03(2)">
									<span class="fa fa-stop fa-1x"></span>
								</button>
								<button v-if="!moneySendR03" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR03(1)">
									<span class="fa fa-play fa-1x"></span>
								</button>
								<button v-if="moneySendR03" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR03(3)">
									<span class="fa fa-pause fa-1x"></span>
								</button>
							</div>
							<div class="news_post_text">
								<p>Llaqtayuqkunaman yanapaymanta, mana allinta yuyaymanachiptinku uya pura, internetninta utaq telefonontapas.</p>
							</div>
						    <div class="news_post_top d-flex flex-column flex-sm-row">
						        <div class="news_post_date_container">
									<div class="news_post_date d-flex flex-column align-items-center justify-content-center m-r-20">
										<div>3</div>
									</div>
								</div>
								<div class="news_post_title_container3">
									<div class="news_post_title2">
										<a style="color: #AF52BF">¿Pitaqri kutipakuyta atinman kutipakuna maytupi?</a>
									</div>
								</div>
								<button v-if="moneySendR04" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR04(2)">
									<span class="fa fa-stop fa-1x"></span>
								</button>
								<button v-if="!moneySendR04" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR04(1)">
									<span class="fa fa-play fa-1x"></span>
								</button>
								<button v-if="moneySendR04" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR04(3)">
									<span class="fa fa-pause fa-1x"></span>
								</button>
							</div>
							<div class="news_post_text">
								<p>Mayqan kaq llaqtayuqkuna, jurídico runakunapas estadopa wasinman riqkuna, 27444 Leypa 55 artículo nisqapi ñawinchakusqanmanhina, chaypim nichkan willakuykunata yanapakuy maskaqman riqsichinankupaq, utaq estadopa wasinpi imaymana yanapakuyta mañakuptinkupas.</p>
							</div>
						    <div class="news_post_top d-flex flex-column flex-sm-row">
						        <div class="news_post_date_container">
								 <div class="news_post_date d-flex flex-column align-items-center justify-content-center m-r-20">
									<div>4</div>
								 </div>
								</div>
								<div class="news_post_title_container3">
									<div class="news_post_title2">
										<a style="color: #AF52BF">¿Kutipakuyta atinkumanchu estadopa wasinpi puririchisqanku documentokunamanta?</a>
									</div>
								</div>
								<button v-if="moneySendR05" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR05(2)">
									<span class="fa fa-stop fa-1x"></span>
								</button>
								<button v-if="!moneySendR05" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR05(1)">
									<span class="fa fa-play fa-1x"></span>
								</button>
								<button v-if="moneySendR05" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR05(3)">
									<span class="fa fa-pause fa-1x"></span>
								</button>
							</div>
							<div class="news_post_text">
								<p>Manam, KUTIPAKUYQA kanman estadopa llamkapakuqninkuna yanapakuy mañaqta mana allinta yanapaptillankum, usurachillaptinku, manam puririhisqanku documentokunamantaqa.  Chayna karuptinqa, yanapakuy mañaqmi QUEJAkuyta atinman defecto de tramitación nisqamanta 27444 yupaychasqa leypi ñawinchakusqanman hina.</p>
							</div>
						    <div class="news_post_top d-flex flex-column flex-sm-row">
						        <div class="news_post_date_container">
								  <div class="news_post_date d-flex flex-column align-items-center justify-content-center m-r-20">
									  <div>5</div>
								  </div>
								</div>
								<div class="news_post_title_container3">
									<div class="news_post_title2">
										<a style="color: #AF52BF">¿Imataqri defecto por tramitación sutichasqa queja?</a>
									</div>
								</div>
								<button v-if="moneySendR06" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR06(2)">
									<span class="fa fa-stop fa-1x"></span>
								</button>
								<button v-if="!moneySendR06" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR06(1)">
									<span class="fa fa-play fa-1x"></span>
								</button>
								<button v-if="moneySendR06" style="margin-left: 20px" class="sound-form-btn" @click="sendMoneyR06(3)">
									<span class="fa fa-pause fa-1x"></span>
								</button>
							</div>
							<div class="news_post_text">
								<p>27444 yupaychasqa ley, Procedimiento Administrativo General sutiwan riqsisqa Leypa  158 artículo nisqapi kasqanman hinam, yanapakuyta takyachiptinkuqa.</p>
							</div>
							<div class="news_post_text">
								<p>Defecto de tramitación nisqamanta quejatam llaqta churayta atinman solicitud nisqallawan, yanapakuy mañakusqan wasipa umalliqninmanmi qillqaykunan mana allín yanapasqa kasqanmanta, 27444 yupayniyuq leypa 113 artículo usuchisqa kasqanmanta.</p>
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
	  moneySendR01: false,
	  audioR01: new Audio('https://ventanillaadministrativa.sedetc.gob.pe/TRADUCCIONES/audioR01.mp4'),
	  moneySendR02: false,
	  audioR02: new Audio('https://ventanillaadministrativa.sedetc.gob.pe/TRADUCCIONES/audioR02.mp4'),
	  moneySendR03: false,
	  audioR03: new Audio('https://ventanillaadministrativa.sedetc.gob.pe/TRADUCCIONES/audioR03.mp4'),
	  moneySendR04: false,
	  audioR04: new Audio('https://ventanillaadministrativa.sedetc.gob.pe/TRADUCCIONES/audioR04.mp4'),
	  moneySendR05: false,
	  audioR05: new Audio('https://ventanillaadministrativa.sedetc.gob.pe/TRADUCCIONES/audioR05.mp4'),
	  moneySendR06: false,
	  audioR06: new Audio('https://ventanillaadministrativa.sedetc.gob.pe/TRADUCCIONES/audioR06.mp4')
    }
  },
  methods: {  
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
	},
	sendMoneyR01(param){
		if(param == 1){
			this.audioR01.play();
			this.moneySendR01 = true;
		}else if(param == 2){
			this.audioR01.pause();
			this.audioR01.currentTime = 0;
			this.moneySendR01 = false;
		}else{
			this.audioR01.pause();
			this.moneySendR01 = false;
		}
	},
	sendMoneyR02(param){
		if(param == 1){
			this.audioR02.play();
			this.moneySendR02 = true;
		}else if(param == 2){
			this.audioR02.pause();
			this.audioR02.currentTime = 0;
			this.moneySendR02 = false;
		}else{
			this.audioR02.pause();
			this.moneySendR02 = false;
		}
	},
	sendMoneyR03(param){
		if(param == 1){
			this.audioR03.play();
			this.moneySendR03 = true;
		}else if(param == 2){
			this.audioR03.pause();
			this.audioR03.currentTime = 0;
			this.moneySendR03 = false;
		}else{
			this.audioR03.pause();
			this.moneySendR03 = false;
		}
	},
	sendMoneyR04(param){
		if(param == 1){
			this.audioR04.play();
			this.moneySendR04 = true;
		}else if(param == 2){
			this.audioR04.pause();
			this.audioR04.currentTime = 0;
			this.moneySendR04 = false;
		}else{
			this.audioR04.pause();
			this.moneySendR04 = false;
		}
	},
	sendMoneyR05(param){
		if(param == 1){
			this.audioR05.play();
			this.moneySendR05 = true;
		}else if(param == 2){
			this.audioR05.pause();
			this.audioR05.currentTime = 0;
			this.moneySendR05 = false;
		}else{
			this.audioR05.pause();
			this.moneySendR05 = false;
		}
	},
	sendMoneyR06(param){
		if(param == 1){
			this.audioR06.play();
			this.moneySendR06 = true;
		}else if(param == 2){
			this.audioR06.pause();
			this.audioR06.currentTime = 0;
			this.moneySendR06 = false;
		}else{
			this.audioR06.pause();
			this.moneySendR06 = false;
		}
	}
  }
}
</script>