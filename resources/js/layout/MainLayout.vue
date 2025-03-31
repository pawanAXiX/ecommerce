<template>
    <Navbar @fetch="fetchProduct"/>
    <slot></slot>
</template>

<script setup>

import Navbar from "./partials/Navbar.vue";
import Sidebar from "./partials/Sidebar.vue";

const emit=defineEmits(['fetch']);
const fetchProduct=()=>{
    emit('fetch');
}
</script>
