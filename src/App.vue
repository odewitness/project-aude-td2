<template>
  <NavbarDesign msg="Découvrez les pays du monde" />
  <HeaderDesign />
  <MainContent />
  <ScrollToTopButton />
  <FooterDesign />
</template>

<script>
import NavbarDesign from './components/Layout/NavbarDesign.vue'
import HeaderDesign from './components/Layout/HeaderDesign.vue'
import MainContent from './components/MainContent.vue'
import ScrollToTopButton from './components/Layout/ScrollToTopButton.vue';
import FooterDesign from './components/Layout/FooterDesign.vue';

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
  color: #2c3e50;
}
</style>
