<template>
  <HomePage/>
</template>

<script>
import HomePage from './components/HomePage.vue';
export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
html, body {
  height: 100%;
  background-color: rgb(17, 0, 23);
  color: white;
  font-size: 16px;
}
#app {
  height: 100%;
}
</style>
