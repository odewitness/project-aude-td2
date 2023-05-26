<template>
  <div>
    <div id="country-card" class="search-filter-sort-container">
      <SearchInput v-model="searchValue" @input="searchValue = $event.target ? $event.target.value : ''" />
      <SortDropdown :key="sortDropdownKey" :options="options" v-model:selectedSortOption="selectedSortOption"
        v-model:ascending="isAscending" />
      <FilterButtons @filter-change="updateFilteredCountries" />
    </div>

    <ReinitializeButton @reset-filters="resetFilters" />
    <div class="display-options">
      <DisplayNumberMatch :filteredCountries="filteredCountries" :itemsTotal="itemsTotal" />
      <i-toggle v-model="isPaginationEnabled">Activer la pagination</i-toggle>
      <i-pagination v-if="isPaginationEnabled" v-model="currentPage" :items-total="itemsTotal"
        :items-per-page="countriesPerPage" />
    </div>

    <DisplayTitleFilter :filter="filter" />

    <div>
      <div class="container" v-if="filteredCountries.length > 0 && isPaginationEnabled">
        <card-design
          v-for="country in filteredCountries.slice((currentPage - 1) * countriesPerPage, currentPage * countriesPerPage)"
          :key="country.alpha3Code" :country="country">
        </card-design>
      </div>
      <div class="container" v-else-if="filteredCountries.length > 0 && !isPaginationEnabled">
        <card-design v-for="country in filteredCountries" :key="country.alpha3Code" :country="country">
        </card-design>
      </div>
      <div class="container" v-else>
        <NoResult />
      </div>
    </div>

    <div>
      <i-pagination v-if="isPaginationEnabled" v-model="currentPage" :items-total="itemsTotal"
        :items-per-page="countriesPerPage" />
    </div>

    <div>
      <p></p>
    </div>
  </div>
</template>

<script>
import { getAllCountries } from '@/services/api/countriesAPI.js';
import SearchInput from '@/components/SearchInput.vue'
import SortDropdown from '@/components/SortDropdown.vue'
import FilterButtons from '@/components/Filter/FilterButtons.vue'
import CardDesign from '@/components/CardsDesign.vue'
import ReinitializeButton from '@/components/ReinitializeButton.vue'
import DisplayTitleFilter from '@/components/Filter/DisplayTitleFilter.vue'
import DisplayNumberMatch from '@/components/DisplayNumberMatch.vue'
import NoResult from '@/components/Layout/NoResult.vue'

export default {
  name: 'MainContent',
  props: {
    msg: String
  },
  components: {
    SearchInput,
    SortDropdown,
    FilterButtons,
    CardDesign,
    ReinitializeButton,
    DisplayTitleFilter,
    DisplayNumberMatch,
    NoResult
  },
  data() {
    return {
      countries: [],
      allCountries: [],
      searchValue: '',
      isAscending: true,
      selectedSortOption: null,
      defaultSort: { id: 1, label: 'Par ordre alphabétique' },
      options: [
        { id: 1, label: 'Par ordre alphabétique' },
        { id: 2, label: 'Par nombre d\'habitants' }
      ],
      filter: "",
      isPaginationEnabled: false,
      currentPage: 1,
      countriesPerPage: 10,
      sortDropdownKey: 1,
    };
  },
  computed: {
    filteredCountries: function () {
      // On fait une copie des pays qui seront filtrés et triés
      let tempCountries = this.countries

      // Filtre via barre de recherche
      if (this.searchValue != '' && this.searchValue) {
        tempCountries = tempCountries.filter((item) => {
          return item.translations.fr.toUpperCase().startsWith(this.searchValue.toUpperCase())
        })
      }

      // Filtre par continent
      if (this.filter != '') {
        tempCountries = tempCountries.filter((item) => {
          return item.region === this.filter
        })
      }

      // Tri des pays selon le type de tri sélectionné
      tempCountries = tempCountries.sort((a, b) => {
        // Tri par ordre alphabétique
        if (!this.selectedSortOption || this.selectedSortOption.id === 1) {
          return a.name.localeCompare(b.name, 'fr')
        }
        // Tri par nombre d'habitants
        else if (this.selectedSortOption.id === 2) {
          return a.population - b.population
        }
      })

      // Inversion de l'orde de tri
      if (!this.isAscending) {
        tempCountries.reverse()
      }

      return tempCountries
    },
    itemsTotal: function () {
      return this.filteredCountries.length
    }
  },
  methods: {
    resetFilters() {
      this.filter = ''
      this.selectedSortOption = null
      this.isAscending = true
      this.searchValue = ''
      this.sortDropdownKey++
    },
    updateFilteredCountries(filter) {
      this.filter = filter
    },
  },
  mounted() {
    // Récupérer les options de tri depuis les données locales
    const sortOptions = JSON.parse(localStorage.getItem('sortOptions'));
    const filterOption = JSON.parse(localStorage.getItem('filterOption'));

    if (sortOptions) {
      this.selectedSortOption = sortOptions.selectedSortOption;
      this.isAscending = sortOptions.isAscending;
    }

    if (filterOption) {
      this.filter = filterOption.filter;
      this.searchValue = filterOption.searchValue;
    }
    getAllCountries()
      .then(data => {
        this.countries = data;
        this.allCountries = data;
      })
      .catch(error => console.error(error));
  },
  watch: {
    // Écouter les changements de la propriété selectedSortOption et sauvegarder les options de tri dans les données locales
    selectedSortOption() {
      const sortOptions = { selectedSortOption: this.selectedSortOption, isAscending: this.isAscending };
      localStorage.setItem('sortOptions', JSON.stringify(sortOptions));
    },

    // Écouter les changements de la propriété isAscending et sauvegarder les options de tri dans les données locales
    isAscending() {
      const sortOptions = { selectedSortOption: this.selectedSortOption, isAscending: this.isAscending };
      localStorage.setItem('sortOptions', JSON.stringify(sortOptions));
    },

    // Écouter les changements de la propriété filter et sauvegarder l'état du filtre dans les données locales
    filter() {
      const filterOption = { filter: this.filter };
      localStorage.setItem('filterOption', JSON.stringify(filterOption));
    },

    searchValue() {
      const filterOption = { filter: this.filter, searchValue: this.searchValue };
      localStorage.setItem('filterOption', JSON.stringify(filterOption));
    },

  },

};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.search-filter-sort-container {
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 83%;
  padding-top: 2%;
}

.pagination {
  display: flex;
  justify-content: center;
}

.display-options {
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 83%;
  padding-top: 2%;
  padding-bottom: 1%;
}
</style>