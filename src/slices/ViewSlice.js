import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listViewState: false,
};

const ViewSlice = createSlice({
  name: 'listView',
  initialState,
  reducers: {
    viewChnge: (state) => {
      state.listViewState = !state.listViewState;
    },
  },
});

export const listViewState = (state) => state.listView.listViewState;
export const { viewChnge } = ViewSlice.actions;
export default ViewSlice.reducer;
