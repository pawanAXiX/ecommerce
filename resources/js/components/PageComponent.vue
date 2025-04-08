<template>
<MainLayout >
<div class="flex flex-row gap-5 w-full  pt-[80px] absolute ">
    <Sidebar class="relative"/>
    <div class="flex-1">
        <div class=" grid grid-cols-4 gap-5 py-6 w-full">
            <CardLayout v-for="item in items" :filter="filters" :item="item" :key="item.id"/>
        </div>
    </div>
    <CartComponent/>
</div>
</MainLayout>
</template>

<script setup>

import CardLayout from "./CardLayout.vue";
import MainLayout from "../layout/MainLayout.vue";
import Sidebar from "../layout/partials/Sidebar.vue";
import {onMounted, reactive, ref, watch, watchEffect} from "vue";
import {useRoute, useRouter} from "vue-router";
import CartComponent from "./CartComponent.vue";
import {apiCall} from "../store/api.js";

const route=useRoute();
const items=ref([]);
const filters=ref([]);
const slug=ref('');

const fetchProducts=async ()=>{
    slug.value =await route.params.slug.replace('-',' ');
    const list=await apiCall.fetchProducts();
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
