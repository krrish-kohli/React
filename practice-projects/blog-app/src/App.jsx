import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import PostLayout from "./components/PostLayout";
import PostDetails from "./components/PostDetails";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Nested post route */}
        <Route path="posts" element={<PostLayout />}>
          <Route path=":postId" element={<PostDetails />} />
        </Route>
        {/* Not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
