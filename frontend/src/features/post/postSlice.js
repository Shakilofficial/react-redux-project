import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPost, updatePostLikes } from "./postAPI";

const initialState = {
  post: {},
  isLoading: false,
  isError: false,
  error: "",
};

// Async thunk to fetch post data
export const fetchPost = createAsyncThunk("post/fetchPost", async (id) => {
  const post = await getPost(id);
  return post;
});

// Async thunk to increment likes
export const incrementLike = createAsyncThunk(
  "post/incrementLike",
  async (id, { getState }) => {
    const post = getState().post.post;
    const updatedLikes = post.likes + 1;
    const updatedPost = await updatePostLikes(id, updatedLikes);
    return updatedPost;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder
      // Fetch post
      .addCase(fetchPost.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.isLoading = false;
        state.post = {};
        state.isError = true;
        state.error = action?.error?.message;
      })
      // Increment like
      .addCase(incrementLike.fulfilled, (state, action) => {
        state.post = action.payload; // Update the post with the new likes count
      });
  },
});

export default postSlice.reducer;
