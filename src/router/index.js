import Vue from "vue"
import VueRouter from 'vue-router'
import route from "./routers"
// console.log(routes)
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: route
})

