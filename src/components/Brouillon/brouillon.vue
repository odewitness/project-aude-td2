<template>
    <div class="search-filter-sort-container">
        <i-input v-model="name" @input="filterByName" placeholder="Recherchez un pays" />
        <p>Il y a {{ numCountries }} pays correspondant à cette recherche</p>
        <i-button @click="sortCountriesByPopulationAsc">Tri croissant nombre d'habitants</i-button>
        <i-button @click="sortCountriesByPopulationDesc">Tri décroissant nombre d'habitants</i-button>
    </div>
    <!-- <div class="container">
    <template v-if="filteredCountries.length > 0 && toggled">
      <i-card v-for="country in filteredCountries.slice((page - 1) * itemsPerPage, page * itemsPerPage)"
        :key="country.alpha3Code" class="country-card" color="light">
        <template #image>
          <img :src="country.flag" alt="" style="max-height: 200px; width: auto;">
        </template>
        <template #header>
          <h4 class="card-title">
            {{ country.translations.fr }}
          </h4>
        </template>
        <p class="card-capital">
          <strong>Capitale :</strong> {{ country.capital }}
        </p>
        <p class="card-language">
          <strong>{{ country.languages.length > 1 ? 'Langues officielles : ' : 'Langue officielle : ' }}</strong>
          <span v-for="(language, index) in country.languages" :key="index">
            {{ language.name }}
            <span v-if="index < country.languages.length - 1">- </span>
          </span>
        </p>
        <p>
          <strong>Population :</strong> {{ country.population.toLocaleString('fr-FR') }} habitants
        </p>
        <i-button color="primary">Voir plus</i-button>
      </i-card>
    </template>
    <template v-else-if="filteredCountries.length > 0 && !toggled">
      <i-card v-for="country in filteredCountries" :key="country.alpha3Code" class="country-card" color="light">
        <template #image>
          <img :src="country.flag" alt="" style="max-height: 200px; width: auto;">
        </template>
        <template #header>
          <h4 class="card-title">
            {{ country.translations.fr }}
          </h4>
        </template>
        <p class="card-capital">
          <strong>Capitale :</strong> {{ country.capital }}
        </p>
        <p class="card-language">
          <strong>{{ country.languages.length > 1 ? 'Langues officielles : ' : 'Langue officielle : ' }}</strong>
          <span v-for="(language, index) in country.languages" :key="index">
            {{ language.name }}
            <span v-if="index < country.languages.length - 1">- </span>
          </span>
        </p>
        <p>
          <strong>Population :</strong> {{ country.population.toLocaleString('fr-FR') }} habitants
        </p>
        <i-button color="primary">Voir plus</i-button>
      </i-card>
    </template>
    <template v-else>
      <i-alert color="danger">
        <template #icon>
          <i-icon name="ink-danger" />
        </template>
        <p>Pas de pays correspondant à cette recherche</p>
      </i-alert>
    </template>
  </div> -->


    <div class="container">
        <template v-if="filteredCountries.length > 0">
            <i-card v-for="country in filteredCountries" :key="country.alpha3Code" class="country-card" color="light">
                <template #image>
                    <img :src="country.flag" alt="" style="max-height: 200px; width: auto;">
                </template>
                <template #header>
                    <h4 class="card-title">
                        {{ country.translations.fr }}
                    </h4>
                </template>
                <p class="card-capital">
                    <strong>Capitale :</strong> {{ country.capital }}
                </p>
                <p class="card-language">
                    <strong>{{ country.languages.length > 1 ? 'Langues officielles : ' : 'Langue officielle : ' }}</strong>
                    <span v-for="(language, index) in country.languages" :key="index">
                        {{ language.name }}
                        <span v-if="index < country.languages.length - 1">- </span>
                    </span>
                </p>
                <p>
                    <strong>Population :</strong> {{ country.population.toLocaleString('fr-FR') }} habitants
                </p>
                <i-button color="primary">Voir plus</i-button>
            </i-card>
        </template>
        <template v-else>
            <p class="no-results">Pas de pays correspondant à cette recherche</p>
        </template>
    </div>
</template>

<script>
import { getAllCountries } from '@/services/api/countriesAPI.js';

export default {
    name: 'CountryCard',
    props: {
        msg: String
    },
    data() {
        return {
            countries: [],
            allCountries: [],
            name: ''
        };
    },
    computed: {
        filteredCountries: function () {
            return this.countries.filter(country => country.translations.fr.toLowerCase().startsWith(this.name.toLowerCase()));
        },
        numCountries: function () {
            return this.filteredCountries.length;
        },
    },
    methods: {
        sortCountriesByPopulationAsc: function () {
            this.countries = this.countries.sort((a, b) => a.population - b.population);
        },
        sortCountriesByPopulationDesc: function () {
            this.countries.sort((a, b) => b.population - a.population);
        },
    },
    mounted() {
        getAllCountries()
            .then(data => {
                this.countries = data;
                this.allCountries = data;
                // this.sortByNameDesc();
            })
            .catch(error => console.error(error));
    }
};
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.country-card {
    width: 20%;
    height: 50%;
    margin: 20px;
    flex-basis: 30%;
}

.country-card img {
    width: 10px;
    height: 10%;
    object-fit: cover;
    object-position: center;
}

.card-title {
    text-align: center;
}

.search-filter-sort-container {
    /* display: flex; */
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 83%;
    padding-top: 2%;
    padding-bottom: 1%;
}

.checkbox-container {
    /* display: flex; */
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 83%;
    padding-top: 2%;
    padding-bottom: 1%;
}

.i-select {
    /* width: 80%; */
}

.no-results {
    margin: 20px;
    text-align: center;
    color: red;
}
</style>


// if (this.searchValue) {
      //   tempCountries = tempCountries.filter((country) => {
      //     return Object.values(country).some((value) => {
      //       if (typeof value === "string") {
      //         return value.toUpperCase().includes(this.searchValue.toUpperCase());
      //       }
      //       return false;
      //     });
      //   });
      // }
</i-toggle>
    <i-number-input v-model="limitationCountryPerPage" placeholder="Enter a number.." />