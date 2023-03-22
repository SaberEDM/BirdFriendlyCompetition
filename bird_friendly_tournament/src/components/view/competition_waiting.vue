<template lang="">
  <div class="col" v-if="competition.status == 'WaitingForOpponent'">
    <div class="card shadow" style="width: 90%;border-radius:15px">
      <a href="#" class="post-thumb" target="_blank">
                      <img v-bind:src="competition.image" height=240 class="card-img-top" alt="...">  
                    </a>
        <div class="card-body">
          <h2 class="card-title">
                Phòng {{competition.id}} 
          </h2>
          <h7 class="card-subtitle" >{{competition.challengerName}}</h7><br>
          <div class="row">
            <div class="col-6">
            <p class="card-text">
            Ngày thi đấu: {{competition.date}}
          </p >
          <p class="card-text">
            Địa điểm: {{competition.place}}
          </p>
          <p class="card-text">
            Loại chim: {{competition.birdType}}
          </p>
            </div>
            <div class="col-6">
          <p class="card-text">
            Điểm: {{competition.elo}}
          </p>
          <p class="card-text" v-if="competition.status == 'WaitingForOpponent'">
            Trạng thái: Đang chờ 
          </p>
        </div>
        </div>
        </div>
        <div class="col-12 decorbox " style="text-align: center;" v-if="competition.participantRecords > 0">
            <p>Xem kết quả</p>
        </div>
        <div class="col-12" style="text-align: center;" v-else>

          <router-link :to="{name:'competitionDetail', params:{id:competition.id}}"> <button class="join-in">Tham gia</button> </router-link>
        </div>
        </div>
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
};
</script>
<style lang="">
    
</style>