<template>
    <div class="grid gap-4 grid-cols-4 my-6 mx-4">
        <div v-for="product in products" :key="product.id" class="w-full h-60 border shadow-lg rounded-md p-3 relative">
            <img :src="product.image" class="h-1/2 mx-auto" alt="">
            <span class="block text-center font-bold pt-1">{{ product.title }}</span>
            <NuxtLink :to="`/products/${product.id}`" class="btn bg-green-400 rounded-sm hover:bg-green-500 text-white absolute bottom-2">Buy</NuxtLink>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: []
            }
        },
        created() {
            this.products =  useFetch('https://fakestoreapi.com/products')
            this.products = this.products.data.value
        }      
    }
</script>

<style lang="scss" scoped>
    .btn {
        width: calc(100% - 20px);
        text-align: center;
    }
</style>