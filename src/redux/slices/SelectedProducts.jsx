import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const selectedProductsSlice = createSlice({
  name: 'selectedProducts',
  initialState,
  reducers: {
   addProducts(state, { payload }) {
      state.products.push(payload);
    },

    removeProduct(state, {payload}) {
      const productIdToRemove = payload.id;
      state.products = state.products.filter(
        (product) => product.id !== productIdToRemove
      );
    },
  },
});

export const { addProducts, removeProduct } = selectedProductsSlice.actions;
export default selectedProductsSlice.reducer;
