<template lang="">
    <main>
      <div class="container-fluid homebox-2">
        <div class="card-body">
          <h3 class="card-title"> Phòng số {{room.id}}</h3>
          <p class="card-text">
            Ngày thi đấu: {{room.date}}
          </p>
          <p class="card-text">
            Loại chim: {{room.birdType}}
          </p>
          <p class="card-text">
            Điểm: {{room.elo}}
          </p>
          <p class="card-text">
            Địa điểm thi đấu: {{room.place}}
          </p>
          <p class="card-text">
            Tên của chim đối thủ: {{player.name}}
          </p>
          <p class="card-text">
            Điểm của chim đối thủ: {{player.elo}}
          </p>
          <p class="card-text">
            Hình ảnh:
            <img class="img-fluid" v-bind:src="player.image" alt="">
          </p>
        </div>
        <div class="card-body">
          <button type="button" class="btn btn-primary" @click.prevent="Join">Thách đấu</button>
        </div>
      </div>
    </main>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      competition: {
        type: Object,
        default: null
      },
      id: "",
      room: "",
      player: "",
    }
  },
  mounted() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token")
      console.log("token:", this.token)
    }
    axios
      .get("https://aspnetcore-staging.azurewebsites.net/Competitions/" + this.$route.params.id)
      .then((response) => {
        console.log('competition room: ', response.data)
        this.competition = response.data
        this.room = response.data.competitionRecord
        this.player = this.room.participantRecords[0].bird
        console.log('room: ', this.room)
        console.log('player', this.player)
      });
  },
  methods: {
    Join() {
      axios.post("https://aspnetcore-staging.azurewebsites.net/Competitions/join",
        {
          competitionId: Number(this.$route.params.id),
          birdId: this.player.id
        },
        {
          headers: {
            "Authorization": `Bearer ${this.token}`,
          },
        }).then((response) => {
          this.$router.push('/competition-room');
        });
    }
  }
}
</script>
<style lang="">
    
</style>