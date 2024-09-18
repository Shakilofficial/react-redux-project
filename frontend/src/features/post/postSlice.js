import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPost, updatePostLikes, updatePostSaveStatus } from "./postAPI";

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

// Thunk to toggle the save status of a post
export const toggleSavePost = createAsyncThunk(
  "post/toggleSavePost",
  async (id, { getState }) => {
    const post = getState().post.post;
    const updatedSaveStatus = !post.isSaved; // Toggle the current saved status
    const updatedPost = await updatePostSaveStatus(id, updatedSaveStatus);
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
      })
      //Update save status
      .addCase(toggleSavePost.fulfilled, (state, action) => {
        state.post = action.payload; // Update the post with the new save status
      });
  },
});

export default postSlice.reducer;
