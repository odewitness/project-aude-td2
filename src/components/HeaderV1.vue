<template>
    <i-navbar>
        <i-navbar-brand to="/">
            Navbar
        </i-navbar-brand>
        <i-navbar-collapsible>
            <i-nav>
                <i-nav-item to="/">
                    Home
                </i-nav-item>
                <i-nav-item to="/about">
                    About
                </i-nav-item>
                <i-nav-item to="/contact">
                    Contact
                </i-nav-item>
            </i-nav>
            <i-input placeholder="Type something..">
                <template #append>
                    <i-button color="primary">
                        <i-icon name="ink-search" />
                    </i-button>
                </template>
            </i-input>
        </i-navbar-collapsible>
    </i-navbar>
    <i-header id="cover-header" cover class="_text-align:center _color:black">
        <h1 class="text">Découvrez les pays du monde</h1>
        <p class="text">Comparez et triez de nombreuses données concernant tous les pays de la planète !</p>
        <i-button color="primary">C'est parti !</i-button>
    </i-header>
</template>

<script>
export default {
    name: 'HeaderV1',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .text {
    color: black;
} */

#cover-header {
    background-image: url("@/assets/map.png");

}
</style>
