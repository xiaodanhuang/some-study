<template>
    <div>
        nexttick
        <input v-show="isShow" ref="inp"/>
        <button @click="changeIsShow">切换</button>
    </div>
</template>

<script>
    export default {
        name: "nexttick",
        setup(){

        },
        data(){
            return{
                isShow:false
            }
        },
        methods:{
            changeIsShow(){
                this.isShow=!this.isShow
                if(this.isShow==true){
                    console.log(this.$refs.inp)
                    this.$nextTick(()=>{
                        this.$refs.inp.focus()
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>
