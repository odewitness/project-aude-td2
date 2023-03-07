<!-- Cette première balise contient simplement la structure HTML correspondant à l’élément que nous souhaitons construire. On y retrouve des balises HTML standards, nous permettant d’ajouter ici une image, et un bloc contenant un titre et un paragraphe.  -->
<template>
  <div class="dog-card">
    <img class="pictureUrl" src="https://media-be.chewy.com/wp-content/uploads/2022/09/27095535/cute-dogs-pembroke-welsh-corgi.jpg"/>
    <div>
      <h2 class="firstname">Pluto</h2>
      <p class="breed">Saint-Hubert</p>
    </div>  
  </div>
</template>

<script>
    export default {
        name: 'DogCard',
        props: {
          firstname: {type: String, required: true},
          breed: String, 
          pictureUrl: {type: String, default:"https://my-best-kennel.com/pictures/default.png"}
	}
    }
</script>

<style>
    .dog-card {
        /* display: flex; */
    }
    
    h2 {
        font-size: 20px;
    }
</style>