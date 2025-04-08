
export const apiCall={
    async login(email,password){
        const response = await axios.post('/api/login',{
            email,
            password
        })

        return await response.data
    },
    async fetchProducts(){
        const response= await axios.get('https://fakestoreapi.com/products')
        return await response.data;

    }
}



