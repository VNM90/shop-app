import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  quantity: number;
}

interface CartState {
  products: CartItem[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.products = [];
    },
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.products = action.payload;
    },
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const itemIndex = state.products.findIndex(product => product.id === action.payload.id);
      if (itemIndex !== -1) {
        state.products[itemIndex].quantity++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    removeFromCart:(state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const itemIndex = state.products.findIndex(product => product.id === action.payload.id);
      if (itemIndex !== -1) {
        state.products[itemIndex].quantity--;
        if (state.products[itemIndex].quantity === 0) {
          state.products.splice(itemIndex, 1);
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
  },
});

export const { clearCart, setCart, addToCart, removeFromCart  } = cartSlice.actions;

export default cartSlice.reducer;
