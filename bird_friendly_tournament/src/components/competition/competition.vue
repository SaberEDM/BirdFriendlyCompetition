<template lang="">
    <div class="card shadow" style="width: 90%;">
        <a href="details" class="post-thumb" target="_blank">
            <img v-bind:src="competition.image" height="240px" class="card-img-top" alt="...">
        </a>
        <div class="card-body">
            <h5 class="card-title">Phòng của ABC</h5>
        </div>
        <h5 class="card-title"><router-link to='/competition-details'>Tham gia</router-link></h5>
        </div>

</template>
<script>
export default {
    props: {
    competition: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style lang="">
    
</style>