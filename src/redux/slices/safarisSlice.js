// safarisSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BaseUrl, { getHeaders } from '../../api/api_helper';
import showMessage, { showError } from '../../helpers';
import { loading, loaded } from './loaderSlice';

const initialState = [];

export const getSafaris = createAsyncThunk('safaris/getSafaris', async (_, { dispatch }) => {
  dispatch(loading());
  try {
    const response = await axios.get(`${BaseUrl}safaris`, getHeaders());
    dispatch(loaded());
    return response.data;
  } catch (error) {
    showError();
    dispatch(loaded());
    throw error;
  }
});

export const addSafari = createAsyncThunk('safaris/addSafari', async (formData, { dispatch }) => {
  dispatch(loading());
  try {
    const headers = getHeaders();
    const response = await axios.post(`${BaseUrl}safaris`, formData, { headers });
    dispatch(getSafaris());
    showMessage('safari added successfully');
    dispatch(loaded());
    return response.data;
  } catch (error) {
    showError();
    dispatch(loaded());
    throw error;
  }
});

const safarisSlice = createSlice({
  name: 'safaris',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSafaris.fulfilled, (state, action) => action.payload)
      .addCase(addSafari.fulfilled, (state, action) => [...state, action.payload]);
  },
});

export default safarisSlice.reducer;
