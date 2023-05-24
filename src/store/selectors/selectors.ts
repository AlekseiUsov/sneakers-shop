import { RootState } from "..";

export const basketSelector = (store: RootState) => store.basket
export const statusSelector = (store: RootState) => store.cartStatus
export const itemsSelector = (store: RootState) => store.items
export const currentItemSelector = (store: RootState) => store.currentItem