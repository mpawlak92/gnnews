import { configureStore } from '@reduxjs/toolkit';
import viewReducer from '../slices/ViewSlice';

export const store = configureStore({
  reducer: {
    listView: viewReducer,
  },
});
