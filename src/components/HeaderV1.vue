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
</style>
