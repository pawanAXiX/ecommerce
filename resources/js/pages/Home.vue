<template>
<MainLayout>
<HomeBanner/>
<BigCards/>
<SlidingCards/>
</MainLayout>
</template>
<script setup>

import {onMounted} from "vue";

import ProductServices from '../services/ProductService';
import MainLayout from "../layout/MainLayout.vue";
import HomeBanner from "../components/HomeBanner.vue";
import BigCards from "../components/BigCards.vue";
import SlidingCards from "../components/SlidingCards.vue";


</script>
