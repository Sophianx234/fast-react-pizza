import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: [],

}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state,action){
            state.cart.push(action.payload)

        },
        deleteItem(state,action){
            state.cart = state.cart.filter(item=>item.id !== action.payload)
        },
        increaseItem(state,action){
            const item = state.cart.find(item=> item.id === action.payload)
            item.quantity += 1 
            return item
        },
        decreaseItem(state,action){
            const item = state.cart.find(item=> item.id === action.payload)
            item.quantity -= 1 
            return item
        },
        clearCart(state){
            state.cart = []
        }
    }

})


export default cartSlice.reducer
export const {addItem, deleteItem, clearCart} = cartSlice.actions