//RTK
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//Types
import { TBasket, TItem } from "../../utils/types";

//Functions
import { addNewItem, changeValueOfCounterInArray } from "../../utils/functions";

const initialState: TBasket = {
    items: [],
    countItems: 0,
    totalPrice: 0,
    tax: 150,
    shipping: 150,
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<TItem>) {
            const { items } = state;
            const { payload } = action;

            const newItemsList = !items.length ? [{ ...payload, counter: 1 }] : addNewItem(items, payload)
            state.items = newItemsList
        },
        removeItem(state, action: PayloadAction<TItem>) {
            state.items = state.items.filter((item) => item.id !== action.payload.id)
        },
        incrementCounter(state, action: PayloadAction<TItem>) {
            const newValue = action.payload.counter + 1;

            const result = changeValueOfCounterInArray(state.items, action.payload, newValue);
            state.items = result;
        },
        decrementCounter(state, action: PayloadAction<TItem>) {
            const counter = action.payload.counter;
            const newValue = counter === 1 ? 1 : counter - 1;

            const result = changeValueOfCounterInArray(state.items, action.payload, newValue)
            state.items = result;
        }
    },
})

export default basketSlice.reducer;

export const { addItem, removeItem, incrementCounter, decrementCounter } = basketSlice.actions
