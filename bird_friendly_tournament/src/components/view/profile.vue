<template>
    <main>
        <div class="banner user-profile">
            <div class="container-fluid cnter-2">
                <nav aria-label="Breadcrumb">
                    <ol class="breadcrumb  justify-content-center py-0 mb-4">
                        <li class="breadcrumb-item"><a class=" link-success" href="trangchu.html">Home</a></li>
                        <li class="breadcrumb-item " aria-current="page">Cá nhân</li>
                    </ol>
                </nav>
                <h1 class="bannerh1">Thông tin cá nhân</h1>
                <br>
            </div>
        </div>
        <div class="container  mt-2">
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                    type="button" role="tab" aria-controls="nav-home" aria-selected="true">Thông tin cá nhân</button>
                <button class="nav-link " id="nav-bird-tab" data-bs-toggle="tab" data-bs-target="#nav-bird" type="button"
                    role="tab" aria-controls="nav-bird" aria-selected="true">Loại chim</button>
                <button class="nav-link " id="nav-birdlist-tab" data-bs-toggle="tab" data-bs-target="#nav-birdlist"
                    type="button" role="tab" aria-controls="nav-birdlist" aria-selected="true">Danh sách chim</button>
            </div>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
                    tabindex="0">
                    <div class="container-xl px-4 mt-4">
                        <div class="row">
                            <div class="col-xl-4">
                                <div class="card mb-4 mb-xl-0">
                                    <div class="card-header">Hình ảnh đại diện</div>
                                    <div class="card-body text-center">
                                        <img class="img-account-profile rounded-circle mb-2"
                                            src="src/assets/images/user.jpg" alt="">
                                        <div class="small font-italic text-muted mb-4">JPG hoặc PNG không được lớn hơn 5
                                            MB
                                        </div>
                                        <button class="btn btn-primary" type="button">Sửa hình ảnh</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-8">
                                <div class="card mb-4">
                                    <div class="card-header">Thông tin tài khoản</div>
                                    <div class="card-body">
                                        <form>
                                            <div class="mb-3">
                                                <label class="small mb-1" for="inputUsername">Tài khoản</label>
                                                <input class="form-control" id="inputUsername" type="text"
                                                    placeholder="Nhập tên tài khoản">
                                            </div>
                                            <div class="row gx-3 mb-3">
                                                <div class="col-md-6">
                                                    <label class="small mb-1" for="inputFirstName">Họ</label>
                                                    <input class="form-control" id="inputFirstName" type="text"
                                                        placeholder="Nhập họ">
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="small mb-1" for="inputLastName">Tên</label>
                                                    <input class="form-control" id="inputLastName" type="text"
                                                        placeholder="Nhập tên">
                                                </div>
                                            </div>
                                            <div class="row gx-3 mb-3">
                                                <div class="col-md-6">
                                                    <label class="small mb-1" for="inputPhone">Số điện thoại</label>
                                                    <input class="form-control" id="inputPhone" type="tel"
                                                        placeholder="Nhập số điện thoại">
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label class="small mb-1" for="inputLocation">Địa điểm</label>
                                                <input class="form-control" id="inputLocation" type="text"
                                                    placeholder="Nhập địa điểm">
                                            </div>
                                            <button class="btn btn-primary" type="button">Lưu thông tin</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-bird" role="tabpanel" aria-labelledby="nav-bird-tab" tabindex="1">
                    <div class="container-xl px-4 mt-4">
                        <div class="row">
                            <div class="col-xl-4">
                                <div class="card mb-4 mb-xl-0">
                                    <div class="card-header">Hình ảnh Chim</div>
                                    <div class="card-body text-center">
                                        <img class="img-account-profile rounded-circle mb-2"
                                            src="src/assets/images/chimse.jpg" alt="">
                                        <div class="small font-italic text-muted mb-4">JPG hoặc PNG không được lớn hơn 5
                                            MB
                                        </div>
                                        <button class="btn btn-primary" type="button">Sửa hình ảnh</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-8">
                                <div class="card mb-4">
                                    <div class="card-header">Thông tin chim</div>
                                    <div class="card-body">
                                        <form>
                                            <div class="row gx-3 mb-3">
                                                <div class="col-md-6">
                                                    <label class="small mb-1" for="inputBirdName">Tên chim</label>
                                                    <input class="form-control" id="inputBirdName" type="text"
                                                        placeholder="Nhập tên">
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="small mb-1" for="inputBirdType">Loại chim</label>
                                                    <input class="form-control" id="inputBirdType" type="text"
                                                        placeholder="Nhập Loại chim">
                                                </div>
                                            </div>
                                            <div class="row gx-3 mb-3">
                                                <div class="col-md-6">
                                                    <label class="small mb-1" for="inputBirdName">Cấp bậc</label>
                                                    <select class="form-select">
                                                        <option selected>Cấp bậc</option>
                                                        <option value="1">Đồng</option>
                                                        <option value="2">Bạc</option>
                                                        <option value="3">Vàng</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="small mb-1" for="inputBirdType">Loại chim</label>
                                                    <input class="form-control" id="inputBirdType" type="text"
                                                        placeholder="Nhập Loại chim">
                                                </div>
                                            </div>
                                            <button class="btn btn-primary ml-5" type="button">Lưu thông tin</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-birdlist" role="tabpanel" aria-labelledby="nav-birdlist-tab"
                    tabindex="2">
                    <div class="container-xl px-4 mt-4">
                        <table class="table manage-candidates-top mb-0">
                            <thead>
                                <tr>
                                    <th>Hình ảnh</th>
                                    <th class="text-center">Loại chim</th>
                                    <th class="action text-right txtf">Thông tin</th>
                                </tr>
                            </thead>
                            <br>
                            <tbody>
                                <tr class="candidates-list">
                                    <td class="title">
                                        <div class="thumb small-img">
                                            <img class="img-fluid" src="src/assets/images/thidauad.jpg" alt="">
                                        </div>
                                    </td>
                                    <td class="candidate-list-favourite-time text-center">
                                        <div class="candidate-list-details">
                                            <div class="candidate-list-info">
                                                <div class="candidate-list-title">
                                                    Chim sẻ
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <ul class="list-unstyled mb-0 d-flex justify-content-end">

                                            <li>
                                                <button class="nav-link " id="nav-bird-tab" data-bs-toggle="tab"
                                                    data-bs-target="#nav-bird" type="button" aria-controls="nav-bird"
                                                    aria-selected="true"><i class="far fa-eye"></i></button>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr class="candidates-list">
                                    <td class="title">
                                        <div class="thumb small-img">
                                            <img class="img-fluid" src="src/assets/images/thidauad.jpg" alt="">
                                        </div>
                                    </td>
                                    <td class="candidate-list-favourite-time text-center">
                                        <div class="candidate-list-details">
                                            <div class="candidate-list-info">
                                                <div class="candidate-list-title">
                                                    Chim sẻ
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <ul class="list-unstyled mb-0 d-flex justify-content-end">

                                            <li>
                                                <button class="nav-link " id="nav-bird-tab" data-bs-toggle="tab"
                                                    data-bs-target="#nav-bird" type="button" aria-controls="nav-bird"
                                                    aria-selected="true"><i class="far fa-eye"></i></button>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>

                                <tr class="candidates-list">
                                    <td class="title">
                                        <div class="thumb small-img">
                                            <img class="img-fluid" src="src/assets/images/thidauad.jpg" alt="">
                                        </div>
                                    </td>
                                    <td class="candidate-list-favourite-time text-center">
                                        <div class="candidate-list-details">
                                            <div class="candidate-list-info">
                                                <div class="candidate-list-title">
                                                    Chim sẻ
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <ul class="list-unstyled mb-0 d-flex justify-content-end">

                                            <li>
                                                <button class="nav-link " id="nav-bird-tab" data-bs-toggle="tab"
                                                    data-bs-target="#nav-bird" type="button" aria-controls="nav-bird"
                                                    aria-selected="true"><i class="far fa-eye"></i></button>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr class="candidates-list">
                                    <td class="title">
                                        <div class="thumb small-img">
                                            <img class="img-fluid" src="src/assets/images/thidauad.jpg" alt="">
                                        </div>
                                    </td>
                                    <td class="candidate-list-favourite-time text-center">
                                        <div class="candidate-list-details">
                                            <div class="candidate-list-info">
                                                <div class="candidate-list-title">
                                                    Chim sẻ
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <ul class="list-unstyled mb-0 d-flex justify-content-end">

                                            <li>
                                                <button class="nav-link " id="nav-bird-tab" data-bs-toggle="tab"
                                                    data-bs-target="#nav-bird" type="button" aria-controls="nav-bird"
                                                    aria-selected="true"><i class="far fa-eye"></i></button>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr class="candidates-list">
                                    <td class="title">
                                        <div class="thumb small-img">
                                            <img class="img-fluid" src="src/assets/images/thidauad.jpg" alt="">
                                        </div>
                                    </td>
                                    <td class="candidate-list-favourite-time text-center">
                                        <div class="candidate-list-details">
                                            <div class="candidate-list-info">
                                                <div class="candidate-list-title">
                                                    Chim sẻ
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <ul class="list-unstyled mb-0 d-flex justify-content-end">
                                            <li>
                                                <button class="nav-link " id="nav-bird-tab" data-bs-toggle="tab"
                                                    data-bs-target="#nav-bird" type="button" aria-controls="nav-bird"
                                                    aria-selected="true"><i class="far fa-eye"></i></button>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            profile: [],
            token: ""
        }
    },
    mounted() {
        this.token = localStorage.getItem("token")
        console.log(token)
        axios.get("https://aspnetcore-staging.azurewebsites.net/me", "Bearer " + token).then(response => {
            this.profile = response.baseUserRecord;
            console.log("profile", this.profile)
        })
    }
}
</script>
