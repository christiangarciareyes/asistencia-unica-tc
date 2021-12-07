export default {
  autenticacion: 'https://tomcat.sedetc.gob.pe/autentica-services-0.0.1',
  serverAsistenciaPublic: 'https://tomcat.sedetc.gob.pe/asistenciaunica-0.0.1/public',
  //serverAsistenciaPublic: 'http://localhost:8081/asistencia/public',
  serverAsistenciaAdmin: 'https://tomcat.sedetc.gob.pe/asistenciaunica-0.0.1/private',
  //serverAsistenciaAdmin: 'http://localhost:8081/asistencia/private',
  authorization: 'Bearer ' + localStorage.getItem('AccessToken'),
  reclamo: [],
  solicitud: [],
  reclamoQue: [],
  solicitudQue: [],
  consulta: [],
  idTipoDerivacion: ''
}
