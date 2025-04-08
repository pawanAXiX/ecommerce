<template>

   <div class="w-full px-4 ">
       <div class="w-full flex flex-col mx-auto mb-10 gap-5">
           <div class="text-center text-5xl"><span>Top Products</span></div>
           <div class="text-center text-3xl"><span>Trending Products</span></div>
       </div>
       <swiper
           :modules="[Pagination,Navigation]"
           :slides-per-view="5"
           :space-between="50"
           :pagination="{
      type: 'fraction',
    }"
           :navigation="true"
       >
           <swiper-slide v-for="item in lists"  >
               <div  class="flex flex-col gap-5 justify-center items-center py-1 ">
               <img class="block w-50 h-50 " :src="item.image"  alt="item.url"/>
               <span class=" block mt-5 text-2xl text-p">Rs {{item.price}}</span>
               </div>
           </swiper-slide>

       </swiper>
   </div>
</template>

<script setup>
import {Swiper,SwiperSlide} from "swiper/vue";
import {onBeforeMount, onMounted, ref} from "vue";
import {Pagination,Navigation} from "swiper/modules";
import {apiCall} from "../store/api.js";

const lists =ref([]);

onBeforeMount(async ()=>{
    let items= await apiCall.fetchProducts();
    items.map((item)=>{

        lists.value.push({
            id:item.id,
            title:item.title,
            image:item.image,
            price:item.price,
        })
    });
});
</script>
