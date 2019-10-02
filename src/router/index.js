import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import MoviePage from '@/pages/MoviePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: MoviePage
    }
  ]
})
