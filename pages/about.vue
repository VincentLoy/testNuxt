<style scoped>
    p {
        color: firebrick;
        font-family: Arial, sans-serif;
        text-align: justify;
        margin: 0 150px;
    }
</style>

<template>
    <div>
        <div class="test">
            <h1>About page (loaded from {{ req }})</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur
                cupiditate dolorem dolores, dolorum esse eum fugiat ipsa laboriosam libero magnam
                nam nisi officia omnis perferendis perspiciatis quidem recusandae suscipit unde
                voluptatem. Culpa, cupiditate debitis, deserunt doloremque inventore nesciunt quia
                ratione rem repudiandae, rerum sapiente ut vero voluptatem! Commodi deleniti
                doloremque inventore neque numquam quia quidem suscipit voluptatem! A accusantium
                architecto asperiores at atque consequatur, dolorum ea facilis laudantium magni
                maiores nihil perspiciatis quos reprehenderit tempore ullam vero? Accusamus adipisci
                alias animi atque beatae consequatur culpa dolor dolore eaque et eveniet, excepturi
                exercitationem itaque iure maiores mollitia nemo praesentium quaerat quasi, qui
                rerum similique sint tenetur, totam velit voluptates voluptatum. Animi beatae culpa
                ex, expedita fugiat harum iure labore libero, maxime necessitatibus numquam
                obcaecati omnis optio quisquam ratione temporibus veniam voluptates. Doloremque
                ducimus illo nobis pariatur totam. Asperiores cum cumque dicta eum explicabo facilis
                fugit, laborum omnis ut! Commodi consequuntur ea eaque esse facilis fugiat iste
                libero magnam! Distinctio, nam!</p>

            <router-link to="/">homepage</router-link>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data ({req}) {
            return {
                req: req ? 'server' : 'client'
            }
        }
    }
</script>
