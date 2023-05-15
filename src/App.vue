<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

  <NavbarDesign msg="Welcome to Your Vue.js App" />
  <HeaderDesign />
  <MainContent />
  <ScrollToTopButton />
  <FooterDesign />
</template>

<script>
import NavbarDesign from './components/NavbarDesign.vue'
import HeaderDesign from './components/HeaderDesign.vue'
import MainContent from './components/MainContent.vue'
import ScrollToTopButton from './components/ScrollToTopButton.vue';
import FooterDesign from './components/FooterDesign.vue';

export default {
  name: 'App',
  components: {
    NavbarDesign,
    HeaderDesign,
    MainContent,
    ScrollToTopButton,
    FooterDesign
  },

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
