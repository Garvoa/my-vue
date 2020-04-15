<template>
  <div>
    <!--路由链接-->
    <router-link to="/about">About</router-link>
    <router-link to="/home">Home</router-link>
    <!--路由视图-->
    <router-view></router-view>
    <!-- </div>
    <div>

    </div>-->
  </div>
</template>
<script>
/**
 *
 * 路由:一种映射关系:地址和组件的关系
 * 安装vue-router
 * 路由最终在页面中产生的效果:a标签(链接)---路由链接,点击该链接,在页面的指定的位置,显示对应的组件的内容(这个组件显示的内容可以称之为路由视图)
 * 路由:路由链接(a)和路由视图(组件页面)的一种关系
 *
 * 页面中:
 * about 链接----about组件
 * home 链接--- home组件
 * 一般情况,如果这个组件和路由关系(组件和路由建立了关系),那么此时这个组件称为:路由组件
 * 路由组件一般都会放在pages目录中,路由的配置一般放在router目录中
 *
 *
 *
 */
export default {
  name: 'App'
}
</script>
<style scoped>
</style>
