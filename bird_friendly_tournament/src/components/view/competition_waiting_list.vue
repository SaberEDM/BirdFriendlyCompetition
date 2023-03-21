<template lang="">
        <CompetitionWaiting v-for='(competition, index) in list' v-bind:key="index" v-bind:competition="competition"/>
</template>
<script>
import CompetitionWaiting from './competition_waiting.vue'
export default {
    props: {
        list: {
            type: Array,
            default: function () {
                return []
            }
        }
    },
    components: {
        CompetitionWaiting
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="">
    
</style>