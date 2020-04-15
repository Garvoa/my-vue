<!--  -->
<template>
  <div>
    <ul>
      <li>
        <router-link to="/home/list">11</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {}
  },
  methods: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
