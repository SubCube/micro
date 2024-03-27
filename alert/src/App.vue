<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h2>vue3 </h2>
  <TestComponent/>
  <v-btn>Test</v-btn>
</template>

<script lang="ts" setup>


import TestComponent from './components/TestComponent.vue'

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
