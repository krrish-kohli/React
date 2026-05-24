import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../data";

const PostDetails = () => {
  const { postId } = useParams();
  //navigate
  const navigate = useNavigate();
  console.log(postId);
  // Find post by the id in the params
  const post = posts.find((post) => post.id === postId);
  if (!post) {
    return <h3>Post not found</h3>;
  }
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default PostDetails;
