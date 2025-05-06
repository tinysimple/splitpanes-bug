<script setup>
// import { Splitpanes, Pane } from "splitpanes";
// import "splitpanes/dist/splitpanes.css";
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <div>
    <div style="display: flex;padding: 20px;">
      <splitpanes>
        <pane size="16"><div style="background-color: red;">yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</div></pane>
        <pane size="84"><div style="background-color: green;flex: 1;">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div></pane>
      </splitpanes>
    </div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
