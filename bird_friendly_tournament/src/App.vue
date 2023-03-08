<script setup>
  import Navigator from "./components/layout/navigator.vue"
  import Footer from "./components/layout/footer.vue" 
</script>

<template>
  
  <main>    
    <Navigator/>    
    <router-view/>
    <Footer/>
  </main>
</template>

<style scoped>

</style>
