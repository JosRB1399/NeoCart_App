import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1; // 🔹 aumenta cantidad si ya existe
      } else {
        state.items.push({ ...product, quantity: 1 }); // 🔹 agrega nuevo con cantidad inicial
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
