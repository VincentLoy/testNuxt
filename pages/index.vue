<style scoped lang="scss">
    .users {
        width: 90%;
        margin: auto;
    }

    .post {
        width: 30%;
        float: left;
        border: 1px solid #ccc;
        margin: 5px;
        padding: 10px;
        text-align: left;
        color: #000;
        min-height: 150px;
        background: #e2e2e2;

        &:hover {
            background: rgba(33,33,33,0.3);
        }

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
    <div class="test">
        <h1>GM{{ name }}</h1>

        <search></search>

        <router-link to="/about">About Us</router-link>

        <div class="posts">
            <div v-for="post in posts">
                <router-link :to="'/post/' + post.id" class="post">
                    <h3 class="name">{{ post.title }}</h3>
                    <hr/>
                    <h4 class="username">postId: {{ post.id }}</h4>
                    <p class="email">userId: {{ post.userId }}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Search from '~components/Search.vue';
    const axios = require('axios');

    export default {
        components: {
          Search
        },
        data ({ req }) {
            return axios.get(
                'https://jsonplaceholder.typicode.com/users'
            ).then(function (users) {
                return axios.get(
                    'https://jsonplaceholder.typicode.com/posts'
                ).then(function (posts) {
                   return {
                        users: users.data,
                        posts: posts.data,
                        req: req ? 'server' : 'client',
                        name: 'C'
                    };
                }).catch(function (err) {
                    return { err }
                });
            }).catch(function (err) {
                console.err(err)
                return { err };
            })
        },
        computed: {
            test () {
               return 3 * 5;
            }
        },
        methods: {
            onClick() {
                this.pouet *= this.incrementBy;
            },
            guessAuthor (id) {
                this.users.forEach(function (user) {
                    console.log('id', id, user.id);
                    if (user.id === id) {
                        return user
                    }
                });

                return {};
            }
        }
    }
</script>
