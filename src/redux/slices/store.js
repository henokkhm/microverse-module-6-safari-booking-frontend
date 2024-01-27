import { configureStore } from '@reduxjs/toolkit';
import safarisReducer from './slices/safarisSlice';
import loaderReducer from './slices/loaderSlice';

const rootReducer = {
  safaris: safarisReducer,
  loader: loaderReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
