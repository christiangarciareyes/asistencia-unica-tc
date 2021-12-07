import Lock from 'auth0-lock'
import Vue from 'vue'
import axios from 'axios'

let options = {
  allowSignUp: true,
  language: 'es',
  auth: {
   params: {
     scope: 'openid profile read:auth read:pauc'
   },
   responseType: 'token id_token',
   redirectUrl: 'http://localhost:8091',
   //redirectUrl: 'https://ventanillaadministrativa.sedetc.gob.pe',
   audience: 'https://appweb.sedetc.gob.pe',
  }
}

let webAuth = new Lock(
  'KnDK917Mo0SLUD9zkrBesuSwwn6ulELv',
  'tcperu.auth0.com',
   options
)

webAuth.on('authenticated', function (authResult) {
  webAuth.getUserInfo(authResult.accessToken, function (error, profile) {
    if (error) {
      webAuth.logout()
      location.href = '/';
      return
    }
    if (authResult && authResult.accessToken) {
      let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime())
      localStorage.setItem('expires_at', expiresAt)
      localStorage.setItem('AccessToken', authResult.accessToken)
      localStorage.setItem('profile', JSON.stringify(profile))
      let data =       
      {
        'client_id': 'KnDK917Mo0SLUD9zkrBesuSwwn6ulELv',
        'client_secret': 'OnI2kcKwC4aQSVc9WYmiQ3U9d_QEI7L97wC9UNTYBAuvKSXPgVl-ijSvsKRgjToO',
        'audience': 'https://tcperu.auth0.com/api/v2/',
        'grant_type': 'client_credentials'
      }
      axios.post('https://tcperu.auth0.com/oauth/token', data, {header: 'content-type: application/json', crossDomain: true
      }).then((response) => {
          let token = 'Bearer ' + response.data.access_token;
          let idPersona = JSON.parse(localStorage.getItem('profile')).sub;
          axios.defaults.headers.common['Authorization'] = token
          axios.get('https://tcperu.auth0.com/api/v2/users/' + idPersona,
          ).then((response) => {
              let datos = response.data
              let usuario = datos.username
              let email = datos.email
              localStorage.setItem('nickname', usuario)
              localStorage.setItem('name', email)
              axios.get('https://tomcat.sedetc.gob.pe/autentica-services-0.0.1/colaboradores/poslogin/' + usuario, {
              headers: {
                Authorization: 'Bearer ' + localStorage.getItem('AccessToken')
              }
              }).then((response) => {
                  axios.get('https://tomcat.sedetc.gob.pe/autentica-services-0.0.1/operaciones/app2/PAUC/'+ usuario, {
                  headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('AccessToken')
                  }
                  }).then((response) => {
                     let operaciones = response.data;
                     if(operaciones != ''){
                       localStorage.setItem('operaciones', JSON.stringify(operaciones))
                       webAuth.hide()
                       location.href = '/inicio';
                     }else{
                       localStorage.removeItem('AccessToken')
                       localStorage.removeItem('expires_at')
                       localStorage.removeItem('profile')
                       localStorage.removeItem('nickname')
                       localStorage.removeItem('name')
                       location.href = '/';
                     }
                    },(error) => {
                      console.log(error)
                    });
                },(error) => {
                  console.log(error)
                });
          },(error) => {
            console.log(error)
          })
      },(error) => {
        console.log(error)
      })
    }
  })
})

let auth = new Vue({
  computed: {
    accessToken: {
      get: function () {
        return localStorage.getItem('AccessToken')
      },
      set: function (accessToken) {
        localStorage.setItem('AccessToken', accessToken)
      }
    },
    expiresAt: {
      get: function () {
        return localStorage.getItem('expires_at')
      },
      set: function (expiresIn) {
        let expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime())
        localStorage.setItem('expires_at', expiresAt)
      }
    },
    profile: {
      get: function () {
        return JSON.parse(localStorage.getItem('profile'))
      },
      set: function (profile) {
        localStorage.setItem('profile', JSON.stringify(profile))
      }
    }
  },
  methods: {
    login () {
      webAuth.show()
    },
    callback () {
      webAuth.show()
    },
    logout () {
      return new Promise((resolve, reject) => {
        localStorage.removeItem('AccessToken')
        localStorage.removeItem('expires_at')
        localStorage.removeItem('profile')
        localStorage.removeItem('operaciones')
        localStorage.removeItem('nickname')
        localStorage.removeItem('name')
        // webAuth.logout()
      })
    },
    isAuthenticated () {
      return new Date().getTime() < localStorage.getItem('expires_at')
    }
  }
})

export default {
  install: function (Vue) {
    Vue.prototype.$auth = auth
  }
}