<template>
    <div class="filter">
        <!-- ATTENDUS : Animations grâce à l'évènements click et directive v-on = @ -->
        <i-button @click="filter = ''">Tous</i-button>
        <i-button @click="filter = 'Africa'">Afrique</i-button>
        <i-button @click="filter = 'Americas'">Amériques</i-button>
        <i-button @click="filter = 'Antarctic Ocean'">Antarctique</i-button>
        <i-button @click="filter = 'Asia'">Asie</i-button>
        <i-button @click="filter = 'Europe'">Europe</i-button>
        <i-button @click="filter = 'Oceania'">Océanie</i-button>
    </div>
</template>

<script>
export default {
    name: "FilterButtons",
    data() {
        return {
            filter: "",
        };
    },
    watch: {
        filter(newValue) {
            this.$emit("filter-change", newValue);
        },
    },
};
</script>

<style scoped>
.filter {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 83%;
    padding-top: 2%;
    padding-bottom: 1%;
    flex-wrap: wrap;
    flex-direction: row;

}

.filter>* {
    margin: 0 10px;
    flex: 1 1 auto;
    max-width: calc(33.33% - 20px);
}

@media only screen and (max-width: 800px) {
    .filter {
        flex-wrap: wrap;
        flex-direction: row;
    }

    .filter>* {
        max-width: 33.33%;
        margin: 10px;
    }

    .filter>*:nth-child(odd) {
        margin-right: 1%;
    }

    .filter>*:nth-child(even) {
        margin-left: 1%;
    }
}
</style>