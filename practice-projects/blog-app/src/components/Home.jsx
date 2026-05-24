import React from "react";
import { posts } from "../data";
import { Link } from "react-router-dom";
import PostDetails from "./PostDetails";

const Home = () => {
  return (
    <div>
      <h2>Blog Posts</h2>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <Link to={`/posts/${post.id}`}>View more</Link>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
