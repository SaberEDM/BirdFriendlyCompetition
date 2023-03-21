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
              <router-link class="nav-link" to="/result">Kết Quả</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/rank">Xếp hạng</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/competition-room">Thi đấu</router-link>
            </li>
          </ul>
        </div>
        <div class="d-flex" v-if="this.user == null">
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
                  <div class="user-icon"><i class="fa-solid fa-user"></i> Tài khoản</div>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">             
                    <router-link to="/profile" class="dropdown-item">
                      <div class="user-icon"><i class="fa-solid fa-user"></i> Trang cá nhân</div> 
                    </router-link>             
                  <a class="dropdown-item" @click.prevent="Logout">
                    <div class="user-icon"> <i class="fa-solid fa-right-from-bracket"></i> Đăng xuất</div>                    
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
      user: "",
    };
  },
  mounted() {
      this.user = localStorage.getItem("token")
      console.log("user", this.user)
  },
  methods: {
    Logout() {
      localStorage.clear();     
      this.$router.push("/login").then(this.$router.go);
    }
  },
};
</script>
