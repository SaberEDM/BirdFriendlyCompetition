<template lang="">
    <main>
        <div class="container-fluid homebox-2">
          <div class="row">
            <div class="col-lg-8">
              <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                  <div class="card shadow" style="width: 90%;">
                    <a href="details" class="post-thumb" target="_blank">
                      <img src="assets/images/signin.jpg" height="240px" class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                      <h4 class="card-title">nguyen123</h4>
                      <p class="card-text">
                        Thời gian: 14/02/2023
                      </p>
                      <p class="card-text">
                        Loại chim: chim sẻ
                      </p>
                      <p class="card-text">
                        Địa điểm: Quận 3
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow" style="width: 90%;">
                    <a href="details" class="post-thumb" target="_blank">
                      <img src="assets/images/signin.jpg" height="240px" class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                      <h4 class="card-title">nguyen123</h4>
                      <p class="card-text">
                        Thời gian: 14/02/2023
                      </p>
                      <p class="card-text">
                        Loại chim: chim sẻ
                      </p>
                      <p class="card-text">
                        Địa điểm: Quận 3
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow" style="width: 90%;">
                    <a href="details" class="post-thumb" target="_blank">
                      <img src="assets/images/signin.jpg" height="240px" class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                      <h4 class="card-title">nguyen123</h4>
                      <p class="card-text">
                        Thời gian: 14/02/2023
                      </p>
                      <p class="card-text">
                        Loại chim: chim sẻ
                      </p>
                      <p class="card-text">
                        Địa điểm: Quận 3
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow" style="width: 90%;">
                    <a href="details" class="post-thumb" target="_blank">
                      <img src="assets/images/signin.jpg" height="240px" class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                      <h4 class="card-title">nguyen123</h4>
                      <p class="card-text">
                        Thời gian: 14/02/2023
                      </p>
                      <p class="card-text">
                        Loại chim: chim sẻ
                      </p>
                      <p class="card-text">
                        Địa điểm: Quận 3
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <button type="button" class="createbox" data-bs-toggle="modal" data-bs-target="#taoPhongDau">
                <i class="fa-regular fa-plus"></i> Tạo phòng đấu
              </button>
              <div class="container-fluid shadow searchbox">
                <h2>Tìm kiếm</h2>
                <div class="decor-search"></div>
                <br>
                <div class="input-group">
                  <div class="form-inline">
                    <input type="search" id="form1" class="form-control" placeholder="Tìm kiếm" />
                  </div>
                  <button type="button" class="btn btn-success">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
              <div class="container-fluid shadow searchboxtype">
                <h2>Tìm kiếm</h2>
                <div class="decor-search"></div>
                <br>
                <div class="input-group">
                  <div class="form-inline">
                    <input type="search" id="form1" class="form-control" placeholder="Tìm kiếm" />
                  </div>
                  <button type="button" class="btn btn-success">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
            </div>
    
            <div class="empty"></div>
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
                  <input type="datetime" name="date" class="form-control" required>
                </div>
                <div class="form-group">
                  <label>Loại chim</label>
                  <input type="text" name="birdtype" class="form-control" required>
                </div>
                <div class="form-group">
                  <label>Địa chỉ</label>
                  <input type="text" name="address" class="form-control" required>
                </div>
    
              </div>
              <div class="modal-footer btn btn-light">
                <input type="button" class="btn " data-bs-dismiss="modal" value="Hủy">
                <input type="submit" class="btn btn-success" value="Tạo">
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