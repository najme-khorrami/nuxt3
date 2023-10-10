<template>
    <h3 class="card-h3 m-5">About Us</h3>
    <p class="m-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis voluptatum, tempora praesentium optio expedita ratione ex corrupti dolorum eveniet eligendi!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis voluptatum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis voluptatum,</p>

    <div class="m-5">
        <span>message from server:</span>
        <p>{{ data }}</p>
    </div>
</template>

<script setup>
    const { data } = useFetch('/api/app')
</script>

<style lang="scss" scoped>

</style>