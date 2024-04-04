// cartStore.js
import create from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (item) =>
        set((state) => ({ cartItems: [...state.cartItems, item] })),
      processQueue: async (queueItems) => {
        for (const item of queueItems) {
          await new Promise((resolve) => {
            setTimeout(() => {
              set((state) => ({
                cartItems: state.cartItems.map((cartItem) =>
                  cartItem.id === item.id
                    ? { ...cartItem, status: "success" }
                    : cartItem
                ),
              }));
              resolve();
            }, 1000); // delay on your mood
          });
        }
      },
      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart-store", // Name for the persisted state
      getStorage: () => localStorage, // Choose localStorage or sessionStorage
    }
  )
);

export default useCartStore;
