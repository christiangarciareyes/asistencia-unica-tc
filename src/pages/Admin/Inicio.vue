<template>
<div class="content">
  <div class="container-login300">
  <div class="super_container">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="section_title text-center">
              <h1 style="color: #fff">VENTANILLA ADMINISTRATIVA</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="events page_section">
    <div class="container">
      <div class="event_items">
        <div class="row event_item">
          <div class="col">
            <div class="row d-flex flex-row align-items-end">
              <div class="col-lg-2 order-lg-1 order-2">
                <div class="event_date d-flex flex-column align-items-center justify-content-center">
                  <div class="event_day"><i class="fa fa-book" aria-hidden="true"></i></div>
                </div>
              </div>
              <div class="col-lg-6 order-lg-2 order-3">
                <div class="event_content">
                  <div class="event_name"><a style="color: #AF52BF" class="trans_200">Libro de Reclamaciones</a></div>
                  <div class="event_location">Gestiona el libro de reclamaciones</div>
                  <p>Si eres encargado de esta opción, podrás gestionar de manera correcta todos los reclamos que ingresen a la institución.</p>
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 order-1">
                <div class="event_image">
                  <img src="@/assets/img/event_1.jpg" alt="image">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row event_item">
          <div class="col">
            <div class="row d-flex flex-row align-items-end">
              <div class="col-lg-2 order-lg-1 order-2">
                <div class="event_date d-flex flex-column align-items-center justify-content-center">
                  <div class="event_day"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                </div>
              </div>
              <div class="col-lg-6 order-lg-2 order-3">
                <div class="event_content">
                  <div class="event_name"><a style="color: #AF52BF" class="trans_200">Solicitud de Acceso a la Información</a></div>
                  <div class="event_location">Gestiona las solicitudes de acceso a la información</div>
                  <p>Si eres encargado de esta opción, podrás gestionar de manera correcta todos las solicitudes de acceso a la información que ingresen a la institución.</p>
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 order-1">
                <div class="event_image">
                  <img src="@/assets/img/event_2.jpg" alt="image">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row event_item">
          <div class="col">
            <div class="row d-flex flex-row align-items-end">
              <div class="col-lg-2 order-lg-1 order-2">
                <div class="event_date d-flex flex-column align-items-center justify-content-center">
                  <div class="event_day"><i class="fa fa-desktop" aria-hidden="true"></i></div>
                </div>
              </div>
              <div class="col-lg-6 order-lg-2 order-3">
                <div class="event_content">
                  <div class="event_name"><a style="color: #AF52BF" class="trans_200">Canales de Consulta de Información</a></div>
                  <div class="event_location">Administra las consultas de los canales de información</div>
                  <p>Si eres encargado de esta opción, podrás administrar las consultas que ingresan por lo diferentes canales de información de la institución.</p>
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 order-1">
                <div class="event_image">
                  <img src="@/assets/img/event_4.jpg" alt="image">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row event_item">
          <div class="col">
            <div class="row d-flex flex-row align-items-end">
              <div class="col-lg-2 order-lg-1 order-2">
                <div class="event_date d-flex flex-column align-items-center justify-content-center">
                  <div class="event_day"><i class="fa fa-cog" aria-hidden="true"></i></div>
                </div>
              </div>
              <div class="col-lg-6 order-lg-2 order-3">
                <div class="event_content">
                  <div class="event_name"><a style="color: #AF52BF" class="trans_200">Auditoría de Atenciones</a></div>
                  <div class="event_location">Audita la atención que brindamos</div>
                  <p>Si eres encargado de esta opción, podrás monitorear y tener a la mano los reclamos y solicitudes que ingresen a la institución</p>
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 order-1">
                <div class="event_image">
                  <img src="@/assets/img/event_3.jpg" alt="image">
                </div>
              </div>
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
  created() {
    if(localStorage.getItem('AccessToken') == null || localStorage.getItem('expires_at') == null || localStorage.getItem('profile') == null || localStorage.getItem('operaciones') == null || localStorage.getItem('nickname') == null){
      this.$router.app.$auth.logout();
      this.$router.push({name: 'Portada'});
    }
  },
  data () {
    return {
    }
  }
}
</script>
