<!-- ATTENDUS : Avoir un header -->
<template>
    <i-header id="cover-header" cover class="_text-align:center _color:white">
        <h1 class="text">Découvrez les pays du monde</h1>
        <p class="text">Comparez et triez de nombreuses données concernant tous les pays de la planète !</p>
        <!-- ATTENDUS : Animation grâce à l'évènements click -->
        <i-button color="primary" @click="scrollToCountryCard">C'est parti !</i-button>
    </i-header>
</template>

<script>
export default {
    name: 'HeaderDesign',
    methods: {
        scrollToCountryCard() {
            const countryCardElement = document.querySelector("#country-card");
            countryCardElement.scrollIntoView({ behavior: "smooth" });
        },
    }
};
</script>

<style scoped>
#cover-header {
    background-image: url("@/assets/map.png");

}
</style>
