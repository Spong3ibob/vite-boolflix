<script>
import { store } from '../store'
import CardFilm from './CardFilm.vue'
import CardSerie from './CardSerie.vue'



export default {
    data(){
        return{
            store
        }
    },
    components: {
        CardFilm,
        CardSerie,
      
    }

}
</script>

<template>
    <h2>I Migliori film</h2>
    <div class="container-film">
        <CardFilm 
        v-for="movie in store.movies" :info="movie"
        />
    </div>
    <h2>Le Migliori Serie</h2>
    <div class="container-serie">
        <CardSerie 
        v-for="serie in store.series"  :information="serie"
        />
    </div>
</template>

<style>
.container-film{
    display: flex;
}
.container-serie{
    display: flex;
}
h2{
    color: white;
    background-color: black;
}
</style>