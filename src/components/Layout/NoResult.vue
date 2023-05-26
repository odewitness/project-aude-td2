<template>
    <i-alert color="danger">
        <template #icon>
            <i-icon name="ink-danger" />
        </template>
        <p>Pas de pays correspondant à cette recherche</p>
    </i-alert>
</template>

<script>
export default {
    name: 'NoResult'
};
</script>