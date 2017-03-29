import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import routes from './map'

Vue.use(Router);

export default new Router({
  base:__dirname,
  mode:'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
