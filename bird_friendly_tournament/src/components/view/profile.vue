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
                <button class="nav-link " id="nav-birdlist-tab" data-bs-toggle="tab" data-bs-target="#nav-birdlist"
                    type="button" role="tab" aria-controls="nav-birdlist" aria-selected="true">Danh sách chim</button>
            </div>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
                    tabindex="0">
                    <div class="container-xl px-4 mt-4">
                        <div class="row">
                            <div class="col-xl-8">
                                <div class="card mb-4">
                                    <div class="card-header">Thông tin tài khoản</div>
                                    <div class="card-body">
                                        <form>
                                            <div class="mb-3">
                                                <label class="small mb-1" for="inputUsername">Tài khoản</label>
                                                <input class="form-control" id="inputUsername" type="text"
                                                    v-model="profile.username" disabled="true">
                                            </div>
                                            <div class="row gx-3 mb-3">
                                                <div class="col-md-6">
                                                    <label class="small mb-1" for="inputPhone">Email</label>
                                                    <input class="form-control" id="inputEmail" type="text" value="user001@gmail.com"
                                                        placeholder="Nhập email để thay đổi">
                                                </div>
                                            </div>
                                            <div class="row gx-3 mb-3">
                                                <div class="col-md-6">
                                                    <label class="small mb-1" for="inputPhone">Số điện thoại</label>
                                                    <input class="form-control" id="inputPhone" type="text" v-model="profile.phoneNumber"
                                                        placeholder="Nhập số điện thoại để thay đổi">
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label class="small mb-1" for="inputLocation">Địa chỉ
                                                    muốn</label>
                                                    <input class="form-control" id="inputAddress" type="text" v-model="profile.address"
                                                    placeholder="Nhập số điện thoại để thay đổi">
                                            </div>
                                            <button class="btn btn-primary" type="button">Lưu thông tin</button>
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
                           <BirdList v-bind:list="list"/>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios'
import BirdList from './bird_list.vue'
export default {
    data() {
        return {
            profile: [],
            list: [],
            token: "",
            locations: [
                {
                    "id": 1,
                    "address": "Quán CF thi đấu chim chuyên nghiệp Quận 1"
                },
                {
                    "id": 2,
                    "address": "Nhà thi đấu đa năng Quận 2"
                },
                {
                    "id": 3,
                    "address": "Công viên Hoàng Văn Út Quận 3"
                },
                {
                    "id": 4,
                    "address": "Quán CF 1986 Bình Khánh TP. Long Xuyên"
                }
            ]
        }
    },
    mounted() {
        if (localStorage.getItem("token")) {
            this.token = localStorage.getItem("token")
            console.log("token:", this.token)
        }
        axios.get("https://aspnetcore-staging.azurewebsites.net/me", {
            headers: {
                "Authorization": `Bearer ${this.token}`,
            }
                
        }).then(response => {
            console.log("response:", response)
            this.profile = response.data.baseUserRecord;
            this.list = response.data.baseUserRecord.birdRecords;
            console.log("profile", this.profile)
            console.log('list bird:', this.list)
        })
    },
    components: {
        BirdList,
    }
}
</script>
