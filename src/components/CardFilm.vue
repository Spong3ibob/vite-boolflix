<script>

export default {
    props: {
        info: Object,
    }
}
</script>
<template>
    <div class="card-film">
        <img :src='`http://image.tmdb.org/t/p/w300/${info.poster_path}`' alt="">
        <h2 class="film">{{ info.original_title }}</h2>
        <h3 class="film">{{ info.title }}</h3>
        <h4 class="film">{{ info.original_language }}</h4>
        <h4 class="film">{{ info.vote_average }}</h4>
    </div>  
</template>
<style>
.card-film{
background-color: black;
}
.film{
    color: white;
}
</style>