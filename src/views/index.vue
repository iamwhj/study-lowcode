<template>
  <div class="home-container">
    <div class="left-menu">
      <Nav :menuCollapse="menuCollapse" />
    </div>
    <div class="right-main">
      <TopBar
        :menuCollapse="menuCollapse"
        @changeMenuCollapse="changeMenuCollapse"
      />
      <div class="main">
        <Activity />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Nav from './Nav.vue';
import TopBar from './TopBar.vue';
import Activity from './activity'

const menuCollapse = ref(false);
const changeMenuCollapse = () => {
  menuCollapse.value = !menuCollapse.value;
};
</script>

<style scoped>
.home-container {
  display: flex;
}
.home-container .right-main {
  width: 100%;
}
</style>
