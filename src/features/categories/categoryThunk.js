import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories } from './categoryAPI';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (__dirname, thunkAPI) => {
    try {
      const data = await getCategories();
      // console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to fetch categories'
      );
    }
  }
);
