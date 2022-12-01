<script>
import { store } from '../store'
import AppCard from '../components/AppCard.vue'
export default {
    data(){
        return{
            store
        }
    },
    components: {
        AppCard,
    }

}
</script>

<template>
<AppCard v-for="movie in store.movies" :info="movie"/>
</template>

<style>
</style>