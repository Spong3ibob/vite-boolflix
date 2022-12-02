<script>

export default {
    props: {
        info: Object,
    }
}
</script>
<template>
    <img :src='`http://image.tmdb.org/t/p/w300/${info.poster_path}`' alt="">
    <h2>{{ info.original_title }}</h2>
    <h3>{{ info.title }}</h3>
    <h4>{{ info.original_language }}</h4>
    <h4>{{ info.vote_average }}</h4>

</template>
<style>

</style>