<template>
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
              <router-link class="nav-link" to="/result">Kết Quả</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/rank">Bảng Xếp Hạng</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/competition-room">Thi đấu</router-link>
            </li>
          </ul>
        </div>
        <div class="d-flex" v-if="token==''">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link highlight" to="/register">Đăng Ký</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link highlight" to="/login">Đăng Nhập</router-link>
            </li>
          </ul>
        </div>
        <div class="d-flex" v-else>
          <ul class="navbar-nav">
            <li class="nav-item">
              <div class="dropdown show ">
                <button class="btn user-dropdown nav-link btn-light dropdown-toggle" type="button" id="dropdownMenuLink"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <img class="img-headeruser" src="assets/images/user.jpg" alt="">
                  nguyen123
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" href="user_profile.html">
                    <div class="user-icon"><i class="fa-solid fa-user"></i></div> Cá nhân
                  </a>
                  <a class="dropdown-item" href="#">
                    <div class="user-icon"><i class="fa-solid fa-calendar-days"></i></div>Lịch thi
                    đấu
                  </a>
                  <a class="dropdown-item" href="#">
                    <div class="user-icon"><i class="fa-solid fa-ranking-star"></i>
                    </div>Xếp hạng
                  </a>
                  <a class="dropdown-item" @click.prevent="Logout">
                    <div class="user-icon"> <i class="fa-solid fa-right-from-bracket"></i></div>
                    Đăng xuất
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isLogin: true,
      token: "",
    };
  },
  mounted() {
      this.user = JSON.parse(localStorage.getItem("token"))
  },
  methods: {
    Logout() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>
<style lang="">
    
</style>