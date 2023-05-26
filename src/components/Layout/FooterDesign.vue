<!-- ATTENDUS : Avoir un footer -->
<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>Restons en contact</h4>
                    <ul>
                        <li><a href="mailto:audepora82@orange.fr">audepora82@orange.fr</a></li>
                        <li><a href="https://www.linkedin.com/in/aude-pora/" target="_blank">LinkedIn</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Liens utiles</h4>
                    <ul>
                        <li><a href="https://restcountries.com/" target="_blank">API REST Countries</a></li>
                        <li><a href="https://www.inkline.io/" target="_blank">Inkline</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Réalisation</h4>
                    <ul>
                        <li>Aude Pora</li>
                        <li>IMAC 2</li>
                        <li>2023</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterDesign",
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    max-width: 1170px;
    margin: auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

ul {
    list-style: none;
}

.footer {
    background-color: #DDE2E4;
    padding: 70px 0;
}

.footer-col {
    flex-basis: 33.33%;
    padding: 0 7%;
}

.footer-col h4 {
    font-size: 18px;
    color: black;
    margin-bottom: 35px;
    font-weight: 500;
    position: relative;
}

.footer-col h4::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #157C9E;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
}

.footer-col ul li:not(:last-child) {
    margin-bottom: 10px;
}

.footer-col ul li a {
    color: black;
    display: block;
    transition: all 0.3s ease;
}

.footer-col ul li a:hover {
    color: #157C9E;
    padding-left: 8px;
}

/*responsive*/
@media(max-width: 767px) {
    .footer-col {
        width: 50%;
        margin-bottom: 30px;
    }
}

@media(max-width: 574px) {
    .footer-col {
        width: 100%;
    }
}
</style>