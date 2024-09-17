import PostCard from "./PostCard";

const PostList = ({ posts }) => {
  return (
    <main className="post-container" id="lws-postContainer">
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </main>
  );
};

export default PostList;
