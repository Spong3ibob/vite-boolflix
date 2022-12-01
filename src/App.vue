<script>
import AppHeader from '../src/components/AppHeader.vue'
import AppMain from '../src/components/AppMain.vue'
import { store } from './store'
import axios from 'axios'

export default {
  components: {
    AppHeader,
    AppMain
  },
  methods: {
    getData(){
      axios.get("https://api.themoviedb.org/3/search/movie?",{
        params:{
          api_key:'eea6eb22c600ece669bce7dbab045759',
          query: this.store.filmSerch,
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
    },
    getData(){
    axios.get("https://api.themoviedb.org/3/search/tv?",{
      params:{
        api_key:'eea6eb22c600ece669bce7dbab045759',
        query: this.store.filmSerch,
        language: 'it-IT',
      }
    })
    .then((result) => {
      this.store.tv=result.data.results;
      console.log(result.data.results);
    })
    .catch((err) => {
        console.log(err)
    })
  },
  data(){
    return {
      store,
    }
  }
  
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
