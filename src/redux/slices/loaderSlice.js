// loaderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    loading: () => true,
    loaded: () => false,
  },
});

export const { loading, loaded } = loaderSlice.actions;
export default loaderSlice.reducer;
