<template lang="">
    <div class="col">
        <Competition v-for='(competition, index) in list' v-bind:key="index" v-bind:competition="competition"/>
    </div>
</template>

<script>
import Competition from './competition.vue'
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
        Competition
    },
    data() {
        return{

        }
    }
}
</script>
<style lang="">
    
</style>