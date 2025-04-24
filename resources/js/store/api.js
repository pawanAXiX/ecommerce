import {authStore} from "./authStore.js";

export const apiCall = {
    async login(email, password) {
        let response = {};
        await axios.post('/api/login', {
            email,
            password
        }).then(res => {
            authStore.setAuthToken(res.data.token)
            response = res.data
        }).catch((err) => {
            console.log(err.response)
            s
        })
        return response;
    },
    async fetchProducts() {
        let response = {};
        await axios.get('https://fakestoreapi.com/products')
            .then(res => response = res.data)
            .catch((err) => {
                response = err.response.data;
            })
        return response;

    }
}



