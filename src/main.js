// Le premier import permet de récupérer la fonction createApp depuis le framework Vue.js. C’est elle qui nous permettra d’initialiser la page principale au lancement de notre application. 
import { createApp } from 'vue'
// Le second import va justement récupérer le Single File Component qui contient les informations sur la page que nous souhaitons afficher dans notre application.
import App from './App.vue'

import { Inkline, components } from '@inkline/inkline';
import '@inkline/inkline/inkline.scss';

import "./main.scss";

// La fonction createApp initialise d’abord un nouvel objet gérant notre application Vue.
const app = createApp(App);

app.use(Inkline, {
    components
});

// Une fois cet objet instancié, on appelle sa méthode mount() qui permet d’indiquer où placer notre page dans la structure HTML de notre site.
app.mount('#app');