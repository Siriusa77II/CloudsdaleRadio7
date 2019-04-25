import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
    },
    {
      path: '/Changelogs',
      name: 'Changelogs',
      component: () => import(/* webpackChunkName: "Changelogs" */ './views/Changelogs.vue')
    },
    {
      path: '/db',
      name: 'db',
      component: () => import(/* webpackChunkName: "db" */ './views/db.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import(/* webpackChunkName: "faq" */ './views/faq.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import(/* webpackChunkName: "privacy" */ './views/privacy.vue')
    },
    {
      path: '/request',
      name: 'request',
      component: () => import(/* webpackChunkName: "request" */ './views/request.vue')
    },
    {
      path: '/server',
      name: 'server',
      component: () => import(/* webpackChunkName: "server" */ './views/server.vue')
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: () => import(/* webpackChunkName: "sitemap" */ './views/sitemap.vue')
    },
    {
      path: '/staff',
      name: 'staff',
      component: () => import(/* webpackChunkName: "staff" */ './views/staff.vue')
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: () => import(/* webpackChunkName: "thanks" */ './views/thanks.vue')
    },
    {
      path: '/radio',
      name: 'radio',
      component: () => import(/* webpackChunkName: "radio" */ './views/radio.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
