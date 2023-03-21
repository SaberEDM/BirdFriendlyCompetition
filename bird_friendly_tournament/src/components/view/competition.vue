<template lang="">
    <div class="card shadow" style="width: 90%;">
        <div class="card-body">
          <h3>
            <p> Phòng {{competition.id}} </p>
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
          <p v-if="competition.status == 'WaitingForOpponent'">
            Trạng thái: Đang chờ
          </p>
          <p>
            Người tạo: {{competition.challengerName}}
          </p>
          <img v-bind:src="competition.image"/>
        </div>
        <div class="col-12 decorbox " style="text-align: center;" v-if="competition.participantRecords > 0">
            <p>Xem kết quả</p>
        </div>
        <div class="col-12 decorbox " style="text-align: center;" v-else>
          <router-link>Tham gia</router-link>
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