<template>
  <div id="app">
    <Header />
    <div id="content" class="content">
      <!--router-view 안에 라우터가 컴포넌트를 그리게 된다-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Header from "./components/layout/Header.vue";

export default {
  name: "App",
  components: {
    Header
  },
};
</script>

<style>
</style>
