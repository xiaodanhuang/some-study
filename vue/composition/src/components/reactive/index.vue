<template>
    <div>
        reactive
        {{count}}
        {{grandfather.father.son}}
        <button @click="add">+1</button>
        <button @click="grandfather.father.son+=1">+1</button>
    </div>
</template>

<script>
    import {reactive,isRef,toRefs} from '@vue/composition-api'
    export default {
        name: "reactive",
        setup(){
            const state=reactive({count:1,name})//响应式的数据对象
            console.log(state)
            state.count+=1
            console.log(isRef(state))
            const add=()=>{
                state.count++
            }
            return {
                ...toRefs(state),
                add
            }
        },
        data(){
            return{
                grandfather:{
                    father:{
                        son:1
                    }
                }
            }
        }


    }
</script>

<style scoped>

</style>
