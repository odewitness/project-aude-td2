<template>
    <div>
        <i-toggle :is-pagination-enabled="isPaginationEnabled" @update:is-pagination-enabled="togglePagination">Activer la
            pagination</i-toggle>
    </div>
</template>

<script>
export default {
    name: 'TogglePagination',
    props: {
        isPaginationEnabled: Boolean,
    },
    methods: {
        togglePagination(newValue) {
            this.$emit('update:is-pagination-enabled', newValue);
        },
    },
};
</script>
