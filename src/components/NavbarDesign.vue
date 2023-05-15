<template>
    <i-navbar class="navbar">
        <i-navbar-brand to="/" class="logo">
            <span></span>>
        </i-navbar-brand>
        <i-navbar-collapsible>
            <i-nav>
                <i-nav-item to="/">
                    Accueil
                </i-nav-item>
            </i-nav>
        </i-navbar-collapsible>
    </i-navbar>
</template>

<script>
export default {
    name: 'NavbarDesign'
}
</script>

<style scoped>
.logo {
    background-image: url('@/assets/drapeau.png');
    background-size: contain;
    background-repeat: no-repeat;
    height: 50px;
    width: 50px;
    display: inline-block;
}
</style>
