import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../features/posts/postsSlice";
import Loading from "../Loading";
import PostCard from "./PostCard";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // decide what to render
  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && posts?.length === 0) {
    content = <div className="col-span-12">No posts found!</div>;
  }

  if (!isError && !isLoading && posts?.length > 0) {
    content = posts.map((post) => <PostCard key={post.id} post={post} />);
  }
  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
};

export default PostList;
