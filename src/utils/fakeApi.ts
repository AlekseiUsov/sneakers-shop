import { TItemResponce, TItemsResponce } from "./types";

const API = `http://localhost:3001/`;

export const checkReponse = <T>(res: Response): Promise<T> => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
}

export function getItems() {
    return fetch(`${API}items`)
        .then(res => checkReponse<TItemsResponce>(res))
}

export function getItem(id: string) {
    return fetch(`${API}items?id=${id}`)
        .then(res => checkReponse<TItemResponce>(res))
}

