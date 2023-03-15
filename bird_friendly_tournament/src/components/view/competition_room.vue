<template lang="">
    <main>
        <div class="container-fluid homebox-2">
          <div class="row">
            <div class="col-lg-10">
              <div class="row row-cols-1 row-cols-md-2 g-4">
                  <CompetitionWaitingList v-bind:list="list"/>
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
                  <select>
                    <option
                      v-for="(type, address) in locations"
                      v-bind:key="address"
                    >
                      {{ type.address }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Loại chim</label>
                  <select>
                    <option
                      v-for="(type, name) in listBirdType"
                      v-bind:key="name"
                    >
                      {{ type.name }}
                    </option>
                  </select>
                </div>      
              </div>
              <div class="modal-footer btn btn-light">
                <input type="button" class="btn" data-bs-dismiss="modal" value="Hủy">
                <button type="button" class="btn btn-success" value="Tạo" @click.prevent='CreateMatch'></button>
              </div>
            </form>
          </div>
        </div>
      </div>
  </main>
</template>

<script>
import axios from 'axios';
import CompetitionWaitingList from './competition_waiting_list.vue'
export default {
  data() {
    return {
      date: "",
      placeId: "",
      birdTypeId: "",
      createBirdId: "",
      list: [],
      listBirdType: [
        {
          "id": 1,
          "name": "Chim cúc"
        },
        {
          "id": 2,
          "name": "Chim sơn ca"
        },
        {
          "id": 3,
          "name": "Chim hoàng yến"
        },
        {
          "id": 4,
          "name": "Chim họa mi"
        },
        {
          "id": 5,
          "name": "Chim khướu"
        },
        {
          "id": 6,
          "name": "Chim cu gáy"
        }
      ],
      locations: [
        {
          "id": 1,
          "address": "Quán CF thi đấu chim chuyên nghiệp Quận 1"
        },
        {
          "id": 2,
          "address": "Nhà thi đấu đa năng Quận 2"
        },
        {
          "id": 3,
          "address": "Công viên Hoàng Văn Út Quận 3"
        },
        {
          "id": 4,
          "address": "Quán CF 1986 Bình Khánh TP. Long Xuyên"
        }
      ]
    };
  },
  mounted() {
    axios.get("https://aspnetcore-staging.azurewebsites.net/competitions/").then(response => {
      this.list = response.data.competitionRecords;
      console.log("response:", response.data.competitionRecords)
      console.log("competition list:", this.list)
    })
  },
  CreateMatch() {
    axios.post(
      "https://aspnetcore-staging.azurewebsites.net/competitions/",
      {
        date: this.date,
        placeId: this.placeId,
        birdTypeId: this.birdTypeId,
        createBirdId: this.createBirdId
      }).then((response) => {
        this.$router.push('/competition-room');
      }).catch((error) => {
        window.alert("Thông tin trận đấu chưa chính xác.");
      });
  },
  components: {
    CompetitionWaitingList,
  }
}
</script>
<style lang="">
    
</style>