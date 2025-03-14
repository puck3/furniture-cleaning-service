import { create } from "zustand";
import { persist } from "zustand/middleware";
import Service from "@/types/Service";

type CartStore = {
  cart: Service[];
  addToCart: (service: Service) => void;
  removeFromCart: (title: string) => void;
  clearCart: () => void;
  isInCart: (title: string) => boolean;
};

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (service) =>
        set((state) => ({
          cart: state.cart.some((item) => item.title === service.title)
            ? state.cart
            : [...state.cart, service],
        })),
      removeFromCart: (title) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.title !== title),
        })),
      clearCart: () => set({ cart: [] }),
      isInCart: (title) => get().cart.some((item) => item.title === title),
    }),
    { name: "cart-storage" }
  )
);

export default useCartStore;
