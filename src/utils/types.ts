//components types 
export type TItem = {
    id: string,
    title: string,
    number: string,
    price: number,
    image: string,
    mediumItem: string,
    largeImage: string,
    counter: number,
}

export type TCurrentItem = {
    item: TItem;
}

export type TItems = {
    items: Array<TItem>;
}

export type TIcon = {
    fill: string
}

//api types
export type TServerResponce<T> = {
    success: boolean;
} & T;

export type TItemResponce = TServerResponce<{
    item: TItem
}>

export type TItemsResponce = TServerResponce<{
    items: Array<TItem>
}>

//reducer types
export type TItemReducer = {
    currentItem: null | TItem,
    isLoading: boolean,
    error: null | boolean,
}

export type TItemsReducer = {
    items: null | Array<TItem>,
    isLoading: boolean,
    error: null | boolean,
}

export type TBasket = {
    items: Array<TItem>,
    countItems: number,
    totalPrice: number,
    tax: number,
    shipping: number,
}

export type TCartStatus = {
    status: boolean,
}
