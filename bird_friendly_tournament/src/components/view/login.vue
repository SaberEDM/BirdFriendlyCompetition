<template lang="">
    <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <div class="login100-form-title" style="background-image: url(src/assets/images/bg-01.jpg);">
              <span class="login100-form-title-1">
                Đăng nhập
              </span>
            </div>
    
            <form class="login100-form validate-form">
              <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
                <span class="label-input100">Đăng Nhập</span>
                <input class="input100" type="text" name="username" v-model='username' placeholder="Tên Đăng nhập">
                <span class="focus-input100"></span>
              </div>
    
              <div class="wrap-input100 validate-input m-b-18" data-validate="Password is required">
                <span class="label-input100">Mật Khẩu</span>
                <input class="input100" type="password" name="pass" v-model='password' placeholder="Nhập mật khẩu">
                <span class="focus-input100"></span>
              </div>
    
              <div class="flex-sb-m w-full p-b-30">
                <div class="contact100-form-checkbox">
                  <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
                  <label class="label-checkbox100" for="ckb1">
                    Ghi nhớ
                  </label>
                </div>
                <div>
                  <a href="#" class="txt1">
                    Quên mật khẩu ?
                  </a>
                </div>
              </div>
              <div class="row">
                <div class="col-6 center container-login100-form-btn">
                  <button class="login100-form-btn" @click.prevent='Login'>
                    Đăng nhập
                  </button>
                </div>
                <div class="col-6 text-center ">
                  <router-link class="login100-form-btn" to="/"> 
                    Trở về
                  </router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    Login() {
      axios.post(
        "https://aspnetcore-staging.azurewebsites.net/login",
        {
          username: this.username,
          password: this.password
        }).then((response) => {
          const token = response.data.token
          localStorage.setItem("token", token)
          this.$router.push('/profile').then(this.$router.go); 
      }).catch((error) => {
          window.alert("Sai tài khoản hoặc mật khẩu");
        });
    },
  },
};
</script>