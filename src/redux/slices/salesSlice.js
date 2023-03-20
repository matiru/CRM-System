import { createSlice } from '@reduxjs/toolkit';





const initialState = [];


const salesSlice = createSlice({
    name: 'sales',
    initialState,
    reducers: {
      recordSale: (state, action) => {
        state.push(action.payload);
      },
    },
  });
  
  export const { recordSale } = salesSlice.actions;
  
  export default salesSlice.reducer;
  