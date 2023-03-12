<template lang="">
    <div class="card shadow" style="width: 90%;" v-if="competition.status == 'WaitingForOpponent'">
        <div class="card-body">
          <h3>
            <center><p> Phòng {{competition.id}} </p></center>
          </h3>
          <p>
            Ngày thi đấu: {{competition.date}}
          </p>
          <p>
            Địa điểm: {{competition.place}}
          </p>
          <p>
            Loại chim: {{competition.birdType}}
          </p>
          <p>
            Điểm: {{competition.elo}}
          </p>
          <p>
            Trạng thái: Đang chờ
          </p>
          <p>
            Người tạo: {{competition.challengerName}}
          </p>
        </div>
        <div class="col-12 decorbox " style="text-align: center;" v-if="competition.participantRecords > 0">
            <p>Xem kết quả</p>
        </div>
        <div class="col-12 decorbox " style="text-align: center;" v-else>
          <router-link to='/competition-details'>Tham gia</router-link>
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