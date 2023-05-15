<!-- <template>
  <div id="country-card" class="search-filter-sort-container">
    <i-select v-model="selectedTri" :options="optionsTri" autocomplete placeholder="Faites un choix.." @search="onSearch"
      clearable @update:model-value="onSelectOption"><template #prepend>
        <span>Je trie...</span>
      </template></i-select>
  </div>

  <div class="search-filter-sort-container">
    <i-select v-model="selectedAffichage" :options="optionsAffichage" autocomplete placeholder="Faites un choix.."
      @search="onSearch" clearable @update:model-value="onSelectOption"><template #prepend>
        <span>J'affiche...</span>
      </template></i-select>
  </div>

  <div class="search-filter-sort-container">
    <i-input v-model="name" @input="filterByName" placeholder="Recherchez un pays" />
    <p>Il y a {{ numCountries }} pays correspondant à cette recherche</p>
  </div>

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

const defaultOptions = [
  { id: 1, label: 'les noms des pays par ordre croissant' },
  { id: 2, label: 'les noms des pays par ordre décroissant' },
  { id: 3, label: "le nombre d'habitants par ordre croissant" },
  { id: 4, label: "le nombre d'habitants par ordre décroissant" }
];

const defaultOptionsAffichage = [
  { id: 5, label: "les pays d'Europe" },
  { id: 6, label: "les pays d'Afrique" },
  { id: 7, label: "les pays d'Asie" },
  { id: 8, label: "les pays d'Océanie" },
  { id: 9, label: "les pays d'Amérique" },
  { id: 10, label: "les pays d'Antarctique" },
  { id: 11, label: "tous les pays" }
];

export default {
  name: 'CountryCard',
  props: {
    msg: String
  },
  data() {
    return {
      countries: [],
      allCountries: [],
      name: '',
      selectedTri: null,
      optionsTri: defaultOptions,
      optionsAffichage: defaultOptionsAffichage,
      defaultOptions,
      defaultOptionsAffichage
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
    filterByContinent(continent) {
      if (continent === null) {
        this.countries = this.allCountries;
      } else {
        this.countries = this.allCountries.filter(country => country.region === continent);
      }
    },
    filterByName() {
      this.filteredCountries = this.countries.filter(country => country.translations.fr.toLowerCase().startsWith(this.name.toLowerCase()));
    },
    onSelectOption(option) {
      switch (option.id) {
        case 1:
          this.sortByNameAsc();
          break;
        case 2:
          this.sortByNameDesc();
          break;
        case 3:
          this.sortByPopulationAsc();
          break;
        case 4:
          this.sortByPopulationDesc();
          break;
        case 5:
          this.filterByContinent("Europe");
          break;
        case 6:
          this.filterByContinent("Africa");
          break;
        case 7:
          this.filterByContinent("Asia");
          break;
        case 8:
          this.filterByContinent("Oceania");
          break;
        case 9:
          this.filterByContinent("Americas");
          break;
        case 10:
          this.filterByContinent("Antarctic Ocean");
          break;
        case 11:
          this.filterByContinent(null);
          break;
        default:
          // réinitialiser la liste de pays
          this.filterByContinent(null);
      }
    }
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
</style> -->