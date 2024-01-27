// safarisSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BaseUrl from '../../api/api_helper';
import showMessage, { showError } from '../../helpers';
import { loading, loaded } from './loaderSlice';

const initialState = [];

export const getSafaris = createAsyncThunk('safaris/getSafaris', async (_, { dispatch }) => {
  dispatch(loading());
  try {
    const response = await axios.get(`${BaseUrl}safaris`, { headers: { Authorization: localStorage.getItem('token') } });
    dispatch(loaded());
    return response.data;
  } catch (error) {
    showError();
    dispatch(loaded());
    throw error;
  }
});

export const addSafari = createAsyncThunk('safaris/addSafari', async ({ formData, navigate }, { dispatch }) => {
  dispatch(loading());
  try {
    const response = await fetch(`${BaseUrl}safaris`, {
      method: 'POST',
      body: formData,
      headers: { Authorization: localStorage.getItem('token') },
    });
    const data = await response.json();
    dispatch(getSafaris());
    showMessage('safari added successfully');
    dispatch(loaded());
    navigate('/');
    return data;
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
