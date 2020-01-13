<template>
    <div>
        watch
        {{count}}
        {{count1}}
        <button @click="count+=1">+1</button>
        <button @click="count1+=1">+1</button>
        <button @click="stopCountWacth">stopCountWacth</button>
    </div>
</template>

<script>
    import {watch,ref,reactive} from '@vue/composition-api'
    export default {
        name: "watch",
        setup(){
            const state=reactive({name:"danhuang",sex:'gril',age:18})
            const count=ref(0)
            const count1=ref(1)
            const stop=watch(count1,()=>{
                console.log(count1.value)
            })
            const stopCountWacth=()=>{
                stop()
            }
            return {
                count,
                count1,
                stopCountWacth
            }


        }
    }
</script>

<style scoped>

</style>
