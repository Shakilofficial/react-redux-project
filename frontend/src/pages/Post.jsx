import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import PostDetails from "../components/posts/PostDetails";
import RelatedPosts from "../components/relatedPosts/RelatedPosts";
import { fetchPost } from "../features/post/postSlice";

const Post = () => {
  const { post, isLoading, isError, error } = useSelector(
    (state) => state.post
  );
  const dispatch = useDispatch();
  const { postId } = useParams();

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, [dispatch, postId]);

  const { id, tags } = post || {};

  // decide what to render
  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !post?.id) {
    content = <div className="col-span-12">No post found!</div>;
  }

  if (!isLoading && !isError && post?.id) {
    content = (
      <div className="post-page-container">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <PostDetails post={post} />
        </div>

        <div>
          <RelatedPosts currentPostId={id} tags={tags} />
        </div>
      </div>
    );
  }

  return <section>{content}</section>;
};

export default Post;
