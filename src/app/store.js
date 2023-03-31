import { configureStore } from '@reduxjs/toolkit';
import viewReducer from '../slices/ViewSlice';
import footerReducer from '../slices/FooterSlice';

export const store = configureStore({
  reducer: {
    listView: viewReducer,
    footerSlice: footerReducer,
  },
});
