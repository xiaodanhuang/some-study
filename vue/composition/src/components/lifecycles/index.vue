<template>
    <div>
        life cycles
    </div>
</template>

<script>
    import {onMounted,onUpdated,onUnmounted}from '@vue/composition-api'
    export default {
        name: "lifeCycles",
        setup(){
            onMounted(()=>{
                console.log('onMounted')
            })
            onUpdated(()=>{
                console.log("onUpdated")
            })
            onUnmounted(()=>{
                console.log('onUnmounted')
            })
        }

    }
</script>

<style scoped>

</style>
