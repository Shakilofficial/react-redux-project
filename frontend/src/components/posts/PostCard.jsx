import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const { title, image, id, likes, isSaved, createdAt, tags } = post || {};

  return (
    <div className="lws-card">
      <Link to={`post/${id}`}>
        <img src={image} className="lws-card-image" alt="Post Title" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`post/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags">
          {tags.map((tag, index) => (
            <span key={index}>
              #{tag}
              {index < tags.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          <span className={`lws-badge ${isSaved ? "saved" : ""}`}>
            {isSaved ? "Saved" : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
