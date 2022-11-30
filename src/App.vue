<script>
import AppHeader from '../src/components/AppHeader.vue'
import AppMain from '../src/components/AppMain.vue'
import { store } from './store'

export default {
  components: {
    AppHeader,
    AppMain
  },
  methods: {
    invio(){
      console.log(film)
    }
  },
  data(){
    return {}
  }
  
}
</script>

<template>
<AppHeader @ricerca="invio"/>
<AppMain/>
</template>

<style lang="scss">
@import "./global.scss";
</style>
