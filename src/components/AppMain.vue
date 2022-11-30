<script>
import axios from 'axios'
import { store } from '../store'
export default {
    data(){
        return{
            characters:[],
            store,
        }
    },
    created(){
         axios.get("https://api.themoviedb.org/3/search/movie?api_key=eea6eb22c600ece669bce7dbab045759&query=${'film'}").then((resp) => {
            this.characters = resp.data.results;
            console.log(resp.data.results)
         })
    }

}
</script>

<template>
<ul>
    <li  v-for="character in characters">{{character.title}}</li>
</ul>
</template>

<style>
</style>