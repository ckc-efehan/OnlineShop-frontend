<template>
  <div id="app">
    <RegisterSite />
  </div>
</template>

<script setup lang="ts">
import RegisterSite from './components/registerLoginSite.vue'
</script>

<style>
/* Entferne die Margin und das Padding von body und html */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

#app {
  background-color: #c9d6ff;
  background: linear-gradient(to right, #c9d6ff, #ffffff);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}
</style>
