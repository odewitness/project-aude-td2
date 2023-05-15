<template>
  <div class="search-input">
    <!-- ATTENDUS : Utilisations des directives -->
    <!-- ATTENDUS : Animation grâce à l'évènements input -->
    <i-input v-model="searchValue" placeholder="Je recherche un pays" @input="handleInput" />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    value: String
  },
  data() {
    return {
      searchValue: this.value
    }
  },
  watch: {
    value(newValue) {
      this.searchValue = newValue
    },
    searchValue(newValue) {
      this.$emit('input', newValue)
    }
  },
  methods: {
    handleInput(event) {
      if (event.target.value === '') {
        console.log('Input event emitted with empty value')
      }
    }
  }
}
</script>


<style scoped>
.search-input {
  padding-bottom: 1em;
}
</style>
