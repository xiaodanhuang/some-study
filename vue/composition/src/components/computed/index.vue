<template>
<div>
    computed
    {{count}}
    {{plusOne}}
    <button @click="count+=1">+1</button>
</div>
</template>

<script>
    import {ref,computed} from '@vue/composition-api'
    export default {
        name: "computed",
        setup(){
            const count=ref(0)
            const plusOne=computed({
                get:()=>count.value+1,
                set:value=>count.value=value-1
            })
            plusOne.value=8
            return {
                count,
                plusOne
            }

        }
    }
</script>

<style scoped>

</style>
