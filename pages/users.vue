<style scoped lang="scss">
    $c: #e2e2e2;

    .users {
        width: 90%;
        margin: auto;
    }

    .user {
        width: 30%;
        float: left;
        border: 1px solid #ccc;
        margin: 5px;
        padding: 10px;
        background: $c;

        h3 {
            margin: 0;
        }

        h4 {
            margin: 0;
        }

        .email {
            font-style: italic;
            font-size: 13px;
            margin: 0;
        }
    }
</style>

<template>
    <div>
        <div class="test">
            <h1>About page (loaded from {{ req }})</h1>
            <router-link to="/">homepage</router-link>
        </div>

        <h2>there is {{ users.length }} users</h2>
            <hr/>

        <div class="users">
            <div v-for="user in users" class="user">
                <h3 class="name">{{ user.name }}</h3>
                <h4 class="username">{{ user.username }}</h4>
                <p class="email">{{ user.email }}</p>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    const axios = require('axios');

    export default {
        data ({req}) {
            return axios.get(
                'https://jsonplaceholder.typicode.com/users'
            ).then(function (res) {
                return {
                    users: res.data,
                    req: req ? 'server' : 'client'
                };
            }).catch(function (err) {
                console.err(err)
                return {};
            })
        },
        computed: {
            test() {
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
