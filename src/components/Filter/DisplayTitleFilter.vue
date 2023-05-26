<template>
    <div class="title-container">
        <h2 class="title">{{ title }}</h2>
    </div>
</template>

<script>

const continents = {
    "Africa": "Pays d'Afrique",
    "Americas": "Pays d'Amériques",
    "Antarctic Ocean": "Pays d'Antarctique",
    "Asia": "Pays d'Asie",
    "Europe": "Pays d'Europe",
    "Oceania": "Pays d'Océanie",
    "": "Tous les pays"
};

export default {
    name: "DisplayTitleFilter",
    props: {
        filter: String
    },
    computed: {
        title() {
            return continents[this.filter]
        }
    }
}
</script>

<style>
.title {
    text-align: center;
}
</style>

<!-- NOTE -->
<!-- Au début, utilisation d'un switch, mais pas optimal -->
<!-- computed: {
        title() {
            switch (this.filter) {
                case "Africa":
                    return "Afrique";
                case "Americas":
                    return "Amériques";
                case "Antarctic Ocean":
                    return "Antarctique";
                case "Asia":
                    return "Asie";
                case "Europe":
                    return "Europe";
                case "Oceania":
                    return "Océanie";
                default:
                    return "";
            }
        }
    }
 -->