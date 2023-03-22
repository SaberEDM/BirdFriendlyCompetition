<template lang="">
       <main>
        <div class="col-12">
               <div class="col-12 custom ">
                      <div class="container ">
                             <div class="row ">
                                    <div class="col-3">
                                           <div class="decor1"> </div>
                                           <h4> LỊCH THI ĐẤU GẦN ĐÂY</h4>
                                    </div>
                             </div>
                      </div>
                      <div class="container-fluid">
                             <div class="row" style="padding-left: 10%;">
                                    <div class=" boxthidau col-sm-3">
                                           <div class="row edit">
                                                  <div class="col-3 coleditright">
                                                         <img class="photoedit" src="src/assets/img/OIP.jpg"
                                                                alt="alt" />
                                                  </div>
                                                  <div class="box col-6">
                                                         <p>9:30</p>
                                                         <p>T5, 23/02</p>
                                                         <div class="line"></div>
                                                         <p>Giao hữu 1vs1</p>
                                                  </div>
                                                  <div class="col-3 coleditleft">
                                                         <img class="photoedit" src="src/assets/img/OIP.jpg"
                                                                alt="alt" />
                                                  </div>
                                                  <div class="col-12 decorbox " style="text-align: center;">
                                                         <p class="pedit"> Đang diễn ra</p>
                                                  </div>
                                           </div>
                                    </div>
                                    <div class=" boxthidau col-sm-3">
                                           <div class="row edit">
                                                  <div class="col-3 coleditright">
                                                         <img class="photoedit" src="src/assets/img/OIP.jpg"
                                                                alt="alt" />
                                                  </div>
                                                  <div class="box col-6">
                                                         <p>9:30</p>
                                                         <p>T5, 23/02</p>
                                                         <div class="line"></div>
                                                         <p>Giao hữu 1vs1</p>
                                                  </div>
                                                  <div class="col-3 coleditleft">
                                                         <img class="photoedit" src="src/assets/img/OIP.jpg"
                                                                alt="alt" />
                                                  </div>
                                                  <div class="col-12 decorbox " style="text-align: center;">
                                                         <p> Đang diễn ra</p>
                                                  </div>
                                           </div>
                                    </div>
                                    <div class=" boxthidau col-sm-3">
                                           <div class="row edit">
                                                  <div class="col-3 coleditright">
                                                         <img class="photoedit" src="src/assets/img/OIP.jpg"
                                                                alt="alt" />
                                                  </div>
                                                  <div class="box col-6">
                                                         <p>9:30</p>
                                                         <p>T5, 23/02</p>
                                                         <div class="line"></div>
                                                         <p>Giao hữu 1vs1</p>
                                                  </div>
                                                  <div class="col-3 coleditleft">
                                                         <img class="photoedit" src="src/assets/img/OIP.jpg"
                                                                alt="alt" />
                                                  </div>
                                                  <div class="col-12 decorbox " style="text-align: center;">
                                                         <p> Đang diễn ra</p>
                                                  </div>
                                           </div>
                                    </div>
                             </div>
                      </div>
                      <div class="">
                      </div>
               </div>
               <div class="col-12 custom  ">
                      <div class="container ">
                             <div class="row ">
                                    <div class="col-3">
                                           <div class="decor1"> </div>
                                           <h4> LỊCH THI ĐẤU ĐÃ DIỄN RA</h4>
                                    </div>
                             </div>
                      </div>
                      <div class="container-fluid ">
                             <div class="row" style="padding-left: 10%;">
                                   <div class=" boxthidau col-sm-4">                           
                                          <CompetitionEndedList v-bind:list="list"/>
                                   </div>
                             </div>
                             <div class="empty"></div>
                      </div>

               </div>
        </div>
 </main>
</template>

<script>
import axios from 'axios'
import CompetitionEndedList from '../view/competition_end_list.vue'
export default {
       data() {
              return {
                     list: []
              }
       },
       mounted() {
              axios.get("https://aspnetcore-staging.azurewebsites.net/competitions/").then(response => {
                     this.list = response.data.competitionRecords;
                     console.log("response:", response.data.competitionRecords)
                     console.log("competition list:", this.list)
              })
       },
       components: {
              CompetitionEndedList,
       }
}
</script>
<style lang="">
    
</style>