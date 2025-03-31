<template>
    <div class=" w-full fixed flex flex-row items-center justify-around gap-10 py-4 bg-white border-b border-gray-200">
        <img alt="logo" class="h-12" src="/images/logo.png"/>

        <nav v-if="isLoaded" class="flex flex-row flex-wrap ">
            <NavItem v-for="item in links" :item="item"/>
        </nav>

        <div class="flex items-center justify-center gap-4">
            <router-link to="/login">
                <svg  class="text-gray-800 size-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 11H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V13H10V16L15 12L10 8V11Z"></path>
                </svg>
            </router-link>

            <div>
                <svg class="text-gray-800 size-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748ZM12.1779 7.17624C11.4834 7.48982 11 8.18846 11 9C11 10.1046 11.8954 11 13 11C13.8115 11 14.5102 10.5166 14.8238 9.82212C14.9383 10.1945 15 10.59 15 11C15 13.2091 13.2091 15 11 15C8.79086 15 7 13.2091 7 11C7 8.79086 8.79086 7 11 7C11.41 7 11.8055 7.06167 12.1779 7.17624Z"></path>
                </svg>
            </div>
        </div>


        <div class="">
            <div class="hover:text-s">
            </div>

        </div>
    </div>
</template>
<script setup>
import {onBeforeMount, ref} from "vue";
import NavItem from "../../components/NavItem.vue";
import ProductServices from "../../services/ProductService.js";

const isLoaded = ref(false)


const links = ref([
    {
        'name': 'Career'.toUpperCase(),
        'url': '/career',
        'isDropDown': false,
        'isStatic': true
    }
]);

onBeforeMount(async () => {
    const response = await ProductServices.getProducts();

    let newCats = [];

    response.map((link) => {
        newCats[link.category] = {
            'name': link.category.toUpperCase(),
            'url': link.category.replace(' ', '-'),
            'isDropdown': false,
            'isStatic': false
        }
    });

    links.value.push(...Object.values(newCats))
    isLoaded.value = true;
})

</script>
