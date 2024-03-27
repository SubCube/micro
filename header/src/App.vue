<template>
  <div id="app">
  <div class="content">
   <h1>{{ msg }}</h1>
   <h2>vue2 counter {{ counter }}</h2>
   <button @click="increment">vue 2</button>
   <v-btn>Vuetify</v-btn>
  </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      msg: 'VUE 2',
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++
    }
  }
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
