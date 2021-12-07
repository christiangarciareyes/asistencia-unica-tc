export default { 
  SET_AUTENTICACION (state, autenticacion) {
    state.autenticacion = autenticacion
  },
  SET_AUTHORIZATION (state, authorization) {
    state.authorization = authorization
  },
  SET_SERVER_ASISTENCIA_PUBLIC (state, serverAsistenciaPublic) {
    state.serverAsistenciaPublic = serverAsistenciaPublic
  },
  SET_SERVER_ASISTENCIA_ADMIN (state, serverAsistenciaAdmin) {
    state.serverAsistenciaAdmin = serverAsistenciaAdmin
  },
  SET_USUARIO (state, usuario) {
    state.usuario = usuario
  },
  consulReclamo(state, value){
    state.reclamo = value;
  },
  consulSolicitud(state, value){
    state.solicitud = value;
  },
  consulConsulta(state, value){
    state.consulta = value;
  },
  consulReclamoQue(state, value){
    state.reclamoQue = value;
  },
  consulSolicitudQue(state, value){
    state.solicitudQue = value;
  },
  mostrarDerivado(state, value){
  	state.idTipoDerivacion = value;
  }
}
