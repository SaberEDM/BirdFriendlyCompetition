<template lang="">
    <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <div class="login100-form-title" style="background-image: url(assets/images/bg-01.jpg);">
              <span class="login100-form-title-1">
                Đăng ký
              </span>
            </div>
    
            <form class="login100-form validate-form">
              <div class="wrap-input100 validate-input m-b-26" data-validate="Không bỏ trống !">
                <span class="label-input100">Tài khoản</span>
                <input class="input100" type="text" name="username" placeholder="Tài khoản">
                <span class="focus-input100"></span>
              </div>
              <div class="wrap-input100 validate-input m-b-26" data-validate="Không bỏ trống !">
                <span class="label-input100">Tên người dùng</span>
                <input class="input100" type="text" name="name" placeholder="Họ & tên người dùng" v-model='username'>
                <span class="focus-input100"></span>
              </div>           
    
              <div class="wrap-input100 validate-input m-b-18" data-validate="Không bỏ trống !">
                <span class="label-input100">Mật Khẩu</span>
                <input class="input100" type="password" name="pass" placeholder="Nhập mật khẩu" v-model='password'>
                <span class="focus-input100"></span>
              </div>

              <div class="wrap-input100 validate-input m-b-26" data-validate="Không bỏ trống !">
                <span class="label-input100">Email</span>
                <input class="input100" type="text" name="email" placeholder="Email của bạn" v-model='email'>
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
                <div class="col-6 container-login100-form-btn">
                  <button class="login100-form-btn" @click='register'>
                    Đăng ký
                  </button>
                </div>
            </div>
            <div class="col-6 text-center ">
                <button class="login100-form-btn">
                    <router-link to="/"> Trở về </router-link>
                </button>
            </div>
            </form>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      token: "",
    };
  },
  methods: {
    async Login() {
      await fetch(
        "https://aspnetcore-staging.azurewebsites.net/register",
        {
          method: "POST",
          body: JSON.stringify({
          username: this.username,
          password: this.password,
          email: this.email,
        }),
          headers: {
            "Content-Type": "text/plain",
          },
        }).then((response) => {
        console.log('response: ', response);
        const tokenStr = response.data.token;       
        localStorage.setItem("token", tokenStr),
        localStorage.setItem("user",JSON.stringify(response.data.data)),
        this.$router.push('/');
        window.location.reload();
      }).catch((error) => {
          window.alert(error);
        });
    },
  },
}
</script>
<style lang="">
    
</style>