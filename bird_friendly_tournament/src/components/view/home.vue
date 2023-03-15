<template lang="">
    <main>
        <div class="banner">
            <div class="container-fluid cnter-1">
                <h1 class="bannerh1">THI ĐẤU CHIM GIAO HỮU</h1>
                <br>
                <p class="p-home" style="font-weight: 400;">Nơi giao lưu thách đấu chim, các chú chim hót khỏe nhất <br>
                            sẽ có cơ hội lọt vào Top 10 của Bảng Xếp Hạng.
                </p>
                <br>
                <router-link to="/rank" class="bannera"><span class="span-banner">Xem Bảng XH </span></router-link>
                <router-link to="/register" class="bannera"><span class="span-banner"> Tham gia thi đấu</span></router-link>
                <router-link to="/match" class="bannera"><span class="span-banner">Lịch thi đấu </span></router-link>
            </div>
        </div>
        <div class="container-fluid homebox">
            <div class="container text-center" style="padding:30px">
                <h1>HÃY THAM GIA THI ĐẤU</h1>
                <br>
                <div class="decorhome center"></div>
                <br>
                <p style="font-size: 19px;">Hãy mau đăng ký để tham gia vào các trận thi đấu cùng người chơi khác</p>
            </div>
        </div>
        <div class="col-12 shadow-lg homebox-1 center">
            <div class="row row-cols-1 row-cols-md-3 g-4">   
                <div class="col">
                    <div class="card shadow" style="width: 100%;">
                        <img src="src/assets/images/signin.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h4 class="card-title">Đăng ký</h4>
                            <p class="card-text">Hãy nhanh tay tạo tài khoản và tham gia những trận
                                                  đấu chỉm sẻ cùng các người chơi khác.</p>
                            <router-link to="/register" class="btn btn-success">Đăng ký</router-link>
                        </div>
                    </div>
                </div>          
                <div class="col">
                    <div class="card shadow" style="width: 100%;">
                        <img src="src/assets/images/joinmatch.jpg" style="height:249px" class="card-img-top" alt="...">
                        <div class="card-body">                  
                            <h4 class="card-title">Tham gia thi đấu</h4>
                            <p class="card-text">Tham gia thi đấu cùng những người chơi có bậc rank cùng
                                                  với bạn và hãy tuân thủ luật chơi.</p>
                            <router-link to="/match" class="btn btn-success">Xem các trận đấu</router-link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow" style="width: 100%;">
                        <img src="src/assets/images/rank.jpg" style="height:249px" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h4 class="card-title">Xem Bậc Rank</h4>
                            <p class="card-text">Xem số điểm của mình và không ngừng thi đấu, cải
                                                  thiện điểm để thi đấu với người có bậc rank cao hơn.</p>
                            <router-link to="/rank" class="btn btn-success">Bảng Xếp Hạng</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid page center">
            <h1>LUẬT LỆ THI ĐẤU CHIM CẢNH</h1>
            <div class="row">
                <div class="col-md-3 item wow fadeInUp" data-wow-delay="0.15s"
                             style="visibility: visible; animation-delay: 0.15s; animation-name: fadeInUp;">

                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>