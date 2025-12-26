import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import axios from 'axios';


export const categoryStore = create(devtools(immer(set => {
    return {
        categories: [],
        getCategories: () => {
            axios('https://fakestoreapi.com/products/categories')
                .then(({ data }) => {
                    set((store) => {
                        store.categories = data
                    })
                })
        }
    }
})));

export const cartStore = create(persist(devtools(immer(set => {
    return {
        cartList: [],
        addCart: (product) => {
            set(store => {
                const idx = store.cartList.findIndex(item => item.id === product.id);
                if (idx > -1) {
                    store.cartList[idx].count++
                } else {
                    store.cartList = [{
                        ...product,
                        count: 1
                    }, ...store.cartList]
                }
            })
        },
        decrementCart: (product) => {
            set(store => {
                const idx = store.cartList.findIndex(item => item.id === product.id);
                if (idx > -1 && store.cartList[idx].count > 1) {
                    store.cartList[idx].count--;
                }
            })
        },
        deleteCart: (product) => {
            set(store => {
                store.cartList = store.cartList.filter(item => item.id !== product.id)
            })
        },
    }
}))))
