<template>
    <div>
        i'am provide-inject's son
        {{number}}
    </div>
</template>

<script>
    import {inject} from '@vue/composition-api'
    export default {
        name: "index",
        setup(){
            const number=inject('number')
            return {
                number
            }

        }
    }
</script>

<style scoped>

</style>
