<template>
    <div class="sort-dropdown">
        <!-- ATTENDUS : Utilisations des directives -->
        <i-select v-model="selected" :options="options" placeholder="Je trie par...">
            <!-- NOTE : Deuxième balise <template> ci-après car utilisation de la librairie Inkline pour créer le sort  -->
            <template #append>
                <!-- ATTENDUS : Animations grâce à l'évènement click  -->
                <i-button @click="toggleAscending" :disabled="selectedSortOption === null">{{ sortOrderSymbol }}</i-button>
            </template>
        </i-select>
    </div>
</template>

<script>
export default {
    name: 'SortDropdown',
    props: {
        options: Array,
        selectedSortOption: String,
        ascending: Boolean
    },
    data() {
        return {
            selected: this.selectedSortOption,
            sortOrder: this.ascending
        }
    },
    computed: {
        sortOrderSymbol() {
            return this.sortOrder ? '↑' : '↓';
        }
    },
    methods: {
        toggleAscending() {
            if (this.selected !== null) {
                this.sortOrder = !this.sortOrder;
                this.$emit('update:ascending', this.sortOrder);
            }
        }
    },
    watch: {
        selected(newValue) {
            this.$emit('update:selectedSortOption', newValue);
        },
        selectedSortOption(newValue) {
            this.selected = newValue;
        },
        ascending(newValue) {
            this.sortOrder = newValue;
        }
    }
}
</script>

<style scoped>
.sort-dropdown {
    padding-bottom: 1em;
}
</style>
