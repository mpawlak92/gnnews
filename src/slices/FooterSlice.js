import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  numberOfPosts: 0,
};

const FooterSlice = createSlice({
  name: 'footerSlice',
  initialState,
  reducers: {
    seveNewPostsNuber: (state, postsNumber) => {
      state.numberOfPosts = postsNumber;
    },
  },
});

export const numberOfPosts = (state) => state.footerSlice.numberOfPosts;
export const { seveNewPostsNuber } = FooterSlice.actions;
export default FooterSlice.reducer;
