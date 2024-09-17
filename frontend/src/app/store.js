import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/post/postSlice";
import postsReducer from "../features/posts/postsSlice";
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    post: postReducer,
  },
});
