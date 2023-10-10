<template>
    <Head>
        <Title>{{ thisProduct.title }}</Title>
        <Meta name="description" :content="thisProduct.description" />
    </Head>
    <div class="card border m-5 p-3 shadow-lg rounded-md flex justify-between h-96">
        <div class="h-full w-1/2">
            <img :src="thisProduct.image" class="h-full m-auto" alt="">
        </div>
        <div class="w-1/2">
            <h3 class="font-bold text-xl mb-2">{{ thisProduct.title }}</h3>
            <div class="bg-green-400 py-1 px-4 inline-block rounded-md mb-2">
                <span class="text-bold text-white text-base">{{ thisProduct.price }} $</span>
            </div>
            <h4 class="font-bold py-1">description: </h4>
            <hr>
            <p class="mb-2 py-1">
                {{ thisProduct.description }}
            </p>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "products",
    });

    const { id } = useRoute().params
    const url = 'https://fakestoreapi.com/products/' + id
    const { data:thisProduct } = useFetch(url , {key: id})

</script>

<style lang="scss" scoped>
    
</style>