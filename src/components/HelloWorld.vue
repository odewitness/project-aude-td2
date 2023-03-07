<template>
<div class="hello">
    <div :key="index" v-for="(pays, index) in pays">
        <h1>
            {{pays.translations.fr}}
        </h1>
        <img :src="pays.flag">
    </div>
</div>

</template>

<script>
import axios from 'axios'

export default{
    name: 'HelloWorld',
    data(){
        return{
            pays: null,
        }
    },
    mounted(){
        axios 
        .get('https://restcountries.com/v2/all')
        .then((reponse) => 
        {
            this.pays = reponse.data;
            console.log(this.pays)
        });
},
}
</script>

<style scoped>

</style>