import {defineStore} from "pinia";
import {computed, ref} from "vue";


export const useCartStore= defineStore('cart',()=>{

    const cart=ref([]);
    const totalPrice=computed(()=>{
        if(cart.value.length===0) return 0;
        else{
            cart.value.reduce((acu,item)=>{
                acu=acu+item.price;
                return acu
            },0)
        }
    })

    const getCartItem=computed(()=>{
        return cart.value;
    })

    // function setItemToCart(item){
    //     cart.value=[...item];
    // }

    function addToCart(item){
        const itemInCart=cart.value.find((i)=>i.id===item.id);
        const index=cart.value.indexOf(itemInCart)

        if(index!==-1){
            cart.value[index]['count']++
        }
        else{
            item['count']=1;
            cart.value.push(item);
        }

    }
    function removeFromCart(item){
        const itemInCart=cart.value.find((i)=>i.id===item.id);
        const index=cart.value.indexOf(itemInCart)
        const count=cart.value[index]['count'];
        if(count>1)
            cart.value[index]['count']--;
        else
            cart.value.filter((i)=>i.id===item.id);
    }

    function removeAll(item){
        console.log("hello");
        cart.value=cart.value.filter((i) => {
            i.id === item.id
        });
    }

    return {cart,addToCart,getCartItem,removeFromCart,removeAll}
})
