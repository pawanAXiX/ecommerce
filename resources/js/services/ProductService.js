


const ProductService={
    getProducts:async ()=>{
        const response= await axios.get('https://fakestoreapi.com/products')

        return await response.data;
    }
}

export default ProductService;
