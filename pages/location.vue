<style scoped>
    p {
        color: white;
        font-family: Arial, sans-serif;
        text-align: center;
        margin: 0 150px;
        font-weight: bold;
        font-size: 18px;
    }
</style>

<template>
    <div>
        <div class="test">
            <h1>About page (loaded from {{ req }})</h1>

            <p v-if="params.locationSlug">This is {{ params.locationSlug }} page</p>
            <div v-if="!params.locationSlug">
                <p>Sorry, no results</p>
            </div>

            <search></search>

            <router-link to="/">homepage</router-link>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Search from '~components/Search.vue';

    export default {
        components: {
          Search
        },
        data ({req, params}) {
            return {
                req: req ? 'server' : 'client',
                params: params
            }
        }
    }
</script>
