import Vue from 'vue'
import App from './App'
import router from './router'
import Paginate from 'vuejs-paginate'
import BootstrapVue from 'bootstrap-vue'
import StarRating from 'vue-star-rating'
Vue.config.productionTip = false
Vue.config.silent = true
Vue.component('paginate', Paginate)
Vue.use(BootstrapVue)
Vue.component('star-rating', StarRating);
window.$router = router
window.$pagination = Paginate
import comms from './core/communication'
import config from './config'
window.$config  = config;
window.$comms = new comms();
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
