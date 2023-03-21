<template lang="">
    <div class="card shadow" style="width: 100%;" v-if="competition.status == 'Ended'">
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
          <p>
            Trạng thái: Đã kết thúc
          </p>
          <p>
            Người tạo: {{competition.challengerName}}
          </p>
        </div>
        <div class="col-12 decorbox " style="text-align: center;">
          <router-link :to="{name: 'competitionDetails', params: {id:competition.id}}">Xem kết quả</router-link>
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