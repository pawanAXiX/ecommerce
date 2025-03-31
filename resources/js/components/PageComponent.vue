<template>
<MainLayout>
<div class="flex flex-row justify-between  pt-[80px] ">
    <Sidebar/>
    <CardLayout :filter="filters" :items="items"/>
</div>
</MainLayout>s
</template>

<script setup>

import CardLayout from "./CardLayout.vue";
import MainLayout from "../layout/MainLayout.vue";
import Sidebar from "../layout/partials/Sidebar.vue";
import ProductService from "../services/ProductService.js";
import {onMounted, ref} from "vue";

const items=ref([]);
const filters=ref([]);
onMounted( async ()=>{
    const list=await ProductService.getProducts();
    items.value=await list;
    console.log(items.value)
});
</script>
