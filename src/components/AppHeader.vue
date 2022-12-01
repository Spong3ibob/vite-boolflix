<script>
import { store } from '../store';

export default {
    data(){
        return {
            store,
        }
    },
}
</script>

<template>
    <h1>BOOLFLIX</h1>
    <form @submit.prevent="$emit('performSerch')">
        <input
        type="text" 
        placeholder="Inizia la ricerca..."
        v-model="store.filmSearch">
        <button type="submit">Cerca</button>
    </form>

</template>

<style>
h1{
    color: red;
}
</style>



