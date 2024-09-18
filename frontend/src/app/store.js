import { configureStore } from "@reduxjs/toolkit";
import sortReducer from "../features/filter/sortSlice";
import postReducer from "../features/post/postSlice";
import postsReducer from "../features/posts/postsSlice";
import relatedPostsReducer from "../features/relatedPosts/relatedPostsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    post: postReducer,
    sort: sortReducer,
    relatedPosts: relatedPostsReducer,
  },
});
