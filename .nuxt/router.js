'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _4c32d5e2 = process.BROWSER ? () => System.import('/home/vincent/dev/testNuxt/pages/index.vue') : require('/home/vincent/dev/testNuxt/pages/index.vue')

const _dcc69fd0 = process.BROWSER ? () => System.import('/home/vincent/dev/testNuxt/pages/users.vue') : require('/home/vincent/dev/testNuxt/pages/users.vue')


const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    // Scroll to the top by default
    let position = { x: 0, y: 0 }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}

export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'router-link-active',
  scrollBehavior,
  routes: [
    
    {
      path: '/',
      component: _4c32d5e2
    },
    
    {
      path: '/users',
      component: _dcc69fd0
    }
    
  ]
})
