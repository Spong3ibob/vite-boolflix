<script>

export default {
    props: {
        information: Object,
    }
}
</script>
<template>
    <img :src='http://image.tmdb.org/t/p/w500/${information.poster_path}' alt="">
    <h2 class="serietv">{{ information.original_name }}</h2>
    <h3 class="serietv">{{ information.name }}</h3>
    <h4 class="serietv">{{ information.original_language }}</h4>
    <h4 class="serietv">{{ information.vote_average }}</h4>

</template>
<style >
.serietv{
    color: aqua;
}
</style>