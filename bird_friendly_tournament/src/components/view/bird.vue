<template lang="">
    <div>
        <td class="title">
            <!-- <div class="thumb small-img">
                <img class="img-fluid" v-bind:src="bird.image" alt="">
            </div> -->
        </td>
        <td class="candidate-list-favourite-time text-center">
            <div class="candidate-list-details">
                <div class="candidate-list-info">
                    <div class="candidate-list-title">
                        {{bird.name}}
                    </div>
                </div>
                <td class="candidate-list-favourite-time text-center">
                    <div class="candidate-list-details">
                        <div class="candidate-list-info">
                            <div class="candidate-list-title">
                                {{bird.birdType}}
                            </div>
                        </div>
                    </div>
                </td>
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
    </div>
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