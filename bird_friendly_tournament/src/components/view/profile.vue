<template>
    <div>
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
                                                        <input class="form-control" id="inputEmail" type="text"
                                                            value="user001@gmail.com" placeholder="Nhập email để thay đổi">
                                                    </div>
                                                </div>
                                                <div class="row gx-3 mb-3">
                                                    <div class="col-md-6">
                                                        <label class="small mb-1" for="inputPhone">Số điện thoại</label>
                                                        <input class="form-control" id="inputPhone" type="text"
                                                            v-model="profile.phoneNumber"
                                                            placeholder="Nhập số điện thoại để thay đổi">
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <label class="small mb-1" for="inputLocation">Địa chỉ
                                                        muốn</label>
                                                    <input class="form-control" id="inputAddress" type="text"
                                                        v-model="profile.address"
                                                        placeholder="Nhập số điện thoại để thay đổi">
                                                </div>
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
                            <div class="table-wrapper">
                                <div class="table-title">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <h2>Danh Sách Chim</h2>
                                        </div>
                                        <div class="col-sm-6">
                                            <a href="#addBird" class="btn btn-success" style="float:right"
                                                data-bs-toggle="modal"><i class="fa-solid fa-plus"></i>
                                                <span>Thêm Chim</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <table class="table manage-candidates-top mb-0">
                                <thead>
                                    <tr>
                                        <th>Hình ảnh</th>
                                        <th class="text-center">Thông tin chim</th>
                                        <th class="action text-right txtf">Quản lý</th>
                                    </tr>
                                </thead>
                                <br>
                                <BirdList v-bind:list="list" />
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <div class="modal fade" id="addBird" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLabel">Thêm chim</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Tên chim</label>
                            <input type="text" name="name" class="form-control" placeholder="Nhập tên chim" required
                                v-model="name">
                        </div>
                        <br>
                        <div class="form-group">
                            <label>Hình Ảnh</label>
                            <p>Vui lòng upload hình ảnh <a href="https://postimages.org/" style="color:turquoise"
                                    target="_blank">tại đây.</a> Và dán link vào bên dưới</p>
                            <input type="text" name="name" class="form-control" placeholder="Nhập link hình ảnh" required
                                v-model="image">
                        </div>
                        <br>
                        <div class="form-group">
                            <label>Loại chim</label>
                            <select class="form-select" v-model="birdTypeId">
                                <option
                                  v-for="(bird, index) in listBirdType"
                                  :value="bird.id"
                                >
                                  {{bird.name}}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-primary" @click.prevent="CreateBird">Thêm</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="updateBird" tabindex="-1" aria-labelledby="updateBird" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="updateBird">Chỉnh sửa chim</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Tên chim</label>
                            <input type="text" name="nameBird" class="form-control" required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-primary">Chỉnh sửa</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import BirdList from './bird_list.vue'
export default {
    data() {
        return {
            name: "",
            image: "",
            birdTypeId: null,
            yourBird: [],
            listBirdType: [
                {
                    "id": 11,
                    "name": "Vàng anh"
                },
                {
                    "id": 12,
                    "name": "Sáo"
                },
                {
                    "id": 13,
                    "name": "Chào Mào"
                },
                {
                    "id": 14,
                    "name": "Chích Chòe"
                },
                {
                    "id": 15,
                    "name": "Khứu"
                },
                {
                    "id": 16,
                    "name": "Họa Mi"
                },
                {
                    "id": 17,
                    "name": "Vành Khuyên"
                }
            ],
            profile: [],
            list: [],
            token: "",
            locations: [
                {
                    "id": 3,
                    "address": "Nhà thi đấu quận 1"
                },
                {
                    "id": 4,
                    "address": "Nhà thi đấu quận 2"
                },
                {
                    "id": 5,
                    "address": "Quán Cà Phê Thi đấu chim Quận 3"
                },
                {
                    "id": 6,
                    "address": "Vinhome grandpark Quận 9"
                },
                {
                    "id": 7,
                    "address": "Quán CF chim, Công viên phần mềm Quang Trung"
                },
                {
                    "id": 8,
                    "address": "Nhà Thi Đấu Bình Khánh, TP. Long Xuyên"
                },
                {
                    "id": 9,
                    "address": "19 Đường Bánh Cống, TP. Cần Thơ"
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
    methods: {
        CreateBird() {
            axios.post(
                "https://aspnetcore-staging.azurewebsites.net/me/birds",
                {
                    name: this.name,
                    image: this.image,
                    birdTypeId: this.birdTypeId,
                },           
                {
                    headers: {
                        "Authorization": `Bearer ${this.token}`,
                    },

                }
            ).then((response) => {
                console.log(response)
                this.$router.push('/profile')
                window.location.reload()
            }).catch((error) => {
                window.alert(error);
            });
        }
    },
    components: {
        BirdList,
    }
}
</script>
