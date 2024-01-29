import { configureStore } from '@reduxjs/toolkit';
import safarisReducer from './slices/safarisSlice';
import loaderReducer from './slices/loaderSlice';
import reservationReducer from './slices/reservationSlice';

const rootReducer = {
  safaris: safarisReducer,
  loader: loaderReducer,
  reservations: reservationReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
