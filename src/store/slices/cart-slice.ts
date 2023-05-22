//RTK
import { createSlice } from "@reduxjs/toolkit";

//Types
import { TCartStatus } from "../../utils/types";


const initialState: TCartStatus = {
    status: false
}

export const cartStatusSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleStatus(state) {
            state.status = !state.status
        }
    }
})

export default cartStatusSlice;

export const { toggleStatus } = cartStatusSlice.actions