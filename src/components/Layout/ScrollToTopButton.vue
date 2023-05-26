<template>
    <div id="scroll-to-top">
        <!-- ATTENDUS : Animation grâce à l'évènements click -->
        <button @click="scrollToTop">
            <i class="arrow-up"></i>
        </button>
    </div>
</template>

<script>
export default {
    name: 'ScrollToTopButton',
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }
}
</script>

<style>
#scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;
}

#scroll-to-top button {
    background-color: #157C9E;
    color: white;
    border-radius: 50%;
    border: none;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 50px;
    height: 50px;
}

#scroll-to-top button:hover {
    background-color: #6f7070;
}

#scroll-to-top .arrow-up {
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
}
</style>