<script>

export default {
    props: {
        info: Object,
    }
}
</script>
<template>
    <div class="card-film">
        <img :src='`http://image.tmdb.org/t/p/w185/${info.poster_path}`' alt="">
        <div class="description">
        <h2>{{ info.original_title }}</h2>
        <h4>{{ info.original_language }}</h4>
        <h4>★{{ info.vote_average }}</h4>
        </div>
    </div>  
</template>
<style lang="scss">
.card-film{
    position: relative;
}
.description{
    display: block;
    color: white;
    background-color: rgba($color: #808080, $alpha: 0.8);
    position: absolute;
    top: 0;
    padding: 5px;
    height: 100%;
    width: 100%;
}
.description:hover{
    display: none;
   
}
</style>