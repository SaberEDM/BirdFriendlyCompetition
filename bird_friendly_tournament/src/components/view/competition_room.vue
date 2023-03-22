<template lang="">
    <main>
        <div class="container-fluid homebox-2">
          <div class="row">
            <div class="col-lg-10">
              <div class="row row-cols-1 row-cols-md-2 g-4">
                  <CompetitionWaitingList v-bind:list="list"/>
              </div>
            </div>
            <div class="col-lg-2" v-if="this.token==null">
            </div>
            <div class="col-lg-2" v-else>
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
                  <select class="form-select" v-model="placeId">
                    <option
                      v-for="(location, index) in locations"
                      :value="location.id"
                    >
                      {{location.address}}
                    </option>
                </select>
                </div>
                <br>
                <div class="form-group">
                  <label>Loại chim</label>
                  <select class="form-select" v-model="birdTypeId">
                    <option
                      v-for="(bird, index) in listBirdType"
                      :value="bird.id"
                    >
                      {{bird.name}}
                    </option>
                </select>
                </div>
                <br>
                <div class="form-group">
                  <label>Chim tham gia thi đấu</label>
                  <select class="form-select" v-model='createBirdId'>
                    <option
                      v-for="(bird, index) in listBird"
                      :value="bird.id"
                    >
                      {{bird.name}}
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
          "id": 11,
          "name": "Vàng anh"
        },
        {
          "id": 12,
          "name": "Sáo"
        },
        {
          "id": 13,
          "name": "Chào Mào"
        },
        {
          "id": 14,
          "name": "Chích Chòe"
        },
        {
          "id": 15,
          "name": "Khứu"
        },
        {
          "id": 16,
          "name": "Họa Mi"
        },
        {
          "id": 17,
          "name": "Vành Khuyên"
        }
      ],
      locations: [
        {
          "id": 3,
          "address": "Nhà thi đấu quận 1"
        },
        {
          "id": 4,
          "address": "Nhà thi đấu quận 2"
        },
        {
          "id": 5,
          "address": "Quán Cà Phê Thi đấu chim Quận 3"
        },
        {
          "id": 6,
          "address": "Vinhome grandpark Quận 9"
        },
        {
          "id": 7,
          "address": "Quán CF chim, Công viên phần mềm Quang Trung"
        },
        {
          "id": 8,
          "address": "Nhà Thi Đấu Bình Khánh, TP. Long Xuyên"
        },
        {
          "id": 9,
          "address": "19 Đường Bánh Cống, TP. Cần Thơ"
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
        },
        {
          headers: {
            "Authorization": `Bearer ${this.token}`,
          },
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