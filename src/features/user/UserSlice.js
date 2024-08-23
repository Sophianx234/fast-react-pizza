import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: ''
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserName(state,action){
            state.name = action.payload
        }
    }
})

export default userSlice.reducer
export const {addUserName} = userSlice.actions