<template>
    <i-modal :visible="localVisible">
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
            <strong>{{ country.languages.length > 1 ? 'Langues officielles : ' : 'Langue officielle : ' }}</strong>
            {{ country.languages.map(language => language.name).join(' - ') }}
        </p>

        <p>
            <strong>Population :</strong>
            {{ country.population.toLocaleString('fr-FR') }} {{ country.population < 1 ? 'habitant' : 'habitants' }} </p>

                <p>
                    <strong>Monnaie : </strong>
                    <span v-for="(currency, index) in country.currencies" :key="index">
                        {{ currency.name }} ({{ currency.symbol }})
                    </span>
                </p>
    </i-modal>
</template>

<script>
export default {
    name: 'CountryModal',
    props: {
        visible: {
            type: Boolean,
            required: false,
        },
        country: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            localVisible: this.visible,
        }
    },
    watch: {
        visible(newVal) {
            this.localVisible = newVal;
        }
    }
}
</script>