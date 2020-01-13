<template>
    <div>
        <son/>
    </div>

</template>

<script>
    import son from './children/index'
    export default {
        name: "provide-inject",
        components:{
            son:son
        },
        setup(){


        }
    }
</script>

<style scoped>

</style>
