import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'https://fakestoreapi.com',
});

export const getProducts = createAsyncThunk('cart/getProducts', async () => {
  try {
    const { data } = await api.get('/products');
    return data;
  } catch (error) {}
});
