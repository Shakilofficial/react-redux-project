import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedPosts } from "../../features/relatedPosts/relatedPostsSlice";
import Loading from "../Loading";
import RelatedPostCard from "./RelatedPostCard";

const RelatedPosts = ({ currentPostId, tags }) => {
  const dispatch = useDispatch();
  const { relatedPosts, isLoading, isError, error } = useSelector(
    (state) => state.relatedPosts
  );

  useEffect(() => {
    dispatch(fetchRelatedPosts({ tags, id: currentPostId }));
  }, [dispatch, tags, currentPostId]);

  // decide what to render
  let content = null;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && relatedPosts?.length === 0) {
    content = <div className="col-span-12">No related Posts found!</div>;
  }
  if (!isLoading && !isError && relatedPosts?.length > 0) {
    content = relatedPosts.map((post) => (
      <RelatedPostCard key={post.id} post={post} />
    ));
  }

  return <div className="space-y-4 related-post-container">{content}</div>;
};

export default RelatedPosts;
