<script>
export default {
    data(){
        return{
            characters:[],
        }
    },
    created(){
         axios.get("https://api.themoviedb.org/3/movie/550?api_key=eea6eb22c600ece669bce7dbab045759").then((resp) => {
            this.characters = resp.data;
            console.log(resp.data)
         })
    }

}
</script>

<template>
<h1>BOOLFLIX</h1>
<ul>
    <li  v-for="character in characters"> {{}}</li>
</ul>
</template>

<style>
h1{
    color: red;
}
</style>



<template>
  <div class="container">
    <div class="bar">
        <h3>Found 62 charcters</h3>
    </div>
    <AppCard
    v-for="character in characters"
    :info="character"
    />
  </div>
 
</template>