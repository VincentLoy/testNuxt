<style scoped lang="scss">
    .search-component {
        form {
            display: table;
            margin: auto;
        }
    }
</style>

<template>
    <div class="search-component">
        <form :action="searchText" method="post">
            <input v-model="searchText" type="text"/>
            <button type="submit">Search</button>
        </form>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return {
                searchText: ''
            }
        }
    }
</script>
