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
              <router-link class="nav-link" to="/competition">Thi đấu</router-link>
            </li>
          </ul>
        </div>
        <div class="d-flex">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link highlight" to="/register">Đăng Ký</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link highlight" to="/login">Đăng Nhập</router-link>
            </li>
            <!-- <li v-else-if="$router.currentRoute.path !='/'" class="">
              <div class="dropdown">
                <div class="dropbtn">{{ user.username}} User001</div>
                <div class="dropdown-content">
                  <a @click.prevent="Logout">
                    <span>Đăng Xuất</span>
                  </a>
                </div>
              </div>
            </li> -->
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
      user: "",
    };
  },
  mounted() {
      this.user = JSON.parse(localStorage.getItem("user"))
  },
  methods: {
    Logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      this.$router.push("/");
      window.location.reload();
    },
  },
};
</script>
<style lang="">
    
</style>