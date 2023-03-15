<template lang="">
    <div class="col">
        <CompetitionEnd v-for='(competition, index) in list' v-bind:key="index" v-bind:competition="competition"/>
    </div>
</template>

<script>
import CompetitionEnd from './competition_end.vue'
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
        CompetitionEnd
    },
    data() {
        return{

        }
    }
}
</script>
<style lang="">
    
</style>