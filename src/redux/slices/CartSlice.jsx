import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../thunks/products/getProducts';

const initialState = {
  products: [],
  loading: false,
};

const cartSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
   add(state, { payload }) {
      state.products = payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action?.payload;
    });
  },
});

export const { add } = cartSlice.actions;
export default cartSlice.reducer;
