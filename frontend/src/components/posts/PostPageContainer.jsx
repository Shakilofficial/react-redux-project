import RelatedPosts from "../relatedPosts/RelatedPosts";
import Post from "./Post";

const PostPageContainer = () => {
  return (
    <section className="post-page-container">
      <Post />
      <RelatedPosts />
    </section>
  );
};

export default PostPageContainer;
