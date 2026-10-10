import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) existing.quantity += 1;
      else state.items.push({ ...product, quantity: 1 });
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity(state, action) {
      const { id, change, quantity } = action.payload;
      const item = state.items.find((entry) => entry.id === id);
      if (!item) return;
      const nextQuantity = typeof quantity === 'number' ? quantity : item.quantity + change;
      if (nextQuantity <= 0) state.items = state.items.filter((entry) => entry.id !== id);
      else item.quantity = nextQuantity;
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
