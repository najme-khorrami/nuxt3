<template>
    <div id="menu" class="flex justify-between items-center shadow-md px-5 py-2">
        <span class="font-bold">MY LOGO</span>
        <div class="flex">
            <NuxtLink to="/" class="p-3">home</NuxtLink>
            <NuxtLink to="/about" class="p-3">about</NuxtLink>
            <NuxtLink to="/contact" class="p-3">contact</NuxtLink>
            <NuxtLink to="/products/" class="p-3">products</NuxtLink>
        </div>
    </div>

    <slot />

</template>

<script setup>
 
</script>

<style lang="scss" scoped>
    a:hover {
        color: rgb(25, 175, 25);
    }
    a.router-link-exact-active {
        color: rgb(25, 175, 25);
    }
</style>