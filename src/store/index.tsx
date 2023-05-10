//RKT
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector as selectorHook } from 'react-redux'

//Slices
import { itemsSlice } from "./slices/items-slice";
import { basketSlice } from "./slices/basket-slice";
import { currentItemSlice } from "./slices/current-item-slice";

export const store = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        basket: basketSlice.reducer,
        currentItem: currentItemSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook
