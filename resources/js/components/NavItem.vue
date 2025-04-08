<template>
    <div class="px-5 text-p cursor-pointer hover:text-black">
        <div  v-if="!item.isDropDown">
            <router-link  v-if="item.isStatic" :to="item.url">{{item.name}}</router-link>
            <router-link v-else :to="{name:'Category',params:{slug:item.url}}">{{item.name}}</router-link>
        </div>
        <div v-else>
            <div>
            <router-link @click="toggle=true" :to="'/products/category/'+item.url">{{item.name}}</router-link>
            </div>
            <div v-if="toggle"></div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
const toggle=ref(false)
const props=defineProps(['item'])
console.log(props.item.value);
</script>
