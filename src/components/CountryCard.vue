<template>
  <div class="select-container">
    <i-select v-model="selected" :options="options" autocomplete placeholder="Choose something.." @search="onSearch"
      clearable @update:model-value="onSelectOption"><template #prepend>
        <span>Je trie...</span>
      </template></i-select>
  </div>

  <div class="container">
    <i-card v-for="country in countries" :key="country.alpha3Code" class="country-card" color="light">
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
    const defaultOptions = [
      { id: 1, label: 'les noms des pays par ordre croissant' },
      { id: 2, label: 'les noms des pays par ordre décroissant' },
      { id: 3, label: "le nombre d'habitants par ordre croissant" },
      { id: 4, label: "le nombre d'habitants par ordre décroissant" }
    ];

    return {
      countries: [],
      selected: null,
      options: defaultOptions,
      defaultOptions
    };
  },
  methods: {
    onSearch(query) {
      this.options = this.defaultOptions
        .filter((option) => {
          return option.label.toLowerCase().includes((query || '').toLowerCase());
        });
    },
    sortByNameDesc() {
      this.countries.sort((a, b) => b.name.localeCompare(a.name));
    },
    sortByNameAsc() {
      this.countries.sort((a, b) => a.name.localeCompare(b.name));
    },
    sortByPopulationDesc() {
      this.countries.sort((a, b) => b.population - a.population);
    },
    sortByPopulationAsc() {
      this.countries.sort((a, b) => a.population - b.population);
    },
    onSelectOption(option) {
      if (option.id == 1) {
        this.sortByNameAsc();
      }
      if (option.id == 2) {
        this.sortByNameDesc();
      }
      if (option.id == 3) {
        this.sortByPopulationAsc();
      }
      if (option.id == 4) {
        this.sortByPopulationDesc();
      }
      // this.countries = [...this.countries];
    }
  },
  mounted() {
    getAllCountries()
      .then(data => {
        this.countries = data;
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

.select-container {
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
</style>