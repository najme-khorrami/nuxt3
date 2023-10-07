<template>
    <div id="header" class="flex justify-start items-center shadow-md px-5 py-2">
        <span class="font-bold">MY LOGO</span>
    </div>

    <slot />

    <div id="footer" class="flex flex-col border-t-2 fixed bottom-0 left-0 w-full">
        <NuxtLink to="/" class="p-3">home</NuxtLink>
        <NuxtLink to="/about" class="p-3">about</NuxtLink>
        <NuxtLink to="/contact" class="p-3">contact</NuxtLink>
        <NuxtLink to="/products/" class="p-3">products</NuxtLink>
    </div>

</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>