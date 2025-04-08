import {defineStore} from "pinia";
import {ref} from "vue";


export const useAuthStore=defineStore('auth',()=>{
    const token=ref('');

    function setToken(token){
        token.value=token;
    }
    function getToken(){
        return token.value
    }
})
