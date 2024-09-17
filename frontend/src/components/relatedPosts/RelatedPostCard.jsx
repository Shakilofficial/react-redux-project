import { Link } from "react-router-dom";
import image from "../../assets/mern.webp";
const RelatedPostCard = () => {
  return (
    <div className="card">
      <Link to="/post">
        <img src={image} className="card-image" alt="Related Post" />
      </Link>
      <div className="p-4">
        <Link to="/post" className="text-lg post-title lws-RelatedPostTitle">
          Top Github Alternatives
        </Link>
        <div className="mb-0 tags">
          <span>#python,</span> <span>#tech,</span> <span>#git</span>
        </div>
        <p>2023-05-01</p>
      </div>
    </div>
  );
};

export default RelatedPostCard;
