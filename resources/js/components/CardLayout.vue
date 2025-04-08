<template>
    <div class= " flex flex-col justify-between border px-4 py-4 border-gray-200 bg-white mb-4 w-80 h-80 rounded-lg"
         :key="item.id">
        <figure>
            <img class="w-24 h-24 object-cover mx-auto" :src="item.image" :alt="item.name"/>
        </figure>
        <div class="py-4 flex flex-col text-center">
            <span class="truncate ">{{ item.title }}</span>
            <span :class="['font-semibold text-lg','line-through text-red-500']">Rs. {{ item.price }}</span>
        </div>
        <div class="flex flex-row justify-between">
            <button class="px-2 py-2 border trans border-gray-100 bg-gray-50 cursor-pointer hover:bg-s rounded-lg">Buy Now</button>
            <button @click="useCart.addToCart(item)" class="px-2 py-2 border border-gray-100 bg-gray-50 cursor-pointer  hover:bg-s  rounded-lg" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </button>
        </div>
    </div>
</template>
<script setup>
import {useCartStore} from "../store/cartStore.js";

const props=defineProps(['item'])

const useCart=useCartStore();

</script>
