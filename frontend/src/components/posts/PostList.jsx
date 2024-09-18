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
  const sortBy = useSelector((state) => state.sort.sortBy); // Get the sortBy state from Redux
  const filter = useSelector((state) => state.posts.filter); // Get the filter state from Redux

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Apply filtering logic
  const filteredPosts = posts.filter((post) => {
    if (filter === "saved") {
      return post.isSaved; // Show only saved posts
    }
    return true; // If "all" is selected, return all posts
  });

  // Apply sorting logic after filtering
  const sortedPosts = [...(filteredPosts || [])].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt); // Sort by newest
    } else if (sortBy === "most_liked") {
      return b.likes - a.likes; // Sort by most liked
    }
    return 0; // Default sorting (no sorting applied)
  });

  // Decide what to render
  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && sortedPosts.length === 0) {
    content = <div className="col-span-12">No posts found!</div>;
  }

  if (!isError && !isLoading && sortedPosts.length > 0) {
    content = sortedPosts.map((post) => <PostCard key={post.id} post={post} />);
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
};

export default PostList;
