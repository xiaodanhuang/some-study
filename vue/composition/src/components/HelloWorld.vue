<template>
    <div class="hello">
        <setup name="setup"/>
        <reactive/>
        <my-ref/>
        <computed/>
        <watch/>
        <life-cycles/>
        <provide-inject/>
        <button @click="number+=1"></button>
        <next-tick/>
    </div>
</template>

<script>
    import setup from './setup/index'
    import reactive from './reactive/index'
    import myRef from './ref/index'
    import computed from './computed/index'
    import watch from './watch/index'
    import lifecycles from './lifecycles/index'
    import provideInject from './provideInject/index'
    import nextTick from './nextTick/index'
    import {provide,ref} from '@vue/composition-api'

    export default {
        name: 'HelloWorld',
        components: {
            setup,
            reactive,
            'my-ref':myRef,
            computed,
            watch,
            'life-cycles':lifecycles,
            'provide-inject':provideInject,
            'next-tick':nextTick
        },
        setup() {
            const number=ref(0)
            provide('number',number)
            console.log('setup')
            return {
                number
            }
        },
        beforeCreate() {
            console.log('beforecreate')
        },
        created() {
            console.log('created')
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
