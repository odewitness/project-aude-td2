<template>
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
        <strong>Population :</strong> {{ country.population }} habitants
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
    return {
      countries: []
    };
  },
  mounted() {
    getAllCountries()
      .then(data => {
        this.countries = data;
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
</style>