<script>
import AppHeader from '../src/components/AppHeader.vue'
import AppMain from '../src/components/AppMain.vue'
import { store } from './store'
import axios from 'axios'

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data(){
    return {
      store,
  
    }
  },
  methods: {
    getData(){
      axios.get("https://api.themoviedb.org/3/search/movie?",{
        params:{
          api_key:'eea6eb22c600ece669bce7dbab045759',
          query: this.store.filmSearch,
          language: 'it-IT',
        }
      })
      .then((result) => {
      this.store.movies=result.data.results;
      console.log(result.data.results);
      })
      .catch((err) => {
        console.log(err)
      })
    axios.get("https://api.themoviedb.org/3/search/tv?",{
      params:{
        api_key:'eea6eb22c600ece669bce7dbab045759',
        query: this.store.filmSearch,
        language: 'it-IT',
      }
    })
    .then((risultato) => {
      this.store.series=risultato.data.results;
      console.log(risultato.data.results);
    })
    .catch((err) => {
        console.log(err)
    })
  },
  
  }
}
</script>

<template>
<AppHeader @performSerch="getData"/>
<AppMain/>
</template>

<style lang="scss">
@import "./global.scss";
</style>
