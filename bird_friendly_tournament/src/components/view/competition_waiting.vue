<template lang="">
  <div class="col" v-if="competition.status == 'WaitingForOpponent'">
    <div class="card shadow" style="width: 90%;border-radius:15px">
        <div class="card-body">
          <h3>
            <p>Phòng {{competition.id}} </p>
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
          <router-link :to="{name:'competitionDetail', params:{id:competition.id}}"> Tham gia </router-link>
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