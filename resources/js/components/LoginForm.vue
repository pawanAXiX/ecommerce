<template>
    <div class="w-full h-full flex justify-center items-center">
        <div class="w-full max-w-xs">
            <form @submit.prevent="loginUser"  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Email
                    </label>
                    <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email">
                    <p v-if="errors" v-for="error in errors.email" class="text-red-500 text-xs italic">{{error??''}}</p>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input v-model="password" class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                    <p v-if="errors" v-for="error in errors.password" class="text-red-500 text-xs italic">{{error??''}}</p>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
        </div>
    </div>

</template>

<script setup>

import {ref} from "vue";
import {apiCall} from "../store/api.js";
import {useRouter} from "vue-router";
const email=ref('');
const password=ref('');
const errors=ref('');
const router = useRouter();
async function loginUser(){
    const response= await apiCall.login(email.value,password.value);
    console.log(response);
    if(response.errors)
    {
        errors.value = response.errors;
    }
    else
    {
        await router.push('/');
    }

}
</script>

