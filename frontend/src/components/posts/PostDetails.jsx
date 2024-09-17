const PostDetails = ({ post }) => {
  const { title, description, image, tags = [], isSaved, likes } = post || {};

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
        <div className="btn-group">
          {/* Handle like on button click */}
          <button className="like-btn" id="lws-singleLinks">
            <i className="fa-regular fa-thumbs-up"></i> {likes || 0}
          </button>
          {/* Handle save on button click */}
          <button
            className={`save-btn ${isSaved ? "active" : ""}`}
            id="lws-singleSavedBtn"
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
