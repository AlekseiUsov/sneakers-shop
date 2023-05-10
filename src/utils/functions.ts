import { TItem } from "./types"

export const formatePrice = (number: number) => {
    const firstLetter = `${number}`.substring(0, 1)
    const rest = `${number}`.substring(1)
    return `${firstLetter} ${rest}`
}

export const changeValueOfCounterInArray = (items: TItem[], payload: TItem, newCounter: number): TItem[] => {
    return items.map((item) =>
        item = item.id === payload.id ? { ...item, counter: newCounter } : item
    )
}

export const addNewItem = (items: TItem[], payload: TItem) => {
    const isIncludes = items.find(item => item.id === payload.id);

    //в данном случае использование any уместно, т.к. если сработает !isIncludes, 
    //мы  положим в newItemsList не результат этой функции

    const newCounter: any = isIncludes?.counter;
    const changedItemsList = changeValueOfCounterInArray(items, payload, newCounter + 1)

    const newItemsList = isIncludes ? changedItemsList : [...items, { ...payload, counter: 1 }];

    return newItemsList;
}


export const countItems = (items: TItem[]) => {
    return items.length ? items.reduce((acc, item) => acc += item.counter, 0) : 0;
}