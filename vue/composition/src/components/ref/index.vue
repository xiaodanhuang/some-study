<template>
    <div>
        ref
        {{count1}}
        <input ref="inpputRef"/>
        <button @click="count1+=1">+1</button>
        <button @click="consoleRef">+1</button>
    </div>
</template>

<script>
    import {ref,onMounted} from '@vue/composition-api'
    export default {
        name: "ref",
        setup(){
            const count1=ref(0)//创建响应式的数据
            const count2=ref(1)
            const inpputRef=ref(null)
            count1.value++;
            const consoleRef=()=>{
                inpputRef.value.focus()
            }
            onMounted(()=>{
                console.log(inpputRef)
            })
            return {
                count1,
                count2,
                inpputRef,
                consoleRef
            }

        },


    }

</script>

<style scoped>

</style>
