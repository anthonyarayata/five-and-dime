import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProductDetails = createAsyncThunk(
  'productDetails/get',
  async (id) => {
    const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
    return data;
  }
);

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: {
    product: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload;
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productDetailsSlice.reducer;
