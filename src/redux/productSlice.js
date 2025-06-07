import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

// GET
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await axios.get(API_URL);
  return res.data.products;
});

// ADD
export const addProduct = createAsyncThunk('products/add', async (newProduct) => {
  const res = await axios.post(`${API_URL}/add`, newProduct);
  return res.data;
});

// UPDATE
export const updateProduct = createAsyncThunk('products/update', async ({ id, title }) => {
  const res = await axios.put(`${API_URL}/${id}`, { title });
  return res.data;
});

// DELETE
export const deleteProduct = createAsyncThunk('products/delete', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(p => p.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(p => p.id !== action.payload);
      });
  }
});

export default productSlice.reducer;
