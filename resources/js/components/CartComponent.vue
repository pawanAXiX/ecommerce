<template>
            <div class="fixed px-4  bottom-12 right-12 ">
                <div v-if="showCartModel && useCart.getCartItem.length>0" class=" h-max w-max overflow-scroll px-4 py-4 rounded-xl bg-gray-200 float-right">
                    <div class=" flex flex-col border-gray-50  justify-between rounded-xl">
                        <div class="w-80 h-20 border border-gray-50" v-for="item in useCart.getCartItem">
                            <div class=" flex flex-row gap-5  ">
                                <div class="py-2">
                                    <figure class="w-12 h-12">
                                        <img class="w-12 h-12" :src="item.image" :alt="item.title.slice(0,24)"/>
                                    </figure>
                                    <div>
                                        <span>Price: {{item.price}}</span>
                                    </div>
                                </div>
                                <div class="flex flex-row gap-5 justify-between">
                                    <button @click="useCart.removeFromCart(item)"  class="border cursor-pointer border-gray-50  my-auto ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                        </svg>

                                    </button>
                                    <span class="block my-auto">
                                        x{{item.count}}
                                    </span >
                                    <button  @click="useCart.addToCart(item)" class="border cursor-pointer border-gray-50  my-auto "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    </button>
                                    <span class="block my-auto">Rs. {{Math.ceil(item.count*item.price)}}</span>

                                </div>
                                <div class="my-auto" @click="useCart.removeAll(item)">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div :class="['w-20 h-20 px-4 py-4 cursor-pointer',showCartModel?'ml-80':''] ">

                    <svg v-if="showCartModel && useCart.getCartItem.length>0" @click="showCartModel=false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12 float-left">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <svg v-else @click="showCartModel=true"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12 float-left">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                    <div class="w-20 ml-12" >
                        <span v-if="!showCartModel" class="block w-6 h-6 text-center border border-orange-100 bg-orange-300 rounded-full">{{useCart.cart.length}}</span>
                    </div>
                </div>
            </div>

</template>
<script setup>
import {onMounted, ref} from "vue";
import {useCartStore} from "../store/cartStore.js";

const useCart=useCartStore();
onMounted(()=>{
    console.log(useCart.cart)
})
const showCartModel=ref(false);
</script>
