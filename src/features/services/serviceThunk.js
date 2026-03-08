import { createAsyncThunk } from '@reduxjs/toolkit';
import { getServiceById, getServices } from './serviceAPI';

export const fetchServices = createAsyncThunk(
  'services/fetchServices',
  async (__dirname, thunkAPI) => {
    try {
      const data = await getServices();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to fetch services'
      );
    }
  }
);

export const fetchServicesById = createAsyncThunk(
  'services/fetchServiceById',
  async (id, thunkAPI) => {
    try {
      const data = await getServiceById(id);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to fetch service'
      );
    }
  }
);
