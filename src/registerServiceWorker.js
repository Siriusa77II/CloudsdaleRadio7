/* eslint-disable no-console */
import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log('Application prête.')
    },
    registered () {
      window.swreg = { registred: true, update: false }
    },
    cached () {
      console.log('L\'application est désormais en cache.')
    },
    updatefound () {
      console.log('Une mise à jour est disponible.')
    },
    updated (registration) {
      window.swreg.update = true
      console.log('Mise à jour prête, veuillez rafraîchir la page.')
    },
    offline () {
      console.log('Pas de connexion à Internet détectée.')
    },
    error (error) {
      console.error('Erreur lors de l\'enregistrement du service worker:', error)
    }
  })
}
