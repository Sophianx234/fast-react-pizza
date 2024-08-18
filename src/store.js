import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/cart/CartSlice";


const store = configureStore({
    reducer:{
        cart: CartSlice
    } 
})

export default store

export const getCart = store=>store.cart.cart
export const getQuantity = store=>store.cart.cart.length
export const getTotalPrice = store=> store.cart.cart.map(item=>item.unitPrice).reduce((acc,cur)=>acc+cur,0)