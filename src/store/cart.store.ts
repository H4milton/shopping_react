import { create } from "zustand";
import { ProductInCart, Product } from "@/types/types";

interface CartState {
  modaIsOpen: boolean;
  total: number;
  productsInCart: ProductInCart[];
  toggleModal: () => void;
  addToCart: (product: ProductInCart) => void;
  dismFromCart: (name: string) => void;
  removeFromCart: (name: string) => void;
  resetCart: () => void;
  calculateTotal: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  total: 0,
  modaIsOpen: false,
  productsInCart: [],

  //Cambiar estado de modalIsOpen tipo toggle
  //✅ FORMA 1: Retorno implícito (forma corta ✅ recomendada si es simple)
  toggleModal: () => set((state) => ({ modaIsOpen: !state.modaIsOpen })),

  //✅ FORMA 2: Retorno explícito con return
  // toggleModal: () =>
  // set((state) => {
  //   return { modaIsOpen: !state.modaIsOpen }
  // }),

  //✅ FORMA 4: Función clásica (function expression)
  // toggleModal: function () {
  //   set(function (state) {
  //     return { modaIsOpen: !state.modaIsOpen };
  //   });
  // },
  

  addToCart: (product: ProductInCart) => {
    const prev = get().productsInCart;
    const existing = prev.find((item) => item.name === product.name);

    if (existing) {
      const updated = prev.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      set({ productsInCart: updated });
    } else {
      set({ productsInCart: [...prev, { ...product, quantity: 1 }] });
    }

    get().calculateTotal();
  },

  dismFromCart: (name: string) => {
    const prev = get().productsInCart;

    const updated = prev
      .map((item) =>
        item.name === name ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);

    set({ productsInCart: updated });
    get().calculateTotal();
  },

  removeFromCart: (name: string) => {
    const updated = get().productsInCart.filter((item) => item.name !== name);
    set({ productsInCart: updated });
    get().calculateTotal();
  },

  // resetCart: () => set({ productsInCart: [] }),
  resetCart: () => {
    set({ productsInCart: [] });
    get().calculateTotal();
  },

  //Calculamos total
  calculateTotal: () => {
    const total = get().productsInCart.reduce(
      (sum, p) => sum + p.price * p.quantity,
      0
    );
    set({ total });
  },
}));



// export const useCartStore = create<CartState>()((et, get)=>({
//   total: 0,
//   modaIsOpen: false,

// }));
