//RTK
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Types
import { TItemsReducer } from "../../utils/types";

//Api
import { getItems } from "../../utils/fakeApi";

export const fetchItems = createAsyncThunk(
    'items/fetchItems',
    getItems
)

const initialState: TItemsReducer = {
    items: null,
    isLoading: false,
    error: null,
}

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchItems.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchItems.fulfilled.type]: (state, action) => {
            state.isLoading = false
            state.items = action.payload
            state.error = false
        },
        [fetchItems.rejected.type]: (state, action) => {
            state.isLoading = false
            state.items = null
            state.error = action.error.message
        }
    }
})

export default itemsSlice;
