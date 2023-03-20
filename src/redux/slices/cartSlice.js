import { createSlice } from '@reduxjs/toolkit';


const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action) => {
        state.push(action.payload);
      },
      removeFromCart: (state, action) => {
        const id = action.payload;
        state = state.filter((p) => p.id !== id);
      },
    },
  });
  
  export const { addToCart, removeFromCart } = cartSlice.actions;
  
  export default cartSlice.reducer;
  