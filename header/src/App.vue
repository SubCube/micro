<template>
  <div id="app">
  <div class="content">
   <h1>{{ msg }}</h1>
  </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      msg: 'VUE 2'
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
