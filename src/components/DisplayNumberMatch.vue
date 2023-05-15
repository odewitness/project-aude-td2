<template>
    <div v-if="filteredCountries.length > 0">
        <p>Il y a {{ itemsTotal }} pays correspondant à cette recherche.</p>
    </div>
</template>

<script>
export default {
    name: 'DisplayNumberMatch',
    props: {
        filteredCountries: {
            type: Array,
            required: true
        },
        itemsTotal: {
            type: Number,
            required: true
        }
    },
}
</script>