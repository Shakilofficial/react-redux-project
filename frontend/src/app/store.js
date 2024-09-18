import { configureStore } from "@reduxjs/toolkit";
import sortReducer from "../features/filter/sortSlice";
import postReducer from "../features/post/postSlice";
import postsReducer from "../features/posts/postsSlice";
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    post: postReducer,
    sort: sortReducer,
  },
});
