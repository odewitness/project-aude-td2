<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HeaderV1 msg="Welcome to Your Vue.js App"/>
  <CountryCard/>
</template>

<script>
import HeaderV1 from './components/HeaderV1.vue'
import CountryCard from './components/CountryCard.vue';

export default {
  name: 'App',
  components: {
    HeaderV1,
    CountryCard
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
