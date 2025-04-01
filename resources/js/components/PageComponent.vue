<template>
<MainLayout >
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
import {onMounted, reactive, ref, watch, watchEffect} from "vue";
import {useRoute, useRouter} from "vue-router";

const route=useRoute();
const items=ref([]);
const filters=ref([]);
const slug=ref('');

const fetchProducts=async ()=>{
    slug.value =await route.params.slug.replace('-',' ');
    const list=await ProductService.getProducts();
    const products=await list;
    items.value=products.filter((obj)=>{
        return obj.category===slug.value;
    });
}
onMounted(  ()=>{
    fetchProducts()
});

watch(route,(newRoute,oldRoute)=>{
    fetchProducts();
},{immediate:true});

</script>
