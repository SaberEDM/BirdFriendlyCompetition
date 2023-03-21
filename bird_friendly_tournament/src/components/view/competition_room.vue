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
                <br>
                <div class="form-group">
                  <label>Khu vực</label>
                  <select class="form-select" v-model= placeId>
                    <option
                      v-for="(location, address) in locations"
                      v-bind:key="address" v-bind:location='location'
                    >
                      {{ location.address }}
                    </option>
                  </select>
                </div>
                <br>
                <div class="form-group">
                  <label>Loại chim</label>
                  <select class="form-select" v-model='birdTypeId'>
                    <option
                      v-for="(type, name) in listBirdType"
                      v-bind:key="name"
                    >
                      {{ type.name }}
                    </option>
                  </select>
                </div>
                <br>
                <div class="form-group">
                  <label>Chim tham gia thi đấu</label>
                  <select class="form-select" v-model='createBirdId'>
                    <option
                      v-for="(bird, index) in listBird"
                      v-bind:key="index" v-bind:bird='bird'
                    >
                      {{ bird.name }}
                    </option>
                  </select>
                </div>  
              </div>
              <div class="modal-footer btn btn-light">
                <input type="button" class="btn" data-bs-dismiss="modal" value="Hủy">
                <button type="button" class="btn btn-success" value="Tạo" @click.prevent='CreateMatch'>Tạo</button>
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
      listBird: [],
      list: [],
      location: {
        type: Object,
        default: null
      },
      bird: {
        type: Object,
        default: null
      },
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
    if (localStorage.getItem("token")) {
            this.token = localStorage.getItem("token")
            console.log("token:", this.token)
        }
        axios.get("https://aspnetcore-staging.azurewebsites.net/me", {
            headers: {
                "Authorization": `Bearer ${this.token}`,
            }

        }).then(response => {
            this.listBird = response.data.baseUserRecord.birdRecords;
            console.log('list bird:', this.listBird)
        })
  },
  methods: {
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
  },
  components: {
    CompetitionWaitingList,
  }
}
</script>
<style lang="">
    
</style>