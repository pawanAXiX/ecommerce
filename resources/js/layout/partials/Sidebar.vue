<template>
    <div class="fixed h-full text-p ">
        <div class="h-full px-5 flex flex-col font-bold  border border-gray-50 rounded-lg bg-gray-100">
        <div class="flex flex-col gap-5 py-4">
            <!--        Product Sort By-->
            <div>
                <span class=" ">Sort By:</span>
                <select class=" px-4 ">
                    <option>Name Asc</option>
                    <option>Name Desc</option>
                    <option>Price Asc</option>
                    <option>Price Desc</option>
                </select>
            </div>
            <hr>
            <!-- Product Price Range filter-->
            <div>
                <span>Price Range</span>
                <input type="range" min="0" max="100" step="5"/>
            </div>
            <hr>
        </div>

        <!-- Brand Filter -->
        <div class="py-4">
            <span class="block">Size Filter</span>
            <div class="ml-20">
               <input type="checkbox" value="1" />1 <br>
                <input type="checkbox" value="2" />2 <br>
                <input type="checkbox" value="3" />3 <br>
                <input type="checkbox" value="4" />4 <br>
            </div>
        </div>
        <hr>
        <!-- Category Filter -->
        <div class="py-4">
            <span class="block">Category Filter</span>
            <div class="ml-20">
                <input type="checkbox" value="1" />1 <br>
                <input type="checkbox" value="2" />2 <br>
                <input type="checkbox" value="3" />3 <br>
                <input type="checkbox" value="4" />4 <br>
            </div>
        </div>

    </div>
    </div>
</template>
<script setup lang="ts">
</script>
