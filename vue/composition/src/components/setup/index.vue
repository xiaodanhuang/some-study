<template>
    <div>setup</div>
</template>

<script>
    export default {
        name: "setup",
        props:{
            name:String
        },
        setup(props,context){
          console.log(context)
        }


    }
</script>

<style scoped>

</style>
