<template>
    <div>
        <i-pagination v-if="isPaginationEnabled" :current-page="currentPage" :items-total="itemsTotal"
            :items-per-page="countriesPerPage" />
    </div>
</template>

<script>
export default {
    name: 'PaginationActivated',
    props: {
        isPaginationEnabled: Boolean,
        currentPage: Number,
        itemsTotal: Number,
        countriesPerPage: Number
    },
    watch: {
        isPaginationEnabled: function (newVal, oldVal) {
            if (newVal !== oldVal) {
                this.updateCurrentPage();
            }
        }
    },
    methods: {
        updateCurrentPage: function () {
            if (!this.isPaginationEnabled) {
                this.$emit('update:currentPage', 1);
            }
        }
    }
};
</script>