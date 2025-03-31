<template>
    <div class="ml-[400px] flex-1">
    <div class=" grid grid-cols-4 px-6 py-6 gap-1 w-full">
        <div class= " flex flex-col justify-center items-center w-50 rounded-lg"
             v-for="data in items" :key="data.id">
            <img class="w-24 h-24 object-cover mx-auto" :src="data.image" :alt="data.name"/>
            <div class="py-4 flex flex-col text-center">
                <span class="flex flex-wrap justify-center">{{ data.title }}</span>
                <span class="text-center font-semibold text-lg">Rs. {{ data.price }}</span>
            </div>
        </div>
    </div>
    </div>
</template>
<script setup>


const props=defineProps(['items'])
</script>
