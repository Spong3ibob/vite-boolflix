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
<CardFilm 
v-for="movie in store.movies" :info="movie"
/>
<CardSerie 
v-for="serie in store.series"  :information="serie"
/>
</template>

<style>
</style>