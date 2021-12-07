import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'
import NotFound from '@/pages/NotFound.vue'

import Portada from '@/pages/Portada.vue'
import PortadaQue from '@/pages/PortadaQue.vue'
import Login from '@/pages/Login.vue'
import Reclamo from '@/pages/Reclamo.vue'
import Solicitud from '@/pages/Solicitud.vue'
import ReclamoQue from '@/pages/ReclamoQue.vue'
import SolicitudQue from '@/pages/SolicitudQue.vue'

import VisorReclamo from '@/pages/Detalles/VisorReclamo.vue'
import VisorSolicitud from '@/pages/Detalles/VisorSolicitud.vue'
import VisorConsulta from '@/pages/Detalles/VisorConsulta.vue'
import DetalleReclamoAte from '@/pages/Detalles/DetalleReclamoAte.vue'
import DetalleReclamoPen from '@/pages/Detalles/DetalleReclamoPen.vue'
import DetalleQuechuaReclamoAte from '@/pages/Detalles/DetalleQuechuaReclamoAte.vue'
import DetalleQuechuaReclamoPen from '@/pages/Detalles/DetalleQuechuaReclamoPen.vue'
import DetalleSolicitudAte from '@/pages/Detalles/DetalleSolicitudAte.vue'
import DetalleSolicitudPen from '@/pages/Detalles/DetalleSolicitudPen.vue'
import DetalleQuechuaSolicitudAte from '@/pages/Detalles/DetalleQuechuaSolicitudAte.vue'
import DetalleQuechuaSolicitudPen from '@/pages/Detalles/DetalleQuechuaSolicitudPen.vue'
import DetalleConsultaAte from '@/pages/Detalles/DetalleConsultaAte.vue'
import DetalleConsultaPen from '@/pages/Detalles/DetalleConsultaPen.vue'
import AuditoriaReclamo from '@/pages/Detalles/AuditoriaReclamo.vue'
import AuditoriaSolicitud from '@/pages/Detalles/AuditoriaSolicitud.vue'
import AuditoriaConsulta from '@/pages/Detalles/AuditoriaConsulta.vue'
import TraducirReclamo from '@/pages/Detalles/TraducirReclamo.vue'
import TraducirSolicitud from '@/pages/Detalles/TraducirSolicitud.vue'
import ConsultarReclamo from '@/pages/Detalles/ConsultarReclamo.vue'
import ConsultarSolicitud from '@/pages/Detalles/ConsultarSolicitud.vue'
import ConsultarReclamoQuechua from '@/pages/Detalles/ConsultarReclamoQuechua.vue'
import ConsultarSolicitudQuechua from '@/pages/Detalles/ConsultarSolicitudQuechua.vue'
import ConsultarConsulta from '@/pages/Detalles/ConsultarConsulta.vue'
import HojaSeguimiento from '@/pages/Detalles/HojaSeguimiento.vue'
import Inicio from '@/pages/Admin/Inicio.vue'
import Reclamaciones from '@/pages/Admin/Reclamaciones.vue'
import Solicitudes from '@/pages/Admin/Solicitudes.vue'
import Derivaciones from '@/pages/Admin/Derivaciones.vue'
import Traducciones from '@/pages/Admin/Traducciones.vue'
import Auditoria from '@/pages/Admin/Auditoria.vue'
import Consultas from '@/pages/Admin/Consultas.vue'
import NuevaConsulta from '@/pages/Admin/NuevaConsulta.vue'

const routes = [
  {
    path: '/',
    name: 'Portada',
    component: Portada
  },
  {
    path: '/quechua',
    name: 'PortadaQue',
    component: PortadaQue
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/reclamo',
    name: 'Libro de Reclamaciones',
    component: Reclamo
  },
  {
    path: '/reclamoQue',
    name: 'Kutipakunapaq Maytu',
    component: ReclamoQue
  },
  {
    path: '/solicitud',
    name: 'Solicitudes de Acceso',
    component: Solicitud
  },
  {
    path: '/solicitudQue',
    name: 'Yaykunapaq Mañakuykuna',
    component: SolicitudQue
  },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/inicio',
    children: [
      {
        path: 'inicio',
        name: 'INICIO',
        component: Inicio
      },
      {
        path: 'reclamaciones',
        name: 'RECLAMACIONES',
        component: Reclamaciones
      },
      {
        path: 'solicitudes',
        name: 'SOLICITUDES',
        component: Solicitudes
      },
      {
        path: 'derivaciones',
        name: 'DERIVACIONES',
        component: Derivaciones
      },
      {
        path: 'traducciones',
        name: 'TRADUCCIONES',
        component: Traducciones
      },
      {
        path: 'auditoria',
        name: 'AUDITORÍA',
        component: Auditoria
      },
      {
        path: 'consultas',
        name: 'CONSULTAS',
        component: Consultas
      },
      {
        path: 'consultas/registrar',
        name: 'NUEVA CONSULTA',
        component: NuevaConsulta
      },
      {
        path: 'reclamaciones/detalleReclamoPen',
        name: 'DETALLE DEL RECLAMO PENDIENTE',
        component: DetalleReclamoPen
      },
      {
        path: 'reclamaciones/detalleReclamoAte',
        name: 'DETALLE DEL RECLAMO ATENDIDO',
        component: DetalleReclamoAte
      },
      {
        path: 'reclamaciones/detalleQuechuaReclamoPen',
        name: 'DETALLE DEL RECLAMO EN QUECHUA PENDIENTE',
        component: DetalleQuechuaReclamoPen
      },
      {
        path: 'reclamaciones/detalleQuechuaReclamoAte',
        name: 'DETALLE DEL RECLAMO EN QUECHUA ATENDIDO',
        component: DetalleQuechuaReclamoAte
      },
      {
        path: 'solicitudes/detalleSolicitudPen',
        name: 'DETALLE DE LA SOLICITUD PENDIENTE',
        component: DetalleSolicitudPen
      },
      {
        path: 'solicitudes/detalleSolicitudAte',
        name: 'DETALLE DE LA SOLICITUD ATENDIDA',
        component: DetalleSolicitudAte
      },
      {
        path: 'solicitudes/detalleQuechuaSolicitudPen',
        name: 'DETALLE DE LA SOLICITUD EN QUECHUA PENDIENTE',
        component: DetalleQuechuaSolicitudPen
      },
      {
        path: 'solicitudes/detalleQuechuaSolicitudAte',
        name: 'DETALLE DE LA SOLICITUD EN QUECHUA ATENDIDA',
        component: DetalleQuechuaSolicitudAte
      },
      {
        path: 'consultas/detalleConsultaPen',
        name: 'DETALLE DE LA CONSULTA PENDIENTE',
        component: DetalleConsultaPen
      },
      {
        path: 'consultas/detalleConsultaAte',
        name: 'DETALLE DE LA CONSULTA ATENDIDA',
        component: DetalleConsultaAte
      },
      {
        path: 'auditoria/auditoriaReclamo',
        name: 'AUDITORÍA DEL RECLAMO',
        component: AuditoriaReclamo
      },
      {
        path: 'auditoria/auditoriaSolicitud',
        name: 'AUDITORÍA DE LA SOLICITUD',
        component: AuditoriaSolicitud
      },
      {
        path: 'auditoria/auditoriaConsulta',
        name: 'AUDITORÍA DE LA CONSULTA',
        component: AuditoriaConsulta
      },
      {
        path: 'traducciones/traducirReclamo',
        name: 'TRADUCCIÓN DEL RECLAMO',
        component: TraducirReclamo
      },
      {
        path: 'traducciones/traducirSolicitud',
        name: 'TRADUCCIÓN DE LA SOLICITUD',
        component: TraducirSolicitud
      },
      {
        path: 'derivaciones/consultarReclamo',
        name: 'DETALLE DEL RECLAMO',
        component: ConsultarReclamo
      },
      {
        path: 'derivaciones/consultarSolicitud',
        name: 'DETALLE DE LA SOLICITUD',
        component: ConsultarSolicitud
      },
      {
        path: 'derivaciones/consultarReclamoQuechua',
        name: 'DETALLE DEL RECLAMO EN QUECHUA',
        component: ConsultarReclamoQuechua
      },
      {
        path: 'derivaciones/consultarSolicitudQuechua',
        name: 'DETALLE DE LA SOLICITUD EN QUECHUA',
        component: ConsultarSolicitudQuechua
      },
      {
        path: 'derivaciones/consultarConsulta',
        name: 'DETALLE DE LA CONSULTA',
        component: ConsultarConsulta
      },
      {
        path: 'detalle/hojadeseguimiento/:id',
        name: 'HOJA DE SEGUIMIENTO',
        component: HojaSeguimiento
      },
      {
        path: 'detalleReclamo/visorReclamo',
        name: 'VISOR DEL RECLAMO',
        component: VisorReclamo
      },
      {
        path: 'detalleSolicitud/visorSolicitud',
        name: 'VISOR DE LA SOLICITUD',
        component: VisorSolicitud
      },
      {
        path: 'detalleConsulta/visorConsulta',
        name: 'VISOR DE LA CONSULTA',
        component: VisorConsulta
      }
    ]
  },
  { path: '*', component: NotFound }
]

export default routes
