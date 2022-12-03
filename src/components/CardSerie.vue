<script>

export default {
    props: {
        information: Object,
    }
}
</script>
<template>
    <div class="card-serie">
        <img :src='`http://image.tmdb.org/t/p/w185/${information.poster_path}`' alt="">
        <div class="description">
            <h2>{{ information.original_name }}</h2>
            <h4>{{ information.original_language }}</h4>
            <h4>★{{ information.vote_average }}</h4>
        </div>
    </div>
</template>

<style >
.card-serie{
    position: relative;
}
</style>