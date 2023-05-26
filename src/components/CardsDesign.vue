<template>
    <!-- ATTENDUS : Animations grâce aux évènements mouseouver et mouseleave  -->
    <div class="country-card" @mouseover="addShadow" @mouseleave="removeShadow">

        <!-- NOTE : Plusieurs balises <template> ci-après car utilisation de la librairie Inkline pour créer les cards  -->
        <i-card>
            <template #image>
                <img :src="country.flag" alt="">
            </template>

            <template #header>
                <h4 class="card-title">
                    {{ country.translations.fr }}
                </h4>
            </template>

            <p>
                <strong>Capitale : </strong> {{ country.capital }}
            </p>

            <p>
                <!-- PETIT + : On adapte l'affichage s'il y a une ou plusieurs langues -->
                <strong>{{ country.languages.length > 1 ? 'Langues officielles : ' : 'Langue officielle : ' }}</strong>
                {{ country.languages.map(language => language.name).join(' - ') }}

            </p>

            <p>
                <strong>Population : </strong>
                <!-- PETIT + : On formate le nombre d'habitants à la française et on adapte l'affichage s'il y a moins d'1 habitant -->
                {{ country.population.toLocaleString('fr-FR') }} {{ country.population < 1 ? 'habitant' : 'habitants' }}
                    </p>

                    <i-button color="primary" @click="visible = true">Voir plus</i-button>
        </i-card>
    </div>
    <CountryModal v-model="visible" :country="country" />
</template>

<script>

import CountryModal from '@/components/Layout/CountryModal.vue'

export default {
    name: 'CardDesign',
    props: {
        country: {
            type: Object,
            required: true
        }
    },
    components: {
        CountryModal
    },
    data() {
        return {
            visible: false
        }
    },
    methods: {
        addShadow(event) {
            event.currentTarget.style.boxShadow = '0px 0px 15px 5px rgba(0,0,0,0.2)'
            event.currentTarget.style.transform = 'scale(1.02)'
        },
        removeShadow(event) {
            event.currentTarget.style.boxShadow = ''
            event.currentTarget.style.transform = ''
        },
    },
}
</script>

<style scoped>
.country-card {
    width: 20%;
    height: 50%;
    margin: 20px;
    flex-basis: calc(100% / 3 - 40px);
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
    transform-origin: center center;
}

.country-card img {
    max-height: 200px;
    width: auto;
    object-fit: cover;
    object-position: center;
}

.card-title {
    text-align: center;
}

@media screen and (max-width: 600px) {
    .country-card {
        width: 100%;
    }
}

@media screen and (max-width: 800px) {
    .country-card {
        flex-basis: calc(100% / 2 - 30px);
        margin: 10px;
    }
}

@media screen and (max-width: 600px) {
    .country-card {
        flex-basis: 100%;
        margin: 10px 0;
    }
}
</style>


    <!-- <i-modal v-model="visible">
        <template #header>
            <h2>
                {{ country.translations.fr }}
            </h2>
        </template>
        <p><strong>Nom natif :</strong> {{ country.nativeName }}</p>
        <p>
            <strong>Capitale :</strong> {{ country.capital }}
        </p>

        <p><strong>Région :</strong> {{ country.region }}</p>
        <p><strong>Sous-région :</strong> {{ country.subregion }}</p>
        <p><strong>Gentilé :</strong> {{ country.demonym }}</p>

        <p>
            PETIT + : On adapte l'affichage s'il y a une ou plusieurs langues
            <strong>{{ country.languages.length > 1 ? 'Langues officielles : ' : 'Langue officielle : ' }}</strong>
            {{ country.languages.map(language => language.name).join(' - ') }}

        </p>

        <p>
            <strong>Population :</strong>
            PETIT + : On formate le nombre d'habitants à la française et on adapte l'affichage s'il y a moins d'1 habitant
            {{ country.population.toLocaleString('fr-FR') }} {{ country.population < 1 ? 'habitant' : 'habitants' }} </p>

                <p>
                    <strong>Monnaie : </strong>
                    <span v-for="(currency, index) in country.currencies" :key="index">
                        {{ currency.name }} ({{ currency.symbol }})
                    </span>
                </p>
    </i-modal> -->