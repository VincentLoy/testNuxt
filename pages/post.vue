<template>
    <div class="test">
        <h1>{{ post.title }} - Loaded from {{ req }}</h1>

        <search></search>

        <router-link to="/about">About Us</router-link>
        <router-link to="/">homepage</router-link>

        <div class="post">
            <p>
                {{ post.body }}
            </p>
        </div>
    </div>
</template>

<style scoped>
    p {
        display: block;
        margin: auto;
        padding: 50px;
        width: 900px;
    }
</style>

<script type="text/ecmascript-6">
    import Search from '~components/Search.vue';
    const axios = require('axios');

    export default {
        components: {
          Search
        },
        data ({ req, params }) {
            return axios.get(
                'https://jsonplaceholder.typicode.com/posts/' + params.postId
            ).then(function (post) {
               return {
                    post: post.data,
                    req: req ? 'server' : 'client',
                };
            }).catch(function (err) {
                return { err }
            });
        }
    }
</script>
