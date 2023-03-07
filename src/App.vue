<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HeaderV1 msg="Welcome to Your Vue.js App"/>
  <!-- <LayoutV1/> -->
  <HelloWorld/>
  <!-- <div class="dogs-gallery">
		<DogCard firstname="Pluto" breed="Saint-Hubert" pictureUrl="https://my-best-kennel.com/pictures/45.png"/>
		<DogCard firstname="Rex" breed="Labrador" pictureUrl="https://my-best-kennel.com/pictures/46.png"/>
  </div> -->
</template>

<script>
import HeaderV1 from './components/HeaderV1.vue'
import HelloWorld from './components/HelloWorld.vue';
// import LayoutV1 from './components/LayoutV1.vue'
// import DogCard from './components/ExempleDogCard.vue'

export default {
  name: 'App',
  components: {
    HeaderV1,
    // LayoutV1
    // DogCard
    HelloWorld
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
