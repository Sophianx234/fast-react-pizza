import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/cart/CartSlice";


const store = configureStore({
    reducer:{
        cart: CartSlice
    } 
})

export default store

export const getCart = store=>store.cart.cart
export const getQuantity = store=>store.cart.cart.map(item=>item.quantity? item.quantity: 1).reduce((acc,cur)=>acc+cur,0)
export const getTotalPrice = store=> store.cart.cart.map(item=>item.totalPrice? item.totalPrice: item.unitPrice).reduce((acc,cur)=>acc+cur,0)