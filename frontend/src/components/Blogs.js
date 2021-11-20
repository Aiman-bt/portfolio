import React from "react";
import { Link } from "react-router-dom";
export default function Blogs() {
  return (
    <>
      <div className="blogMainContainer">
        <div className="blog-nav">
          <Link to="/">home</Link>
        </div>
        <div className="blog-container">
          <h1>Blogs</h1>
        </div>
      </div>
    </>
  );
}
