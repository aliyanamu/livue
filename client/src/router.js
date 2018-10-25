import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/details',
          name: 'details',
          component: () => import('./components/VideoDetail.vue'),
          props: (route) => ({ query: route.query.q })
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/like',
      name: 'like',
      component: () => import('./views/Like.vue')
    }
  ]
})
