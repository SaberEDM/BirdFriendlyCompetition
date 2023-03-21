<template lang="">
    <tbody v-if="bird != ''">   
        <Bird v-for='(bird, index) in list' v-bind:key="index" v-bind:bird="bird"/>
    </tbody>
    <tbody v-else>
            <h1>Bạn chưa sở hữu bất kỳ loại chim nào.</h1>
    </tbody>
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