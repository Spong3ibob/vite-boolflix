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

    <input type="text" v-model="store.film">
    <button @click="$emit('ricerca')">Cerca</button>


</template>

<style>
h1{
    color: red;
}
</style>



