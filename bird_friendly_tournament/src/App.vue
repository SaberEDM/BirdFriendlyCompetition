<script setup>
  import Navigator from "./components/layout/navigator.vue"
  import Footer from "./components/layout/footer.vue" 
  import HomePage from "./components/view/home_page.vue"
</script>

<template>
  <main>
    <router-view />
    <Navigator/>
    <HomePage/>
    <Footer/>
  </main>
</template>

<style scoped>

</style>
