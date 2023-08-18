import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/CartSlice';
import SelectedProductsReducer from './slices/SelectedProducts';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    selectedItems: SelectedProductsReducer,
  },
});

export default store;

