import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './authAPI';

export const register = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const res = await registerUser(data);

      localStorage.setItem('token', res.token);

      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Register failed'
      );
    }
  }
);

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const res = await loginUser(data);

    localStorage.setItem('token', res.token);

    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || 'Login failed'
    );
  }
});
