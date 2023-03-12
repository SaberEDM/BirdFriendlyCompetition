<template lang="">
    <main>
        <div class="container-fluid homebox-2">
          <div class="row">
            <div class="col-lg-12">
                  <div class="card shadow" style="width: 90%;">
                    <h3> Phòng của ABC </h3>
                    <div class="card-body">
                      <h5 class="card-title"><router-link to='/competition-details'>Tham gia</router-link></h5>
                    </div>
                  </div>
              </div>
            </div> 
          </div>
      </main>
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
                  <label>Tên phòng đấu</label>
                  <input type="text" name="name" class="form-control" required>
                </div>
                <div class="form-group">
                  <label>Thời gian</label>
                  <input type="date" name="date" class="form-control" required>
                </div>
                <div class="form-group">
                  <label>Loại chim</label>
                  <input type="text" name="birdtype" class="form-control" required>
                </div>
                <div class="form-group">
                  <label>Khu vực</label>
                  <input type="text" name="address" class="form-control" required>
                </div>
    
              </div>
              <div class="modal-footer btn btn-light">
                <input type="button" class="btn " data-bs-dismiss="modal" value="Hủy">
                <router-link to="/your-room"  class="btn btn-success" value="Tạo"></router-link>
              </div>
            </form>
          </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style lang="">
    
</style>