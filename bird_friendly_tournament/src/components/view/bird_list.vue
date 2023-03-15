<template lang="">
    <tr class="candidates-list" v-if="bird != ''">
        <Bird v-for='(bird, index) in list' v-bind:key="index" v-bind:bird="bird"/>
    </tr>
    <tr class="candidates-list" v-else>
        <center>
            <h1>Bạn chưa sở hữu bất kỳ loại chim nào.</h1>
        </center>
    </tr>
</template>

<script>
import Bird from './bird.vue'
export default {
    props: {
        list: {
            type: Array,
            default: function() {
                return []
            }
        }
    },
    components: {
        Bird
    },
    data() {
        return{

        }
    }
}
</script>
<style lang="">
    
</style>