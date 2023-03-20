import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice';
import userstateSlice from './slices/userstateSlice';
import usersSlice from './slices/usersSlice';
import cartSlice from './slices/cartSlice';
import salesSlice from './slices/salesSlice';

const store = configureStore({
    reducer: {
      reducer: productsSlice,
      reducer: userstateSlice,
      reducer:usersSlice,
      reducer:cartSlice,
      reducer: salesSlice,
},
})

export default store