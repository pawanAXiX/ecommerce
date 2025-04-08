<template>
    <div class="w-full h-full">
    <Navbar />
    <slot></slot>

    </div>
</template>

<script setup>

import Navbar from "./partials/Navbar.vue";
</script>
