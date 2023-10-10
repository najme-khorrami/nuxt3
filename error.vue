<template>
    <div class="flex flex-col justify-center items-center m-8">
        <p class="text-red-500 text-4xl font-bold mb-3">{{ error.statusCode }}</p>
        <p class="text-lg">{{ error.message }}</p>
        <button @click="errorHandler" class="m-5 border border-green-300 py-2 px-3 rounded-md hover:border-green-400 hover:bg-green-100">back to home</button>
    </div>
</template>

<script setup>
    defineProps(['error'])
    function errorHandler() {
        clearError({redirect: '/'})
    }
</script>

<style lang="scss" scoped>

</style>