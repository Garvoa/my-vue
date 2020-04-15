import About from "../pages/About.vue"
import Home from "../pages/Home.vue"
import List from "../pages/list.vue"
export default [
  {
    path: "/about",
    component: About
  },
  {
    path: "/home",
    component: Home
  },
  {

    path: "/home/list",
    component: List
  }
]
// 引入组件
// import About from '../pages/About.vue'
// import Home from '../pages/Home.vue'
// export default [
//   // 地址和组件的关系的建立
//   {
//     path: '/about',
//     component: About
//   },
//   {
//     path: '/home',
//     component: Home
//   },
//   {
//     path: '/',
//     redirect: '/about'
//   }
// ]
