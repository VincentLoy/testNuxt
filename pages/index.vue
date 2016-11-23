<style rel="stylesheet/less" lang="scss">
    button {
      text-align: center;

    }
</style>

<template>
    <div class="test">
        <h1>Hello {{ name }}! --> {{ pouet }}</h1>
        <button v-on:click="onClick">tete <span>{{ test }}</span></button>
        <router-link to="/users">see all users</router-link>
    </div>
</template>

<script type="text/babel">
    export default {
        data () {
            return {
                name: 'world',
                pouet: 5,
                incrementBy: 3.14
            }
        },
        computed: {
            test () {
               return 3 * 5;
            }
        },
        methods: {
            onClick() {
                this.pouet *= this.incrementBy;
            }
        }
    }
</script>
