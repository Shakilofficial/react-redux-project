import { useDispatch } from "react-redux";
import { incrementLike, toggleSavePost } from "../../features/post/postSlice";

const PostDetails = ({ post }) => {
  const dispatch = useDispatch();
  const {
    id,
    title,
    description,
    image,
    tags = [],
    isSaved,
    likes,
  } = post || {};

  // Handle like button click
  const handleLike = () => {
    dispatch(incrementLike(id)); // Dispatch the incrementLike action with the post ID
  };

  // Handle save button click
  const handleSave = () => {
    dispatch(toggleSavePost(id)); // Dispatch the toggleSavePost action with the post ID
  };

  return (
    <main className="post">
      <img
        src={image}
        alt={title}
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tags.map((tag, index) => (
            <span key={index}>
              #{tag}
              {index < tags.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
        <div className="mt-4 btn-group">
          {/* Like Button */}
          <button
            className="like-btn"
            id="lws-singleLinks"
            onClick={handleLike}
          >
            <i className="fa-regular fa-thumbs-up"></i> {likes || 0}
          </button>
          {/* Save Button */}
          <button
            className={`save-btn ${isSaved ? "active" : ""}`} // Apply active class if saved
            id="lws-singleSavedBtn"
            onClick={handleSave} // Handle save button click
          >
            <i className="fa-regular fa-bookmark"></i>{" "}
            {isSaved ? "Saved" : "Save"}
          </button>
        </div>
        <div className="mt-6">
          <p>{description || "No description available."}</p>
        </div>
      </div>
    </main>
  );
};

export default PostDetails;
