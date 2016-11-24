<style scoped lang="scss">
    $c: #51a8fe;

    .search-component {
        input {
            display: block;
            width: 50%;
            margin: 20px auto;
            border: 0;
            padding: 10px;
            border-radius: 3px;
            font-weight: bold;
            text-align: center;
        }

        .btn {
            width: 150px;
            padding: 20px;
            border-radius: 3px;
            margin: 15px auto;
            background: transparent;
            border: 2px solid white;

            &:hover {
                color: $c;
                background: white;
            }
        }
    }
</style>

<template>
    <div class="search-component">
        <input v-model="searchText" type="text"/>
        <router-link class="btn" v-bind:to="'/location/' + slug">Search</router-link>
    </div>
</template>

<script type="text/ecmascript-6">
    const slugify = require('slugify');

    export default {
        data () {
            return {
                searchText: ''
            }
        },
        computed: {
            slug () {
                return slugify(this.searchText.toLowerCase());
            }
        }
    }
</script>
