import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    updateProduct: (state, action) => {
      const updatedProduct = action.payload;
      const index = state.findIndex(product => product.id === updatedProduct.id);
      if (index >= 0) {
        state[index] = updatedProduct;
      }
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      const index = state.findIndex(product => product.id === id);
      if (index >= 0) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addProduct, updateProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
