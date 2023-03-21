<template lang="">
    <tr class="candidates-list">
        <td class="title">
            <div class="thumb small-img">
                <img class="img-fluid" v-bind:src="bird.image" alt="">
            </div>
        </td>
        <td class="candidate-list-favourite-time text-center">
            <div class="candidate-list-details">
                <div class="candidate-list-info">
                    <div class="candidate-list-title">
                        <p> Tên: {{ bird.name }} </p>
                        <p> Loại chim: {{bird.birdType}} </p>
                        <p> Bậc: {{ bird.rankName}} </p>
                        <p> Điểm: {{ bird.elo }} </p>                     
                    </div>
                </div>
            </div>
        </td>
        <td>
            <ul class="list-unstyled mb-0 d-flex justify-content-end">
                <li>
                    <div class="icon1">
                        <a href="#updateBird" class="text-info" data-bs-toggle="modal"><i
                                class="fa-sharp fa-solid fa-pen"></i></a>
                    </div>
                </li>

                <li>
                    <div class="icon1">
                        <a href="#" class="text-danger" data-toggle="tooltip" title=""
                            data-original-title="Delete"><i class="fa-solid fa-x"></i></a>
                    </div>
                </li>
            </ul>
        </td>
    </tr>
</template>
<script>
export default {
    props: {
        bird: {
            type: Object,
            default: null,
        },
    },
}
</script>
<style lang="">
    
</style>