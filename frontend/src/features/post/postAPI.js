import axios from "../../utils/axios";

export const getPost = async (id) => {
  const response = await axios.get(`/blogs/${id}`);
  return response.data;
};

// Increment likes for a post by ID (update the post)
export const updatePostLikes = async (id, likes) => {
  const response = await axios.patch(`/blogs/${id}`, { likes }); // Use PATCH for partial update
  return response.data;
};
