import RelatedPostCard from "./RelatedPostCard";

const relatedPostsData = [
  {
    id: 1,
    image: "./images/git.webp",
    title: "Top Github Alternatives",
    tags: ["#python", "#tech", "#git"],
    date: "2010-03-27",
  },
  {
    id: 2,
    image: "./images/ai.jpg",
    title: "The future of Artificial Intelligence",
    tags: ["#python", "#tech", "#git"],
    date: "2020-07-15",
  },
];

const RelatedPosts = () => {
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        {relatedPostsData.map((post) => (
          <RelatedPostCard key={post.id} post={post} />
        ))}
      </div>
    </aside>
  );
};

export default RelatedPosts;
