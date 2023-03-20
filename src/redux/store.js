import { configureStore , getDefaultMiddleware} from '@reduxjs/toolkit';
import { combineReducers } from 'redux'; // import combineReducers
import productsReducer from './slices/productsSlice';
import userstateReducer from './slices/userstateSlice';
import usersReducer from './slices/usersSlice';
import cartReducer from './slices/cartSlice';
import salesReducer from './slices/salesSlice';

const rootReducer = combineReducers({
  products: productsReducer,
  userstate: userstateReducer,
  users: usersReducer,
  cart: cartReducer,
  sales: salesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ serializableCheck: false })]
});

export default store;
