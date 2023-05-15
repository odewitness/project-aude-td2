<template>
    <div class="display-options">
        <!-- ATTENDUS : Utilisations des directives -->
        <p v-if="filteredCountries.length > 0">Il y a {{ itemsTotal }} pays correspondant à cette recherche.</p>
    </div>
</template>

<script>
export default {
    name: "NumberMatch",
    props: {
        filteredCountries: Array,
        itemsTotal: Number
    },
};
</script>

<style>
.display-options {
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 83%;
    padding-top: 2%;
    padding-bottom: 1%;
}
</style>