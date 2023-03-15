<template lang="">
    <main>
      <div class="container-fluid homebox-2">
        <div class="row">
          <div class="col-lg-12">
            <div class="card shadow" style="width: 90%;">
              <h3> Phòng của </h3>
              <div class="card-body">
                <h5 class="card-title"><router-link to='/competition-details'>Tham gia</router-link></h5>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </main>
</template>

<script>
import axios from 'axios'
export default {
  amounted() {
    axios
      .get("https://aspnetcore-staging.azurewebsites.net/Competitions/" + this.$route.params.id)
      .then((response) => {
        console.log('competition room: ', response)
      });
  }
}
</script>
<style lang="">
    
</style>