import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import axios from 'axios';

export const categoryStore = create(
  devtools(
    immer((set) => ({
      categories: [],
      isLoading: false,
      error: null,

      getCategories: async () => {
        set((store) => { store.isLoading = true; store.error = null });

        try {
          const { data } = await axios('https://fakestoreapi.com/products/categories');
          set((store) => { store.categories = data });
        } catch (err) {
          set((store) => { store.error = err.message || 'Ошибка загрузки категорий'; });
        } finally {
          set((store) => { store.isLoading = false });
        }
      },
    }))
  )
);

export const cartStore = create(
  persist(
    devtools(
      immer((set) => ({
        cartList: [],
        addCart: (product) => {
          set((store) => {
            const idx = store.cartList.findIndex((item) => item.id === product.id);
            if (idx > -1) {
              store.cartList[idx].count++;
            } else {
              store.cartList = [{ ...product, count: 1 }, ...store.cartList];
            }
          });
        },
        decrementCart: (product) => {
          set((store) => {
            const idx = store.cartList.findIndex((item) => item.id === product.id);
            if (idx > -1 && store.cartList[idx].count > 1) {
              store.cartList[idx].count--;
            }
          });
        },
        deleteCart: (product) => {
          set((store) => {
            store.cartList = store.cartList.filter((item) => item.id !== product.id);
          });
        },
      }))
    )
  )
);
