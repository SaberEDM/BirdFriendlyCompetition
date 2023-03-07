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
                <span class="label-input100">Đăng Ký</span>
                <input class="input100" type="text" name="username" placeholder="Tên Đăng ký ">
                <span class="focus-input100"></span>
              </div>
              <div class="wrap-input100 validate-input m-b-26" data-validate="Không bỏ trống !">
                <span class="label-input100">Họ Tên</span>
                <input class="input100" type="text" name="name" placeholder="Họ và Tên ">
                <span class="focus-input100"></span>
              </div>
    
              <div class="wrap-input100 validate-input m-b-26" data-validate="Không bỏ trống !">
                <span class="label-input100">SĐT</span>
                <input class="input100" type="text" name="phone" placeholder="Số Điện thoại">
                <span class="focus-input100"></span>
              </div>
    
              <div class="wrap-input100 validate-input m-b-18" data-validate="Không bỏ trống !">
                <span class="label-input100">Mật Khẩu</span>
                <input class="input100" type="password" name="pass" placeholder="Nhập mật khẩu ">
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
                  <button class="login100-form-btn">
                    Đăng ký
                  </button>
                </div>
            </div>
            <div class="col-6 text-center ">
                <button onclick="window.location.href='trangchu.html';" class="login100-form-btn">
                    Trở về
                </button>
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