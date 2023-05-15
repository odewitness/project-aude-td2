<template>
    <div class="reinitialize-button">
        <!-- ATTENDUS : Animation grâce à l'évènements click -->
        <i-button @click="resetFilters" color="danger">Réinitialiser</i-button>
    </div>
</template>

<script>
export default {
    name: 'ReinitializeButton',
    methods: {
        resetFilters() {
            this.$emit('reset-filters')
        }
    }
}
</script>

<style scoped>
.reinitialize-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em;
}
</style>