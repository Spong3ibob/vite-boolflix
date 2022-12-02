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
<div class="container-header">
    <h1>BOOLFLIX</h1>
    <form @submit.prevent="$emit('performSerch')">
        <input
        type="text" 
        placeholder="Inizia la ricerca..."
        v-model="store.filmSearch">
        <button type="submit">4<font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
    </form>
</div>
</template>

<style>
.container-header{
    background-color: black;
    height: 100px;
    width: 100%;
}

h1{
    color: red;
}
button{
    border: none;

}
</style>



