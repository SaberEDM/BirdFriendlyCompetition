<template lang="">
  <header>
    <nav class="navbar navbar-expand-md fixed-top">
      <div class="container-fluid">
        <div class="row">
          <div>
            <h1>BFC</h1>
          </div>
          <div>
            <h5>Bird Friendly Competition</h5>
          </div>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Trang Chủ</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to='/match'>Lịch Thi Đấu</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link " to="/result">Kết Quả</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link " to="/rank">Bảng Xếp Hạng</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link " to="/competition">Thi đấu</router-link>
            </li>
          </ul>
        </div>
        <div class="d-flex">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active highlight" to="/register">Đăng Ký</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link highlight" to="/login">Đăng Nhập</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>