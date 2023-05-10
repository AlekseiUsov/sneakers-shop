//RTK
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Types
import { TCurrentItem, TItemReducer } from "../../utils/types";

//Api
import { getItem } from "../../utils/fakeApi";


export const fetchItem = createAsyncThunk(
    'currentItem/fetchItem',
    getItem
)

const initialState: TItemReducer = {
    currentItem: null,
    isLoading: false,
    error: false,
}

export const currentItemSlice = createSlice({
    name: 'currentItem',
    initialState,
    reducers: {
        removeCurrentItem(state, action: PayloadAction<TCurrentItem>) {
            state.currentItem = null
        }
    },
    extraReducers: {
        [fetchItem.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchItem.fulfilled.type]: (state, action) => {
            state.isLoading = false
            state.currentItem = action.payload[0]
            state.error = false
        },
        [fetchItem.rejected.type]: (state, action) => {
            state.isLoading = false
            state.currentItem = null
            state.error = action.error.message
        }
    }
})

export default currentItemSlice;

export const { removeCurrentItem } = currentItemSlice.actions
