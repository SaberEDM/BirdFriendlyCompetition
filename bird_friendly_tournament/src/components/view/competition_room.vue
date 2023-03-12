<template lang="">
    <main>
        <div class="container-fluid homebox-2">
          <div class="row">
            <div class="col-lg-10">
              <div class="row row-cols-1 row-cols-md-2 g-4">
                  <CompetitionList v-bind:competitionList="competitionList"/>
              </div>
            </div>
            <div class="col-lg-2">
              <button type="button" class="createbox" data-bs-toggle="modal" data-bs-target="#taoPhongDau">
                <i class="fa-regular fa-plus"></i> Tạo phòng đấu
              </button>
            </div>
            <div class="empty"></div>
          </div>
        </div>
      </main>
      <div id="taoPhongDau" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h4 class="modal-title">Tạo phòng thi đấu</h4>
              </div>
              <div class="modal-body">
                <input type="hidden">
                <div class="form-group">
                  <label>Thời gian</label>
                  <input type="date" name="date" class="form-control" required v-model="date">
                </div>
                <div class="form-group">
                  <label>Khu vực</label>
                  <input type="text" name="address" class="form-control" required v-model="placeId">
                </div>
                <div class="form-group">
                  <label>Loại chim</label>
                  <input type="text" name="birdtype" class="form-control" required v-mode="birdTypeId">
                </div>      
              </div>
              <div class="modal-footer btn btn-light">
                <input type="button" class="btn " data-bs-dismiss="modal" value="Hủy">
                <router-link to="/your-room"  class="btn btn-success" value="Tạo" @click.prevent='CreateMatch'></router-link>
              </div>
            </form>
          </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import CompetitionList from '../competition/competition_list.vue'
export default {
  components: CompetitionList,
  data() {
    return {
      date: "",
      placeId: "",
      birdTypeId: "",
      createBirdId: "",
      competitionId: "",
      competitionList: []
    };
  },
  mounted() {
    axios.get("https://aspnetcore-staging.azurewebsites.net/Competitions/"),
    {
      id: this.competitionId
    }.then(response => {
      (this.competitionList = response);
    })
  },
  CreateMatch() {
      axios.post(
        "https://aspnetcore-staging.azurewebsites.net/Competitions",
        {
          date: this.date,
          placeId: this.placeId,
          birdTypeId: this.birdTypeId,
          createBirdId: this.createBirdId
        }).then((response) => {
        // console.log('response: ', response);
        // localStorage.setItem("token", response),
        // localStorage.setItem("user",response),
        this.$router.push('/competition-room');
      }).catch((error) => {
          window.alert("Thông tin trận đấu chưa chính xác.");
        });
    },
}
</script>
<style lang="">
    
</style>