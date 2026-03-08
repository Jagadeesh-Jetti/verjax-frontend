import { createSlice } from '@reduxjs/toolkit';
import { fetchServices, fetchServicesById } from './serviceThunk';

const initialState = {
  items: [],
  service: null,
  loading: false,
  error: null,
};

const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchServicesById.fulfilled, (state, action) => {
        state.service = action.payload;
      });
  },
});

export default serviceSlice.reducer;
